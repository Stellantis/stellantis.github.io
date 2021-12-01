---
layout: doc-article
permalink: /webportal/v2/quickstart/response/
section: webportal
subsection: v2
categorie: Quickstart
title: API Response
description: "Tutorial: receive a response from the webportal API."
---

# HOW TO GET WEBPORTAL RESPONSE

## ONMESSAGE

[Onmessage](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage) is a browser API that you need to work with using Stellantis Embedded Webportal for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall).

As your App is a dedicated [Window object](https://developer.mozilla.org/en-US/docs/Web/API/Window), postMessage is a way to receive message from Webportal. Doing so, you're app is able to receive info that you request with [postMessage]({{site.baseurl}}/webportal/v2/quickstart/request/#article)

Here is a typical  that you need to send to webportal in order to communicate with the vehicle:

```js
// Response
this.onmessage(function(e) {
	var idpResponse = e.data;
	console.log(idpResponse);
})
```

## MESSAGE FORMAT

```js
{
  "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
  "type": "REPLY",
  "api": "configuration.VIN",
  "status": 200,
  "statusText": "OK",
  "data": "VF7NCRHE8AY539138"
}
```

Name| Value Type|Value|Description
-|-|-|-
`id`|*string* |n/a |This is the uniq Id of your request you have set when you send the [request]({{site.baseurl}}/webportal/v2/quickstart/response/#article), this way you are be able to identify response this particular request.
`type`|*Enum of strings* |`['GET', 'SET', 'SUBSCRIBE']` | Type of reponse. 
`api`|*string* |n/a| Name of the API. Find a list [here]({{site.baseurl}}/webportal/v2/api-reference/list/#article)
`status`|*int* | `[200, 400]` | This code inform you if the status of your request is ok `200` or not `400`. 
`statusText`|*string* | n/a| This is a message comming with `status` code.
`data`|*string* or *object* |n/a| This field is where you will receive the data of your request.
