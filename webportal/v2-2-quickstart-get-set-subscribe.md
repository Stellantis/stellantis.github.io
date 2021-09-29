---
layout: doc-article
permalink: /webportal/v2/quickstart/get-set-subscribe/
section: webportal
subsection: v2
categorie: Quickstart
title: API Response
require: webportal-reference-list
description: "Get Set and Subscribe are the verbs used in webportal v2."
---

# VERBS

As seen [before]({{site.baseurl}}/webportal/v2/quickstart/get-started/#article) you can interact with the webportal by sending and receiving messages throught `postMessage` & `onmessage`.

They are **3 different ways** to interract with webportal! We call them verbs.

Here is a description of theses 3 **verbs**:

<hr>
## GET

`GET` type allow to request **single time** data from the webportal.

**Example:**


```js
// RESPONSE
{
    "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
    "type": "REPLY",
    "api": "engine.totalMileage",
    "status": 200,
    "statusText": "OK",
    "data": 14285
}
```

This is the response when requesting the total mileage of a vehicle.

<hr>

## SET

`SET` type allow to **change a value** or to setup an action depending on the API.

**Example:**


```js
// REQUEST
{
    "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
    "type": "SET",
    "api": "configuration.consumptionUnit",
    "params": 1
}
```

Sending this request will modify the consumption unit in the vehicle HMI.

<hr>

## SUBSCRIBE

`SUBSCRIBE` type allow to **receive a notification** when the data is modified.

**Example:**


```js
// NOTIFICATION
{
    "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
    "type": "NOTIFY",
    "api": "app.visibilityState",
    "status": 200,
    "statusText": "OK",
    "data": {
        "appId": "com.example.app",
        "visibilityState": "visible" 
}
```

This is the notification event received when the visibility of your app change.

<style>
    .api-type .api-verb-suscribe, .api-type .api-verb-set, .api-type .api-verb-get {
        display: flex;
        justify-content: space-around;
        height: 2.3em !important;
        font-size: 1.25rem !important;
        
    }
    .api-type .api-verb-suscribe .icon i, .api-type .api-verb-set .icon i, .api-type .api-verb-get .icon i {
        margin-left: .5rem;
    }
    .api-type {
        cursor: default;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        
    }
</style>