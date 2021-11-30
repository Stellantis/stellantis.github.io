---
layout: simple-article
permalink: /connected-vehicles/access-requirements/
section: connected-vehicles
title: Access Requirements
subsection: overview
description: "Subscribing your vehicle(s) to Stellantis's Connected Services is mandatory in order to retrieve data."
subtitle: What's Required?
---

<div class="notification page-disclaimer">
    <p><strong>Reminder:</strong> Stellantis End User API for Citroën, DS, Peugeot, Opel and Vauxhall, Web API B2C-v4, has not yet been published publicly yet.</p>
</div>


Stellantis API for Citroën, DS, Peugeot, Opel and Vauxhall are the technical interfaces available for **application developers** in order to retrieve data and interact with vehicles. They are made to **provide data and features** related to Stellantis (Citroën, DS, Peugeot, Opel and Vauxhall) Connected Vehicles.

In order to access & to make these API works, it's mandatory to fulfill the **requirements**, especially subscribe to at least one *Connected Vehicle Service*. Each of these services is bind to a *data scope* which gives access to a range of data & features in the API.

Here are the references of these API:
- **Web API** [B2B-v2]({{site.baseurl}}/webapi/b2b/api-reference-v2/specification/#article), [B2B-v3]({{site.baseurl}}/webapi/b2b/api-reference-v3/specification/#article) and [B2C-v4]({{site.baseurl}}/webapi/b2c/api-reference/specification/#article).
- **Embedded Infotainment**, [Webportal v1]({{site.baseurl}}/webportal/v1/api-reference/list/#article) and [Webportal v2]({{site.baseurl}}/webportal/v2/api-reference/list/#article).

> **Disclaimer:** These references are a scope of possibilities, however it doesn't mean that all these features are actually available. If the feature is not part of any **Connected Vehicle Service scope**, then it's **not currently available for use**.

# REQUIREMENTS

To access a specific data or feature of these API, you need to make sure that these **conditions are fulfilled**: 
- At least one of the vehicle **[Connected Vehicle Services scope](#connected-vehicle-services)** subscription contains this data.
- The vehicle **[privacy settings]({{site.baseurl}}/connected-vehicles/privacy/#article)** should not block the refreshment of the data you want to access.
- Your developer account has subscribed a **[plan (SLA)](#service-level-agreement)** that fits your needs of request.
- In the case of Web API B2C v4, the application should have **[access to the vehicle]({{site.baseurl}}/webapi/b2c/quickstart/connect/#article)**.
- You should set-up your **[authorization](#authorization)** access.

### CONNECTED VEHICLE SERVICES
*Connected Vehicle Services* are products subscribed by a user for a vehicle or a fleet of vehicles. It can be purchased when you buy the vehicle or [online](https://services-store.peugeot.fr/). A *Connected Vehicle Service* is bind to a vehicle and to a **data scope**. The data you can access in the API are the one related to the subscribed *Connected Vehicle Service*.

> **Example:** TMTS for "tele-maintenance tele-service", allow retrieving a scope of data related to maintenance but not more. See [GDPR Data Minimisation](https://gdpr-info.eu/art-5-gdpr/).

![Buy a service]({{site.baseurl}}/assets/images/services-store.jpg)


### SERVICE LEVEL AGREEMENT

SLA (Service Level Agreements) are subscriptions to plans that allow access to Stellantis API for Citroën, DS, Peugeot, Opel and Vauxhall. 

Data about your vehicles or your users vehicles are processed and stored in our dedicated system. In order to access our retrieval services API, you have to subscribe to an API plan (or SLA), depending on how much request you need.

![API plans]({{site.baseurl}}/assets/images/api-plans.jpg)


> **API B2B V2 & v3:** subscriptions can be made with your contact person in Stellantis.<br>
**API B2C v4:** more information in this [tutorial]({{site.baseurl}}/webapi/b2c/quickstart/connect/#article).

### AUTHORIZATION

In order to access online data about your vehicle, there are two options:
- You own a fleet of Stellantis vehicles (Citroën, DS, Peugeot, Opel and Vauxhall) (**Web API B2B** v2 & v3). In this case, you can access your vehicle's data as you wish. This [tutorial]({{site.baseurl}}/webapi/b2b/quickstart/authentication/#article) explains the process of authentication for fleet owner.
- You are developing end-users application (**Web API B2C** v4). This [step-by-step]({{site.baseurl}}/webapi/b2c/quickstart/connect/#article) explains connection process. Then you will need to enroll your user using OAuth2 authorization protocol.

# SEE ALSO

#### DATA CATALOG

Look at our [data catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article) to find what kind of information are available in the API.

#### PRIVACY

Our API are affected by vehicle privacy settings, see our [dedicated page]({{site.baseurl}}/connected-vehicles/privacy#article) for more info.