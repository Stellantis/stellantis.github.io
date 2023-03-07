---
layout: doc-article
permalink: /mobile-sdk/security/security-schemes/
section: mobile-sdk
categorie: Security
title: About
description: "Security schemes in connected vehicle mobile SDK. Authentication, enrollment, OTP."
---


In order to use Mobile SDK API, you should first perform the appropriate security schemes.


## Security Requirements

The security scheme you need to perform depends on the API to request. Each API has a different **security requirements**.

- 🔓 **[Authentication]({{site.baseurl}}/mobile-sdk/security/authentication/#article)**: authentication with email & password. This layer of security will request and store a token required for most of this SDK APIs.
- 📑 **Subscription:** API might require more security than *authentication*. A dedicated feature called [**Service Activation Steps**]({{site.baseurl}}/mobile-sdk/security/service-activation-steps/#article) will provide guidance in this process.
  - 📱 **[Device Enrollment]({{site.baseurl}}/mobile-sdk/security/device-enrollment/#article)**: enroll a device by performing a two-factor authentication with the user phone number.
  - 🔑 **[CarKey]({{site.baseurl}}/mobile-sdk/security/carkey/#article)**: a security layer checking if the user is in possession of the vehicle keys. This has to be performed only once to unlock the service.

## Which security should I use?

{%- capture security_authentication -%}
🔓 [Authentication]({{site.baseurl}}/mobile-sdk/security/authentication/#article) is required.
{%- endcapture -%}

{%- capture security_subscription -%}
📑 Subscribtion (check-out [Steps]({{site.baseurl}}/mobile-sdk/security/service-activation-steps/#article))
{%- endcapture -%}

{%- capture no_security -%}
✅ No security (no account access)
{%- endcapture -%} 

{% capture security_table %}
|Feature|Required Security|
|-|-|
{%- assign sdk-features = site.pages | where: "categorie", "SDK Features" -%}
{%- capture lastSpecFile -%}{% include api-reference-toolkit-v2.html type="lastSpecFile" %}{%- endcapture -%}

{% for feature in sdk-features %}{%- for component in site.data[lastSpecFile].components -%}
{%- if component.category == 'feature' -%}{% if component.tag == feature.mobile-sdk-component %}
| [{{component.icon}} {{feature.title}}]({{site.baseurl}}{{feature.permalink}}#article) | 
{%- if component.securities[0].name -%}
{%- for security in component.securities -%}
  {%- if security.name == "Authentication" -%}{{security_authentication}}
  {%- elsif security.name == "Subscription" -%}<br>{{security_subscription}}{% endif %}
{%- endfor -%}
{%- else -%}
{{no_security}}{%- endif -%}|
{%- endif -%}{%- endif -%}
{%- endfor -%}
{% endfor %}
{% endcapture %}

<div class="centered-table">
{{security_table|markdownify}}
</div>

## Other Security Info

Other security process, they are not mandatory but could be also interesting:
- ✉️ **[OTP Code]({{site.baseurl}}/mobile-sdk/security/otp/#article)**: One Time Password, OTP should be handled in response to error **2302:** *missing OTP code*.
- 🪙 **[Token]({{site.baseurl}}/mobile-sdk/security/token/#article)**: This feature allows retrieving tokens in order to request REST APIs not included in this SDK.