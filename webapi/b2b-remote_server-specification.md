---
layout: doc-article
permalink: /webapi/b2b/remote/server-specification/
redirect_from:
  - /webapi/b2b/remote/webhook/
  - /webapi/b2b/remote/webhook-v2/
  - /webapi/b2b/remote/webhook-v3/
section: webapi
subsection: b2b
require: swagger
gitHubPath: webapi/content/webapi-server-specification.md
categorie: Remote
title: Server Specification
description: "Learn how to set-up the callback server in order to receive Remote notifications."
---
{% assign specification_reference = site.baseurl | append: "/assets/openapi/api-b2b-webhook-template-v3.yaml" %}

{% include_relative content/webapi-server-specification.md %}