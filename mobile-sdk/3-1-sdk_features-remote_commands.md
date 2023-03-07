---
layout: doc-article
permalink: /mobile-sdk/sdk-features/remote-commands/
section: mobile-sdk
categorie: SDK Features
title: Remote Commands
redirect_from:
    - /mobile-sdk/sdk-features/
description: "Send remote commands with connected vehicle mobile SDK. Doors, preconditionning, charge, lights blink, horn."
mobile-sdk-component: LongRangeRemoteRemote
require: api-reference
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

With *Stellantis Connected Vehicles SDK you can remote control a vehicle using **internet connection**, no need to be next to the vehicle.

They are 3 commands available **only** for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*:
- 🔌 Start/stop **charge**.
- 🔌⏰ Scheduled **charge**.
- ❄️ Program **preconditioning**.

And 3 commands available for all eligible vehicles:
- 🔓 Lock/unlock **doors**.
- 🔉 Honk the **horn**.
- 💡 Set a **light blinking**.

## Subscribe to Signal Events

First, you should subscribe to `pims.vehicle.signal`. This API is helpful in order to track the **progress of remote command** send to the vehicle. Each time the vehicle status is updated, this API will return an event.

> **Info:** Subscribing to signal events will not send any remote command to the vehicle. But subscribing to these events allows being informed of the remote command status!


{%- capture signalNotif -%}
  {
      "code": 200,
      "vehicle": {
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
    }
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.signal"
  type="subscribe"
  description="Subscription"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response="null"
  notification=signalNotif
  component="LongRangeRemoteRemote"
%}

Then you need to set a vehicle before sending a remote command.

# Set a Vehicle

In order to send a remote command, you **must** set the VIN of the targeted vehicle.

{%- capture setVehicleKotlin -%}
  Pair("actionType", "remote"),
  Pair("vin", "VR1AB12C3D45678909")
{%- endcapture -%}

{%- capture setVehicleSwift -%}
  "actionType": "remote",
  "vin": "VR1AB12C3D45678909"
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.vin"
  type="set"
  subname="remote"
  request_params_swift=setVehicleKotlin
  request_params_kotlin=setVehicleSwift
  response='null'
  component="LongRangeRemoteRemote"
%}

## Send a Remote Command

Sending a remote command is done using `pims.vehicle.command`. Make sure you have [set a vehicle](#set-a-vehicle) before sending the command.

You can follow the remote command status by subscribing to [pims.vehicle.signal](#subscribe-to-signal-events).

## ❄️ Program preconditioning

This remote command is only available for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*.

{%- capture preconditioningCommandKotlin -%}
  Pair("action", "preconditioning"),
  Pair("startNow", false),
  Pair("programs", mapOf(
    mapOf(
      Pair("hour", 9),
      Pair("minute", 32),
      Pair("isEnabled", true),
      Pair("occurence", mapOf("mon", "tue")),
      Pair("slot", 1),
    )
    mapOf(
      Pair("hour", 10),
      Pair("minute", 52),
      Pair("isEnabled", false),
      Pair("occurence", mapOf("wen", "thu")),
      Pair("slot", 2),
    )
  )),
{%- endcapture -%}

{%- capture preconditioningCommandSwift -%}
  "action": "preconditioning",
  "startNow": false,
  "programs": [
    [
      "hour": 9,
      "minute": 32,
      "isEnabled": true,
      "occurence": ["mon", "tue"],
      "slot": 1
    ],
    [
      "hour": 10,
      "minute": 52,
      "isEnabled": false,
      "occurence": ["wen", "thu"],
      "slot": 2
    ]
  ]
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="preconditioning"
  type="set"
  request_params_swift=preconditioningCommandKotlin
  request_params_kotlin=preconditioningCommandSwift
  component="LongRangeRemoteRemote"
%}

## 🔌 Start charge

This remote command is only available for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*.

{%- capture startChargeCommandKotlin -%}
  Pair("action", "charge"),
  Pair("startNow", "true")
{%- endcapture -%}

{%- capture startChargeCommandSwift -%}
  "action": "charge"
  "startNow": "true"
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="charge"
  type="set"
  request_params_swift=startChargeCommandKotlin
  request_params_kotlin=startChargeCommandSwift
  component="LongRangeRemoteRemote"
%}

In order to retieve information about of a end of charge, you can use [pims.vehicle.event - remote]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#-remote-charge-events).

## ⏱🔌 Scheduled charge

This remote command is only available for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*.

> **Scheduled Charge & Immediate Charge:** immediate charging can interfere on scheduled charges.
- `2335` is returned when "Immediate charging request discarded, deferred hour has been change".
- `2336` is returned when "Deferred hour request discarded, immediate charging has been launch".

{%- capture scheduledChargeCommandKotlin -%}
  Pair("action", "chargeDeferredTime"),
  Pair("startNow", "false"),
  Pair("deferredTime", "PTxxHxxM"),
  Pair("checkStartCharge", true)
{%- endcapture -%}

{%- capture scheduledChargeCommandSwift -%}
  "action": "chargeDeferredTime",
  "startNow": "false",
  "deferredTime": "PTxxHxxM",
  "checkStartCharge": true
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="chargeDeferredTime"
  type="set"
  request_params_swift=scheduledChargeCommandKotlin
  request_params_kotlin=scheduledChargeCommandSwift
  component="LongRangeRemoteRemote"
%}

In order to retieve information about of a charge (start & end), you can use [pims.vehicle.event - remote]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#-remote-charge-events).


## 🔓 Lock/unlock doors

{%- capture doorsCommandKotlin -%}
  Pair("action", "doors"),
  Pair("doorState", "lock")
{%- endcapture -%}

{%- capture doorsCommandSwift -%}
  "action": "doors",
  "doorState": "lock"
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="doors"
  type="set"
  request_params_swift=doorsCommandKotlin
  request_params_kotlin=doorsCommandSwift
  component="LongRangeRemoteRemote"
%}

## 🔉 Honk the horn

{%- capture hornCommandKotlin -%}
  Pair("action", "horn")
{%- endcapture -%}

{%- capture hornCommandSwift -%}
  "action": "horn"
{%- endcapture -%}


{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="horn"
  type="set"
  request_params_swift=hornCommandKotlin
  request_params_kotlin=hornCommandSwift
  component="LongRangeRemoteRemote"
%}

## 💡 Set a light blinking

{%- capture lightCommandKotlin -%}
  Pair("action", "warning")
{%- endcapture -%}

{%- capture lightCommandSwift -%}
  "action": "warning"
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.vehicle.command"
  subname="warning"
  type="set"
  request_params_swift=lightCommandKotlin
  request_params_kotlin=lightCommandSwift
  component="LongRangeRemoteRemote"
%}