# FEATURES

With our APIs, you are able to {% if page.section == 'webapib2b' %}[browse data]({{site.baseurl}}/webapi/b2b/preview/){% elsif page.section == "webapib2c" %}[browse datas]({{site.baseurl}}/webapi/b2c/preview/){% endif %} about vehicles and receive {% if page.section == 'webapib2b' %}[custom notifications]({{site.baseurl}}/webapi/b2b/monitor){% elsif page.section == "webapib2c" %}[custom notifications]({{site.baseurl}}/webapi/b2c/monitor){% endif %}. Now, the remote APIs allow you to send online commands to connected vehicles.

<img src="{{site.baseurl}}/assets/images/remoteFeatures.png" alt="remoteFeatures" style="max-width: 580px">

**Available features:**

- **Charging**: Start the recharge of the vehicle.
- **Stolen**: Set the vehicle as stolen.
- **Lights**: Turn on/off vehicle lights.
- **State**: Refresh and retrieve vehicle status info.
- **Preconditioning**: Program heater or AC before the vehicle is being used.
- **DoorsState**: Lock/unlock the doors remotely.
- **Horn**: Honk the horn, maybe you will be able to find your car in the car-park this time.
- **Immobilization**:  Immobilize the vehicle until you let it go again.

# HOW DOES IT WORK?

**Step1: create a callback**

First, you will have to set up a remote callback.
If you are already working with monitors, it is almost the same as posting a {% if page.section == 'webapib2b' %}[monitor]({{site.baseurl}}/webapi/b2b/monitor/#post-monitor-request){% elsif page.section == "webapib2c" %}[monitor]({{site.baseurl}}/webapi/b2c/monitor/#post-monitor-request){% endif %}. 

Callback is where you define the parameters of your **webhook** (URL, authentication) and the structure of the **HTTP request** you will receive as a notification.

Callbacks are **specific** to certain remotes, as you can subscribe them to one or more actions & they are **reusable** as you can use the same callback every time you need to execute a similar command.

It is possible to set a retry policy with a specific number and frequency, it’s useful in case of your webhook is temporary unavailable. You can also set a batch notify policy.

![remoteSequence]({{site.baseurl}}/assets/images/remoteCallbackSequence.png)

>**Note:** At least one callback is required to post a remote action. But you can use **only one callback** for all your remote actions if you need only one webhook configuration. Indeed, if you need to have different webhook or notification policies, you can set several callbacks.

**Step2: send a remote action**

Once your callback is created, you will be able to **send remote** request to your vehicle (through Groupe PSA's network).
While the command is being processed by the vehicle, you will receive callback reports in your webhook.

![remoteSequence]({{site.baseurl}}/assets/images/remoteActionSequence.png)

When you send a remote action to a vehicle, you will receive **several notifications** as the action is processing: 
- Pending: The remote action is in process (*Accepted*, *Waking-Up*, *Send* etc). You can receive several pending events.
- Done: The remote action is complete (*Success*, *Failure* etc).

# 1. POST REMOTE CALLBACK

### CALLBACK REQUEST

Before being able to send a remote action, you have to configure the **HTTP callback** that will be sent to your webhook. 

This callback specifies your webhook config, a retry policy and a batch notification policy. You can set up several callbacks. You will then execute a remote action using the callback the most appropriate for the situation.

Here is an overview of an **HTTP request** intended to create a remote callback.

{% include_relative content/webapi-cUrl.md apiEndpointB2B='/fleets/{fid}/remote/callbacks' apiEndpointB2C='/user/remote/callbacks' referenceURLResssourceB2B ='/#/Remote/setFleetVehicleRemote' referenceURLResssourceB2C ='' displayCURL=false displayApiURL=true httpVerb='POST' httpBody='{
  "retryPolicy": { },
  "batchNotify": { },
  "callback": { },
  "label": "callback-name",
  "extendedEventParam": [ ]
}' %}

Below is a description of the JSON models explaining how to configure a callback. Please refer to {% if page.section == 'webapib2b' %}[API Reference]({{site.baseurl}}/webapi/b2b/reference){% elsif page.section == "webapib2c" %}[API Reference]({{site.baseurl}}/webapi/b2c/reference){% endif %} models to read a full description of the callback configuration.

- **{% if page.section == 'webapib2b' %}[RemoteCallbackSubscribe]({{site.baseurl}}/webapi/b2b/reference/#model-RemoteCallbackSubscribe){% elsif page.section == "webapib2c" %}[RemoteCallbackSubscribe]({{site.baseurl}}/webapi/b2c/reference/#model-RemoteCallbackSubscribe){% endif %}**: this JSON object allow you to configure your remote callback:
   - **retryPolicy**: this where you set retry policy, it's in case your webhook has not received the callback, whatever is the reason.
   - **batchNotify**: you can set this object in case you need to receive notification in batch instead of one by one.
   - **callback>webhook**: this required object is where you will set the address and name of your webhook. This is also where you can customize the HTTP notification (example: for authentication purpose).
- **{% if page.section == 'webapib2b' %}[notificationTypes]({{site.baseurl}}/webapi/b2b/reference/#model-RemoteType){% elsif page.section == "webapib2c" %}[notificationTypes]({{site.baseurl}}/webapi/b2c/reference/#model-RemoteType){% endif %}**: this array of remotes allow you to subscribe this callback to one or more actions.

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

The callback have been created with *id=c7eeaafdf0ab9683d5a1b8d51572014996540m0021*. This **callbackId** will be sent with every notification to your webhook.

> **Important:** You will need this ID to POST a remote action to a vehicle with this callback.

# 2. POST REMOTE ACTION

### REMOTE REQUEST

Once you have a dedicated callback, you are able to POST a remote action to a vehicle.
Choose a vehicle id (you can retrieve it with the API status), then send this kind of request:

{% include_relative content/webapi-cUrl.md apiEndpointB2B='/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes' apiEndpointB2C='/user/vehicles/{vid}/callbacks/{cbid}/remotes' referenceURLResssourceB2B ='/#/Remote/sendRemoteToVhl' referenceURLResssourceB2C ='' displayCURL=false httpVerb='POST' httpBody='{
  "label": "remote_name",
  "door": {
    "state": "Unlocked"
    }
}' %}

In this API you have to replace this fields:
{% if page.section == 'webapib2b' %}- **{fid}** is the id of your fleet.{% endif %}
- **{vid}** is the id of the vehicle to which you want to send the remote action.
- **{cbid}** is the id of one of your callbacks *(see [1. Post remote Callback](#1-post-remote-callback))*.

You can browse the **{% if page.section == 'webapib2b' %}[Remote Object]({{site.baseurl}}/webapi/b2b/reference/#model-Remote){% elsif page.section == "webapib2c" %}[Remote Object]({{site.baseurl}}/webapi/b2c/reference/#model-Remote){% endif %}** in the reference section to have more info about how to send a specific remote action:

Object Name | Description | Example
-|-|-
RemotePreconditioning | Choose between `immediate` preconditionning or not, and set a `program` with `recurrence` or not, `start` time,  `occurence` during the week then, choose to `enable` or not this program. **Note:** Using the key/value `Slot` you can register up to 4 PreconditionPrograms. | ``` {  "label": "string",  "preonditionning": {    "airConditioning": {      "immediate": false,      "programs": [        {          "recurrence": "Daily",          "start": "PT14H30M",          "occurence": {            "day": [              "Mon"            ]          },          "slot": 0,          "enabled": true        }      ]    }  } } ```
RemoteSetImmobilization | Set to `activate` to true if you need to immobilize a vehicle. You can use this feature in addition to "RemoteSetStolen". | ``` {   "immobilization": {    "activate": true  } }```
RemoteDoorsState | Set `state` to `Locked` or `Unlocked`. | ``` {  "door": {    "state": "Unlocked"  } }```
RemoteHorn | Choose the `number` of times the horn will honk and if the remote is `"state": "Activated"` or `"state": "Unactivated"`. | ``` {  "horn": {    "number": 0,    "state": "Activated"  } }```
RemoteCharging | You can choose between `immediate` recharge or `nextDelayedTime` with a timestamp [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) before the charge activation. | ``` {  "charging": {    "nextDelayedTime": "string",    "immediate": false  } }```
RemoteSetStolen | Set `stolen` to true if you want the vehicle to be in stolen state. It's mean that it will stay awake and refresh {% if page.section == 'webapib2b' %}[lastPosition]({{site.baseurl}}/webapi/b2b/reference/#operations-Vehicles-getCarLastPosition){% elsif page.section == "webapib2c" %}[lastPosition]({{site.baseurl}}/webapi/b2b/reference/#operations-Vehicles-getCarLastPosition){% endif %} on a regular basis.  | ``` {  "stolen": {    "stolen": true  } }```
RemoteLights | Set `on` or not the vehicles lights. If you turn it on, you can choose a duration expressed using [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Durations). | ``` {  "ligths": {    "on": true,    "duration": "PT20S"  } }```
RemoteState | Set `action: state` to retrieve an updated status of the vehicle. | ``` {  "state": {    "action": "state"  } }``` |

> **Be careful:** you can send **only one** Remote Action at once. If you need to send several Remote Actions you have to send several HTTP POST requests to {% if page.section == 'webapib2b' %}*/fleets/{fid}/vehicles/{vid}/callbacks/{cbid}/remotes*{% elsif page.section == "webapib2c" %}*/user/vehicles/{vid}/callbacks/{cbid}/remotes*{% endif %}. However, you can use the same callback for those Remote Action.

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

# 3. WEBHOOK TEMPLATE

You have to develop on your side a **dedicated webhook** able to receive our event.

This web server needs to be configured to read & process our events in order that you get informed about the processing of the remote. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook have to be the same as the one specified in when you created the callback.


<div id="swagger-ui"></div>
<script src="{{ '/assets/js/swagger-ui-bundle.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script src="{{ '/assets/js/swagger-ui-standalone-preset.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script>
    window.onload = function () {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
            url: "{{ site.url }}{{site.baseurl}}/assets/openapi/{% if page.section == 'webapib2b' %}api-b2b-webhook-template.yaml{% elsif page.section == "webapib2c" %}api-b2c-webhook-template.yaml{% endif %}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout",
            onComplete: hideInfoSwagger
        })
        // End Swagger UI call region
        window.ui = ui;
        //hide description
        function hideInfoSwagger() {
            document.getElementsByClassName('info')[0].style.display = "none";
        }
    }
</script>

# SEE ALSO

##### PREVIEW

Want to see what it's look like ? Browse our {% if page.section == 'webapib2b' %}[Preview]({{site.baseurl}}/webapi/b2b/preview/){% elsif page.section == "webapib2c" %}[Preview]({{site.baseurl}}/webapi/b2c/preview/){% endif %}.

##### TRY OUT!

Retrieve reference of this API, go to the {% if page.section == 'webapib2b' %}[API List]({{ site.baseurl }}/webapi/b2b/reference/){% elsif page.section == "webapib2c" %}[API List]({{ site.baseurl }}/webapi/b2c/reference/){% endif %}.