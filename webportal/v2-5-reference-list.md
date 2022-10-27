---
layout: doc-article
permalink: /webportal/v2/api-reference/list/
section: webportal
subsection: v2
title: References
require: reference-list
categorie: API Reference
gitHubPath: _webportal-ivi-public-reference/
description: "Stellantis Embedded Webportal v2 for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall), API Reference: list of API available functions & events."
redirect_from:
  - /webportal/v2/api-reference/
  - /webportal/v2/
  - /webportal/v2/reference/
  - /webportal/v2/reference/list/
---

<div class="notification page-disclaimer">
   This list of references allows browsing Stellantis for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall): <strong>Webportal v2 API</strong>. These API can be available as  <a href="{{site.baseurl}}/webportal/v2/application/quickstart/#vehicle-apis">get, set or subscribe</a>:
  <ul>
    <li>
      <strong>Get</strong> 
      retrieve the current state or value of this information. <em> ex: get driving.speedValue = 30mph</em>
    </li>
    <li>
      <strong>Set</strong> 
      change the value of this parameter in the vehicle.<em> ex: set configuration.consumptionUnit to kilometer per liter (km/l)</em>
    </li>
    <li>
      <strong>Subscribe</strong>
      receive a notification event in a specific condition.<em> ex: subscribe to navigation.destinationReached will trigger an event when the navigation destination is reached</em>
    </li>
  </ul>
  {% include_relative content/reference-privacy-description.html %}
</div>

<div class="reference-domain">

  {% include 
    api-reference-list.html 
    sdk_name="webportalv2"
    githubFolder="_webportal-ivi-public-reference/"
    apis=site.webportal-ivi-public-reference
  %}

</div>