---
layout: doc-article
permalink: /mobile-sdk/sdk-features/ami&rocks-e/
section: mobile-sdk
categorie: SDK Features
title: AMI & Rocks-e
description: "Retrieve AMI & Rocks-e events with connected vehicle mobile SDK."
require: api-reference
mobile-sdk-component: O2X
---

{% include_relative content/mobile-sdk-feature-security-connectivity.html %}

[**Citroën AMI**](https://www.citroen.fr/ami) and [**Opel Rocks-e**](https://www.opel.de/fahrzeuge/rocks-e/uebersicht.html) are small electric vehicles. They are not compatible with any other **features of this SDK** *(Trips, Navigation, Vehicle Status, Remote Command)*.

However, *Stellantis Connected Vehicles mobile SDK for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall)* allows to retrieve information about these vehicles using **Bluetooth**.

![citroen-ami]({{site.baseurl}}/assets/images/rocks-e_ami.png)

The [vehicle status]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#article) feature, like most of the features of this SDK, is not available for Rocks-e and AMI. However, it is possible to retrieve informations about theses vehicles using `pims.vehicle.informations` with O2X service.

They are 2 methods to retrieve *AMI & Rocks-e* vehicle information:
- 🔔 **Event**: vehicle info [subscribe events](#subscribe-to-vehicle-information) are received each time the vehicle status change. 
- ⬇️ **On request**: when calling the [get API](#get-vehicle-information).

## Subscribe to Vehicle Information

This API will try connecting to the vehicle if Bluetooth and GPS are enabled. Refer to [Connection and Charge Events](#connection--charge-events) if you want to subscribe to events about connection info.

They are 2 types of reception stream depending on the parameter **reception**:
- 🕑 **Regular Interval**: when `reception == information`, data are refreshed on a very short period of time.
- 🚗 **Status**: when `reception == status`, subscribe events are received when the vehicle status change. Vehicle status are: *Parked, Drive & Charging*.

Subscribing to *pims.vehicle.informations* will scan for vehicle nearby and try to connect. Scanning will be impacted by the parameter **firstTime** of the query:
- Use `firstTime == true`, if you want to subscribe to a new vehicle. You must **include** the parameter VIN in the query. Timeout will happen after 60 sec of unsuccessfull scanning, but default values can be changed in [pims.vehicle.timeout]({{site.baseurl}}/mobile-sdk/references/pims-vehicle-timeout.html#set).
- Otherwise, use `firstTime == false` if you want to subscribe to the previous vehicle. You should **not include** the parameter VIN in the query. There is no timeout in this case.


**Only one VIN** can be subscribed at a time. You can check the current subscribed VIN using [pims.vehicle.vin-O2X]({{site.baseurl}}/mobile-sdk/references/pims-vehicle-vin-o2x.html#article).

> **BLE:** *AMI and Rocks-e* use **Bluetooth Low Energy** in order to transfer vehicle information, the user does not have to proceed to any Bluethooth pairing in the device settings.

{%- capture O2XSubscribeVhclInfoRequestKotlin -%}
  Pair("actionType", "O2X"),
  /* If firstTime is set to true, you should provide the vehicle VIN,
     otherwise it will use the previously provided VIN */
  Pair("fistTime", "true"),
  Pair("VIN", "VR1AB12C3D4567890"),
  /* reception status: notified when the state of the vehicle changes
     reception information: notified on a regular time basis */
  Pair("reception", "status")
{%- endcapture -%}

{%- capture O2XSubscribeVhclInfoRequestSwift -%}
  "actionType": "O2X", 
  "fistTime": "true", 
  /* If firstTime is set to true, you should provide the vehicle VIN, 
     otherwise it will use the previously provided VIN */
  "VIN": "VR1AB12C3D4567890", 
  /* reception status: notified when the state of the vehicle changes
     reception information: notified on a regular time basis */
  "reception": "status"
{%- endcapture -%}

{%- capture O2XVhclInfoResponse -%}
{
    "vin", "VR1AB12C3D4567890",
    "currentAlert": {
      "parkingBrake": true, "clusterIssue": true, "stop": true,
      "batteryCharge": true, "brakeSystemProblem": true,
      "service": true, "batteryTemperature": true, "turtleMode": true
    },
    "previousAlert": {
      "parkingBrake": true, "clusterIssue": true, "stop": true,
      "batteryCharge": true, "brakeSystemProblem": true,
      "service": true, "batteryTemperature": true, "turtleMode": true
    },
    "data": {
      "batterySoc": { "unit": "unit_name", "value": 42 },
      "systemState": "charging",
      "batteryState": "bootloader",
      "remainingAutonomy": { "unit": "unit_name", "value": 42 },
      "rnd": "drive",
      "chargeDelay": { "unit": "unit_name", "value": 42 },
      "parkBrakeStatus": "activated",
      "totalOdometer": { "unit": "unit_name", "value": 42 }
    },
    "receivedAt": "YYYY-MM-DDTHH:MM:SSZ",
    "status": "charging"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.informations"
  subname="O2X"
  request_params_swift=O2XSubscribeVhclInfoRequestSwift
  request_params_kotlin=O2XSubscribeVhclInfoRequestKotlin
  response="null"
  notification=O2XVhclInfoResponse
%}

## Get Vehicle Information

To retrieve AMI & Rocks-e data, you can also use the **Get** API. It returns the last vehicle informations received. You must have first subscribed to [pims.vehicle.informations](#get-vehicle-information).

{%- capture O2XGetVhclInfoRequestKotlin -%}
  Pair("actionType", "O2X")
{%- endcapture -%}

{%- capture O2XGetVhclInfoRequestSwift -%}
  "actionType": "O2X"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.informations"
  subname="O2X"
  request_params_swift=O2XGetVhclInfoRequestSwift
  request_params_kotlin=O2XGetVhclInfoRequestKotlin
  response=O2XVhclInfoResponse
%}

## Connection & Charge Events

In case you need to retrieve 02X events, you can use *pims.vehicle.event*. You must have subscribed first to [pims.vehicle.informations](#subscribe-to-vehicle-information).

Event are triggered when when the vehicle is in the following **states**:
- `disconnected`: happens when the Bluetooth **connection** between the device and the vehicle is **lost**.
- `cantCharge`: when the vehicle is supposed to **charge but the parking brake is off**. In this case you can request the user to set the parking brake to start the charge.


{%- capture O2XEventRequestKotlin -%}
  Pair("actionType", "O2X")
{%- endcapture -%}

{%- capture O2XEventRequestSwift -%}
  "actionType": "O2X"
{%- endcapture -%}

{%- capture O2XEventResponse -%}
{
    "event": "disconnected" /* or */ "cantCharge"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.event"
  subname="O2X"
  request_params_swift=O2XEventRequestSwift
  request_params_kotlin=O2XEventRequestKotlin
  response="null"
  notification=O2XEventResponse
%}