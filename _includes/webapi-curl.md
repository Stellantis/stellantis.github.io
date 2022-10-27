{% comment %} -----------------------------------------------------

{% assign getVehicleListQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>' | split: ", " %}
{% assign getVehicleListHeaders = 'indexRange: <element_per_page>, pageSize: <nb_of_pages>' | split: ", " %}

{% include webapi-curl.md
  httpVerb='POST'
   apiEndpointB2B='/fleets/{fid}/remote/callbacks'
   apiEndpointB2C='/user/remote/callbacks' referenceURLResssourceB2B='setFleetVehicleRemote' referenceURLResssourceB2C='sendRemoteToVhl'
  referenceURLResssourceB2B='getVehiclesByDevice'
  referenceURLResssourceB2C='getVehiclesByDevice'
  queryParams=getVehicleListQueryParams
  HTTPHeader=getVehicleListQueryParams
  httpBody='{
  "retryPolicy": { },
  "batchNotify": { },
  "callback": { },
  "label": "callback-name",
  "extendedEventParam": [ ]
}' %}

----------------------------------------------------- {% endcomment %}

{% capture request %}
{% if include.requestQuery %}
{{include.requestQuery}}
{% elsif page.subsection == 'b2b' %}
```shell
$ curl \
  --{{include.httpVerb}} \
  --url '{{site.webapiB2B}}{{include.apiEndpointB2B}}' \
  --data 'client_id=<client_id>' \
  --header 'Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
  --cert 'path/to/client_cert.pem[:<cert_password>]' \
  --key 'path/to/key.pem' \
  --cacert 'path/to/ca_cert.pem' \{% for queryParam in include.queryParams %}
  --data '{{queryParam}}' \{% endfor %}{% for HTTPHeader in include.HTTPHeaders %}
  --header '{{HTTPHeader}}' \{% endfor %}{% if include.httpBody %}
  --data '<check out HTTP body>' \{% endif %}
```

{% elsif page.subsection == 'b2c' %}
```shell
$ curl \
  --{{include.httpVerb}} \
  --url '{{site.webapiB2C}}{{include.apiEndpointB2C}}' \
  --data 'client_id=<client_id>' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'x-introspect-realm: <realm>' \{% for queryParam in include.queryParams %}
  --data '{{queryParam}}' \{% endfor %}{% for HTTPHeader in include.HTTPHeaders %}
  --header '{{HTTPHeader}}' \{% endfor %}{% if include.httpBody %}
  --data '<check out HTTP body>' \{% endif %}
```
{% endif %}
{% endcapture %}

{% capture httpRequestBody %}
```json
{{ include.httpBody }}
```
{% endcapture %}

{% capture sample_id %}{{include.type}}-{{include.name | slugify }}{% if include.subname %}-{{include.subname | slugify}}{% endif %}{% if include.description %}-{{include.description | slugify}}{% endif %}{% endcapture %}

<div
  id="{{sample_id}}"
  class="api-content-code api-code-content-webapi"
  style="margin-bottom: 1.5rem;"
>

  {%- comment -%} HEADER {%- endcomment -%}
  <div class="api-code-header">

  {% capture header_class %}api-code-header-text {% if include.httpVerb %}api-code-header-
  {%- if include.httpVerb == "GET" -%}get
  {%- elsif include.httpVerb == "PUT" -%}set
  {%- elsif include.httpVerb == "POST" -%}subscribe
  {%- elsif include.httpVerb == "DELETE" -%}delete
  {%- endif -%}{%- endif -%}{% endcapture %}

    <a 
      class="{{header_class}}"
      href="{{site.baseurl}}
      {%- if page.subsection == "b2c" -%}/webapi/b2c/api-reference/specification/#operation/{{include.referenceURLResssourceB2C}}
      {%- elsif page.subsection == "b2b" -%}/webapi/b2b/api-reference-v3/specification/#operation/{{include.referenceURLResssourceB2B}}{%- endif -%}"
    >
      {{include.httpVerb}} |&nbsp;

      {%- if page.subsection == "b2c" -%}
        {%- if include.apiBaseUrl -%}
          {{include.apiBaseUrl}}
        {%- else -%}
          {{site.webapiB2C}}
        {%- endif -%}
        <br>
        <strong>{{include.apiEndpointB2C}}</strong>
      {%- elsif page.subsection == "b2b" -%}
        {%- if include.apiBaseUrl -%}
          {{include.apiBaseUrl}}
        {%- else -%}
          {{site.webapiB2B}}
        {%- endif -%}
        <br>
        <strong>{{include.apiEndpointB2B}}</strong>
      {%- endif -%}

    </a>
  </div>
  {%- comment -%} END HEADER {%- endcomment -%}

  {%- comment -%} REQUEST {%- endcomment -%}
  {% unless include.hideRequest == true %}
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span class="api-code-tab-text">HTTP Request</span>
          </div>
          {% if include.httpBody %}
          <div class="api-code-tab swift">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-code"></i>
            </span>
            <span class="api-code-tab-text">HTTP Body</span>
          </div>
          {% endif %}
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
        {{request | markdownify}}
    </div>
    <div class="api-content-code-example api-content-code-example-req-swift">
      {% if include.httpBody %}
        {{httpRequestBody | markdownify}}
      {% endif %}
    </div>
  </div>
  {% endunless %}
  {%- comment -%} END REQUEST {%- endcomment -%}

  {%- comment -%} RESPONSE {%- endcomment -%}
  {% if include.200 %}
  <div class="code-block first-block kotlin">
    <div class="api-code-header">
      <div class="api-code-tabs-container">
        <nav class="api-code-tabs">
          <div class="api-code-tab kotlin">
            <span class="api-code-tab-icon is-white">
              <i class="fas fa-long-arrow-alt-down"></i>
            </span>
            <span class="api-code-tab-text">HTTP Response 200</span>
          </div>
        </nav>
      </div>
    </div>
    <div class="api-content-code-example api-content-code-example-req-kotlin">
        {{include.200 | markdownify}}
    </div>
  </div>
  {% endif %}
  {%- comment -%} END RESPONSE {%- endcomment -%}

</div>