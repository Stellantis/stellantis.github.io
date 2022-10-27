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
description: "Getting B2B authentication in Stellantis network is required in order to consume Stellantis Fleet owner API for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall)."
require: api-reference
---
{% include  content/get-your-certificate.md %}

# 5. Request Example
In order to use Stellantis Fleet owner API for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall), you must authenticate yourself as a partner in Stellantis's network! Look further for more info about [B2B authentication](#authentication-b2b).
Once you get what you need for authentication, you can try to send your first request to Stellantis's API.

Here is an example with cURL:

{% include webapi-curl.md apiEndpointB2B='/fleets' httpVerb='GET' referenceURLResssourceB2B='/#/Fleet/getFleets' displayApiURL=true %}

**{version}** depends on your subscription:
- v2: *delegation publique*
- v3: *connected fleet* / *TMTS* / *UBI*

Type|Name|Value|Description|Required
-|-|-|-|-
Path param |`{version}`|`<v2>` or `<v3>`|Depends on your subscription.|Yes
Query Parameter|`client_id`|`<App_ID>`|Id of the application.|Yes
File|Client Certificate|`path/to/client_certificate.pem`|Your [SSL certificate](#authentication-b2b) for authentication in Stelantis network.|Yes
File|Private Key|`path/to/key.pem`|Your Private Key file.|Yes
File|CA Certificate|`path/to/ca_certificate.pem`|Stellantis CA Cert for peer verification.|Yes
Header|`accept`|`application/json`| Advertises that you accept JSON content type. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *user:password* in Base64.  |Yes


# See Also

##### Tutorial

A [Quick Start guide]({{ site.baseurl }}/webapi/b2b/quickstart/examples/) is provided to help you understand the basics and get started.

##### Testing the API

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/) directly.
