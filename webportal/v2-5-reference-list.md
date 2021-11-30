---
layout: doc-article
permalink: /webportal/v2/api-reference/list/
section: webportal
subsection: v2
title: References
on_this_page: false
require: reference-list
categorie: API Reference
gitHubPath: _webportal-ivi-public-reference/
description: "Stellantis Embedded Webportal v2 for Citroën, DS, Peugeot, Opel and Vauxhall, API Reference: list of API available functions & events."
redirect_from:
  - /webportal/v2/api-reference/
  - /webportal/v2/
  - /webportal/v2/reference/
  - /webportal/v2/reference/list/
---


<div class="notification page-disclaimer">
   This list of references allows to browse Stellantis for Citroën, DS, Peugeot, Opel and Vauxhall: <strong>Webportal v2 API</strong>. These API can be available as  <a href="{{site.baseurl}}/webportal/v2/quickstart/get-set-subscribe/#article">get, set or subscribe</a>:
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
  Depending of the current <a href="{{site.baseurl}}/webportal/v2/overview/privacy/#article">privacy</a> choosen by the vehicle driver int the HMI, API can be available or not:
  <ul>
    <li>
      <em>
        <span class="icon is-white">
          <i class="fas fa-long-arrow-alt-down" style="font-size: .9rem;"></i>
          <i class="fas fa-long-arrow-alt-up" style="font-size: .9rem;"></i>
        </span>
        <span>
          Data &amp;
        </span>
        <span class="icon is-white" style="font-size: .9rem;">
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <span>
          Location:
        </span>
      </em>  
      &nbsp; this API require all access to be granted.
    </li>
    <li>
      <em>
        <span class="icon is-white" style="font-size: .9rem;">
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <span>
          Location:
        </span>
      </em>  
      &nbsp; this API require at least location to be activated.
    </li>
    <li>
      <em>
        None:
      </em>
      &nbsp; this API is always available even in plane mode.
    </li>
  </ul>
</div>
<hr>

{% include reference-list.html 
sdkName="webportal_v2"  githubFolder="_webportal-ivi-reference/"
%}