---
layout: doc-article
permalink: /webportal/class/
section: webportal
title: API Class
gitHubPath: _webportal-public-reference/
---

{% assign classes = site.webportal-public-reference | where:"type", "class" %}
{% for class in classes %}
<h1 id="{{ class.title }}">{{ class.title}}</h1>
<p>{{ class.content }}</p>
<hr>
{% endfor %}