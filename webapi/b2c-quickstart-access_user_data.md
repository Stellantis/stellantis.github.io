---
layout: doc-article
permalink: /webapi/b2c/quickstart/access-user-data/
section: webapi
subsection: b2c
categorie: Quickstart
title: Access End-User Data
description: "How to build a valid request user data in REST APIs using a valid token."
redirect_from: 
    - /webapi/b2c/quickstart/
require: api-reference
---

<div class="notification notification-empty-bg">

{% capture short %}
**Requirement**:
  - 👤 A [registered Application]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article) in Stellantis systems and [its credentials]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#3%EF%B8%8F⃣-receive-your-credentials).
  - 🔑 Your Application [private key]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#2%EF%B8%8F⃣-generates-encryption-keys--csr).
  - 🪙 An [Access Token]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article) allowing requesting data about a user enrolled in your App.

**Tutorial Output**: an authorized access to the End-User API.
  - 🚗 An authorized access to the vehicle data of the End User.
{% endcapture %}
{{ short | markdownify}}

</div>

In this page, we will build a valid HTTP request to the **End-User API**. First, make sure you have completed the following tutorials: [Authentication summary]({{site.baseurl}}/webapi/b2c/quickstart/about-authentication/#article), [App registration]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article), [Enroll Users]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article). 

As an Accessing Party, you'll need the following credentials to End-Users APIs:
- 👤 Application **Client ID**.
- 🗝 Application **Client Secret**.
- 📄 Application **Issued Certificate**.
- 📜 Stellantis **CA Certificate**.
- 🔑 Application **Private key**
- 🪙 An **Access Token** for each of your customers.

{% include realms.md %}
## Request Example

Requesting the following API will respond data about the End-User account. The following data are required in the request:

Type|Name|Value|Description|Required
-|-|-|-|-
Query Parameter|`client_id`|`<client_id>`| [Client Id]({{site.baseurl}}/webapi/b2c/quickstart/app-registration/#article) of your application.|Yes
Header|`x-introspect-realm`|`<realm>`| Vehicle manufacturer [realm](#manufacturers-brands--realms). | Yes
Header|`Authorization: Bearer`|`<access-token>`| Ressource Owner Access Token. | Yes
File|Client Certificate|`path/to/client_certificate.pem`| Your [SSL certificate](#authentication-b2b) for authentication in Stelantis network.|Yes
File|Private Key|`path/to/key.pem`| Your Private Key file.| Yes
File|CA Certificate|`path/to/ca_certificate.pem`| Stellantis CA Cert for peer verification. |Yes

{% capture getUserVehicleResponse %}
```http
HTTP/1.1 200 OK
Date: Day, XX Mon YYYY HH:MM:SS GMT
Content-Type: application/json

{
  /*Timestamps*/
  "updatedAt": "YYYY-MM-24THH:MM:SSZ",
  "createdAt": "YYYY-MM-24THH:MM:SSZ",
  /*Related Resources*/
  "_links": { },
  /*Account Info*/
  "email": "user@emailprovider.com",
  "firstName": "string",
  "lastName": "string",
  /*Embedded Resources*/
  "_embedded": { "Vehicles": [] }
}
```
{% endcapture %}

{% assign standardRequestHttpHeaders = "" | split: ", " %}

{% assign standardRequestQueryParams = "" | split: ", " %}


{% include webapi-curl.md
    apiEndpointB2C='/user'
    referenceURLResssourceB2C='getUser'
    httpVerb='GET'
    displayApiURL=true
    HTTPHeaders=standardRequestHttpHeaders
    queryParams=standardRequestQueryParams
    200=getUserVehicleResponse
%}

These data are information about the user related to the **access token of the HTTP request**.

You might need to check out the [API Concepts]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#article) in order to understand this API structure like:
- **Single object** vs. **Collections**
- collection **Pagination**
- discovering resources using **_links**

#### API References

You just perform your first HTTP request to the **End-User** API! You can browse [this page]({{site.baseurl}}/webapi/b2c/quickstart/request_examples/#article) for more request examples.