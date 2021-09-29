---
layout: doc-article
permalink: /webportal/v2/quickstart/request/
section: webportal
subsection: v2
categorie: Quickstart
title: API Request
description: "Tutorial: send a request to the webportal API."
---

# HOW TO SEND WEBPORTAL REQUEST

## POSTMESSAGE

Postmessage [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) is a browser API that you need to work with Groupe PSA embedded Webportal.

As your App is a dedicated [Window object](https://developer.mozilla.org/en-US/docs/Web/API/Window), postMessage is a way to communicate with webportal. Doing so, you're app is able to request info about the vehicle as well as sending data to it!

Here is a typical postMessage that you need to send to webportal in order to communicate with the vehicle:

```js
var requestId = generateRandomId();
parent.postMessage('*', {
    "id": requestId,
    "type": "GET",
    "api": "configuration.VIN",
    "params": null
})
```

## MESSAGE FORMAT

Description of the message:

Name| Value Type| API Type|Value|Description|Required
-|-|-|-
`id`|*string*| *Get, Set, Subscribe* |n/a |This is the uniq Id of your request it will be inside every respond to this request, this way you will be able to identify response to this particular request. You have to generate this Id by yourself.| Yes
`type`|*Enum of strings*| *Get, Set, Subscribe* |`['GET', 'SET', 'SUBSCRIBE']` | Type of your request, see below. | Yes
`api`|*string*| *Get, Set, Subscribe* |n/a|Name of the API. Find a list [here]({{site.baseurl}}/webportal/v2/api-reference/list/#article)| Yes
`params`|*string* or *object*| *Get, Set, Subscribe* |n/a|This field is where you will pass the parameters required (or not) for this API. If there is no parameter for this API it should be `null`. | Yes
`period`|*number*| *Subscribe* |n/a|Period of time in seconds between subscribe's message update.| No
`tolerance`|*number*| *Subscribe* |n/a|For APIs returning continuous value, this field will set a limit under which you will not be triggered. to be | No

See how to get the [response]({{site.baseurl}}/webportal/v2/quickstart/response/#article)!