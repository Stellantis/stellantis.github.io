---
layout: doc-article
permalink: /mobile-sdk/overview/about/
section: mobile-sdk
categorie: Overview
title: About
description: "The Stellantis Connected Vehicles SDK let your application interacts with vehicles using smartphone related technologies such as bluetooth and mobile internet."
redirect_from:
    - /mobile-sdk/android/*
    - /mobile-sdk/ios/*
    - /mobile-sdk/
---

# Mobile App with Vehicle Integration 🚗📱

*Stellantis Connected Vehicles SDK* lets your application benefits of remote vehicles features on smart-device.

It allows **retrieving data** and **remote controlling** vehicles using smartphone related technologies such as Bluetooth and mobile internet. Sometime, this SDK is also referred as **PIMS**.

This Mobile SDK is useful if you want to build mobile applications with access to Stellantis vehicles. These are the main **features**:

{% assign featuresTuto = site.data.mobile-sdk-components-tutorials %}

{%- capture lastSpecFile -%}{% include api-reference-toolkit-v2.html type="lastSpecFile" %}{%- endcapture -%}
{% assign features = site.data[lastSpecFile].components | where: "category", "feature" %}

<ul>
{% for feature in features %}
{% for featureTuto in featuresTuto %} 
{% if featureTuto.tag == feature.tag %}
<li> 
    {{feature.icon}}&nbsp;
    {%- if featureTuto.tutorial -%}
        <a href="{{site.baseurl}}{{featureTuto.tutorial}}#article">
        {%- include api-reference-toolkit-v2.html type="componentName" component=feature -%}
        </a>
    {%- else -%}
        {%- include api-reference-toolkit-v2.html type="componentName" component=feature -%}
    {% endif %}
    : {{feature.description}} 
</li>
{% endif %} 
{% endfor %}
{% endfor %}
</ul>

And these are the **security layers**:

{% assign securityFeatures = site.data[lastSpecFile].components | where: "category", "security" %}

<ul>
{% for securityFeature in securityFeatures %}
{% for featureTuto in featuresTuto %} {% if featureTuto.tag == securityFeature.tag %}
<li>
    {{securityFeature.icon}}&nbsp;
    {%- if featureTuto.tutorial -%}
    <a href="{{site.baseurl}}{{featureTuto.tutorial}}#article">
        {%- include api-reference-toolkit-v2.html type="componentName" component=securityFeature -%}
    </a>
    {%- else -%}
    {%- include api-reference-toolkit-v2.html type="componentName" component=securityFeature -%}
    {%- endif -%}: {{securityFeature.description}} 
</li>
{% endif %}
{% endfor %}
{% endfor %}
</ul>


Check out first the [Get Started tutorial]({{site.baseurl}}/mobile-sdk/overview/get-started/#article) to learn more about this SDK. 

You can also browse the [Reference page]({{site.baseurl}}/mobile-sdk/references/#article), it's the list of all APIs available in the SDK. 
