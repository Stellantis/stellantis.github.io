---
layout: doc-article
permalink: /mobile-sdk/sdk-features/send-navigation/
section: mobile-sdk
categorie: SDK Features
title: Send Navigation
description: "Retrieve vehicle destinations with connected vehicle mobile SDK."
mobile-sdk-component: SendToNav
require: api-reference
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

*Stellantis Connected Vehicles mobile SDK* has a dedicated feature to **send a navigation to the vehicle** from the mobile phone.

![navigation-system]({{site.baseurl}}/assets/images/navigation-system-nac.jpg)

With this feature, a user of your app is able to send a navigation to the vehicle using **Bluetooth** connection. When the command is received, the vehicle **infotainment system starts** with this navigation.

In order send a navigation to the vehicle, you should first implement the **prerequisites**:
- 🔌 [Connect](#connect-device-android) the device (only for Android devices).
- 🏁 [Start](#start-service) the Bluetooth service.
- 🔔 [Subscribe](#subscribe-to-events) to Navigation events.
- 🚗 [Select](#select-vehicles) vehicle.

You will then be able to **send a navigation**:
- 📍 Using the [coordinates](#send-with-coordinates) of the destination.
- 🔗 With a [third party link](#send-with-third-party-link) from *Apple Maps, Google Maps, Here WeGo (former Nokia maps), Waze & Whats3Words*.

## Connect Device (Android)

On Android platform, you need first to **listen to Bluetooth** events in order to connect devices, this feature allows filtering authorized/unauthorized devices. You should create a **broadcast receiver** for the following values:
- ***BluetoothDevice.ACTION_ACL_CONNECTED***: if the device name is valid, you should **connect** the device using *pims.vehicle.device* with `isConnected == true`.
- ***BluetoothDevice.ACTION_ACL_CONNECTED***: if the device name is valid, you should **disconnect** the device using *pims.vehicle.device* with `isConnected == false`, then stop the service with *pims.vehicle.service*.

On iOS, this feature does not exist and therefore is not required. You can directly [start the service](#start-service).

{%- capture connectDeviceAndroidRequestKotlin -%}
  Pair("isConnected", "true")
{%- endcapture -%}

{%- capture connectDeviceAndroidRequestSwift -%}
  // This API doesn't exist for iOS
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.device"
  request_params_kotlin=connectDeviceAndroidRequestKotlin
  request_params_swift=connectDeviceAndroidRequestSwift
  response=null
  component="SendToNav"
%}

## Start Service

On Android & iOS, you must **start Bluetooth** service. Without the service activated, it's not possible to send a navigation to the vehicle:

{%- capture startDestinationServiceRequestKotlin -%}
  Pair("action", "start"),
  Pair("service", "bluetooth"),
  Pair("vins", mapOf(
    mapOf(
      Pair("vin", "VR1AB12C3D4567890"),
      Pair("gdpr", true))
    ),
    mapOf(
      Pair("vin", "VR1AB12C3D4567891"),
      Pair("gdpr", false)
    )
  )
{%- endcapture -%}

{%- capture startDestinationServiceRequestSwift -%}
  "action": "start",
  "service": "bluetooth",
  "vins": [
    [
        "vin": "VR1AB12C3D4567890",
        "gdpr": true
    ],
    [
        "vin": "VR1AB12C3D4567891",
        "gdpr": false
    ]
  ]
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.service"
  request_params_swift=startDestinationServiceRequestSwift
  request_params_kotlin=startDestinationServiceRequestKotlin
  response=null
  component="BTConnectivity"
%}

> **Note:** Starting from [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article), this API has been transferred from *Send Navigation* to *Bluetooth Connectivity* component. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

When you don't need the service anymore, you can disconnect the service using the same API with **action** param set to `stop`.

## Subscribe to Events

Then, you should subscribe to **sendToNav events**. Doing so, you will receive information [cached navigations](#vehicle-not-reachable).

Events are received in the following conditions:
- ✅ When a navigation of the cache is successfully **send** to the vehicle.
- ❌ When a navigation is **deleted** from cache.

{%- capture subEventsRequestKotlin -%}
  Pair("actionType", "sendToNav")
{%- endcapture -%}

{%- capture subEventsRequestSwift -%}
  "actionType": "sendToNav"
{%- endcapture -%}

{%- capture eventDestinationResponse -%}
{
    "vin": "VR1AB12C3D45678909",
    // If a navigation is successfully sent:
      "location": {
        "latitude": 48.77232,
        "longitude":  2.2151043,
        "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
      }
    "userid": "user@provider.tld"
    // If a navigation is deleted from cache:
    "message": "Some locations have been removed."
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.event"
  subname="sendToNav"
  request_params_swift=subEventsRequestKotlin
  request_params_kotlin=subEventsRequestSwift
  response="null"
  notification=eventDestinationResponse
  component="SendToNav"
%}

## Select Vehicle

Before sending navigation with *set-pims.vehicle.destination(s)*, you must select a vehicle using this API:

{%- capture setVehicleVinKotlin -%}
  Pair("vin", "VR1AB12C3D45678909")
{%- endcapture -%}

{%- capture setVehicleVinSwift -%}
  "vin": "VR1AB12C3D45678909"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.vin"
  request_params_swift=setVehicleVinSwift
  request_params_kotlin=setVehicleVinKotlin
  response="null"
  component="VehicleInformation"
%}

> **Note:** This API has been released in [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article). Before v2.3, *set-pims.vehicle.destination* would include a VIN parameter. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

## Send with Coordinates

To send a navigation to the vehicle using coordinates, you have to provide **longitude and latitude** in the request.

{% capture responseSendNav %}
If everything went fine, you would receive `"status": "sent"` in the **response**, otherwise check [Vehicle Not Reachable](#vehicle-not-reachable).

> **Info:** sending a destination doesn't work if the privacy of the vehicle is not open to *geolocation* (set to *none*), see [pims.vehicle.privacy]({{site.baseurl}}/mobile-sdk/references/v{%- include api-reference-toolkit-v2.html type="lastSpecVersionDashed" -%}/btconnectivity-get-pims-vehicle-privacy/#article). Starting from [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article), this API has been transferred from *SendToNav* to *BTConnectivity* component. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

{% endcapture %}

{{responseSendNav}}

{%- capture destinationCoordinatesRequestKotlin -%}
  Pair("action", "coordinate"),
  Pair("preserve", true),
  Pair("location", mapOf( 
    Pair("latitude", "48.77232"),
    Pair("longitude", "2.2151043")
  )
{%- endcapture -%}

{%- capture destinationCoordinatesRequestSwift -%}
  "action": "coordinate",
  "preserve": true,
  "location": [
    "latitude", "48.77232",
    "longitude", "2.2151043"
  ]
  
{%- endcapture -%}

{%- capture destinationCoordinatesResponse -%}
{
    "status": "Sent"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.destination"
  subname="coordinate"
  request_params_swift=destinationCoordinatesRequestSwift
  request_params_kotlin=destinationCoordinatesRequestKotlin
  response=destinationCoordinatesResponse 
  component="SendToNav"
%}


## Send with Third Party Link

You can also send a navigation to the vehicle using extension method, this feature allows sending a navigation using a third party **application link**.

This feature is known as *Share Intent for Android* or *Share Extension for iOS*. Compatible **third parties** are Apple Maps, Google Maps, Here WeGo (former Nokia maps), Waze & Whats3Words.

{{responseSendNav}}

{%- capture destinationExtensionRequestKotlin -%}
  Pair("action", "extension"),
  Pair("preserve", true),
  Pair("extensionInformation", "https://goo.gl/maps/8VPNW6yTfHgPPqb16")
{%- endcapture -%}

{%- capture destinationExtensionRequestSwift -%}
  "action": "extension",
  "preserve": true,
  "extensionInformation": "https://goo.gl/maps/8VPNW6yTfHgPPqb16"
  
{%- endcapture -%}

{%- capture destinationExtensionResponse -%}
{
    "status": "sent"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.destination"
  subname="extension"
  request_params_swift=destinationExtensionRequestSwift
  request_params_kotlin=destinationExtensionRequestKotlin
  response=destinationExtensionResponse 
  component="SendToNav"
%}

## Sending Navigation Failed

When a navigation is **not successfully started** in the vehicle infotainment system, the error message looks like this:

{%- capture navigationStoredResponse -%}
```js
// representation of the `succeeded` dictionary object message as JSON
{
  "transactionId": "953cfefb-bc72",
  "status": "SUCCEEDED",
  "result": {
    "status": "stored"
    "reason": "GEOLOC_PRIVATE" /* or */ "FULL_PRIVATE"
  }
}
```
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.destination"
  response=navigationStoredResponse
  request="none"
  description="Navigation not sent"
  no_link=true
  custom_code_sample=true
%}

The `reason` field will return the reason why the destination **has not been sent** to the vehicle.

Depending on the query params **preserve**, the navigation could be sent again, see [vehicle not reachable](#vehicle-not-reachable)

## Vehicle Not Reachable

If a navigation can [not be sent](#sending-navigation-failed) in the vehicle infotainment system, the SDK will react according to the value of parameter **preserve** of the query:
- 💾 **Cached**: In case `preserve == true`, the navigation is stored during 24 hours in the SDK cache. Each time the device connects to the vehicle with Bluetooth, the SDK will attempt to **re-send** the navigation. After 24 hours, the navigation is **removed from cache**. You will be informed through [pims.vehicle.event](#subscribe-to-events) when the navigation is successfully sent or when it's deleted from cache.
- 🗑 **Deleted**: Otherwise, in case `preserve == false`, the navigation is deleted right away and never stored in cache.

> **Only one destinsation** is stored for one VIN. If a destination is already stored and a new destination can not be send, the second destination will replace the previous navigation.

### Retrieve Stored Destinations

When you send a destination, but the vehicle is not reachable, the navigation is stored in cache. It's possible to use the following API to retrieve a **list of stored destinations**. 

When a navigation is cached, it will be re-send again each time the device connects to the vehicle.

{%- capture storedDestinationsResponse -%}
{
      "destination": [
        // First Destination
        {
          "vin": "VR1AB12C3D45678909",
          "userid": "user@provider.tld"
          "location": {
            "latitude": "48.77252",
            "longitude": "2.2151043",
            "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
          }
        },
        // Second Destination
        {
          "vin": "VR2AB12C3D45678909",
          "userid": "otheruser@provider.tld"
          "location": {
            "latitude": "37.32772",
            "longitude": "12.0432151",
            "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
          }
        },
      ]
    }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.destinations"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=storedDestinationsResponse 
  component="SendToNav"
%}

>**Info:** Destinations are only stored during 24 hours, then they are deleted.

### Receive Navigation deleted from cache

After 24 hours a navigation in cache is deleted. If you had subscibed to [pims.vehicle.event - sendToNav] you'll receive this kind of response:

{%- capture sendToNavDeletedFromCacheNavigationRequestKotlin -%}
  Pair("action", "sendToNav")
{%- endcapture -%}

{%- capture sendToNavDeletedFromCacheNavigationRequestSwift -%}
  "action": "sendToNav"
{%- endcapture -%}

{%- capture sendToNavDeletedFromCacheNavigationResponse -%}
{
    "vin": "VR1AB12C3D45678909",
    // If a navigation is sucessfully sent
    "location": {
      "latitude": 48.77232,
      "longitude":  2.2151043,
      "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
    }
    "userid": "user@provider.tld"
    // If a navigation is deleted from cache
    "message": "Deletion message."
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.event"
  subname="sendToNav"
  request_params_swift=sendToNavDeletedFromCacheNavigationRequestSwift
  request_params_kotlin=sendToNavDeletedFromCacheNavigationRequestKotlin
  response=sendToNavDeletedFromCacheNavigationResponse 
  component="SendToNav"
%}


## Extension to Coordinates

If you want to convert a [third party link](#send-with-third-party-link) to coordinates, you can use the following API:

{%- capture vehicleCoordinateRequestKotlin -%}
  Pair("extensionInformation", "https://goo.gl/maps/8VPNW6yTfHgPPqb16 ")
{%- endcapture -%}

{%- capture vehicleCoordinateRequestSwift -%}
  "extensionInformation": "https://goo.gl/maps/8VPNW6yTfHgPPqb16 "
{%- endcapture -%}

{%- capture vehicleCoordinateResponse -%}
{
    "location": {
        "latitude": 48.77232,
        "longitude":  2.2151043,
        // depending on the provided information
        // the response could also contain address
        "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
    }
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.coordinate"
  request_params_swift=vehicleCoordinateRequestSwift
  request_params_kotlin=vehicleCoordinateRequestKotlin
  response=vehicleCoordinateResponse 
  component="SendToNav"
%}