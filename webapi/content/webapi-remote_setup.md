
# 1. POST REMOTE CALLBACK

### CALLBACK REQUEST

Before being able to send a remote action, you have to configure the **HTTP callback** that will be sent to your webhook. 

This callback specifies your webhook config, a retry policy and a batch notification policy. You can set up several callbacks. You will then execute a remote action using the callback the most appropriate for the situation.

Here is an overview of an **HTTP request** intended to create a remote callback.

{% include webapi-curl.md apiEndpointB2B='/fleets/{fid}/remote/callbacks' apiEndpointB2C='/user/remote/callbacks' referenceURLResssourceB2B ='/#/Remote/setFleetVehicleRemote' referenceURLResssourceB2C ='' displayCURL=false displayApiURL=true httpVerb='POST' httpBody='{
  "retryPolicy": { },
  "batchNotify": { },
  "callback": { },
  "label": "callback-name",
  "extendedEventParam": [ ]
}' %}

Below is a description of the JSON models explaining how to configure a callback. Please refer to {% if page.subsection == 'b2b' %}[API Reference]({{site.baseurl}}/webapi/b2b/api-reference){% elsif page.subsection == 'b2c' %}[API Reference]({{site.baseurl}}/webapi/b2c/api-reference/specification){% endif %} models to read a full description of the callback configuration.

- **{% if page.subsection == 'b2b' %}[RemoteCallbackSubscribe]({{site.baseurl}}/webapi/b2b/api-reference/specification#model-RemoteCallbackSubscribe){% elsif page.subsection == 'b2c' %}[RemoteCallbackSubscribe]({{site.baseurl}}/webapi/b2c/api-reference/specification/#model-RemoteCallbackSubscribe){% endif %}**: this JSON object allow you to configure your remote callback:
   - **retryPolicy**: this where you set retry policy, it's in case your webhook has not received the callback, whatever is the reason.
   - **batchNotify**: you can set this object in case you need to receive notification in batch instead of one by one.
   - **callback>webhook**: this required object is where you will set the address and name of your webhook. This is also where you can customize the HTTP notification (example: for authentication purpose).
- **{% if page.subsection == 'b2b' %}[notificationTypes]({{site.baseurl}}/webapi/b2b/api-reference/specification#model-RemoteType){% elsif page.subsection == 'b2c' %}[notificationTypes]({{site.baseurl}}/webapi/b2c/api-reference/specification/#model-RemoteType){% endif %}**: this array of remotes allow you to subscribe this callback to one or more actions.

#### Example

This request ask to **create** a callback named "my-post-callback" with the following parameters:
- If the callback **notification is not received**, the request will be sent again every 120s until it's properly delivered. 
- The callback will be **sent once** 10 callback notifications are ready to be sent or 300s after triggering.
- The callback will be **sent to** your `https://my.post.callback` webhook with the vin of the vehicle as a query path param and your `Basic authentication` in HTTP header.
- This callback can be used in order to send **remote actions**: `ThermalPreconditioning` & `ElectricBatteryChargingRequest`.

```json
{
   "retryPolicy": {
      "policy": "Always",
      "maxRetryNumber": 3,
      "retryDelay": 120
      },
   "batchNotify": {
      "size": 10,
      "timeWindow": 300
   },
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

### CALLBACK RESPONSE

Here is an example of HTTP response after POSTING a new remote callback.

```json 
{
    "_links": {...},
    "callbackId": "c7eeaafdf0ab9683d5a1b8d51572014996540m0021",
    "status": "Running"
} 
```

The callback have been created with `id=c7eeaafdf0ab9683d5a1b8d51572014996540m0021`. This **callbackId** will be sent with every notification to your webhook.

> **Important:** You will need this ID to POST a remote action to a vehicle with this callback.

# 2. POST REMOTE ACTION

### REMOTE REQUEST

Once you have a dedicated callback, you are able to POST a remote action to a vehicle.
Choose a vehicle id (you can retrieve it with the API status), then send this kind of request:

{% include webapi-curl.md apiEndpointB2B='/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes' apiEndpointB2C='/user/vehicles/{vid}/callbacks/{cbid}/remotes' referenceURLResssourceB2B ='/#/Remote/sendRemoteToVhl' referenceURLResssourceB2C ='' displayCURL=false httpVerb='POST' httpBody='{
  "label": "remote_name",
  "door": {
    "state": "Unlocked"
    }
}' %}

In this API you have to replace this fields:
{% if page.subsection == 'b2b' %}- **{fid}** is the id of your fleet.{% endif %}
- **{vid}** is the id of the vehicle to which you want to send the remote action.
- **{cbid}** is the id of one of your callbacks *(see [1. Post remote Callback](#1-post-remote-callback))*.

You can browse the **{% if page.subsection == 'b2b' %}[Remote Object]({{site.baseurl}}/webapi/b2b/api-reference/specification#model-Remote){% elsif page.subsection == 'b2c' %}[Remote Object]({{site.baseurl}}/webapi/b2c/api-reference/specification/#model-Remote){% endif %}** in the reference section to have more info about how to send a specific remote action:

#### REMOTE ACTIONS

Object Name | Description | Example
-|-|-
RemotePreconditioning | Choose between `immediate` preconditionning or not, and set a `program` with `recurrence` or not, `start` time,  `occurence` during the week then, choose to `enable` or not this program. **Note:** Using the key/value `Slot` you can register up to 4 PreconditionPrograms. | ``` {  "label": "string",  "preonditionning": {    "airConditioning": {      "immediate": false,      "programs": [        {          "recurrence": "Daily",          "start": "PT14H30M",          "occurence": {            "day": [              "Mon"            ]          },          "slot": 0,          "enabled": true        }      ]    }  } } ```
RemoteSetImmobilization | Set to `activate` to true if you need to immobilize a vehicle. You can use this feature in addition to "RemoteSetStolen". | ``` {   "immobilization": {    "activate": true  } }```
RemoteDoorsState | Set `state` to `Locked` or `Unlocked`. | ``` {  "door": {    "state": "Unlocked"  } }```
RemoteHorn | Honk the vehicel horn. | ``` {  "horn": {   "state": "Activated"  } }```
RemoteCharging | You can choose between `immediate` recharge or `nextDelayedTime` with a timestamp [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) before the charge activation. To **stop** a charge use set `immediate` to `false`. | ``` {  "charging": {    "nextDelayedTime": "string",    "immediate": false  } }```<br> <strong>Stop: </strong>```{  "charging": {"immediate": false} }```
RemoteSetStolen | Set `stolen` to true if you want the vehicle to be in stolen state. It's mean that it will stay awake and refresh {% if page.subsection == 'b2b' %}[lastPosition]({{site.baseurl}}/webapi/b2b/api-reference/specification#operations-Vehicles-getCarLastPosition){% elsif page.subsection == 'b2c' %}[lastPosition]({{site.baseurl}}/webapi/b2b/api-reference/specification#operations-Vehicles-getCarLastPosition){% endif %} on a regular basis.  | ``` {  "stolen": {    "stolen": true  } }```
RemoteLights | Set a light blinking. | ```{  "ligths": {    "on": true  } }```
RemoteState | Set `action: state` to retrieve an updated status of the vehicle. | ``` {  "state": {    "action": "state"  } }``` |
RemoteNavigation | Set `action: navigation` to send a remote navigation on the guidance system of the vehicle. You can choose to send a notification to the driver through the HMI, before launching the navigation with `"driverApproval": true`. The field `"positions": [...]` is an array of [GeoJSON](https://geojson.org/) points where the last point is the final destination and the other points are waypoints, maximum 10 points. | ``` {"navigation": {  "driverApproval": true,  "positions": [    {      "type": "Point",      "coordinates": [        5.970338,        -62.536239      ]   }  ]}}``` |


> **Be careful:** you can send **only one** Remote Action at once. If you need to send several Remote Actions you have to send several HTTP POST requests to {% if page.subsection == 'b2b' %}*/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes*{% elsif page.subsection == 'b2c' %}*/user/vehicles/{vid}/callbacks/{cbid}/remotes*{% endif %}. However, you can use the same callback for those Remote Action.

### REMOTE RESPONSE

This is an example of HTTP response when you POST remote action:

```json
{
  "_links": { ... },
  "remoteActionId": "909bkqacjb3bfhdhjanahbc244jj2lixfbe2e52u5y",
  "type": [
    "ThermalPreconditioning"
  ]
}
```

**RemoteActionID** is the unique identifier of the remote. This id will be sent to your callback with your remote action reports.
