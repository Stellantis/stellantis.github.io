---
layout: doc-article
permalink: /webapi/b2b/quickstart/authentication/
redirect_from: 
    - /webapi/b2b/quickstart/
    - /webapi/b2b/authentication/
section: webapi
subsection: b2b
categorie: Quickstart
title: Authentication
description: "Getting authentication in Stellantis network is required in order to use Stellantis Fleet owner API."
require: api-reference
---
{% include  content/get-your-certificate.md %}

# 5. Request Example
In order to use Stellantis Fleet owner API, you must authenticate yourself as a partner in Stellantis's network! Look further for more info about [B2B authentication](#authentication-b2b).
Once you get what you need for authentication, you can try to send your first request to Stellantis's API.

Here is an example of cURL request:

{% include webapi-curl.md apiEndpointB2B='/fleets' httpVerb='GET' referenceURLResssourceB2B='/#/Fleet/getFleets' displayApiURL=true %}

Type|Name|Value|Description|Required
-|-|-|-|-
Query Parameter|`client_id`|`<App_ID>`|Id of the application.|Yes
File|Client Certificate|`path/to/client_certificate.pem`|Your [SSL certificate](#authentication-b2b) for authentication in Stelantis network.|Yes
File|Private Key|`path/to/key.pem`|Your Private Key file.|Yes
File|CA Certificate|`path/to/ca_certificate.pem`|Stellantis CA Cert for peer verification.|Yes
Header|`accept`|`application/json`| Advertises that you accept JSON content-type. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *user:password* in Base64.  |Yes


# See Also

##### Tutorial

A [Quick Start guide]({{ site.baseurl }}/webapi/b2b/quickstart/examples/) is provided to help you understand the basics and get started.

##### Testing the API

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/api-reference/references/) directly.
