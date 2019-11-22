
{% comment %} 
<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag">{% if page.section == 'webapib2b' %}{{site.webapiB2BPreProd}}{% elsif page.section == "webapib2c" %}{{site.webapiB2CPreProd}}{% endif %}
    </span>
</div>
{% endcomment %}

<div class="tags has-addons">
    <span class="tag is-large is-info" 
    {% if httpVerb == 'GET' %}
    style="background: #2e95fe;"
    {% elsif httpVerb == 'POST' %}
    style="background: #49cc90;"
    {% elsif httpVerb == 'PUT' %}
    style="background: #fca130;"
    {% elsif httpVerb == 'DELETE' %}
    style="background: #fa5c4f;"
    {% else %}
    style="background: #2d3b56;"
    {% endif %}
    > {{httpVerb}} </span>
    <span class="tag is-large is-fullheight is-light">
    {% if page.section == 'webapib2b' %}
    <a href="{{site.baseurl}}/webapi/b2b/reference{{referenceURLResssource}}">{{apiEndpoint}}</a>
    {% elsif page.section == "webapib2c" %}
    <a href="{{site.baseurl}}/webapi/b2b/reference{{referenceURLResssource}}">{{apiEndpoint}}</a>
    {% endif %}
    </span>
</div>

{% if page.section == 'webapib2b' %}

```shell
$ curl \
  --request {{httpVerb}} \
  --url '{{site.webapiB2BPreProd}}{{apiEndpoint}}?client_id=<client_id>{{queryParam}}' \
  --cert 'C:\mycert[:<cert_password>]'
  --header 'authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
  --header 'accept: application/json' \
{% if httpVerb == 'POST','PUT' %}  --header 'content-type: application/json' \
  --data '<http_body>' \
```


Where **&lt;http_body&gt;** is:


```json
{{ httpBody }}
```
{% else %}```
{% endif %}


{% elsif page.section == "webapib2c" %}
    
```shell
$ curl \
  --request {{httpVerb}} \
  --url '{{site.webapiB2CPreProd}}{{apiEndpoint}}?client_id=<client_id>{{queryParam}}' \
  --header 'Authorization: Bearer <access_token>' \
  --header 'x-introspect-realm: <realm>' 
  --header 'accept: application/json' \
{% if httpVerb == 'POST','PUT' %}  --header 'content-type: application/json' \
  --data '<http_body>' \
```


Where **&lt;http_body&gt;** is:


```json
{{ httpBody }}
```
{% else %}```
{% endif %}

{% endif %}

