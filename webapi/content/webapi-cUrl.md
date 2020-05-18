{% comment %} -----------------------------------------------------

# API call examples
This include page allow to include API request examples to the documentation webapi section.
Structure of this include:
- API URL
- HTTP Verb
- API Endpoint Name
- cUrl request with queryParam
- HTTP Body request

This is how it should be included in any HTML or markdown page of the webapi section:
```liquid
{% include_relative content/webapi-cUrl.md httpVerb='POST' apiEndpointB2B='/user/vehicles/{id}/monitors' referenceURLResssourceB2C='/#/Monitors/createFleetVehicleMonitor' referenceURLResssourceB2B='' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>' displayCURL=false httpBody='{
  "label": "monitor-name",
  "subscribeParam": { },
  "extendedEventParam": [ ],
  "triggerParam": { }
}' %}
```

Where variables are:

Variable | Type | Required | Description | Example
-|-|-|-|-
httpVerb | String | Optional | Display the HTTP verb of the endpoint with appropriate color tag. Default is GET. | Ex: 'POST'.
apiEndpoint | String | Optional | Display the name of this api endpoint. Required if you choose to display API Endpoint | Ex: '/fleets/{fid}/monitors'.
displayApiURL | Boolean | Optional | Choose to display or not the API URL tag. Default: true | Ex: false
displayApiEndpoint | Boolean | Optional | Choose to display or not the API endpoint tag. Default: true | Ex: false
displayCURL | Boolean | Optional | Choose to display or not the cURL request. Default: true | Ex: false
queryParam | String | Optional | Display query params after the URL. | Ex: 'queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>'.
referenceURLResssource | String | Required | Anchor for the endpoint link to the reference. | Ex: '/#/Monitors/createFleetVehicleMonitor'.
httpBody | String | Optional | JSON body of the HTTP request. Required in POST and PUTexamples. | Ex: '{ "label": "monitor-name"}'.
referenceURLResssourceB2B | String | Required | Anchor for the endpoint link to the reference. | Ex: '/#/Monitors/createFleetVehicleMonitor'.
referenceURLResssourceB2C | String | Required | Anchor for the endpoint link to the reference. | Ex: '/#/Monitors/createFleetVehicleMonitor'.

>Note: If the endpoint contain lastPosition, curl request will add a header = 'Accept: application/vnd.geo+json'.

----------------------------------------------------- {% endcomment %}

{% unless include.displayApiURL == true %}
{% else %}
<div class="buttons has-addons">
  {% if page.section == 'webapib2b' %}
  <a href="{{site.baseurl}}/webapi/b2b/reference/" class="tag_endpoint_large button is-info"> API BaseURL</a>
  <a href="{{site.baseurl}}/webapi/b2b/reference/" class="tag_endpoint_large tag_api_endpoint button is-info">
  {{site.webapiB2BPreProd}}
  {% elsif page.section == "webapib2c" %}
  <a href="{{site.baseurl}}/webapi/b2c/reference/" class="tag_endpoint_large button is-info"> API BaseURL</a>
  <a href="{{site.baseurl}}/webapi/b2c/reference/" class="tag_endpoint_large tag_api_endpoint button is-info">
  {{site.webapiB2CPreProd}}
  {% endif %}
  </a>
</div>
{% endunless %}
{% unless include.displayApiEndpoint == false %}

<div class="buttons has-addons">
  {% if page.section == 'webapib2b' %}
    <a href="{{site.baseurl}}/webapi/b2b/reference{{include.referenceURLResssourceB2B}}" class="tag_endpoint_large button is-light is-selected {% if include.httpVerb == 'GET' %}
  get
  {% elsif include.httpVerb == 'POST' %}
  post
  {% elsif include.httpVerb == 'PUT' %}
  put
  {% elsif include.httpVerb == 'DELETE' %}
  verbdelete
  {% else %}
  get
  {% endif %} "> {{include.httpVerb}} </a>
  <a href="{{site.baseurl}}/webapi/b2b/reference{{include.referenceURLResssourceB2B}}" class="tag_endpoint_large button is-light is-selected">
  {{include.apiEndpointB2B}}</a>
  {% elsif page.section == "webapib2c" %}
    <a href="{{site.baseurl}}/webapi/b2c/reference{{include.referenceURLResssourceB2C}}" class="tag_endpoint_large button is-light is-selected {% if include.httpVerb == 'GET' %}
  get
  {% elsif include.httpVerb == 'POST' %}
  post
  {% elsif include.httpVerb == 'PUT' %}
  put
  {% elsif include.httpVerb == 'DELETE' %}
  verbdelete
  {% else %}
  get
  {% endif %} "> {{include.httpVerb}} </a>
   <a href="{{site.baseurl}}/webapi/b2c/reference{{include.referenceURLResssourceB2C}}" class="tag_endpoint_large button is-light is-selected">
  {{include.apiEndpointB2C}}</a>
  {% endif %}
</div>

{% else %} {% endunless %}
{% unless include.displayCURL == false %}
{% if page.section == 'webapib2b' %}
```shell
$ curl \
  --request {{include.httpVerb}} \
  --url '{{site.webapiB2BPreProd}}{{include.apiEndpointB2B}}?client_id=<client_id>{{include.queryParam}}' \
  --cert 'path/to/client_cert.pem[:<cert_password>]'
  --key 'path/to/key.pem'
  --cacert 'path/to/ca_cert.pem'
  --header 'Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
{% if include.apiEndpointB2B contains 'lastPosition' %}  --header 'Accept: application/vnd.geo+json' \{% else %}  --header 'Accept: application/hal+json' \ {% endif %}
{% if include.httpVerb == 'POST','PUT' %}  --header 'Content-type: application/json' \
  --data '<HTTP_body>' \
```

Where **&lt;HTTP_body&gt;** is:

```json
{{ include.httpBody }}
```
{% else %}```
{% endif %}
{% elsif page.section == "webapib2c" %}
```shell
$ curl \
  --request {{include.httpVerb}} \
  --url '{{site.webapiB2CPreProd}}{{include.apiEndpointB2C}}?client_id=<client_id>{{include.queryParam}}' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'x-introspect-realm: <realm>' 
{% if include.apiEndpointB2C contains 'lastPosition' %}  --header 'Accept: application/vnd.geo+json' \
{% else %}  --header 'Accept: application/hal+json' \ {% endif %}
{% if include.httpVerb == 'POST','PUT' %}  --header 'Content-type: application/json' \
    --data '<HTTP_body>' \
```

Where **&lt;HTTP_body&gt;** is:

```json
{{ include.httpBody }}
```
{% else %}```
{% endif %}
{% endif %}
{% else %}
```json
{{ include.httpBody }}
```
{% endunless %}