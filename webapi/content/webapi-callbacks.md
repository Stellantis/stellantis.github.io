{% if page.subsection == "b2c" %}
HTTP request headers used in this tutorial require to use [realms]({{site.baseurl}}/webapi/{{page.subsection}}/quickstart/access-user-data/#manufacturers-brands--realms).
{% endif %}

## Post Callback

The first step is to configure a reusable configuration settings named *callback*.{% if page.subsection == "b2c" %} The same callback can be used for [monitors]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about/#article) and/or [remote]({{site.baseurl}}/webapi/{{page.subsection}}/remote/about/#article) features of this API.


Registering a callback can be done using the following API. They are 3 types of callback notifications: **WebHook, Push Notification, WebSocket**.
{% endif %}

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/remote/callbacks'
   apiEndpointB2C='/user/callbacks'
   referenceURLResssourceB2B='setFleetVehicleRemote'
   referenceURLResssourceB2C='setUsertVehicleRemote'
   httpVerb='POST'
%}

```json
{
  "label": "<callback-name>",{% if page.subsection == "b2c" %}
  "type": ["Monitor", "Remote"],{% endif %}
  "callback": {
    "webhook": {
      "target": "https://my.post.callback",
      "name": "<webhook-name>",
      "batch": { "enabled": true, "size": 100 },
      "attributes": [ { "type": "Header", "key": "X-Vehicle_Id", "value": "$vin"} ]
    }{% if page.subsection == "b2c" %},
    "pushnotif": {
      "devices": ["<device_name>"],
      "attributes": [ { "type": "Header", "key": "X-Vehicle_Id", "value": "$vin"} ]
    },
    "websocket": {
      "target": "scheme://host[:port][/Path]",
      "batch": { "enabled": true, "size": 100 },
      "attributes": [ { "type": "Header", "key": "X-Vehicle_Id", "value": "$vin" } ]
    }
  }{% elsif page.subsection == "b2b" %},
  "retryPolicy": { "policy": "None", "retryNumber": 3, "retryDelay": 10 },
  "batchNotify": { "size": 0, "timeWindow": 60 },
  "remoteTypes": ["Horn", "Doors"]
  {% endif %}
}
```

Below is a description of the JSON body to configure the callback.
- `label` is the name of the callback. {% if page.subsection == "b2c" %}
- `type` to declare a callback for *Monitor, Remote or both*.
- `callback` allows to configure notifications, they can be of 3 different types:
  - *webhook*: for HTTP notification.
  - *websocket*: for websocket callbacks.
  - *pushnotif*: using Firebase Cloud Messaging in order to trigger push notification on iOS (APNs) or Android (GCM).
- `callback.<notification_type>` allow to configure:
  - *attributes:* to setup additional attributes of the notification (*headers, query params, body*). These attributes are usually used for routing.
  - *batch:* webhook & websocket notifications can be send in batch, it's recommended to use batch over single time notification.{% elsif page.subsection == "b2b" and page.categorie == "Remote" %}
- `callback.webhook`: to set up the reception server and the notification attributes (headers, query params, body, usually use for routing).
- `retryPolicy` to configure how to deal with a server not receiving notifications. **Retry Policy** is described in this [dedicated page]({{site.baseurl}}/webapi/{{page.subsection}}/{{page.categorie|downcase}}/retry-policy/#article).
- `batchNotify` if notifications needs to be received in batches instead of one by one.
- `remoteTypes` allows to set up which type of remotes  can work with this callback.

> **Be careful:** it's only possible to send **one remote action at once**. However, callbacks are re-usable for multiple those remote action.

{% if page.subsection == "b2c" %}
> **Retry Policy:** If a notification is not received on the callback server, the [retry policy]({{site.baseurl}}/webapi/b2c/{{page.categorie|downcase}}/retry-policy/#article) will be triggered.
{% endif %}

### Example of Callback

This example **creates** a callback named "my-post-callback" with the following parameters:
- If the callback **notification is not received**, the request will be sent again every 120s until it's properly delivered. 
- The callback will be **sent once** 10 callback notifications are ready to be sent or 300s after triggering.
- The callback will be **sent to** `https://my.post.callback` webhook, with the VIN of the vehicle as a query path parameter and the `Basic authentication` in HTTP headers.
- This callback can be used in order to send **remote actions**: `ThermalPreconditioning` & `ElectricBatteryChargingRequest`.

```json
{
   "retryPolicy": { 
    "policy": "Always", "maxRetryNumber": 3, "retryDelay": 120
  },
   "batchNotify": { "size": 10, "timeWindow": 300 },
   "callback": {
      "webhook": {
         "target": "https://my.post.callback",
         "name": "My_Webhook",
         "attributres": [
            {
              "type":"Header",
              "key":"Authorization",
              "value":"Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
            }
         ]
      }
   },
   "label": "my-post-callback",
    "notificationTypes": [
        "ThermalPreconditioning",
        "ElectricBatteryChargingRequest"
    ]
}
```

{% endif %}


If the callback is properly created the HTTP **response body** will look like:

```json
{
  "_links": {  },
  "callbackId": "<id>",
  "status": "Running"
}
```

This message indicates that the callback has been sucessfully created with a unique identifier. This identifier, called *{cbid}* is required to [create a {{page.categorie | downcase}}](#post-{{page.categorie | downcase}}-request).