---
layout: doc-article
permalink: /webapi/b2b/authentication/
section: webapib2b
title: Authentication
---

# TEST YOU AUTHENTICATION

In order to consume PSA Groupe web API B2B, you must authenticate yourself as a partner in Groupe PSA's network! Look further for more info about [B2B authentication](#authentication-b2b).

Once you get what you need for authentication, you can try your to send your first request to Groupe PSA's API.

Here is an example with curl:

<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag">{{site.webapiB2BPreProd}}</span>
</div>

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets' referenceURLResssource='/#/Fleet/getFleets' httpVerb='GET' %}


**{version}** depend on your subscription:
- v2: *delegation publique*
- v3: *connected fleet* / *TMTS* / *UBI*


Type|Name|Value|Description|Required
-|-|-|-|-
Path param |`{version}`|`<v2>` or `<v3>`|Depend on your subscription.|Yes
Query Parameter|`client_id`|`<App_ID>`|Id of the application.|Yes
File|Client Certificate|`path/to/client_certificate.pem`|Your [SSL certificate](#authentication-b2b) for authentication in groupe PSA network.|Yes
File|Private Key|`path/to/key.pem`|Your Private Key file.|Yes
File|CA Certificate|`path/to/ca_certificate.pem`|PSA CA Cert for peer verification.|Yes
Header|`accept`|`application/json`| Advertises that you accept JSON content type. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *user:password* in Base64.  |Yes

{% include  content/get-your-certificate.md %}

# SEE ALSO

##### TUTORIAL

A [Quick Start guide]({{ site.baseurl }}/webapi/b2b/quick-start/) is provided to help you understand the basics and get started.


##### TESTING THE API

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.
