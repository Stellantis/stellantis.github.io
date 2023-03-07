---
layout: doc-article
published: false
permalink: /mobile-sdk/overview/service-availability/
section: mobile-sdk
title: Service Availability
categorie: Overview
description: "Discover available services in a vehicle."
require: api-reference
---

Like most of the API described on this website, Stellantis Connected Vehicles SDK for is a **set of technical features**.
Depending on the vehicle, not all the features in this SDK are available.


## Services

Features are related to services, in order to access a feature the corresponding service should be available.

You can retrieve the list of available services for a vehicle using the following API:


{%- capture SubServicesRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890")
{%- endcapture -%}

{%- capture SubServicesRequestSwift -%}
  "vin": "VR1AB12C3D4567890"
{%- endcapture -%}

{%- capture SubServicesResponse -%}
{
    "services": [
      {
        "code": "service_code_1",
        "name": "service_name_1"
      },
      {
        "code": "service_code_2",
        "name": "service_name_2"
      }
    ]
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.subscription.services"
  request_params_swift=SubServicesRequestSwift
  request_params_kotlin=SubServicesRequestKotlin
  response=SubServicesResponse
  component="UserVehicleSteps"
%}