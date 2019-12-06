---
layout: doc-article
permalink: /webapi/b2c/connect/
section: webapib2c
title: Connect
---

# 1. ACCESS TOKEN

Groupe PSA's WEB API for end-users use authentication based on OAuth2. 
The process to connect to the API require that you get an access token in exchange of you login and password.

## REQUEST

<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API URL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >{{site.cvsOAuth2PreProd}}</span>
</div>

**{brand.tld}** depend on the vehicle brand:
- Peugeot: `peugeot.com`
- Citroen: `citroen.com`
- DS: `driveds.com`
- Opel: `opel.com`
- Vauxhall: `vauxhall.co.uk` 

```shell
$ curl \
  --request POST \
  --url '{{site.cvsOAuth2PreProd}}' \
  --header 'Authorization: Basic <(user:password)base64>' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data 'realm=<realm>&grant_type=password&password=<password>&username=<username>scope=profile%20openid'
```

Type|Name|Value|Description|Required
-|-|-|-|-
Path param |`{brand.tld}`|`<brand.tld>`|Depend on the vehicle brand.|Yes
Query param |`grant_type`|`password`| Use OAuth2 password method. |Yes
Query param |`password`|`<password>`| Client secret of your application. |Yes
Query param |`username`|`<username>`| Client id of your application. |Yes
Query param |`scope`|`profile%20openid`| Scope is profile openID. |Yes
Header | `realm`|`<realm>`| Realm of the brand.
Header|`authorization`|`Basic <client_id:client_secret> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *client_id:client_secret* of your application encoded Base64.  |Yes
Header|`content-type`|`application/x-www-form-urlencoded`| Indicate content-type of your submited ressource. |Yes

**&lt;realm&gt;** depend on the vehicle brand:
- Peugeot: `clientsB2CPeugeot`
- Citroen: `clientsB2CCitroen`
- DS: `clientsB2CDS`
- Opel: `clientsB2COpel`
- Vauxhall: `clientsB2CVauxhall`

## RESPONSE

Here is the description of the JSON response:

Name|Value|Description
-|-|-
`scope`|`list of scopes`| Scope list.
`expires_in`|`<seconds>`| Period of validity in seconds. Default is 24 hours.
`token_type`|`Bearer`| Token type is always Bearer.
`refresh_token`|`<uuid>`| Refresh token can be used to replace `user:password` as described in Oauth2 spec.
`id_token`|`openID`| OpenID token.
`access_token`|`<uuid>`| This is the access token you have to use to consume the API.


```json
{
    "scope": "openid profile",
    "expires_in": 3599,
    "token_type": "Bearer",
    "refresh_token": "4f5f3749-0738-40ed-973c-0572b5ec2048",
    "id_token":
"eyAidHlwIjogIkpXVCIsICJhbGciOiAiUlMyNMZiLCAia2lkIjogIlN5bExDNk5qdDFLR1FrdEQ5TXQrMHpjZVFTVT0iIH0eyAidG9rZW5OYW1lIjogImlkX3Rva2VuIiwgImF6cCI6ICJiOTE4OGE2OC0yMjk0LTQ4ZjgtYWRmNC0xZGMzODVmZWM3YWYiLCAic3ViIjogIkFDLUFDTlQyMDAwMDAyNDA2NDkiLCAiYXRfaGFzaCI6ICJrQVd5WFNPWjRwRTVnRU5xdVk3MDJnIiwgImlzcyI6ICJodHRwczovL2lkcGN2cy1wcmVwcm9kLmNpdHJvZW4uY29tOjQ0My9hbS9vYXV0aDIiLCAib3JnLmZvcmdlcm9jay5vcGVuaWRjb25uZWN0Lm9wcyI6ICI5OTkwYzc3OC02YTJiLTRiYTMtYjgwMy04YmZjYWVmOTg0YjgiLCAiZ2l2ZW5fbmRzZSI6ICJSb215IiwgImlhdCI6IDE1NzM4Mjc1ODEsICJhdXRoX3WpbWUiOiAxNTczODI3NTgxLCAiZXhwIjogMTU3MzgyODE4MSwgInRva2VuVHlwZSI6ICJKV1RUb2tlbiIsICJ1cGRhdGVkX2F0IjogIjAiLCAicmVhbG0iOiAiL2NsaWVudHNCMkNDaXRyb2VuIiwgImF1ZCI6IFsgImI5MTg4YTY4LTIyOTQtNDhmOC1hZGY0LTFkYzM4NWZlYzdhZiIgXSwgImZhbWlseV9uYW1lIjogIkNoZW4gTWluIFRhbyIgfQYiGL6b6PYQg2gOg72iMybUrKXquXjXGz7vZQ2IaYZS-2MuWyU39Kor3pgBbLYa8PShqAl18S4WFLT3d3KMO2tlW9kiBnY5RepbEXGCqRYpA_1eKgPnUEH8aCpuH9WLKMlmT_R1-gg1HYXAyRGaBl7J5-RIYC7nCL85dBYxwjswg",
    "access_token": "4213cf9e-f9a6-4ec8-be9e-568d715e3029"
} 
```

# 2. CONNECTION EXAMPLE

Once you get your token, you can request the API with it.

## REQUEST

<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >https://api-preprod.groupe-psa.com/connectedcar/v4/</span>
</div>

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles' referenceURLResssource='/#/Vehicles/getVehiclesByDevice' httpVerb='GET' %}

Type|Name|Value|Description|Required
-|-|-|-|-
Query parameter | `client_id`|`<App_ID>`|Id of the application.|Yes
Header | `Authorization: `|`Bearer <access_token>`| Granted token allowing to consume the API.
Header | `x-introspect-realm:`|`<realm>`| Realm of the brand.

**&lt;realm&gt;** depend on the vehicle brand:
- Peugeot: `clientsB2CPeugeot`
- Citroen: `clientsB2CCitroen`
- DS: `clientsB2CDS`
- Opel: `clientsB2COpel`
- Vauxhall: `clientsB2CVauxhall`

## RESPONSE

```json
{
    "_links": {
        "self": {
            "href": "(...)"
        }
    },
    "total": 2,
    "_embedded": {
        "vehicles": [
            {
                "id": ,
                "vin": "VR3ATTENTJY186996",
                "brand": "Peugeot",
                "pictures": [
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)",
                    "(...)"
                ],
                "_links": {
                    "alerts": {
                        "href": "(...)"
                    },
                    "trips": {
                        "href": "(...)"
                    },
                    "self": {
                        "href": "(...)"
                    },
                    "lastPosition": {
                        "href": "(...)"
                    },
                    "telemetry": {
                        "href": "(...)"
                    },
                    "maintenance": {
                        "href": "(...)"
                    },
                    "status": {
                        "href": "(...)"
                    }
                }
            },
            {
                "id": ,
                "vin": "VF300033456744033",
                "brand": "Citroen",
                "_links": {
                    "alerts": {
                        "href": "(...)"
                    },
                    "trips": {
                        "href": "(...)"
                    },
                    "self": {
                        "href": "(...)"
                    },
                    "lastPosition": {
                        "href": "(...)"
                    },
                    "telemetry": {
                        "href": "(...)"
                    },
                    "maintenance": {
                        "href": "(...)"
                    },
                    "status": {
                        "href": "(...)"
                    }
                }
            },
        ]
    },
    "currentPage": 1,
    "totalPage": 1
}
```