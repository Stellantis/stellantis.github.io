# Virtual-Key

To {% if page.section == 'ios' %}[open a session]({{site.baseurl}}/mobile-sdk/ios/reference/#api-openSessionWithVin:token:succes:andFailure:) {% elsif page.section == 'android' %}[open a session]({{site.baseurl}}/mobile-sdk/android/reference/#api-Open a session){% endif %} with a vehicle, our mobile SDK requires that you pass a **virtual-key token**. 

In order to request this token, you must authenticate yourself as a partner in Groupe PSA network! Look further for more info about [B2B authentication](#authentication-b2b).

## Request

Here is the description of the HTTP request:


<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURI</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >{{site.webapiB2BPreProd}}</span>
</div>

<div class="tags has-addons">
    <span class="tag is-large is-info" style=" background: #49cc90;"> POST </span>
    <span class="tag is-large is-fullheight is-light"
        > /fleets/virtualkey/smartaccess/token</span>
</div>

```shell
$ curl \
  --request POST \
  --url '{{webapiB2BPreProd}}/fleets/virtualkey/smartaccess/token?client_id=<client_id>' \
  --cert 'C:\mycert[:mypassword]' \
  --header 'accept: application/json' \
  --header 'authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==' \
  --header 'content-type: application/json' \
  --data '{"carToken":{"CarData":"SGVsbG8=","CarData_signature":"V29ybGQ="},"duration":"3600"}'
```

Type|Name|Value|Description|Required
-|-|-|-|-
Parameter|`client_id`|`<App_ID>`|Id of the application.|Yes
Header|`accept`|`application/json`| Advertises that you accept JSON content type. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *user:password* in Base64.  |Yes
Header|`content-type`|`application/json`| Indicate content-type of your submited ressource. |Yes
Body|`JSon Payload`|`{"carToken":{"CarData": "<CarData>","CarData_signature":"<CarData_signature>"}, "duration":"<duration>"}`| Car infos retrieved via {% if page.section contains 'ios' %}[addVehicleWithVIN]({{site.baseurl}}/mobile-sdk/ios/reference/#api-addVehicleWithVIN:andUIN:){% endif %}{% if page.section contains 'android' %} [add a vehicle]({{site.baseurl}}/mobile-sdk/android/reference/#api-Add a vehicle){% endif %}. Duration (in second) is the requested validity for this token, default is 24 hours. | Yes
File|Certificate||Your [SSL certificate](#authentication-b2b) for authentication in groupe PSA network.|Yes

## Response

```json
{
  "token": {
    "access_token": "VGhpcyBpcyBhIHNlY3JldCB0b2tlbg==",
    "expires": "2019-08-14T08:39:40Z",
    "expires_in": "3600",
    "token_type": "bearer"
  },
  "token_signature": "VGhpcyB0b2tlbiBpcyB2YWxpZCA7KQ=="
}
```

Here is the description of the JSON response:

Name|Value|Description
-|-|-
`access_token`|`<UUID>`| Granted token for vehicle interaction.
`expires`|`<date>`| Date of validity end.
`expires_in`|`<seconds>`| Period of validity in seconds. Default is 24 hours.
`token_type`|`Bearer`| Token type is always Bearer.
`token_signature`|`<signature>`| For signature check. 

{% comment %}
#### Standard HTTP Errors

Code|Name
-|-
400 | Bad request
401 | Unauthorized
403 | Forbidden
404 | Not found
408 | Request Time-out
500 | Internal Server Error
502 | Bad Gateway ou Proxy Error
503 | Service Unavailable
504 | Gateway Time-out
{% endcomment %}

{% include content/authentication_B2B.md %}