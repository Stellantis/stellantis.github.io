
##  {{page.title | capitalize}}: Request Example

Here is an example of a request for the **{{page.title}} API**. If you are looking for Web API documentation, please follow theses links: [Fleet owner]({{site.baseurl}}/webapi/b2b/overview/about/#article)/[End User]({{site.baseurl}}/webapi/b2c/overview/about/#article).

<div class="buttons has-addons" style="cursor: default">
  
    <div class="tag_endpoint_large button is-light is-selected {{page.request.httpVerb | downcase }}" style="cursor: default"> 
        {{page.request.httpVerb }} 
    </div>
    <div class="tag_endpoint_large button is-light is-selected" style="cursor: default">
        {{page.request.apiEndpoint}}
    </div>
</div>

```shell
$ curl \
    --request {{page.request.httpVerb}} \
    --url '{base-url}{{page.request.apiEndpoint}}?client_id=<client_id>' \
    --header 'Authorization: <Method> <credential>' \
    {% if page.request.apiEndpoint contains 'lastPosition' %}--header 'Accept: application/vnd.geo+json' \{% else %}--header 'Accept: application/hal+json' \ {% endif %}
```