
{% comment %} 
<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag">{% if page.section == 'webapib2b' %}{{site.webapiB2BPreProd}}{% elsif page.section == "webapib2c" %}{{site.webapiB2CPreProd}}{% endif %}
    </span>
</div>
{% endcomment %}

<div class="tags has-addons">
    <span class=" tag is-large
    {% if include.httpVerb == 'GET' %}
    get
    {% elsif include.httpVerb == 'POST' %}
    post
    {% elsif include.httpVerb == 'PUT' %}
    put
    {% elsif include.httpVerb == 'DELETE' %}
    verbdelete
    {% else %}
    get
    {% endif %} ">{{include.httpVerb}} </span>
    <span class="tag is-large is-fullheight is-light">
    {% if page.section == 'webapib2b' %}
    <a href="{{site.baseurl}}/webapi/b2b/reference{{include.referenceURLResssource}}">{{include.apiEndpoint}}</a>
    {% elsif page.section == "webapib2c" %}
    <a href="{{site.baseurl}}/webapi/b2b/reference{{include.referenceURLResssource}}">{{include.apiEndpoint}}</a>
    {% endif %}
    </span>
</div>

{% if page.section == 'webapib2b' %}

```shell
$ curl \
  --request {{include.httpVerb}} \
  --url '{{site.webapiB2BPreProd}}{{include.apiEndpoint}}?client_id=<client_id>{{include.queryParam}}' \
  --cert 'path/to/client_cert.pem[:<cert_password>]'
  --key 'path/to/key.pem'
  --cacert 'path/to/ca_cert.pem'
  --header 'authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
  --header 'accept: application/hal+json' \
{% if include.httpVerb == 'POST','PUT' %}  --header 'content-type: application/json' \
  --data '<http_body>' \
```


Where **&lt;http_body&gt;** is:


```json
{{ include.httpBody }}
```
{% else %}```
{% endif %}


{% elsif page.section == "webapib2c" %}
    
```shell
$ curl \
  --request {{include.httpVerb}} \
  --url '{{site.webapiB2CPreProd}}{{include.apiEndpoint}}?client_id=<client_id>{{include.queryParam}}' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'x-introspect-realm: <realm>' 
  --header 'accept: application/hal+json' \
{% if include.httpVerb == 'POST','PUT' %}  --header 'content-type: application/json' \
  --data '<http_body>' \
```


Where **&lt;http_body&gt;** is:


```json
{{ include.httpBody }}
```
{% else %}```
{% endif %}

{% endif %}