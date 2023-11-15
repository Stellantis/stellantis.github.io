This tutorial explains how to set up monitors using the REST API. In order to do so, we will need to understand how to configure the **notification** and set up a **triggering policy**.

{% if page.subsection == "b2c" %}
{% include_relative content/webapi-callbacks.md %}
{% endif %}

## Post Monitor Request

The following example is the structure of the HTTP request intended to set up the monitor according to the needs of a third party App.

The following **path parameters are required**, they need to be replaced by the appropriate value:
{% if page.subsection == 'b2b' %}- **{fid}** is the id of the fleet.{% elsif page.subsection == "b2c" %}
- **{id}** is the id of the vehicle for which to register a monitor.
- **{cbid}** is the id of a callback, this id is received when a [callback is created](#post-callback).{% endif %}

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/monitors'
   apiEndpointB2C='/user/vehicles/{id}/callbacks/{cbid}/monitors'
   referenceURLResssourceB2B='createFleetVehicleMonitor'
   referenceURLResssourceB2C='createVehicleVehicleMonitor'
   httpVerb='POST'
%}

```js
{
  "label": "<monitor-name>",
  "subscribeParam": { }, /* {% if page.subsection == "b2b" %}Webhook{% elsif page.subsection == "b2c" %}Monitor{% endif %} configuration Object */{% if page.subsection == "b2c" %}
  "attributes": {  }, {% endif %}
  "extendedEventParam": ["vehicle.position", "vehicle.alerts"],
  "triggerParam": {     /* Triggering configuration Object */
    "triggers": [ ],    /* Triggers Events Blocs declaration */
    "boolExp": ""       /* Trigger Policy */
  }
}
```

Below is a description of the JSON body to configure the monitor, refer to [API Reference]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/#operation/{% if page.subsection == "b2b" %}createFleetVehicleMonitor{% elsif page.subsection == "b2c" %}createVehicleVehicleMonitor{% endif %}) for the specification of this endpoint.

- `label` is the name of the monitor.
- `subscribeParam` is the object for the configuration of the webhook:
  - *refreshEvent*: if the monitor is satisfied, refreshEvent define the period before its checked again. If the monitor is still satsfied after the refreshEvent period, a new notification will be sent.
  {% if page.subsection == "b2b" %}
  - *retryPolicy*: in case the webhook has not received the callback, whatever is the reason. **Retry Policy has its own [dedicated page]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/retry-policy/#article).**
  - *batchNotify*: if notification needs to be received in batches instead of one by one.
  - *callback*: is where to set up the address and name of the webhook. This is also where to customize the HTTP notification (example: for authentication purpose).
{% elsif page.subsection == "b2c" %}
- `attributes` & `subscribeParam.callbackAttributes`: allows to add or to overwrite notification attributes (checkout [callback creation](#post-callback)). These attributes (*vin, CallbackID, CallbackLabel, MonitorID & MonitorLabel*) could be added to the path parameters, header or body of the notification, they are mostly useful for routing.
  {% endif %}
- `extendedEventParam` array allows configuring the notification to include vehicle data in the notification. *For example, if the monitor is intended to be triggered when the vehicle alarm is activated, it could be useful to add vehicle position in the callback.*
- `triggerParam` object allows configuring what triggers the callback:
  - *triggers* is where to declare the [triggering event blocs](#triggering-events-blocs).
  - *boolExp* allows to setup the [triggering policy](#triggering-policy).

{% if page.subsection == 'b2b' %}
> **Note:** Each monitor can target only fleet only. However, it's possible to create multiple monitors for multiple fleets.
{% elsif page.subsection == 'b2c' %}
> **Retry Policy:** if the notification is not received by the server, the retry policy is enabled. Checkout the [dedicated page]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/retry-policy/#article) for the description of this policy.
{% endif %}

## Post Monitor Response

If the monitor request is properly set-up, the monitor will be created and an HTTP response will be returned:

```json
{
  "monitorId": "c7eeaafdf0ab9683d5a1b8d51572014996540m0021",
  "status": "Created"
} 
```

This message indicates that the monitor has been successfully created with a unique identifier. This identifier is sent with every notification, therefore, it allows tracking this monitor.

## Triggering Events Blocs

As seen in the [about page]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about/#monitor-features), monitors are triggered under the following patterns. Checkout the [API Reference]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/#operation/{% if page.subsection == "b2b" %}createFleetVehicleMonitor{% elsif page.subsection == "b2c" %}createVehicleVehicleMonitor{% endif %}) for the specification of trigger events.
- **🗺️ Zone**: a vehicle go in/out a circle area.
- **⏱️ Time**: a vehicle is being used within a time interval.
- **🚗 Data**: choose a sensor and set a triggering when the value is: equals to/greater than/lower than/include in/or changing.

The array *triggerParam.trigger* of the [monitor creation request](#post-monitor-request) allows declaring and name the list of triggering event blocs.

Declaration of event blocs is not enough to describe the way the callback is being triggered, **they must be used in the *triggerParam.boolExp*** field in order to set up the [triggering policy](#triggering-policy) of this monitor.

## Triggering Policy

Once the triggers blocs are declared, they need to be combined together to create a triggering policy. To do so, we use a boolean expression syntax:

> **Grammar:** Here is the list of available operands for monitors configuration. 
- AND: `trigger1 & trigger2` if both conditions have to be triggered 
- OR: `trigger1 | trigger2` if at least one condition has to be triggered
- PARENTHESIS: `trigger1 | (trigger2 & trigger3)` to prioritize an expression over another
- NOT: `!trigger1` if the condition has to not be triggered

This is an example of boolean expression, where *z1, z2, t1, t2, o1, o2, o3* are trigger bloc names:

```json
{
  "label": "<monitor-name>",
  "subscribeParam": { },
  "triggerParam": {
    "triggers": [
      {"name": "z1" }, {"name": "z2" }, {"name": "t1" }, {"name": "t2" },
      {"name": "o1" }, {"name": "o2" }, {"name": "o3" }
    ],
    "boolExp": "((z1 & t1) | (z2 & !t1) | (o1 & z1) | (o2 & (z1 | t2))  | (o3 & (z1 | z2)))"
  }
}
```

In this boolean expression, the monitor will notify the server in all these situations:
- *(z1 & t1)* = **z1** *AND* **t1** are being triggered
- *(z2 & !t1)* = **z2** is triggered *AND* **t1** is *NOT* triggered
- *(o1 & z1)* = **o1** is triggered *AND* **z1** is triggered
- *(o2 & (z1 &#124; t2))* = **o2** is triggered *AND* either **z1** *OR* **t2** is triggered
- *(o3 & (z1 &#124; z2))* = **o3** is triggered *AND* either **z1** *OR* **z2** is triggered

## Examples: Autonomy

This request asks to create a "Paris urban zone With Data Triggering:[vehicle.energy.electric.level] on Mondays" monitor with the following parameters:
{% if page.subsection == "b2b" %}
- It will be refreshed every 600s if the event is still triggered. 
- If the callback notification is not received, the request will be sent again every 120s until it's properly delivered. 
- The callback will be sent once 10 callback notifications are ready to be sent or 300s after triggering. 
- The callback will be sent to the `http://my.dn/monitors/cb1` webhook with the vin of the vehicle as a query param and the `Basic authentication` in HTTP header.
{% endif %}
- The notification will include `alerts` and `status` of the corresponding vehicle.
- This monitor is triggered if the vehicle's electric autonomy is lower than 50% AND either is out of a 20 km radius circle of the center of Paris, France OR on Mondays.

```json
{
  "label": "Paris urban zone With Data Triggering:[vehicle.energy.electric.level] on Mondays",
  "subscribeParam": { {% if page.subsection == "b2c" %} }, {% elsif page.subsection == "b2b" %}
    "refreshEvent": 600,
    "retryPolicy": { "policy": "Always", "maxRetryNumber": 3, "retryDelay": 120 },
    "batchNotify": { "size": 10, "timeWindow": 300 },
    "callback": {
      "target": "http://my.dn/monitors/cb1",
      "name": "HTTP_CB",
      "attributes": [
        { "type": "Query", "key": "vin", "value": "$vin" },
        { "type": "Header", "key": "Authorization", "value": "Basic QWxhZGRpbc2FtZQ==" }
      ]
    }
  },{% endif %}
  "extendedEventParam": [ "vehicle.alerts", "vehicle.status" ],
  "triggerParam": {
    "triggers": [
      {
        "name": "outOfParis",
        "zone": {
          "transition": "Out",
          "circle": {
            "radius": 20,
            "center": { "longitude": 2.333333, "latitude": 48.866667 }
          }
        }
      },
      {
        "name": "onMonday",
        "time": {
          "times": [
            {
              "recurrence": "Daily", "start": "PT14H30M",
              "occurence": {"day": ["Mon"]}, "duration": "PT04H30M"
            }
          ],
          "timeZone": "Europe/Paris"
        }
      },
      {
        "name": "batteryIsLow",
        "data": { "data": "vehicle.energy.electric.level", "op": "lowerThan", "value": ["50"] }
      }
    ],
    "boolExp": "((outOfParis & (batteryIsLow | onMonday)"
  }
}
```

## Example: Heatwave

Another example monitor to detect heatwave:

```json
{
  "label": "Paris urban zone With Data Triggering:[environment.air.temp]",
  "subscribeParam": { {% if page.subsection == "b2c" %} }, {% elsif page.subsection == "b2b" %}
    "refreshEvent": 600,
    "retryPolicy": { "policy": "Always", "maxRetryNumber": 3, "retryDelay": 120 },
    "batchNotify": { "size": 10, "timeWindow": 300 },
    "callback": {
      "webhook": {
        "target": "https://my.post.callback",
        "name": "My_Webhook",
        "attributres": [
          { "type": "Header", "key": "X-Vehicle_Id", "value": "$vin" },
          { "type": "Header", "key": "Authorization", "value": "Basic QWxhZGRpbjNlc2FtZQ==" }
        ]
      }
    }
  }, {% endif %}
  "extendedEventParam": ["environment.air.temp"],
  "triggerParam": {
    "triggers": [
      {
        "name": "outOfParis",
        "zone": {
          "transition": "Out",
          "circle": {
            "radius": 20,
            "center": { "longitude": 2.333333, "latitude": 48.866667 }
          }
        }
      },
      {
        "name": "outsideTemperatureIsHight",
        "data": { "data": "environment.air.temp", "op": "greaterThan", "value": ["30"] }
      }
    ],
    "boolExp": "(outOfParis & outsideTemperatureIsHight)"
  }
}
```

This request asks to create a heatwave monitor triggered inside the city of Paris, if the temperature is greater than 30 °C.

## Example: Merged Monitors

In place of having two different monitors like the previous examples, it's possible to use a boolean expression in order to merge those 2 examples in only one monitor:

```json
{
  "label": "merged-monitor",
  "subscribeParam": { },
  "triggerParam": {
    "triggers": [
      { "name": "outOfParis" },
      { "name": "outsideTemperatureIsHight" },
      { "name": "onMonday" },
      { "name": "batteryIsLow" }
    ],
    "boolExp": "((outOfParis & (batteryIsLow | onMonday) | (outOfParis & outsideTemperatureIsHight))"
  }
}
```