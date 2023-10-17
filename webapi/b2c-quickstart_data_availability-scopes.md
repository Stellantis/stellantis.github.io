---
layout: doc-article
permalink: /webapi/b2c/quickstart/data-availability-scopes/
section: webapi
subsection: b2c
categorie: Quickstart
title: Data Availability & Scope
description: "Data available in the End User API depends on data production, submission & authorization."
---

[References]({{site.baseurl}}/webapi/b2c/api-reference/references/#article) expose the set of all possibilities of the End-User API, but all these **data & features are not always available**. This page explains how data are made available in the API.

In order for a data to be available in the API response, it should meet all the following conditions:
- [📋 Reference](#-api-references-list), it should be part of the API reference list.
- [🚗 Produced](#-vehicle-data-production) by the vehicle. Not all vehicle models are able to produce all the data.
- [📡 Uploaded](#-vehicle-data-upload) on the server, it depends on the vehicle services activated on the vehicle by the End User.
- [👤 Authorized](#-user-authorization), by the End User to the requesting Application, during the enrollment process.

If a data does not meet these **4 conditions**, then it will not be available when requesting Stellantis B2C API.

<img src="{{site.baseurl}}/assets/images/b2c-available-data.svg" alt="b2c-available-data" style="width: 400px">

## 📋 API References list

The [API reference]({{site.baseurl}}/webapi/b2c/api-reference/references/#article) is an exhaustive list of the capabilities of Stellantis B2C API.

This reference list is the barebone of the system, it displays the structure of **all data potentially available**.

## 🚗 Vehicle Data Production

Stellantis End User API is intended to work with a **wide variety of vehicles** of different generations, shape and motorization. All these vehicles are not equipped with the same features and sensors.

Real life vehicles only produce part of the data exposed in the API references. That's why the API can only **output data actually produced** by the vehicle.

***For example**, electric vehicles do not have a gearbox; therefore gear recommendation is not a data available when requesting [GET /user/vehicles/{id}/telemetry]({{site.baseurl}}/webapi/b2c/api-reference/references/#tag/Vehicles/operation/getTelemetry).*

## 📡 Vehicle Data Upload

By default vehicle's data are not uploaded on Stellantis servers. In order to be available online, the vehicle owner needs to activate the appropriates **vehicle services**. Once a service is activated on the vehicle, the corresponding group of data will be uploaded on Stellantis servers.

As an Accessing Party you don't have to handle *vehicle services subscription*, the subscription is automatically asked to the end user during the [Enrollment Process]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article).

> **Vehicle Service Availability:** service availability depends on the user account. Some services might not always be available for subscription. *"Partner Services"* (allowing third-party applications) is not available in all countries.

## 👤 User Authorization

As a developer, you should enroll End Users in your application in order to access their vehicle data. The End User (Ressource Owner) accepts or deny access to a list of **requested scopes**. Even when accepted, the End User can still [revoke]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users#revoke-token-logout-user) your access at any time.

{% comment %}
***For example**, if an End User has activated *"Partner Services"* but vehicle service doesn't allow access to the remote scopes, the Application will only be able to retrieve vehicle data but not to remote control the vehicle.*
{% endcomment %}

> **Consent Prompt:** during the enrollment process, in the consent prompt, the End User can only accept or decline the **entire set** of requested scopes. In the future, End Users will be able to *cherry-pick* scopes on the list.

## Scopes or Vehicle Services?

Scopes and Vehicle Services might look similar but achieve two different goals:
- 📡 **Vehicle Services: Data Upload**: vehicle service activation will enable the upload of the corresponding dataset from the vehicle to Stellantis servers.
- 👤 **Scopes: Authorizing Data**: an end-user (Ressource Owner) can authorize a third-party application (Accessing Party) to access its vehicle data. This is done during the enrollment process.

Vehicle service activation & user authorization of data scopes are both managed during the [enrollment process]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article), checkout [user journey]({{site.baseurl}}) for more information about vehicle services activation on the vehicle side.

## List of Scopes

Scopes are **groups of data** that a Ressource Owner can decide to share or not to a Third Party Application (Accessing Party).

You can find out the scope to which an individual data belongs by browsing the **[Data Catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article)**.

Scopes exist under two different categories:
- 🚙 **Data:** allowing retrieving vehicle data.
  - `data:telemetry`
  - `data:position`
  - `data:trip`
  - `data:alert`
  - `data:collision`
- 🕹 **Remote:** for remote command access to the vehicle.
  - `remote:door:write`
  - `remote:preconditioning:write`
  - `remote:horn:write`
  - `remote:charging:write`
  - `remote:lights:write`
  - `remote:wakeup:write`
  - `remote:navigation:write`

#### App registration

The first step to use this API is to [register your Application]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article).