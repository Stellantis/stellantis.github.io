---
layout: doc-article
permalink: /connected-vehicles/connected-services/
section: connected-vehicles
title: Connected Services
description: ""
---

Groupe PSA APIs are one side of connected vehicles services. 
In order to retrieve data from your vehicles or from your users vehicles using our **REST API**, you need to make sure that these 3 conditions are fulfilled: 
- the car or the fleet is [subscribed](#car-services) to the appropriates services.
- your developer account has subscribed to a [plan](#service-level-agreement) to the API that fit your needs of request.
- set-up your [authorization](#authorization) to the API.

# CAR SERVICES

Car Services are products subscribed by an user on a vehicle or a fleet of vehicles. It can be purchased when you buy the vehicle or [online](https://services-store.peugeot.fr/). A car service is bind to a vehicle and to a **data scope**. 


> Example: TMTS for "tele-maintenance tele-service", allow to retrieve a scope of data related to maintenance. Browse our [catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article) for a list of available data.


![Buy a service]({{site.baseurl}}/assets/images/services-store.png)


# SERVICE LEVEL AGREEMENT

These SLA are subscriptions to plans that allow access to Groupe PSA APIs. 

Data about your vehicles or your users vehicles are processed and stored in our dedicated system. In order to access our retrieval services APIs, you have to subscribe to an API plan or SLA, depending on how much request you need.

![APIs plans]({{site.baseurl}}/assets/images/api-plans.png)

> If you are a fleet owner, please contact your contact person in Groupe PSA. If you are a developer for end-user app, got to [developer.groupe-psa.com](https://developer.groupe-psa.com/inc/) as explained in this [tutorial]({{site.baseurl}}/webapi/b2c/quickstart/connect/#article).

# AUTHORIZATION

In order to access online data about your car there are two options:
- You own a fleet of Groupe PSA's vehicles. In this case, you can access your vehicles data as you wish. Your fleet need to be subscribed to the appropriate [Car Services](#CAR-SERVICES) depending on the data you want to retrieve. Then you can follow this [tutorial]({{site.baseurl}}/webapi/b2b/quickstart/autentication/#article) that explain the process of authentication for fleet owner.
- You are a developer and you want to develop end-users application. You can create an account and subscribe following this [step-by-step]({{site.baseurl}}/webapi/b2c/quickstart/connect/#article). Then you will need to enroll your user using OAuth2 authorization protocol. Your users will necessarily be subscribed to the appropriate [Car Services](#CAR SERVICES) as described above.

# SEE ALSO

#### DATA CATALOG

Look at our [data catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article) to find what kind of information are available in the API.

#### PRIVACY

Our APIs are affected by vehicle privacy settings, see our [dedicated page]({{site.baseurl}}/connected-vehicles/privacy#article) for more info.