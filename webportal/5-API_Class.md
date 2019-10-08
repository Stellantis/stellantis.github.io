---
layout: doc-article
permalink: /webportal/class/
section: webportal
title: API Class
---
{% assign classes = site.webportal-public-reference | where:"type", "class" %}
{% for class in classes %}
<a href="https://github.com/GroupePSA/groupepsa.github.io/tree/master/_headunit-sdk"
    class="button is-link is-outlined is-pulled-right" target="_blank" title="Edit this page on GitHub">
    <i style="font-size: 1.6rem" class="fab fa-2x fa-github  is-white"></i> 
    &nbsp; Edit Page
</a>
<h1 id="{{ class.title }}">{{ class.title}}</h1>
<p>{{ class.content }}</p>
<hr>
{% endfor %}