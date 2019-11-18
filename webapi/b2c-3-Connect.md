---
layout: doc-article
permalink: /webapi/b2c/connect/
section: webapib2c
title: Connect
---


# 1. Get access token

Groupe PSA's WEB API for end-users use authentication based on OAuth2. 
The process to connect to the API require that you get an access token in exchange of you login and password.

## Request

<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API URL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >https://idpcvs-preprod.{brand.tld}/am/oauth2/access_token</span>
</div>

**{brand.tld}** depend on the vehicle brand:
- Peugeot: `peugeot.com`
- Citroen: `citroen.com`
- DS: `driveds.com`
- Opel: `opel.com`
- Vauxhall: `vauxhall.co.uk` 

Type|Name|Value|Description|Required
-|-|-|-|-
Path param |`grant_type`|`password`| Use OAuth2 password method. |Yes
Header | `realm`|`<Brand Realm>`| Realm of the brand.
Path param |`password`|`<client_secret>`| Client secret of your application. |Yes
Path param |`username`|`<client_id>`| Client id of your application. |Yes
Path param |`scope`|`profile%20openid`| Scope is profile openID. |Yes
Header|`authorization`|`Basic <BASIC_AUTH> `|Indicate that authentication is Basic Auth and *&lt;BASIC_AUTH&gt;* is *client_id:client_secret* of your application encoded Base64.  |Yes
Header|`content-type`|`application/x-www-form-urlencoded`| Indicate content-type of your submited ressource. |Yes

**Realm** depend on the vehicle brand:
- Peugeot: `clientsB2CPeugeot`
- Citroen: `clientsB2CCitroen`
- DS: `clientsB2CDS`
- Opel: `clientsB2COpel`
- Vauxhall: `clientsB2CVauxhall`

```shell
curl -X POST \
  --url 'https://idpcvs-preprod.citroen.com/am/oauth2/access_token' \
  -H 'Authorization: Basic YjkxODhhNjgtMjI5NC00OGY4LWFkZjQtMWRjMzg1ZmVjN2FmOkQzckk0dVUzZEUzc003d1UwblY0dE0zdksxd0cxcEcwZEsxcFc3clU1a0sydEYwdEox' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'realm=clientsB2CCitroen&grant_type=password&password=<password>&username=<username>scope=profile%20openid'
```

## Response

Here is the description of the JSON response:

Name|Value|Description
`scope`|`list of scopes`| Scope list.
`expires_in`|`<seconds>`| Period of validity in seconds. Default is 24 hours.
`token_type`|`Bearer`| Token type is always Bearer.
`refresh_token`|`uuid`| Refresh token can be used to replace `user:password` as described in Oauth2 spec.
`id_token`|`openID`| OpenID token.
`access_token`|`<uuid>`| This is the access token you have to use to consume the API.


```json
{
    "scope": "openid profile",
    "expires_in": 3599,
    "token_type": "Bearer",
    "refresh_token": "4f5f3749-0738-40ed-973c-0572b5ec2018",
    "id_token": "eyAidHlwIjogIkpXVCIsICJhbGciOiAiUlMyNTYiLCAia2lkIjogIlN5bExDNk5qdDFLR1FrdEQ5TXQrMHpjZVFTVT0iIH0.eyAidG9rZW5OYW1lIjogImlkX3Rva2VuIiwgImF6cCI6ICJiOTE4OGE2OC0yMjk0LTQ4ZjgtYWRmNC0xZGMzODVmZWM3YWYiLCAic3ViIjogIkFDLUFDTlQyMDAwMDAyNDA2NDkiLCAiYXRfaGFzaCI6ICJrQVd5WFNPWjRwRTVnRU5xdVk3MDJnIiwgImlzcyI6ICJodHRwczovL2lkcGN2cy1wcmVwcm9kLmNpdHJvZW4uY29tOjQ0My9hbS9vYXV0aDIiLCAib3JnLmZvcmdlcm9jay5vcGVuaWRjb25uZWN0Lm9wcyI6ICI5OTkwYzc3OC02YTJiLTRiYTMtYjgwMy04YmZjYWVmOTg0YjgiLCAiZ2l2ZW5fbmRzZSI6ICJSb215IiwgImlhdCI6IDE1NzM4Mjc1ODEsICJhdXRoX3WpbWUiOiAxNTczODI3NTgxLCAiZXhwIjogMTU3MzgyODE4MSwgInRva2VuVHlwZSI6ICJKV1RUb2tlbiIsICJ1cGRhdGVkX2F0IjogIjAiLCAicmVhbG0iOiAiL2NsaWVudHNCMkNDaXRyb2VuIiwgImF1ZCI6IFsgImI5MTg4YTY4LTIyOTQtNDhmOC1hZGY0LTFkYzM4NWZlYzdhZiIgXSwgImZhbWlseV9uYW1lIjogIkNoZW4gTWluIFRhbyIgfQ.YiGL6b6PYQg2gOg72iMybUrKXquXjXGz7vZQ2IaYZS-2MuWyU39Kor3pgBbLYa8PShqAl18S4WFLT3d3KMO2tlW9kiBnY5RepbEXGCqRYpA_1eKgPnUEH8aCpuH9WLKMlmT_R1-gg1HYXAyRGaBl7J5-RIYC7nCL85dBYxwjswg",
    "access_token": "4213cf9e-f9a8-4ec8-be9e-563d755e3029"
} 
```

# 2. Use your token

Once you get your token, you can request the API with it.

## Request

<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >https://api-preprod.groupe-psa.com/connectedcar/v4/</span>
</div>

<div class="tags has-addons">
    <span class="tag is-large is-info" style=" background: #49cc90;"> GET </span>
    <span class="tag is-large is-fullheight is-light"
        >/user/vehicles</span>
</div>

Type|Name|Value|Description|Required
-|-|-|-|-
Path parameter | `client_id`|`<App_ID>`|Id of the application.|Yes
Header | `Authorization: `|`Bearer <token>`| Granted token allowing to consume the API.
Header | `x-introspect-realm:`|`<Brand Realm>`| Realm of the brand.

**Realm** depend on the vehicle brand:
- Peugeot: `clientsB2CPeugeot`
- Citroen: `clientsB2CCitroen`
- DS: `clientsB2CDS`
- Opel: `clientsB2COpel`
- Vauxhall: `clientsB2CVauxhall`

```shell
curl -X GET \
  'https://api-preprod.groupe-psa.com/connectedcar/v4/user/vehicles' \
  -H 'Authorization: Bearer <uuid>' \
  -H 'x-introspect-realm: clientsB2CCitroen'
  -d 'client_id=<client_id>'
```

## Response

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