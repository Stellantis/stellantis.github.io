---
layout: doc-article
permalink: /mobile-sdk/references/list/
section: mobile-sdk
categorie: API Reference
require: reference-list
title: References
redirect_from:
    - /mobile-sdk/references/
description: "Connected vehicle mobile SDK Reference: list of functions."
---
<div class="content" style="padding: 0">

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

  <a class="notification-link" href="{{site.baseurl}}/mobile-sdk/references/changelog/#article">
    <div class="notification page-disclaimer" style="display: flex; justify-content: space-between">
      <p>
        <strong>Changelog:</strong>
          history and versioning of Mobile SDK.
      </p>
      <span class="icon is-white">
        <i class="fas fa-external-link-square-alt"></i>
      </span>
    </div>
  </a>

</div>

<div class="list-table-container">
  <table class="list-table">
    <thead class="list-table-head">
      <tr>
        <th>Domain</th>
        <th>Component</th>
      </tr>
    </thead>

  {% for domain in site.data.mobile-sdk-domains %}
    <tr>
      <td><a class="list-table-domain" href="#{{domain.name}}">{{domain.name}}.*</a></td>
      <td>
        {% for component in site.data.mobile-sdk-components %}
        {% if component.domain == domain.tag %}
            <a class="list-table-component" href="#domain-{{component.name}}">{{component.icon}} {{component.name }}</a><br>
        {% endif %}
      {% endfor %}
      </td>
    </tr>
  {% endfor %}
  </table>
</div>

{% for domain in site.data.mobile-sdk-domains %}
<div class="reference-domain">
  <div class="is-flex is-justify-content-center">
    <a 
      class="reference-domain-name"
      href="#{{domain.name}}"
      id="{{domain.name}}"
    >
      {{domain.name}}.*
    </a>
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