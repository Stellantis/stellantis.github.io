---
layout: doc-article
permalink: /webapi/b2c/quickstart/about-authentication/
redirect_from: 
    - /webapi/b2c/quickstart/get-started/
    - /webapi/b2c/quickstart/
    - /webapi/b2c/connect/
    - /webapi/b2c/quickstart/connect/
section: webapi
subsection: b2c
categorie: Quickstart
title: About Authentication
description: "In this tutorial you will find an explanation about connecting a developer App to Stellantis API."
---

To access *Stellantis Accessing Party for End-Users API*, the **Third-Party Application (Accessing Party)** and the **End-User (Resource Owner)** should first register themselves in **Stellantis (Resource Server)** information system.

Stellantis End-Users APIs implements [OAuth2 Authorization Code Flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1). As the Accessing Party, using OAuth2 framework will let you **request an authorization** from the Ressource Owner. Therefore, if the access is granted, your application will be able to **access your customer vehicle's data** from Stellantis Ressource Server.

## End-Users API Roles

This schema describes the interactions between the actors involved in the **OAuth2 authorization code flow**: 

<img src="{{site.baseurl}}/assets/images/b2c-actors.svg" alt="b2c-actors" style="width: 580px">


## Authentication Process

This schema summarizes the [OAuth 2](https://oauth.net/2/) process intended to [register your application]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article), [enroll users]({{site.baseurl}}/webapi/b2c/quickstart/access-user-data/#article/#article) and build the appropriate [HTTP request]({{site.baseurl}}/webapi/b2c/quickstart/access-user-data/#article).

<img src="{{site.baseurl}}/assets/images/b2c-access-api-process.svg" alt="b2c-access-api-process" style="width: 500px">

You can start this process by [registering your Application]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article) with Mobilisights.

## Access Accessing Party for End-Users API

This End User API requires that both to meet certain **conditions**.

For the **Resource owner** (or End-User of your App):
- 🚗 Own an **eligible connected vehicle**.
- 🔗 Link the vehicle to a Stellantis **User Account**.
- 📲 **Authorize the Accessing Party** to access its account data. 

For the **Accessing Party** (or third-party application):
- 🖥 Register your Application with Mobilisights.
- 🗝 Enroll Users to obtain an access token.
- ⬇️ Build the appropriate HTTP Request to access user data.

#### Availability & Scopes

Check out [this page](/webapi/b2c/quickstart/data-availability-scopes/#article) in order to understand how data availability & data scopes are managed within this API.