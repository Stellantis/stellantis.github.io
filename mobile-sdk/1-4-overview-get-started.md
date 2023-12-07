---
layout: doc-article
permalink: /mobile-sdk/overview/get-started/
section: mobile-sdk
title: Get Started
categorie: Overview
description: "Get Started with connected vehicle mobile SDK."
require: api-reference
---

{%- capture succeeded_tag -%}
<span class="tag is-dark"><i class="fas fa-long-arrow-alt-down"></i>&nbsp; <span style="font-weight: 500">Succeeded</span></span>
{%- endcapture -%}

{%- capture result_tag -%}
<span class="tag is-dark"><i class="fas fa-bell"></i>&nbsp; <span style="font-weight: 500">Result</span></span>
{%- endcapture -%}

{%- capture failed_tag -%}
<span class="tag is-dark"><i class="fas fa-exclamation"></i>&nbsp; <span style="font-weight: 500">Failed</span></span>
{%- endcapture -%}

{%- capture get_tag -%}
<span class="tag is-small" style="background: #61affe; color: white; font-weight: bold">GET</span>
{%- endcapture -%}

{%- capture set_tag -%}
<span class="tag is-small" style="background: #4aad81; color: white; font-weight: bold">SET</span>
{%- endcapture -%}

{%- capture subscribe_tag -%}
<span class="tag is-small" style="background: #be9046; color: white; font-weight: bold">SUBSCRIBE</span>
{%- endcapture -%}

{%- capture unsubscribe_tag -%}
<span class="tag is-small" style="background: #be9046; color: white; font-weight: bold">UNSUBSCRIBE</span>
{%- endcapture -%}

*Stellantis Connected Vehicles SDK runs on **iOS 12+** (and 13+ for some features) and  **Android 7+**. 

Bluetooth, GPS & internet connection might be required on the device, depending on the API.

## Initialize & Release

First of all, before being able to request any [API]({{site.baseurl}}/mobile-sdk/references/), you should initialize the SDK. 

Initializing the SDK require configuration params details in the following table:

{% include_relative content/mobile-sdk-intialize-params.html %}

{% capture initializeKotlin %}
```kotlin
pims.initialize(
  mapOf( /* parameters */  
    Pair("environnement", "Production"),
    Pair("mode", "B2B"),
    Pair("monitoring", map0f(
      Pair("logLevel", "low"),
      Pair("newLogFile", "appLaunch"),
      Pair("newLogTimeDuration", 42)
    )
    Pair("credential", map0f(
      Pair("clientID", "<clientID>"),
      Pair("clientSecret", "<clientSecret>"),
      Pair("macID", "macIDValue"),
      Pair("inWeboURL", "https://address.tld"),
      Pair("webviewsRedirectURI", "https://address.tld"),
      Pair("loginRedirectURI", "https://address.tld")
    )
    Pair("profile", map0f(
      Pair("brand", "opel")
    )
  )
) { /* Callback */
  message -> when (message["status"] as? String) {
    "SUCCEEDED" -> { }                          // handle succeeded initialization
    "FAILED" ->    { }                          // handle failed initialization
} }
```
{% endcapture %}


{% capture initializeSwift %}
```swift
pims.initialize(
  parameters: [  
    "environnement": "Production",
    "mode": "B2C",
    "monitoring": [
      "logLevel": "low",
      "newLogFile": "appLaunch",
      "newLogTimeDuration": 42
    ],
    "credential": [
      "clientID": "<clientID>",
      "clientSecret": "<clientSecret>",
      "macID": "macIDValue",
      "inWeboURL": "https://addres.tlhttps://address.tld",
      "webviewsRedirectURI": "https://address.tld",
      "loginRedirectURI": "https://address.tld"
    ],
    "profile": [
      "brand": "opel"
    ] 
  ]
) { /* Callback */
  (message) in 
    if message["status"] == "SUCCEEDED"    { }    // handle succeeded initialization
    else if message["status"] == "FAILED" { }    // handle failed initialization
}
```
{% endcapture %}


{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  no_link=true
  name="Initialize SDK: Request Example"
  request_params_swift=initializeSwift
  request_params_kotlin=initializeKotlin
%}


If you don't need to use this SDK anymore, you can call the release method for performance reasons:

{% capture releaseKotlin %}
```kotlin
pims.release( /* No Parameters */ )
  { /* Callback */
  message -> when (message["status"] as? String) {
    "SUCCEEDED" -> { }                          // handle succeeded release
    "FAILED" ->    { }                          // handle failed release
  } }
```
{% endcapture %}


{% capture releaseSwift %}
```swift
pims.release( /* No Parameters */ ) 
  { /* Callback */
  (message) in 
    if message["status"] == "SUCCEEDED"    { }    // handle succeeded release
    else if message["status"] == "FAILED" { }    // handle failed release
  }
```
{% endcapture %}


{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  no_link=true
  name="Release SDK: Request Example"
  request_params_swift=releaseSwift
  request_params_kotlin=releaseKotlin
%}

Once the SDK is set up, either for Android or iOS, it's possible to perform your first API request!

Depending on the API, you need first to perform the appropriate security steps. Read [security]({{site.baseurl}}/mobile-sdk/security/security-schemes/#article) for more information about these security schemes.

## API Methods

Four methods are available depending on the API:

```kotlin
/* request data*/
pims.get()

/* change data */
pims.set()

/* subscribe (or unsubscribe) to events */
pims.subscribe() /* and */ pims.unsubscribe()
```


| Method | Description | Callback | Outputted Data |
| -- | -- | -- | 
| {{get_tag}} | Allows **requesting** single time data.| **Only one callback**, when the request has been resolved successfully or is in error. | The message includes outputted data or info about the error.
| {{set_tag}} | Allows **changing** a value or set up an action.| **Only one callback**, when the request has been resolved or is in error. | The message might be empty or includes outputted data or info about the error.
| {{subscribe_tag}} | Allows receiving **events** when a data changes.| **An acknowledgment callback**, when the request has been taken in account or is in error.  <br> Then, **an event callback each time** the event is triggered. | The acknowledgment message does not include outputted data, but can include info in case of error. <br> The event message include outputted data or info about error.
| {{unsubscribe_tag}} | Whenever an api is available under the subscribe method, **unsubscribe** is also available to stop receiving events.| **Only one callback**, when the request has been resolved or is in error. | The message does not include outputted data, but can include info in case of error. 

Each API can exist under these 4 types. See [References]({{site.baseurl}}/mobile-sdk/references/) for the list of all APIs and their types.

## Method Get & Set

#### Get & Set Request

This is an example of a **Get** request, but a **Set** is the same format. Once requested, this API will return **only one return message**.

- {{get_tag}} method of an API will return the requested data, just after the method is requested.
- {{set_tag}} method of an API will change the data in the system and return an acknowledgment message, this message might also include data.

{% capture requestPriceKotlin %}
```kotlin
/* Method Get */
pims.get(
  /* -- API Name -- */
  "pims.vehicle.price",
  /* -- API Parameters -- */
  mapOf( 
    Pair("vin", "VR1AB12C3D4567890")
  ) 
) { /* -- API Callback -- */
    message -> when (message["status"] as? String) {
      "SUCCEEDED" -> { }                          // handle succeeded status
      "FAILED" ->    { }                          // handle failed status
  } }
```
{% endcapture %}

{% capture requestPriceSwift %}
```swift
/* Method Get */
pims.get(
  /* -- API Name -- */
  api: "pims.vehicle.price",
  /* -- API Parameter -- */
  parameters: [  
    "vin": "VR1AB12C3D4567890"
  ]
  ) { /* -- API Callback -- */
      (message) in 
        if message["status"] == "SUCCEEDED"    { }    // handle succeeded status
        else if message["status"] == "FAILED" { }    // handle failed status
    }
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  type="get"
  name="pims.vehicle.price"
  description="Request"
  request_params_swift=requestPriceSwift
  request_params_kotlin=requestPriceKotlin
  component="TripNDrive"
%}

{% capture requestParamatersExample %}

Let's explain this request example:

- `API Name` - *String* - The name of the API to request.
- `API Parameters` - *Object* - Parameters specific to this API. Parameters and outputs are available in [references]({{site.baseurl}}/mobile-sdk/references/).
- `API Callback` - *Function* - Code to execute when a message is received.

{% endcapture %}

{{requestParamatersExample}}

#### Get & Set Callback

After requesting an API of the **Get & Set** type, you should except one return between 2 kinds of messages. That's why your **callback** should be able to handle both these possibilities:
- {{succeeded_tag}} This message is returned when the operation has been executed successfully. 
- {{failed_tag}} This message is received when the operation failed.


{% capture responsePrice %}
```js
// SUCCEEDED: representation of the natif dictionary object message as JSON
// This message is the response to a get/set method in case of success
{
  "transactionId": "953cfefb-bc72",
  "status": "SUCCEEDED"
  /* Set APIs might not include a result field */
  "result": { 
    "priceFuel": "1.27",
    "priceElectric": "0.85"
  } 
}
```
{% endcapture %}

{% capture failedPrice %}
```js
// FAILED: representation of the natif dictionary object message as JSON
// This message is the response to a get/set method in case of failure
{
  "transactionId": "953cfefb-bc72",
  "status": "FAILED",
  "error": {
    "code": "2000",
    "label": "Unknown error"
  }
}
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  type="get"
  name="pims.vehicle.price"
  description="Succeeded & Failed"
  response=responsePrice
  failed=failedPrice
  component="TripNDrive"
%}


The previous example is the JSON representation of the returned message object. This table details the message structure:

Name| Value |Description
-|-|-
***transactionId*** | *String* | Id of the request.
***status*** |*Enum of Strings* | Status of the message: <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;**status:** {{succeeded_tag}} the operation has been executed successfully.<br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;**status:** {{failed_tag}} the operation is in error. 
***result*** | *dictionary Object* | Contains the outputted data, see [reference page]({{site.baseurl}}/mobile-sdk/references/) for the output of each API. <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{succeeded_tag}} **Get** operations always includes *result*, **Set** operations might include the *result* or not if no outputted data.<br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{failed_tag}} In **Failed** messages, this field is never returned.
***error*** | *dictionary Object* | Code and Label of the error, check-out [reference page]({{site.baseurl}}/mobile-sdk/references/) or [error page]({{site.baseurl}}/mobile-sdk/references/errors/#article) for the list of errors. <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Always returned in {{failed_tag}} messages. <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Never returned in {{succeeded_tag}} messages.

## Method Subscribe

#### Subscribe Request

Here is the example of a **Subscribe** request. Once subscribed, this example API will return events each time the vehicle stop charging. Subscribe APIs are **returning multiple messages**.

- {{subscribe_tag}} method of an API will return the requested data **each time** the value change in the system. 
- {{unsubscribe_tag}} method of an API will **stops messages** from triggering callbacks.

> **Re-Subscribe:** If you try to subscribe twice to the same API, you'll receive error `2005: Duplicate command`.



{% capture eventRemoteRequestKotlin %}
```kotlin
/* Method Subscribe */
pims.subscribe(
  /* -- API Name -- */
  "pims.vehicle.event",
  /* -- API Parameters -- */
  mapOf( 
    Pair("actionType", "remote"),
    Pair("type", mapOf("remoteChargeFinished", "remoteChargeInterrupted"))
  ) 
) { /* -- API Callback -- */
    message -> when (message["status"] as? String) {
      "SUCCEEDED" -> { }                          // handle succeeded status
      "FAILED" ->    { }                          // handle failed status
      "RESULT" ->    {
        if(message["error"] != null) { }            // handle error event code
        else { }                                 // handle result event code
      }
  } }

/* Method Unsubscribe */
pims.unsubscribe( "pims.vehicle.event" /* no params */ ) { /* API Callback */ }
```
{% endcapture %}

{% capture eventRemoteRequestSwift %}
```swift
/* Method Subscribe */
pims.subscribe(
  /* -- API Name -- */
  api: "pims.vehicle.event",
  /* -- API Parameter -- */
  parameters: [  
    "actionType": "remote",
    "type": ["remoteChargeFinished", "remoteChargeInterrupted"]
  ]
  ) { /* -- API Callback -- */
      (message) in 
        if message["status"] == "SUCCEEDED"    { }    // handle succeeded status
        else if message["status"] == "FAILED" { }    // handle failed status
        else if status == "RESULT" {
          if !message["error"].isEmpty { }            // handle error event code
          else { }                                    // handle result event code
        }
    }

/* Method Unsubscribe */
pims.unsubscribe( api: "pims.vehicle.event" /* no params */ ) { /* API Callback */ }
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  type="subscribe"
  name="pims.vehicle.event"
  subname="remote"
  description="Request"
  request_params_swift=eventRemoteRequestSwift
  request_params_kotlin=eventRemoteRequestKotlin
  component="LongRangeRemoteStatus"
%}


{{requestParamatersExample}}

#### Subscribe Callback


After requesting an API of the **subscribe** type, you should except 3 kind of messages. That's why your **callback** should be able to handle all these possibilities:
- {{succeeded_tag}} This message is received **only once**, it acknowledge that the subscription is **successful**.
- {{failed_tag}} This message is received **only once**, it acknowledge that the subscription **failed**.
- {{result_tag}} This message is received **each time the event is triggered** for this subscribe. It includes **response data** of the subscribed API.

when the subscribe is in error, the subscription has not been taken in account, no event will follow. In this case the message include the error field with error info.

{% capture responseRemoteEvent %}
```js
// SUCCEEDED: representation of the natif dictionary object message as JSON
// This message aknowledge that the subscribe has been taken in account
// 'result' messages will follow
{
  "transactionId": "953cfefb-bc72",
  "status": "SUCCEEDED"
}
```
{% endcapture %}

{% capture failedRemoteEvent %}
```js
// FAILED: representation of the natif dictionary object message as JSON
// This message is returned when an error occurred, the subscription failed,
// no other messages will follow.
{
  "transactionId": "953cfefb-bc72",
  "status": "FAILED",
  "error": {
    "code": "2000",
    "label": "Unknown error"
  }
}
```
{% endcapture %}

{% capture eventRemoteEvent %}
```js
// RESULT: representation of the natif dictionary object message as JSON
// these messages are returned each time an normal event or error is triggered

//       -- Event message of a normal result -- 
// subscription doesn't stop and other messages will follow
{
  "transactionId": "953cfefb-bc72",
  "status": "RESULT",
  "result": {
    "event": "migrationBegin"
  }
}
//          -- Event message of an error -- 
// subscription doesn't stop and other messages will follow
{
  "transactionId": "953cfefb-bc72",
  "status": "RESULT",
  "error": {
    "code": "2000",
    "label": "Unknown error"
  }
}
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name=page.section
  custom_code_sample=true
  type="subscribe"
  name="pims.vehicle.event"
  subname="remote"
  description="Succeeded - Failed & Result"
  response=responseRemoteEvent
  notification=eventRemoteEvent
  failed=failedRemoteEvent
  component="LongRangeRemoteStatus"
%}


The previous example is the JSON representation of the returned message object. This table details the message structure:

Name| Value |Description
-|-|-
***transactionId*** | *String* | Id of the request, this is the same id for the **Succeeded**, **Result** and **Failed**, it's useful to make sure of the origin of the message.
***status*** |*Enum of Strings* | Status of the message: <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;**status:** {{succeeded_tag}} the subscription has been taken in account. Event messages with status result will be triggered.<br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;**status:** {{result_tag}} when a subscribe **event** is triggered (result or error). In this case the message include the *result* field with the outputted data or an *error* field error info. <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;**status:** {{failed_tag}} the subscribe is in error, the subscription **has not been taken in account**, no event will follow. 
***result*** | *dictionary Object* | Contains the outputted data, see [reference page]({{site.baseurl}}/mobile-sdk/references/) for the output of each API. <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{succeeded_tag}} In **Succeeded** messages, this field is never returned <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{result_tag}} In **Result** messages, this field is returned only when the field `error` is not returned.<br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{failed_tag}} In **Failed** messages, this field is never returned.
***error*** | *dictionary Object* | Code and Label of the error, check-out [reference page]({{site.baseurl}}/mobile-sdk/references/) or [error page]({{site.baseurl}}/mobile-sdk/references/errors/#article) for the list of errors.  <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{succeeded_tag}} In **Succeeded** messages, this field is never returned <br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{result_tag}} In **Result** messages, this field is returned only when the field `result` is not returned.<br>&nbsp;&nbsp;&nbsp;&bull;&nbsp;{{failed_tag}} In **Failed** messages, this field always returned. 
