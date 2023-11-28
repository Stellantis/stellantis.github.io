---
layout: doc-article
permalink: /mobile-sdk/security/device-enrollment/
section: mobile-sdk
categorie: Security
title: Device Enrollment & Account Managment
description: "How to enroll device into connected vehicle mobile SDK."
require: api-reference
mobile-sdk-component: StrongAuthentication
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

Device Enrollement is required in order to use [remote commands]({{site.baseurl}}/mobile-sdk/sdk-features/remote-commands/#article) & [vehicle status]({{site.baseurl}}/mobile-sdk/sdk-features/vehicle-status/#article). Check out [Service Activation Steps]({{site.baseurl}}/mobile-sdk/security/service-activation-steps/#article) to get assistance accessing remote command.

This page is a tutorial about Enrollment Process & Account Management:
  - First, the steps by steps describes the **[enrollment process](#what-is-device-enrollment)** of a device: **steps with numbers 1️⃣ to 8️⃣**.
  - Then, information about **[account management](#account-management)** are available under **letters *A to E*** and steps with numbers 1️⃣, 2️⃣, 4️⃣-2️⃣, 6️⃣, 7️⃣.

# What is device enrollment?

Device Enrollment (aka Strong Authentication), provides a **two factors authentication method (2FA)**. In order to perform device enrollment you'll generate an SMS code that will be the seed for 2FA authentication.

In order to perform device enrollement, you should first go through [authentication]({{site.baseurl}}/mobile-sdk/security/authentication/#article). Then, you can start the [enrollment process](#enrollment-process).

At the end of this process, the device will be enrolled. 

# Enrollment Process

They are **2 different methods to enroll** a new device:
  - **🏎 Shortcut method**: Starting from SDK version 2.1.0, the easiest way is to use *enrollWithPhoneNumber*. In this case, you only need to perform [step 1️](#1️⃣-check-enrollment-status) to **[step 4️·1](#4️⃣1️⃣-enrollment-with-phone-number)** to enroll a new device. This method is not available if a phone number is already register.
  - **🐢 Full method**: This enrollment process is longer since you need to go through all the steps from [step 1](#1️⃣-check-enrollment-status) to [step 8](#8️⃣-request-device-enrollment--perform-pin-code-validation) going through **[step 4·2](#4️⃣2️⃣-register-trusted-phone-number)** (avoid step 4·1 in this case). Use this method in case:
    - You are using an SDK **before version 2.1.0**.
    - Some **steps** of the enrollment process have **already been performed**.

The following schema details the steps to perform in order to enroll the device:

<img src="{{site.baseurl}}/assets/images/mobile-sdk-enrollment-step1-2-3-5-6-8-main-workflow.svg" style="width: 550px">

## 1️⃣ Check enrollment status

First, you should check enrollment status, the device could be already enrolled.

{%- capture checkEnrollRequestKotlin -%}
  Pair("actionType", "strong"),
  Pair("type", "isDeviceActivated")
{%- endcapture -%}

{%- capture checkEnrollRequestSwift -%}
  "actionType": "strong",
  "type": "isDeviceActivated"
{%- endcapture -%}

{%- capture checkEnrollResponse -%}
{
    "isDeviceActivated": false
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.account"
  subname="isDeviceActivated"
  request_params_swift=checkEnrollRequestSwift
  request_params_kotlin=checkEnrollRequestKotlin
  response=checkEnrollResponse
  component="StrongAuthentication"
%}

If the response result is `true` then the device is already enrolled!

Otherwise, you should perform the enrollment process by going to [step 2](#2️⃣-check-account-status).

## 2️⃣ Check account status

Before initiating the enrollment process, let's check that the account is not blocked.

{%- capture checkAccountRequestKotlin -%}
  Pair("actionType", "strong"),
  Pair("type", "isAccountBlocked")
{%- endcapture -%}

{%- capture checkAccountRequestSwift -%}
  "actionType": "strong",
  "type": "isAccountBlocked"
{%- endcapture -%}

{%- capture checkAccountResponse -%}
{
    "isAccountBlocked": false
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.account"
  subname="isAccountBlocked"
  request_params_swift=checkAccountRequestSwift
  request_params_kotlin=checkAccountRequestKotlin
  response=checkAccountResponse
  component="StrongAuthentication"
%}

In case the response is `isAccountBlocked: 'AccountBlocked'/'PINBlocked'`, you need to **remove all enrollments** by going to [step A](#a---remove-all-enrollments).

> **Info:** the account could get blocked if the limit of enrolled device for an account is reached.

If the account is not blocked (`isAccountBlocked: 'NotBlocked'`) we can continue to [step 3](#3️⃣-check-phone-number).

## 3️⃣ Check phone number

To perform device enrollment, the account must have a **registered trusted phone number**. 

If it's not the case, it should be added to the account because the phone number is used in order to receive an SMS Code.

{%- capture checkPhoneNumberResponse -%}
{
    "phoneNumber": "0612345678"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.trustedphonenumber"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=checkPhoneNumberResponse
  component="StrongAuthentication"
%}

If the response result value is `trustedphoneNumber: null`, then the account doesn't have a **trusted phone number**. 

You should register a phone number (check out [enrollment methods](#enrollment-process)):
  - [🏎 Step 4·1️](#4️⃣1️⃣-enrollment-with-phone-number) for **Shortcut method**.
  - [🐢 Step 4·2](#4️⃣2️⃣-register-trusted-phone-number) for **Full method**.

If it does have a **phone number value**, then it's possible to ask for an SMS Code, see [step 5](#5️⃣-request-enrollment-smscode).

## 4️⃣·1️⃣ Enrollment With Phone Number

*This step is required only if you are following the shortcut method. It's not part of the full method. Refer to [enrollment methods description](#enrollment-process). This method is not available if a phone number is already register.*

<img src="{{site.baseurl}}/assets/images/mobile-sdk-enrollment-step4-1-enrollWithPhoneNumber.svg" style="max-width:270px">

In order to enroll the device and add a new phone number to the user account, an **SMS code** is required for verification.

First, we should request to send an SMS code to the user **phone number**:


{%- capture getSmsCodePhoneNumberCertifKotlin -%}
  Pair("type", "phoneNumberCertification"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture getSmsCodePhoneNumberCertifSwift -%}
  "type": "phoneNumberCertification",
  "phoneNumber": "0123456789",
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.smscode"
  subname="phoneNumberCertification"
  description="for enrollWithPhoneNumber"
  request_params_swift=getSmsCodePhoneNumberCertifSwift
  request_params_kotlin=getSmsCodePhoneNumberCertifKotlin
  response="null"
  component="StrongAuthentication"
%}

The user should receive the SMS code on their phone. Let's imagine the code is `2424` for the following request.

Then we should perform the verification of the **smsCode**, **phone number** & **pinCode**. If the values are matching, the pinCode & phoneNumber are register for this account and the device is **enrolled**!

{%- capture enrollWithPhoneNumberKotlin -%}
  Pair("action", "enrollWithPhoneNumber"),
  Pair("pinCode", "424242"),
  Pair("smsCode", "2424"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture enrollWithPhoneNumberSwift -%}
  "action": "enrollWithPhoneNumber",
  "pinCode": "424242",
  "smsCode": "2424",
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.enrollment"
  subname="enrollWithPhoneNumber"
  request_params_swift=enrollWithPhoneNumberSwift
  request_params_kotlin=enrollWithPhoneNumberKotlin
  response="null"
  component="StrongAuthentication"
%}

If the response is `SUCCEEDED`, the device is successfully **enrolled!**

## 4️⃣·2️⃣ Register Trusted Phone Number

{% capture fullMethodWarning %}
*This step is required only if you are following the full method. It's not part of the shortcut method. Refer to [enrollment methods description](#enrollment-process)*.
{% endcapture %}

{{fullMethodWarning}}

*If the user doesn't have a phone number, and you are using an SDK version after 2.1.0, you can use [enrollment with phone number](#4️⃣1️⃣-enrollment-with-phone-number), it's the easiest way to enroll a new device.*

<img src="{{site.baseurl}}/assets/images/mobile-sdk-enrollment-step4-2-register-phone.svg" style="max-width:270px">

In order to add a trusted phone number to the user account, an **SMS code verification** is required.

First, we should request to send an SMS code to the user **phone number**:

{%- capture getPhoneNumberCertifKotlin -%}
  Pair("type", "phoneNumberCertification"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture getPhoneNumberCertifSwift -%}
  "type": "phoneNumberCertification",
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.smscode"
  description="for addPhoneNumber"
  subname="phoneNumberCertification"
  request_params_swift=getPhoneNumberCertifSwift
  request_params_kotlin=getPhoneNumberCertifKotlin
  response="null"
  component="StrongAuthentication"
%}

The user will receive an SMS Code on their phone, let's imagine the code is `24242424` for the following request. 

Then we should perform SMS code verification & validate **phone number**:


{%- capture setAddPhoneNumberKotlin -%}
  Pair("type", "addPhoneNumber"),
  Pair("smsCode", "2424"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture setAddPhoneNumberSwift -%}
  "type": "addPhoneNumber",
  "smsCode": "2424",
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.smscode"
  subname="addPhoneNumber"
  request_params_swift=setAddPhoneNumberSwift
  request_params_kotlin=setAddPhoneNumberKotlin
  response="null"
  component="StrongAuthentication"
%}

If the response is `SUCCEEDED`, the phone number is **registered!** 

You can continue the enrollment process with [step 5](#5️⃣-request-enrollment-smscode).

## 5️⃣ Request enrollment SMScode

{{fullMethodWarning}}

Once the user has a registered phone number, it's possible to request an SMS code dedicated to device enrollment:


{%- capture getSMSCodeEnrollmentRequestKotlin -%}
  Pair("type", "enrollment"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture getSMSCodeEnrollmentRequestSwift -%}
  "type": "enrollment"
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.smscode"
  subname="enrollment"
  description="Request Enrollment"
  request_params_swift=getSMSCodeEnrollmentRequestSwift
  request_params_kotlin=getSMSCodeEnrollmentRequestKotlin
  response=null
  component="StrongAuthentication"
%}

The user should receive the SMS Code on his registered phone number, see [step 4·1](#4️⃣1️⃣-enrollment-with-phone-number).

In order to check the user enrollment, go to [step 6](#6️⃣-check-pin-code).

## 6️⃣ Check PIN Code

{{fullMethodWarning}}

In addition to SMS code, enrollment require a **PIN code**. This PIN code is a short digit password.

We should check if the account already have a registered PIN Code, to trigger this check, we need to pass the SMS Code requested in the previous step:

{%- capture setSMSCodeEnrollmentCheckPINCodeRequestKotlin -%}
  Pair("action", "enrollment"),
  Pair("smsCode", "2424")
{%- endcapture -%}

{%- capture setSMSCodeEnrollmentCheckPINCodeRequestSwift -%}
  "action": "enrollment",
  "smsCode": "2424"
{%- endcapture -%}

{%- capture setSMSCodeEnrollmentCheckPINCodeResponse -%}
{
    "status": "AlreadyEnrolled"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.smscode"
  subname="enrollment"
  description="Check PIN Code"
  request_params_swift=setSMSCodeEnrollmentCheckPINCodeRequestSwift
  request_params_kotlin=setSMSCodeEnrollmentCheckPINCodeRequestKotlin
  response=setSMSCodeEnrollmentCheckPINCodeResponse
  component="StrongAuthentication"
%}

If it has been previously enrolled (`"status": "AlreadyEnrolled"`), there is no need to add a new PIN code, the user should use the **previous PIN code** for [step 8](#8️⃣-request-device-enrollment--perform-pin-code-validation).

>**Reset PIN Code:** In case the user doesn't remember the PIN Code, see [step B](#b---reset-pin-code) for reset.

>**Change PIN Code:** In case the user needs to change the PIN Code, see [step C](#c---update-pin-code) for update.

If the account **doesn't have a PIN Code**, we should register a new PIN code, see [step 7](#7️⃣-register-new-pin-code).

## 7️⃣ Register new PIN code

{{fullMethodWarning}}

<img src="{{site.baseurl}}/assets/images/mobile-sdk-enrollment-step7-register-new-pin-code.svg" style="max-width:270px">

In case this device has not been enrolled before for this account, we have to make the user register a new one:


{%- capture setEnrollmentNewPINCodeRequestKotlin -%}
  Pair("action", "enroll"),
  Pair("pinCode", "1234"),
{%- endcapture -%}

{%- capture setEnrollmentNewPINCodeRequestSwift -%}
  "action": "enroll",
  "pinCode": "1234"
  "smsCode": "2424"
{%- endcapture -%}

{%- capture setEnrollmentNewPINCodeResponse -%}
{
    "status": "AlreadyEnrolled"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.enrollment"
  subname="enroll"
  description="Register PIN Code"
  request_params_swift=setEnrollmentNewPINCodeRequestSwift
  request_params_kotlin=setEnrollmentNewPINCodeRequestKotlin
  response=setEnrollmentNewPINCodeResponse
  component="StrongAuthentication"
%}

In this API, the parameter **smsCode** is only for iOS.

Then, go to [step 8](#8️⃣-request-device-enrollment--perform-pin-code-validation).

## 8️⃣ Request device enrollment & perform PIN Code validation

{{fullMethodWarning}}

Once the user/device has a PIN code, it should be checked using the following command:

{%- capture setEnrollmentEnrollRequestKotlin -%}
  Pair("action", "enroll"),
  Pair("pinCode", "1234"),
{%- endcapture -%}

{%- capture setEnrollmentEnrollRequestSwift -%}
  "action": "enroll",
  "pinCode": "1234"
  "smsCode": "2424"
{%- endcapture -%}

{%- capture setEnrollmentEnrollResponse -%}
{
    "status": "AlreadyEnrolled"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.enrollment"
  subname="Enroll"
  description="Enroll Device"
  request_params_swift=setEnrollmentEnrollRequestSwift
  request_params_kotlin=setEnrollmentEnrollRequestKotlin
  response=setEnrollmentEnrollResponse
  component="StrongAuthentication"
%}

In this API, the parameter **smsCode** is only for iOS.

If the response result is `SUCCEEDED`, the device is **successfully enrolled!**

Otherwise, if the response is `FAILED` and the error code is NOT `2317`, we should retry PIN code verification by repeating this [step 8](#8️⃣-request-device-enrollment--perform-pin-code-validation). 

Finally, if the response is `FAILED` and the error code is `2317` the account is blocked, you should restart the enrollment process from start, [step A](#a---remove-all-enrollments).

# Account Management

Account management is a list of features that allows to interact with the user account. These features are APIs, they are **part** of the enrollment process (**steps with numbers**) or are **not part** of the regular enrollment process (**steps with letters**):
  - [Step **A**](#a---remove-all-enrollments) - Remove all enrollments.
  - [Step **B**](#b---reset-pin-code) - Reset PIN Code.
  - [Step **C**](#c---update-pin-code) - Update PIN Code.
  - [Step **D**](#d---modify-phone-number) - Modify Phone Number.
  - [Step 1️⃣](#1️⃣-check-enrollment-status) - Check enrollment status.
  - [Step 2️⃣](#2️⃣-check-account-status) - Check account status.
  - [Step 3️⃣](#3️⃣-check-phone-number) - Check phone number.
  - [Step 4️⃣·2️⃣](#4️⃣2️⃣-register-trusted-phone-number) - Register Trusted Phone Number.
  - [Step 6️⃣](#6️⃣-check-pin-code) - Check PIN Code.
  - [Step 7️⃣](#7️⃣-register-new-pin-code) - Register new PIN code.

## **A** - Remove all enrollments

In some cases, you could need to reset all enrollments. In particular, this could happen if enrollment `FAILED` with error code `2317`.

<img src="{{site.baseurl}}/assets/images/mobile-sdk-enrollment-stepA-remove-enrollments.svg" style="max-width:270px">


In order to remove all enrollments, you need to request the following API:


{%- capture RemoveEnrollmentKotlin -%}
  Pair("action", "remove")
{%- endcapture -%}

{%- capture RemoveEnrollmentSwift -%}
  "action": "remove"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.enrollment"
  subname="remove"
  request_params_swift=RemoveEnrollmentSwift
  request_params_kotlin=RemoveEnrollmentKotlin
  response="null"
  component="StrongAuthentication"
%}

If it `SUCCEEDED`, then you can restart enrollment process from [step 3](#3️⃣-check-phone-number).

## **B** - Reset PIN Code

In case the user doesn't remember the PIN Code, you should suggest **resetting the PIN Code**.

> **Enrollment Required:** Reset PIN needs an active enrollment, you can check enrollment in [step 1](#1️⃣-check-enrollment-status). If no enrollments are active, you need first to [remove all enrollments (step A)](#a---remove-all-enrollments).


{%- capture ResetPINCodeKotlin -%}
  Pair("action", "reset"),
  Pair("pinCode", "4321"),
  Pair("smsCode", "2424")
{%- endcapture -%}

{%- capture ResetPINCodeSwift -%}
  "action": "reset",
  "pinCode": "4321",
  "smsCode": "2424"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.pincode"
  subname="reset"
  request_params_swift=ResetPINCodeSwift
  request_params_kotlin=ResetPINCodeKotlin
  response="null"
  component="StrongAuthentication"
%}

If the **PIN Code reset** is successful (response is `SUCCEEDED`), then you can continue the enrollment process from [step 8](#8️⃣-request-device-enrollment--perform-pin-code-validation).

## **C** - Update PIN Code

You can implement a feature allowing **PIN Code updating**.

> **Enrollment Required:** Reset PIN needs an active enrollment, you can check enrollment in [step 1](#1️⃣-check-enrollment-status).


{%- capture UpdatePINCodeKotlin -%}
  Pair("action", "update"),
  Pair("oldPIN", "7654"),
  Pair("newPIN", "0987")
{%- endcapture -%}

{%- capture UpdatePINCodeSwift -%}
  "action": "update",
  "oldPIN": "7654",
  "newPIN": "0987"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.pincode"
  subname="update"
  request_params_swift=UpdatePINCodeSwift
  request_params_kotlin=UpdatePINCodeKotlin
  response="null"
  component="StrongAuthentication"
%}

In case the user can not remember the old PIN Code, you can [reset the PIN Code](#b---reset-pin-code).

## **D** - Modify Phone Number

You can implement a feature allowing **Phone Code modification**.

> **Check PIN Code first:** Before trying to update the Phone Number, please follow [step 3](#3️⃣-check-phone-number) in order to make sure the device has already a phone number.<br>
**Enrollment Required:** Reset PIN needs an active enrollment, you can check enrollment in [step 1](#1️⃣-check-enrollment-status).

{%- capture getphoneNumberCertificationKotlin -%}
  Pair("type", "phoneNumberCertification"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture getphoneNumberCertificationSwift -%}
  "type": "phoneNumberCertification",
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.smscode"
  subname="phoneNumberCertification"
  request_params_swift=getphoneNumberCertificationSwift
  request_params_kotlin=getphoneNumberCertificationKotlin
  response="null"
  component="StrongAuthentication"
%}

The user will receive an SMS Code on their phone, then, you should use the following API to register the new phone number:


{%- capture setModifyPhoneNumberKotlin -%}
  Pair("type", "modifyPhoneNumber"),
  Pair("smsCode", "2424"),
  Pair("phoneNumber", "0123456789")
{%- endcapture -%}

{%- capture setModifyPhoneNumberSwift -%}
  "type": "modifyPhoneNumber",
  "smsCode": "2424",
  "phoneNumber": "0123456789"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.smscode"
  subname="modifyPhoneNumber"
  request_params_swift=setModifyPhoneNumberSwift
  request_params_kotlin=setModifyPhoneNumberKotlin
  response="null"
  component="StrongAuthentication"
%}

## **E** - Remove Vehicle Association

In case you need to remove the association between the vehicle and the user account, you should use the following API. This could be useful when the vehicle is being sold.

{%- capture setRemovePropertyKotlin -%}
  Pair("action", "removeProperty"),
  Pair("vin", "VR1AB12C3D4567890")
{%- endcapture -%}

{%- capture setRemovePropertySwift -%}
  "action": "removeProperty",
  "vin": "VR1AB12C3D4567890"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.subscription.vehicle"
  subname="removeProperty"
  request_params_swift=setRemovePropertySwift
  request_params_kotlin=setRemovePropertyKotlin
  response="null"
  component="UserInformation"
%}
