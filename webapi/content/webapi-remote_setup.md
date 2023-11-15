This tutorial explains how to set up remotes using the REST API. In order to do so, we will need to understand how to configure the **callback** and send a **remote command**.

{% include_relative content/webapi-callbacks.md %}

## Post Remote Request

The following example is the structure of the HTTP request intended to send a remote command. 

The following **path parameters are required**, they need to be replaced by the appropriate value:
{% if page.subsection == 'b2b' %}- **{fid}** is the id of the fleet.{% endif %}
- **{{'{'}}{% if page.subsection == 'b2b' %}v{% endif %}id}** is the id of the vehicle to send a remote to.
- **{cbid}** is the id of a callback, this id is received when a [callback is created](#post-callback).

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes'
   apiEndpointB2C='/user/vehicles/{id}/callbacks/{cbid}/remotes'
   referenceURLResssourceB2B='sendRemoteToVhl'
   referenceURLResssourceB2C='sendRemoteToVhl'
   httpVerb='POST'
%}

```js
{
  "label": "remote_name",{% if page.subsection == "b2c" %}
  "attributes": {  }
  "callbackAttributes": {  },{% endif %}
  "door": {
    "state": "Unlocked"
  }
}
```

Below is a description of the JSON body to configure the remote, refers to [API Reference]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/#operation/sendRemoteToVhl) for the specification of this endpoint.

- `label` is the name of the remote.
{% if page.subsection == "b2c" %}
- `attributes` & `callbackAttributes`: allows adding or to overwrite key/value attributes declared in the [callback creation](#post-callback), it will be available in the notification as query parameters, headers or body. Attributes (*vin, CallbackID & CallbackLabel*) are useful to perform the routing of the notification.
{% endif %}
- `<remote-type>` objects allow configuring the remote action to send, checkout [remote actions](#remote-actions). Only one remote can be sent at once.


## Post Remote Response

This is an example of HTTP response when sending a remote action:

```json
{
  "_links": {  },
  "remoteActionId": "909bkqacjb3bfhdhjanahbc244jj2lixfbe2e52u5y",
  "type": ["ThermalPreconditioning"]
}
```

This message indicates that the remote has been successfully created with a unique identifier. This identifier is sent with every notification; therefore, it allows tracking this remote.

## Remote Actions

Object Name | Description | Example
-|-|-
RemotePreconditioning | Choose between `immediate` preconditioning or not, and set a `program` with `recurrence` or not, `start` time,  `occurence` during the week then, choose to `enable` or not this program. **Note:** Using the key/value `Slot` it's possible to register up to 4 PreconditionPrograms. | ``` {  "label": "string",  "preonditionning": {    "airConditioning": {      "immediate": false,      "programs": [        {          "recurrence": "Daily",          "start": "PT14H30M",          "occurence": {            "day": [              "Mon"            ]          },          "slot": 0,          "enabled": true        }      ]    }  } } ```
RemoteSetImmobilization | Set `activate` to true to immobilize a vehicle. This feature can be used in addition to "RemoteSetStolen". | ``` {   "immobilization": {    "activate": true  } }```
RemoteDoorsState | Set `state` to `Locked` or `Unlocked`. | ``` {  "door": {    "state": "Unlocked"  } }```
RemoteHorn | Honk the vehicle horn. | ``` {  "horn": {   "state": "Activated"  } }```
RemoteCharging | It's possible to choose between `immediate` recharge or `nextDelayedTime` with a timestamp [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) before the charge activation. To **stop** a charge use set `immediate` to `false`. | ``` {  "charging": {    "nextDelayedTime": "string",    "immediate": false  } }```<br> <strong>Stop: </strong>```{  "charging": {"immediate": false} }```
RemoteSetStolen | Set `stolen` to true to put the vehicle in stolen state. It's mean that it will stay awake and refresh its position status on a regular basis.  | ``` {  "stolen": {    "stolen": true  } }```
RemoteLights | Set a light blinking. | ```{  "ligths": {    "on": true  } }```
RemoteState | Set `action: state` to retrieve an updated status of the vehicle. | ``` {  "state": {    "action": "state"  } }``` |
RemoteNavigation | Set `action: navigation` to send a remote navigation on the guidance system of the vehicle. It's possible to send a notification to the driver through the HMI, before launching the navigation with `"driverApproval": true`. The field `"positions": [...]` is an array of [GeoJSON](https://geojson.org/) points where the last point is the final destination and the other points are waypoints, maximum 10 points. | ``` {"navigation": {  "driverApproval": true,  "positions": [    {      "type": "Point",      "coordinates": [        5.970338,        -62.536239      ]   }  ]}}``` |
