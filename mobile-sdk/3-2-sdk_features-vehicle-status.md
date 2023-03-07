---
layout: doc-article
permalink: /mobile-sdk/sdk-features/vehicle-status/
section: mobile-sdk
categorie: SDK Features
title: Vehicle Status
description: "Retrieve vehicle information with connected vehicle mobile SDK."
mobile-sdk-component: LongRangeRemoteStatus
require: api-reference
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

{%- capture vehicleInfo -%}
  {
      "resources": {
        "status": {
          "lastUpdate": "2022-02-14T13':'41':58Z",
          "fuelInformation": {
            "autonomy":145.0,
            "chargingInformation": {
              "chargingMode": null, "chargingRate":0.0, "isPlugged":false,
              "chargingState": null, "remainingTime": "PT0S" },
            "chargingLevel":42.0, "lastUpdate": "2022-02-14T13':'41':57Z",
            "consumption":0.0, "type": "fuel" },
          "doorStateInformation": {
            "isDriverDoorOpened": false, "isPassengerDoorOpened": false,
            "isRearLeftDoorOpened": false, "isRearRightDoorOpened": false,
            "isRearWindowOpened": false, "isRoofWindowOpened": false, "isTrunkOpened": false,
            "state": [ "Locked" ] },
          "precondInformation": {
            "lastUpdate": "2022-02-14T13':'41':57Z", "status": "disabled",
            "precondScheduling": [
              { "hour":1, "isEnabled":false, "occurence": ["Mon"],
                "slot":1, "recurrence": "Daily", "minute":48 },
              { "hour": 12, "isEnabled": false, "minute": 12,
                "occurence": ["Wed"], "recurrence": "Daily", "slot": 2 } ] },
          "electricInformation": { "autonomy":0.0,
            "chargingInformation": {
              "chargingMode": "no", "chargingRate":0.0, "isPlugged":false,
              "nextDeferredChargingDate": "2022-02-14T18':'00':10.715Z",
              "chargingState": "disconnected", "remainingTime": "PT0S" },
            "chargingLevel":1.0, "lastUpdate": "2022-02-14T13':'41':57Z", "type": "electric" },
          "vehicleType": "hybrid", "vin": "VR3ATTENTKY102274" } },
      "attributes": {
        "engine": "PHEV", "vin": "VR3ATTENTKY102274", "brand": "peugeot"
      }
    }
{%- endcapture -%}


Vehicle Information is a **set of data** including VIN, vehicle brand, precond info, fuel info, electric info and door state. These data are available in Mobile SDK using **internet connection** 📡, no need to be next to the vehicle!

Depending on the vehicle capabilities, some fields of the *vehicle informations* can be `null`.

When the vehicle is awake, it will refresh these data on a **regular basis on Stellantis servers**. This tutorial explains how to access theses informations with **pims.vehicle.informations**.

They are different way to query vehicle information data:
- **⬇️ Get**: a command requesting data from Stellantis server, if there is a connection issue with the server, it will return cache data.
- **🔄 Refresh**: this command will request the latest information available in Stellantis server. It will send a wake-up command only if the charging state is *in progress* or if the vehicle is plugged and charging state is *disconnected*.
{% comment -%} - **🔄‼️ RefreshWithWakeUp**: a wake-up command will be sent to the vehicle in order to retrieve the latest data available. {%- endcomment %}

## ⬇️ Get

Using the get parameter you will retrieve the latest information **from the server**, but if the server is not available then you will receive information from the mobile phone **cache**:

{%- capture getVehicleInfoRequestKotlin -%}
  Pair("actionType", "remote"),
  Pair("action", "get")
{%- endcapture -%}

{%- capture getVehicleInfoRequestSwift -%}
  "actionType": "remote",
  "action": "get"
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.informations"
  subname="remote"
  description="Request Get"
  request_params_swift=getVehicleInfoRequestSwift
  request_params_kotlin=getVehicleInfoRequestKotlin
  response=vehicleInfo
  component="LongRangeRemoteFCAStatus"
%}


## 🔄 Refresh

Refresh parameter will also retrieve the latest information **from the server** but, if:
  - `ressources.status.electricInformation.ChargingInfo.chargingState == 'DISCONNECTED or INPROGRESS'`
  - **And** `ressources.status.electricInformation.ChargingInfo.isPlugged == true`, then the vehicle will also receive a **wake-up command** that will refresh the vehicle information. 


> **Error:** If the connection with the server is not possible the response will be `error 2201: network problem`. You can use [Get](#️-get) to retrieve cached data.

{%- capture refreshVehicleInfoRequestKotlin -%}
  Pair("actionType", "remote"),
  Pair("action", "refresh")
{%- endcapture -%}

{%- capture refreshVehicleInfoRequestSwift -%}
  "actionType": "remote",
  "action": "refresh"
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.informations"
  subname="remote"
  description="Request Refresh"
  request_params_swift=refreshVehicleInfoRequestSwift
  request_params_kotlin=refreshVehicleInfoRequestKotlin
  response=vehicleInfo
  component="LongRangeRemoteFCAStatus"
%}

{%- if site.baseurl == "/p4d00/doc/" -%}

## 🔄‼️ RefreshWithWakeUp

*This remote command is only available for Low Emission Vehicles (LEV) and Electric Vehicles (EV).*

RefreshWithWakeUp will **always send a wake-up command** to the vehicle that will refresh the vehicle information.
In case the server is not available, this command will not retrieve the cache (see [Get](#️-get)).

If the connection with the server is not possible the response will be the **error** `2201: network problem`. You can use [Get](#️-get) to retrieve cached data.

> **Warning:** This method is ressource-intensive, you must request the validation from Stellantis project manager before using it.

{%- capture refreshWithWakeUpVehicleInfoRequestKotlin -%}
  Pair("actionType", "remote"),
  Pair("action", "refreshWithWakeUp")
{%- endcapture -%}

{%- capture refreshWithWakeUpVehicleInfoRequestSwift -%}
  "actionType": "remote",
  "action": "refreshWithWakeUp"
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.informations"
  subname="remote"
  description="Request RefreshWithWakeUp"
  request_params_swift=refreshWithWakeUpVehicleInfoRequestSwift
  request_params_kotlin=refreshWithWakeUpVehicleInfoRequestKotlin
  response=vehicleInfo
  component="LongRangeRemoteFCAStatus"
%} 
{%- endif -%}


## 🔌 Charge Events

When a vehicle is charging, it’s possible to subscribe to events triggered when the **charge is finished or interrupted**.

This event is triggered when the charge is finished or when the charge is interrupted.

{%- capture eventChargeRemoteRequestKotlin -%}
  Pair("actionType", "remote"),
  Pair("type", mapOf("remoteChargeFinished", "remoteChargeInterrupted"))
{%- endcapture -%}

{%- capture eventChargeRemoteRequestSwift -%}
  "actionType": "remote",
  "type": ["remoteChargeFinished", "remoteChargeInterrupted"]
{%- endcapture -%}

{%- capture eventChargeRemoteResponse -%}
{
    "notification": "remoteChargeFinished"
  }
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.event"
  subname="remote"
  request_params_swift=eventChargeRemoteRequestSwift
  request_params_kotlin=eventChargeRemoteRequestKotlin
  response="null"
  notification=eventChargeRemoteResponse
  component="LongRangeRemoteFCAStatus"
%}

