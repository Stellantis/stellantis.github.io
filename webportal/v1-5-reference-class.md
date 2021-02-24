---
layout: doc-article
permalink: /webportal/v1/api-reference/class/
section: webportal
subsection: v1
categorie: API Reference 
title: Class
gitHubPath: _webportal-nac-reference/
description: "Groupe PSA Webportal API Class: summary of this API available features."
redirect_from:
 - /webportal/class/
---

{% assign classes = site.webportal-nac-reference | where:"type", "class" %}
{% for class in classes %}
<h1 id="{{ class.title }}">{{ class.title}}</h1>
<p>{{ class.content }}</p>
<hr>
{% endfor %}