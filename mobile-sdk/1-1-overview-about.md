---
layout: doc-article
permalink: /mobile-sdk/overview/about/
section: mobile-sdk
categorie: Overview
title: About
description: "The Stellantis Connected Vehicles SDK for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall) let your application interacts with vehicles using smartphone related technologies such as bluetooth and mobile internet."
redirect_from:
    - /mobile-sdk/android/*
    - /mobile-sdk/ios/*
    - /mobile-sdk/
---

# Mobile App with Vehicle Integration 🚗📱

*Stellantis Connected Vehicles SDK for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall)* lets your application benefits of remote vehicles features on smart-device.

It allows **retrieving data** and **remote controlling** vehicles using smartphone related technologies such as Bluetooth and mobile internet. Sometime, this SDK is also referred as **PIMS**.

This Mobile SDK is useful if you want to build mobile applications with access to Stellantis vehicles. These are the main **features**:
{% assign features = site.data.mobile-sdk-components | where: "category", "feature" %}
{% for feature in features %}
- [{{feature.icon}} **{{feature.name}}**]({{site.baseurl}}{{feature.tutorial}}#article): {{feature.description}}
{% endfor %}
And these are the **security layers**:
{% assign securityFeatures = site.data.mobile-sdk-components | where: "category", "security" %}
{% for securityFeature in securityFeatures %}
- [{{securityFeature.icon}} **{{securityFeature.name}}**]({{site.baseurl}}{{securityFeature.tutorial}}#article): {{securityFeature.description}}
{% endfor %}


Check out first the [Get Started tutorial]({{site.baseurl}}/mobile-sdk/overview/get-started/#article) to learn more about this SDK. 

You can also browse the [Reference page]({{site.baseurl}}/mobile-sdk/references/list/#article), it's the list of all APIs available in the SDK. 
