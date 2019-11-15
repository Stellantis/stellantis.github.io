---
layout: doc-article
permalink: /webapi/b2b/authentication/
section: webapib2b
title: Authentication
---
{% include content/authentication_B2B.md %}

# Test you Authentication
Finnaly, you get what you need for authentication! You can try your to send your first request to Groupe PSA's API.

Here is an example with curl:

```shell
$ curl\
  --url 'https://api-cert-preprod.groupe-psa.com/connectedcar/v3/fleets?client_id=<REPLACE_THIS_KEY>' \
  --header 'content-type': "application/json' \
  --header 'accept': 'application/json' \
  --header 'authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
  --cert 'C:\mycert[:mypassword]>'
```

Type|Name|Description|Required
-|-|-|-
Path param|client_id|Your `client_id` allow you to access this API product. | Yes
Header Field|Basic Authentication| This Basic Auth is `account:password` given by PSA encoded in Base64. | Yes
File |Certificate|Your certificate for mutual authentification with PSA.| Yes


And [here]({{site.baseurl}}/webapi/b2b/quick-start/#connect) you can find an exemple of SSL connexion with python.

# See Also

##### Tutorial

A [Quick Start guide]({{ site.baseurl }}/webapi/b2b/quick-start/) is provided to help you understand the basics and get started.


##### Testing the API

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.
