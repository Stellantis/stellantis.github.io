---
layout: doc-article
permalink: /mobile-sdk/security/authentication/
section: mobile-sdk
categorie: Security
title: Authentication
description: "Perform authentication within mobile SDK."
require: api-reference
mobile-sdk-component: BasicAuthentication
---

{% include_relative content/mobile-sdk-feature-security-connectivity.html %}


**Authentication** is the first layer of security in this connected vehicle mobile SDK. This layer of security will log in the user using email & password, this will request and store a token required for **most of this SDK APIs**.

## Check Authentication Status

First, we should check if the user is already logged in. 

In case the response `result` returns the user login, it means that the user is logged. 

Otherwise, you should use the [login API](#login).

{%- capture checkAuthRequestKotlin -%}
  Pair("actionType", "basic"),
  Pair("type", "username")
{%- endcapture -%}

{%- capture checkAuthRequestSwift -%}
  "actionType": "basic",
  "type": "username"
{%- endcapture -%}

{%- capture checkAuthResponse -%}
{
    "login": "name@provider.com"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.authentication.account"
  subname="username"
  request_params_swift=checkAuthRequestSwift
  request_params_kotlin=checkAuthRequestKotlin
  response=checkAuthResponse
%}

# Login

In case the user is not [already authenticated](#check-authentication-status), you should use the login API. Calling this API will prompt an External User-Agent (for native apps it can be the system browser) where the user will be able to log in.

If the status of the response is `succeeded`, you can use the API requiring **Authentication** ✅.

{%- capture setUserBasicAuthLoginRequestKotlin -%}
  Pair("action", "login")
  Pair("context", context)
{%- endcapture -%}

{%- capture setUserBasicAuthLoginRequestSwift -%}
  "action": "login"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.user"
  subname="login"
  request_params_swift=setUserBasicAuthLoginRequestSwift
  request_params_kotlin=setUserBasicAuthLoginRequestKotlin
  response='null'
%}


## Logout

If you need to log out the user, you should use the logout method.

In case the response is `succeeded`, the user is successfully logged out.

{%- capture setUserBasicAuthLogoutRequestKotlin -%}
  Pair("action", "logout")
  Pair("context", context)
{%- endcapture -%}

{%- capture setUserBasicAuthLogoutRequestSwift -%}
  "action": "logout"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.user" 
  subname="logout"
  request_params_swift=setUserBasicAuthLogoutRequestSwift
  request_params_kotlin=setUserBasicAuthLogoutRequestKotlin
  response="null"
%}


## Create an Account

You should implement a "Create an account" feature if the user doesn't have one. Calling this API will prompt an External User-Agent (for native apps it can be the system browser) where the user will be able to create the account.

{%- capture setUserBasicAuthCreateAccountRequestKotlin -%}
  Pair("action", "createAccount")
  Pair("context", context)
{%- endcapture -%}

{%- capture setUserBasicAuthCreateAccountRequestSwift -%}
  "action": "createAccount"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.user" 
  subname="createAccount"
  request_params_swift=setUserBasicAuthCreateAccountRequestSwift
  request_params_kotlin=setUserBasicAuthCreateAccountRequestKotlin
  response="null"
%}

## Update Login

To add a "update login" feature, implement the following api. Calling this API will prompt an External User-Agent (for native apps it can be the system browser) where the user will be able to update the login.

{%- capture setUserBasicAuthUpdateLoginRequestKotlin -%}
  Pair("action", "updateLogin"),
  Pair("context", context)
{%- endcapture -%}

{%- capture setUserBasicAuthUpdateLoginRequestSwift -%}
  Pair("action", "updateLogin")
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.user" 
  subname="updateLogin"
  request_params_swift=setUserBasicAuthUpdateLoginRequestSwift
  request_params_kotlin=setUserBasicAuthUpdateLoginRequestKotlin
  response="null"
%}

## Update Password

To add a "update password" feature, implement the following api. Calling this API will prompt an External User-Agent (for native apps it can be the system browser) where the user will be able to update the password.

{%- capture setUserBasicAuthUpdatePasswordRequestKotlin -%}
  Pair("action", "updatePassword"),
  Pair("context", context)
{%- endcapture -%}

{%- capture setUserBasicAuthUpdatePasswordRequestSwift -%}
  Pair("action", "updatePassword")
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.authentication.user" 
  subname="updatePassword"
  request_params_swift=setUserBasicAuthUpdatePasswordRequestSwift
  request_params_kotlin=setUserBasicAuthUpdatePasswordRequestKotlin
  response="null"
%}

## Error 2301

After requesting any API, if an error `2301` is returned, your **connection is lost**. You should log out the user & log in again in order to fix this error.