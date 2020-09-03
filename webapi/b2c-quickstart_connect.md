---
layout: doc-article
permalink: /webapi/b2c/quickstart/connect/
redirect_from: 
    - /webapi/b2c/quickstart/
    - /webapi/b2b/connect/
section: webapi
subsection: b2c
categorie: Quickstart
title: Connect
description: "In this tutorial you will find an explanation about connecting your app to our API through our dedicated website."
---

# CONNECT YOUR APP

*Groupe PSA B2C APIs for connected vehicles* let you access vehicles data of your users. In order to authorize your application and your users, we use open standard [OAuth 2](https://oauth.net/2/). This authentication standard implies that you need bearer token in order to access our connected vehicles API.

This step-by-step tutorial explains the flowchart intended to request and obtain a token for *B2C connected vehicle API*. First, you must **identify your app** on our website, then we will see how to get a **bearer token** and finally an example of request with this token.

**Required info**:
- `client_id`: your APP ID in Groupe PSA developer platform.
- `client_secret`: your APP Secret in Groupe PSA developer platform.
- `authorization grant`: this grant is your user identification in Groupe PSA system.
- `bearer token`: this token allows your app to access vehicle data of one of your users.

At the end of this process you will have everything you need to consume our *B2C API for connected vehicles*.

This schema explains the whole process:

<img src="{{site.baseurl}}/assets/images/connect-b2c-process.jpg" alt="connect-b2c-process" style="width: 470px">

# 1. REGISTER YOUR APP

## 1.1 DEVELOPER ACCOUNT

On **[developer.groupe-psa.com](https://developer.groupe-psa.com/){:target="_blank"}**:

- Start by clicking on *Create an account* in the top right corner.
- Specify your info: enter your *name*, *email address*, a *password* and the name of your *organization*.
- Read and accept the *terms and conditions*, do not forget the CAPTCHA.
- Then click on *create a new account* to validate the creation of your account.
- You will receive an *activation email*, please use the link to confirm your account.

<img src="{{site.baseurl}}/assets/images/connect-b2c-signup.gif" alt="connect-b2c-signup" style="width: 480px">

## 1.2 REGITSER YOUR APP

Once your account is created and confirmed, you will be able to login on the website. To do so, click on [login link](https://developer.groupe-psa.com/inc/user/login){:target="_blank"} in the top right corner of PG4D website.

Next step is to create your application. This process will create an identifier for your app in Groupe PSA's information system:
- Please *browse* the [APP](https://developer.groupe-psa.com/inc/application){:target="_blank"} tab in the nav bar.
- Then choose the *create a new app* button.
- Choose a *name* (required), type a *description* (optional) and fill the redirect OAuth2 redirection *URI* (you can modify this one later).
-  Finally, press *submit*.
- Save your `client_id` & `client_secret`.

> **Be careful:** once your app has been submitted, you will be redirected to a page with your app info. At the top of the window, your `client_secret` will be displayed (you have to toggle *Show Client Secret*). This is the **ONLY** time it will be displayed on the website, you will then only be able to verify or reset it, so please write it down somewhere and keep it safe.
You can retrieve your `client_id` at any time: go to the *APP tab* > select your APP > toggle *show* Client ID.

<img src="{{site.baseurl}}/assets/images/connect-b2c-create_app.gif" alt="connect-b2c-create_app" style="width: 480px">

## 1.3 SELECT PRODUCTS

Now you have an account hosting your APP:
- You can browse available APIs on *API Product* tab.
- Then select *Connected Car - B2C* in the list.
- Choose a plan by clicking on *subscribe*, select your app and press subscribe again.

For your requests to the API, you must use your `client_id`, `client_secret` and an `access token`.

<img src="{{site.baseurl}}/assets/images/connect-b2c-subscribe_app.gif" alt="connect-b2c-subscribe_app" style="width: 480px">

# 2. ACCESS TOKEN

Groupe PSA's WEB API for end-users use authentication based on OAuth2. 
The process to connect to the API require that you get an access token in exchange for a Grant of your user.

## 2.2 REQUEST

<div class="buttons has-addons">
  <a href="#2-access-token" class="tag_endpoint_large button is-info"> API BaseURL</a>
  <a href="#2-access-token" class="tag_endpoint_large tag_api_endpoint button is-info">
  {{site.cvsOAuth2PreProd}}  
  </a>
</div>

```shell
$ curl \
  --request POST \
  --url '{{site.cvsOAuth2PreProd}}' \
  --header 'Authorization: Basic <(client_id:client_secret)base64>' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data 'realm=<realm>&grant_type=password&password=<password>&username=<username>scope=profile%20openid'
```

|Type|Name|Value|Description|Required|
|-|-|-|-|-|
|Path param |`{brand.tld}`|`<brand.tld>`|Depend on the vehicle brand:<br/>&nbsp;- Peugeot: `peugeot.com`<br/> &nbsp;- Citroen: `citroen.com`<br/> &nbsp;- DS: `driveds.com`<br/> &nbsp;- Opel: `opel.com`<br/> &nbsp;- Vauxhall: `vauxhall.co.uk`|Yes|
|Query param |`grant_type`|`password`| Use OAuth2 password method. |Yes|
|Query param |`password`|`<password>`| User password. |Yes|
|Query param |`username`|`<username>`| User username id. |Yes|
|Query param |`scope`|`profile%20openid`| Scope is profile openID. |Yes|
|Query param | `realm`|`<realm>`| Realm of the brand: <br/>&nbsp;- Peugeot: `clientsB2CPeugeot`<br/> &nbsp;- Citroen: `clientsB2CCitroen`<br/> &nbsp;- DS: `clientsB2CDS`<br/> &nbsp;- Opel: `clientsB2COpel`<br/> &nbsp;- Vauxhall: `clientsB2CVauxhall`| Yes |
|Header|`authorization`|`Basic <(client_id:client_secret)base64> `|Indicate that authentication is Basic Auth and *&lt;(client_id:client_secret)base64&gt;* means that you have to pass `client_id:client_secret` of your application encoded in Base64.  |Yes|
|Header|`content-type`|`application/x-www-form-urlencoded`| Indicate content-type of your submited resource. |Yes|

## 2.1 RESPONSE

Here is the description of the JSON response:


```json
{
    "scope": "openid profile",
    "expires_in": 3599,
    "token_type": "Bearer",
    "refresh_token": "4f5f3749-0738-40ed-973c-0572b5ec2048",
    "id_token": "eyAidHlwIjogIkpXVCIsICJhbGciOiAiUlM",
    "access_token": "4213cf9e-f9a6-4ec8-be9e-568d715e3029"
} 
```

Name|Value|Description
-|-|-
`scope`|`list of scopes`| Scope list.
`expires_in`|`<seconds>`| Period of validity in seconds. Default is 24 hours.
`token_type`|`Bearer`| Token type is always Bearer.
`refresh_token`|`<uuid>`| Refresh token can be used to replace `user:password` as described in Oauth2 spec.
`id_token`|`openID`| OpenID token.
`access_token`|`<uuid>`| This is the access token you have to use to consume the API.


# 3. CONNECTION EXAMPLE

Once you get your token, you can test your bearer by **requesting** the *B2C API*:

{% include_relative content/webapi-curl.md apiEndpointB2C='/user/vehicles' referenceURLResssourceB2B='/#/Vehicles/getVehiclesByDevice' httpVerb='GET' displayApiURL=true %}

Type|Name|Value|Description|Required
-|-|-|-|-
Query parameter | `client_id`|`<App_ID>`|Id of the application.|Yes
Header | `Authorization: `|`Bearer <access_token>`| Granted token allowing to consume the API. | Yes
Header | `x-introspect-realm:` |`<realm>`| Realm of the brand: <br/>&nbsp;- Peugeot: `clientsB2CPeugeot`<br/> &nbsp;- Citroen: `clientsB2CCitroen`<br/> &nbsp;- DS: `clientsB2CDS`<br/> &nbsp;- Opel: `clientsB2COpel`<br/> &nbsp;- Vauxhall: `clientsB2CVauxhall`| Yes
Header | `Accept:`|`application/hal+json`| Advertises that you accept JSON content type. | Yes

If your request is valid, then you should receive that kind of **HTTP response**:

```json
{
    "_links": {...},
    "total": 2,
    "_embedded": {
        "vehicles": [
            {
                "id": ,
                "vin": "VR3ATTENTJY236996",
                "brand": "Peugeot",
                "pictures": [],
                "_links": {...}
            },
            {
                "id": ,
                "vin": "VR300054456744033",
                "brand": "Peugeot",
                "_links": {...}
            },
        ]
    },
    "currentPage": 1,
    "totalPage": 1
}
```

# SEE ALSO

##### TUTORIAL

A [Quick Start guide]({{ site.baseurl }}/webapi/b2c/quickstart/examples/) is provided to help you understand the basics and get started.

##### TRY OUT!

Retrieve all reference of this API, go to the [API List]({{ site.baseurl }}/webapi/b2c/reference/specification/).
