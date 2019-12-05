---
layout: doc-article
permalink: /webapi/b2b/authentication/
section: webapib2b
title: Authentication
---
{% include  content/get-your-certificate.md %}

# Test you Authentication
Finnaly, you get what you need for authentication! You can try your to send your first request to Groupe PSA's API.

Here is an example with curl:



{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets' referenceURLResssource='/#/Fleet/getFleets' httpVerb='GET' %}


Type|Name|Value|Description|Required
-|-|-|-|-
Query Parameter|`client_id`|`<App_ID>`|Id of the application.|Yes
File|Client Certificate|`path/to/client_certificate.pem`|Your [SSL certificate](#authentication-b2b) for authentication in groupe PSA network.|Yes
File|Private Key|`path/to/key.pem`|Your Private Key file.|Yes
File|CA Certificate|`path/to/ca_certificate.pem`|PSA CA Cert for peer verification.|Yes
Header|`accept`|`application/hal+json`| Advertises that you accept JSON content type. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *user:password* in Base64.  |Yes


And [here]({{site.baseurl}}/webapi/b2b/quick-start/#connect) you can find an exemple of SSL connexion with python.

# See Also

##### Tutorial

A [Quick Start guide]({{ site.baseurl }}/webapi/b2b/quick-start/) is provided to help you understand the basics and get started.


##### Testing the API

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.
