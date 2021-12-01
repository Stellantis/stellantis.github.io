---
layout: doc-article
permalink: /webportal/v2/quickstart/get-started/
section: webportal
subsection: v2
categorie: Quickstart
title: Get Started
description: "This tutorial explains the basics of creating an app for Webportal v2 and using our API features."
redirect_from:
  - /webportal/v2/quickstart/
---

# GETTING STARTED

You will need to contact [Stellantis Team]({{site.baseurl}}/contact-us/) in order to become a partner and deploy your apps on the Webportal so you should start by doing so.
The team will also be able to help you with questions you might have.

## HTML

The HTML part of your project is conventional, you create your objects and static content.

```html
<!-- STYLES -->
<link rel="stylesheet" type="text/css" href="css/main.css">
<!-- SCRIPTS -->
<script type="text/javascript" src="../test/shared/libs/jquery/1.10.0/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>

<div id="mainContainer">
    Hello World!
</div>
```
>**Be carefull**: your app is a single page application. It mean that you must have only one html file ('index.html') in your project.

## CSS

You can customize your CSS stylesheet, here is simply an example changing the color of the text displayed.

```css
// Your normal css file
#mainContainer {
    color: blue;
}
```

## JS

Here you have the required JS for your application to function properly. You can add the functions you need to handle other events.

```javascript
//On document ready
document.addEventListener("DOMContentLoaded", function(event) {

  // Inform the parent window (applications portal) that the application is
  // loaded and ready
  var requestId = generateRandomId();
  parent.postMessage('*', {
    "id": requestId, 
    "type": "SET", 
    "api": "Vehicle.Cabin.Infotainment.WebApps.Application.LoadingStatus", 
    "params": {
      "appId": "com.example.app",
      "status": "loading" 
    }
});
```

Doing so you inform the parent window (applications portal) that the application is loaded and ready.

To develop Webportal Applications you have to use [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) and [onmessage](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage) browser API.

Learn more about the various messages by reading what are [Get, Set & Subscribe]({{site.baseurl}}/webportal/v2/quickstart/get-set-subscribe/#article) verbs.

This way you will be able to send a [request]({{site.baseurl}}/webportal/v2/quickstart/request/#article) and to receive a [response]({{site.baseurl}}/webportal/v2/quickstart/response/#article) from/to webportal!