---
layout: doc-article
permalink: /mobile-sdk/security/service-activation-steps/
section: mobile-sdk
categorie: Security
title: Service Activation Steps
description: "Retrieve Service Activation Steps events with connected vehicle mobile SDK."
require: api-reference
mobile-sdk-component: UserVehicleSteps
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

Some API of this SDK require more than [Authentication]({{site.baseurl}}/mobile-sdk/security/authentication/#article). The *Step* feature, provides **guidance for additional security**. It will return the list of **Steps** required to use a service.

First, you should request [the list of Steps](#first-list-request) using a *carAssociationID*. Then, using the *stepsID*, you can [update the list](#update-the-list) or retrieve only the [next step](#retrieve-next-step) to do.

## Available Services

This API cover the services required for remote component. They are two services required for remotes:
- **[Vehicle Status]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#article)**: retrieve vehicle data like 🚗 vehicle VIN & brand, precond info, ⛽️ fuel info, 🔋 electric info and 🚪 door state. 
- **[Remote Commands]({{site.baseurl}}/mobile-sdk/sdk-features/remote-commands/#article)**: allows using 🔓 lock/unlock, 🔉 horn & 💡 lights, 🔌 charge & ❄️ preconditioning.


## Steps Name

The following steps are the returned:

- 📱 **trusterPhoneNumber**: The registration of a trusted phone is a preliminary step to *device activation*. See [this page]({{site.baseurl}}/mobile-sdk/security/device-enrollment/#4%EF%B8%8F⃣-register-trusted-phone-number) for detailed information.
- 📱✅ **deviceActivation**: Activation of a device is a required security step, have a look at the [dedicated tutorial]({{site.baseurl}}/mobile-sdk/security/device-enrollment/#article).
- 🔑 **mediumCarKey**: This step allows making sure the user has the vehicle keys in their possession, see [CarKey check]({{site.baseurl}}/mobile-sdk/security/carkey/#article).


## Steps Status

All steps have a status field that represent if the state is `todo` or `alreadyDone`.

When the status of a step is `alreadyDone`, there is no need to perform this security step again. When the status is `todo`, this security step is required for the service.

APIs returning a list of steps: *pims.subscription.steps-carAssociationID* & *pims.subscription.steps-stepsID*, have a parameter `stepStatus`, it will filter the step(s) based on their status:
- **todo**: will only return steps required to unlock the service.
- **alreadyDone**: will only return steps already checked.
- **all**: will only return all steps.

## Steps Order

In the list of *Steps* returned in *pims.subscription.steps-carAssociationID* & *pims.subscription.steps-stepsID*, the order of the *Steps* matter!

You must follow the **steps in the right** to resolve the security checks successfully.

## First List Request

The first list of *Steps* must be requested using **carAssociationID**, then you can use **StepsID** for an [updated list](#update-the-list) of steps or only for the [next step](#retrieve-next-step).



> **carAssociationID**: is not provided in this SDK. This code is available when subscribing to a [connected service]({{site.baseurl}}/connected-vehicles/access-requirements/#connected-vehicles-services). A *carAssociationID* represents:
- 🦸‍♂️ An **user**.
- 💡 Requesting a **service**.
- 🚗 For a **vehicle**.


This API needs a carAssociationID, it will return the list of steps required for the service with their current status:

{%- capture getStepsListRequestCarAssociationIDKotlin -%}
  Pair("carAssociationID", "987654"),
  Pair("resetSteps", false),
  Pair("stepsStatus", "all")
{%- endcapture -%}

{%- capture getStepsListRequestCarAssociationIDSwift -%}
  "carAssociationID": "987654",
  "resetSteps": false,
  "stepsStatus": "all"
{%- endcapture -%}

{%- capture getStepsListResponse -%}
{ 
    "stepsID": 132324,
    "trusterPhoneNumber": {
        "name": "trusterPhoneNumber",
        "status": "alreadyDone",
        "order": 1
    },
    "deviceActivation": {
        "name": "deviceActivation",
        "status": "todo",
        "order": 2
    },
    "mediumCarKey": {
        "name": "mediumCarKey",
        "status": "todo",
        "order": 3
    }
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.subscription.steps"
  subname="carAssociationID"
  request_params_swift=getStepsListRequestCarAssociationIDSwift
  request_params_kotlin=getStepsListRequestCarAssociationIDKotlin
  response=getStepsListResponse
  component="UserVehicleSteps"
%}

The *stepsID* returned in the result message allows to easily update this list.

{% comment %}

## List of Steps - vin

If you don't have access to the *carAssociationID*, you can use request the list of steps using the vehicle **🚗 vin**:

{%- capture getStepsListRequestVinKotlin -%}
  Pair("carAssociationID", "VR1AB12C3D4567890"),
  Pair("resetSteps", "false"),
  Pair("stepsStatus", "all")
{%- endcapture -%}

{%- capture getStepsListRequestVinSwift -%}
  "vin": "VR1AB12C3D4567890",
  "resetSteps": "false",
  "stepsStatus": "all"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.subscription.steps"
  subname="carAssociationID"
  request_params_swift=getStepsListRequestVinSwift
  request_params_kotlin=getStepsListRequestVinKotlin
  response=getStepsListResponse
  component="UserVehicleSteps"
%}

{% endcomment %}

## Update the List

After a [first request](#first-list-request) with *carAssociationID*, you can use the stepsID to retrieve the updated list of steps. The **stepsId** is available in the return of the [first List Request](#first-list-request).

{% capture stepsIdNote %}
> **StepsID:** this code can not be shared between devices, you should always use [carAssociationID](#first-list-request) for the first request.
{% endcapture %}

{{stepsIdNote}}

{%- capture getStepsListRequestStepsIDKotlin -%}
  Pair("stepsID", "132324"),
  Pair("resetSteps", false),
  Pair("stepsStatus", "all")
{%- endcapture -%}

{%- capture getStepsListRequestStepsIDSwift -%}
  "stepsID": "132324",
  "resetSteps": false,
  "stepsStatus": "all"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.subscription.steps"
  subname="stepsID"
  request_params_swift=getStepsListRequestStepsIDSwift
  request_params_kotlin=getStepsListRequestStepsIDKotlin
  response=getStepsListResponse
  component="UserVehicleSteps"
%}


## Retrieve Next Step

When you have access to **stepsID**, you can use the following API to return the next step in the list, this will return **only one step at a time**:

{{stepsIdNote}}

{%- capture getOnlyOneStepRequestKotlin -%}
  Pair("stepsID", "132324")
{%- endcapture -%}

{%- capture getOnlyOneStepRequestSwift -%}
  "stepsID": "132324"
{%- endcapture -%}

{%- capture getStepsListResponse -%}
{ 
    // Example if next Step is deviceActivation
    "deviceActivation": {
      "name": "deviceActivation",
        "status": "todo",
        "order": 1
    }
    // Response is Null if there is no next step
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.subscription.step"
  request_params_swift=getOnlyOneStepRequestSwift
  request_params_kotlin=getOnlyOneStepRequestKotlin
  response=getStepsListResponse
  component="UserVehicleSteps"
%}

## Cache 

Once a step reach the status **alreadyDone** in **pims.vehicle.steps**, the step will remain in the same status unless if the cache is wiped. In order to reset this cache, we should request **pims.vehicle.steps** using the parameter `resetSteps == true`.

In case of error *2317* or *2312* when using [pims.authentication.otp - withPIN]({{site.baseurl}}/mobile-sdk/references/v{%- include api-reference-toolkit-v2.html type="lastSpecVersionDashed" -%}/strongauthentication-get-pims-authentication-otp-withpin/#article), you should use `"resetStep": true` in the query. This action will refresh the cache and remove these errors.
