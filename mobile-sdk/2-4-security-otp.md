---
layout: doc-article
permalink: /mobile-sdk/security/otp/
section: mobile-sdk
categorie: Security
title: OTP
description: "Get OTP code."
require: api-reference
mobile-sdk-component: StrongAuthentication
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}


When it's requested by this Mobile SDK, you should be able to request an OTP code.

## When should I request an OTP?

Most of the time, you don't have to deal with OTP. However, in some cases, it's possible that you receive the following error: 


{% capture anyResponseError2302 %}

```js
// ERROR: 'response' object as json
{
  "transactionId": "953cfefb-bc72",
  "status": "FAILED",
  "error": {
    "code": 2302,
    "label": "Need Strong Authentication"
  }
}
```
{% endcapture %}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="Need Strong Auth Response"
  custom_code_sample=true
  response=anyResponseError2302
  no_link=true
%}

In order to use Mobile SDK API you should first [perform authentication]({{site.baseurl}}/mobile-sdk/security/authentication/#article).

Depending on the API, basic or device enrollment can be required.

## Receive OTP code

When you receive 2302 error, you should request an OTP code `withPIN`. Once is done, it will be possible to request the API that trigger the 2302 error code again.

{%- capture getOTPRequestKotlin -%}
  Pair("action", "withPIN",)
  Pair("pinCode", "123456")
{%- endcapture -%}

{%- capture getOTPRequestSwift -%}
  "action": "withPIN",
  "pinCode": "123456",
{%- endcapture -%}

{%- capture getOTPResponse -%}
{
    "otp": "otp_code"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
sdk_name=page.section
  name="pims.authentication.otp"
  subname="withPIN"
  type="get"
  request_params_swift=getOTPRequestSwift
  request_params_kotlin=getOTPRequestKotlin
  response=getOTPResponse
  component="StrongAuthentication"
%}


## Error 2317 & 2312

In case of error *2317* or *2312* when using [pims.authentication.otp - withPIN]({{site.baseurl}}/mobile-sdk/references/v{%- include api-reference-toolkit-v2.html type="lastSpecVersionDashed" -%}/strongauthentication-get-pims-authentication-otp-withpin/#article), you should use `"resetStep": true` in the query. This action will refresh the cache and remove these errors.