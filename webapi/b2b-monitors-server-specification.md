---
layout: doc-article
permalink: /webapi/b2b/monitor/server-specification/
section: webapi
subsection: b2b
categorie: Monitor
title: Server Specification
require: swagger
redirect_from: 
    - /webapi/b2b/monitor/webhook/
    - /webapi/b2b/monitor/webhook-v3/
    - /webapi/b2b/monitor/webhook-v2/
gitHubPath: webapi/content/webapi-server-specification.md
description: "Learn how to set-up the B2B API callback server in order to receive Monitor notifications."
---
{% assign specification_reference = site.baseurl | append: "/assets/openapi/api-b2b-webhook-template-v3.yaml" %}

{% include_relative content/webapi-server-specification.md %}