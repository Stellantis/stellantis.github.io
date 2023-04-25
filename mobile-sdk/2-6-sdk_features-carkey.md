---
layout: doc-article
permalink: /mobile-sdk/security/carkey/
section: mobile-sdk
categorie: Security
title: CarKey Check
description: "Check if the user has the vehicle keys."
require: api-reference
mobile-sdk-component: Carkey
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

*CarKey* is a security feature that perform a check to make sure the user is in possession of the vehicle keys.

An activated *CarKey* is **required** in order to use [remote commands]({{site.baseurl}}/mobile-sdk/sdk-features/remote-commands/#article) & [vehicle status]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#article). Check out [Service Activation Steps]({{site.baseurl}}/mobile-sdk/security/service-activation-steps/#article) to get assistance accessing remote command.

This has to be performed **only once**, in order to unlock the service, but it's not required each time the user needs to perform a remote action.

# Requirements

To activate *CarKey* on the user account, the following requirements need to be fulfills:
- 📱 The mobile phone is **connected with Bluetooth** to the vehicle.
- 🔑 The vehicle's **keys are in possession** of the user.
- 🚗 The user is **inside the vehicle** (with key and phone).

## Check Carkey status

Before activating a **CarKey**, you can check if it's already activated. If it’s already activated, you don’t need to launch the process again. 

In order to check a CarKey with *get-pims.vehicle.carkey*, you must select a vehicle using this API:

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

> **Note:** This API has been released in [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article). Before v2.3, *get-pims.vehicle.carkey* would include a VIN parameter. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

Then, we can check **CarKey** status:

{%- capture checkAuthResponse -%}
{ 
    "isCarKeyVerified": "true",
    "cvsStatus": "active",
    "maxReactivationDate": "2021-07-29T22:25:09.898Z"
  } 
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.carkey"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=checkAuthResponse
  component="Carkey"
%}

## Activate CarKey

When [*CarKey* conditions](#requirements) are met, we can perform a ***CarKey* activation** using the following API:

> **Info**: *CarKey* needs to be activated **only once**. The activation of *CarKey* is stored in the user account and the related services are unlocked.

{%- capture checkAuthResponse -%}
{ 
    "hasCarKey": "true",
    "vin": "VR1AB12C3D45678909",
    "securityCode": "c2hhemFtCg==",
    "securityExpiration": "2021-07-29T22:25:09.898Z"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.carkey "
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=checkAuthResponse
  component="Carkey"
%}

