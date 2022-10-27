---
layout: doc-article
permalink: /mobile-sdk/references/changelog/
section: mobile-sdk
categorie: API Reference
# require: reference-list
# on_this_page: false
title: Changelog
description: "Connected vehicle mobile SDK Reference Changelog."
---


Version|Name
-|-
[v2.1.x](#v21x) | Push Notif, Rmve Prop & EnrollmentWithPhoneNumber
[v2.0.x](#v20x) | Candidate Version

<hr>

## v2.1.x

{% include published_on.html date='26 Oct 2022' %}

{%- assign components21 = site.data.mobile-sdk-components | where: "firstAvailability", "2.1" %}
<ul>
  {% for component21 in components21 %}
  <li>Add {{component21.icon}} {{component21.name}} feature<br>
    <a href="{{site.baseurl}}/mobile-sdk/references/list/#domain-{{component21.name}}">
      Component APIs
    </a> |
    <a href="{{site.baseurl}}{{component21.tutorial}}">
      Tutorial
    </a>
  </li>
  {% endfor %}
  <li>
    Add API 
    <a href="{{site.baseurl}}/mobile-sdk/references/set-pims-authentication-enrollment-enrollmentwithphonenumber#article">
      📱 EnrollmentWithPhoneNumber
    </a>
  </li>
</ul>

<hr>

## v2.0.x

{% include published_on.html date='01 Jun 2022' %}

{% assign components20 = site.data.mobile-sdk-components | where: "firstAvailability", "2.0" %}
<ul>
  {% for component20 in components20 %}
  <li>Add {{component20.icon}} {{component20.name}} feature<br>
    <a href="{{site.baseurl}}/mobile-sdk/references/list/#domain-{{component20.name}}">
      Component APIs
    </a> |
    <a href="{{site.baseurl}}{{component20.tutorial}}">
      Tutorial
    </a>
  </li>
  {% endfor %}
</ul>