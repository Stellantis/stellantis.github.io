---
layout: doc-article
permalink: /mobile-sdk/references/list/
section: mobile-sdk
categorie: API Reference
require: reference-list
on_this_page: false
title: References
description: "Connected vehicle mobile SDK Reference: list of functions."
redirect_from:
    - /mobile-sdk/references/
---



<div class="notification page-disclaimer">
  <div>
    This list of references allows browsing connected vehicle <strong>Mobile SDK</strong>. These API can be available under 3 methods,<a href="{{site.baseurl}}/mobile-sdk/overview/get-started/#api-methods"> see Get Started</a> for more info:
    <ul>
      <li>
        <strong>Get</strong> 
        retrieve the current state or value of this information.
      </li>
      <li>
        <strong>Set</strong> 
        change the value of this parameter in the vehicle
      </li>
      <li>
        <strong>Subscribe/Unsubscribe</strong>
        receive (or stop receiving) events about a specific status.
      </li>
    </ul>
  </div>
</div>

<hr>

{% for domain in site.data.mobile-sdk-domains %}
<div class="reference-domain">
  <div style="display: flex; justify-content: center">
    <h2 style="
          color: #323a58;
          width: 100%;
          font-size: 1.6rem;
          font-weight: 600;
          padding-top: 9rem;
          margin-bottom: 2.125rem;
          margin-left: 30px;"
    >{{domain.name}}.*</h2>
  </div>
  {% for component in site.data.mobile-sdk-components %}
    {% if component.domain == domain.tag %}
      {% assign apis = site.mobile-sdk-reference | where: "component", component.tag %}
      {% include 
        api-reference-list.html
        sdk_name="mobile-sdk"
        githubFolder="_mobile-sdk-reference/"
        component=component
        type="feature-title"
        apis=apis
      %}
    {% endif %}
  {% endfor %}
</div>
{% endfor %}



