---
layout: doc-article
permalink: /webportal/v1/quickstart/get-started/
section: webportal
subsection: v1
categorie: Quickstart
title: Get Started
redirect_from:
 - /webportal/v1/quickstart/
 - /webportal/quickstart/
description: "This tutorial explains the basics of creating an app for Webportal and using our API features."
---

# GETTING STARTED

You will need to contact [PSA Team](mailto:connectedcar@mpsa.com) in order to become a partner and deploy your apps on the Webportal so you should start by doing so.
The team will also be able to help you with questions you might have.

This tutorial will guide you through the creation of your Application. You can also start by downloading the base of your application directly.

<div class="buttons is-centered">
  <a class="button is-psablue is-medium" href="{{site.baseurl}}/assets/downloads/helloworld.zip" download="">
    <span class="icon is-large is-white">
    <i class="fa fa-file-download"></i>
    </span>&nbsp; &nbsp; &nbsp;Download base application
  </a>
</div>

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
//Your normal css file
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
    window.parent.postMessage({
        'type' : 'WebPortal.onApplicationLoaded'
    }, '*');
});
```

# APP STRUCTURE 

<img alt="app-structure" src="{{site.baseurl}}/assets/images/the_structure.png" class="smallimg" />
**This is the file structure your application should use.**

Once development is finish, you have to submit your application to PSA for us to check its behavior before actually deploying it.
The structure of the file to submit is mostly free with some requirements:

- The files must be sent in a TAR archive compressed via GZIP
- The *.md5* file is required in order to perform an integrity check
- An *index.html* file must be present at the root of the project and is the starting point of the application
- The logo for the application: *icon-100x100.png* (15kB max) and *icon-136x136.png* (21kB max) must be present at the root of the project for the different screen sizes (respectively for SD devices and WHD devices).
- JavaScript functions must be executed when the DOM is ready
- It is required to add a version file in the root directory of the app, named info.json and containing the following information:

```json
{
  "artifactId": "appid",
  "name": "appname (optional)",
  "description": "appdescription (optional)",
  "version": "X.Y.Z",
  "buildDate": "YYYY-MM-DD HH:mm"
}
```

**In addition** to the package submitted, the following information must be provided separately:
+ **App name (translated if needed)** The partner must provide at least one name for its app, that can be translated into several languages if needed. The master name will be displayed if no translation was given for the language chosen by the user.
+ **Country scope** The partner must provide the list of countries where the app can be activated for customers, within the list of countries where the WebPortal is available.
+ **Brand scope** The partner must provide the list of brands for which the app can be activated for customers. Today, Peugeot, Citroën, DS, Opel and Vauxhall are available.
+ **Device scope** The partner must provide the list of devices and configurations where the app can be activated for customers. Today NACw2.1, NACw3.1 and NACw4 are available.
+ **App identifier** To be given by PSA, this App Id is mandatory as it enables us to identify the app in MQTT exchanges and in the process of display in the vehicles.
+ **MQTT partner account**

# APP LIFECYCLE

This part will help you better understand the way your application's lifecycle is managed by the WebPortal

## LAUNCHING APPLICATION

When the DOM is loaded and the initialization is finished, the application **must** send a message to the WebPortal.
In order to know when the DOM is loaded you have to listen to the `DOMContentLoaded` event.
You can then send the message of type `WebPortal.onApplicationLoaded` to WebPortal.

For example, it can be sent like this:

```javascript
window.addEventListener("load", function(event) {
    window.parent.postMessage({'type':'WebPortal.onApplicationLoaded'}, '*');
});
```

>**Note:** If the message is not received during a 10s timeframe, the application will be closed and an error message will be displayed to the user.

## UNLOADING APPLICATION

The portal can kill an application in order to launch another one or to update it.
When it is unloading an application the portal sends a message `WebPortal.onApplicationUnloaded` to inform the app it has 100ms to save its state.
The app **must** listen to messages from WebPortal to be able to react.

```javascript
//Global messages listeners
window.addEventListener("message", function(event){

	var data = event.data;
	var type = event.data.type;

	switch(type){

		//When the application is killed or reloaded via an update
		case "WebPortal.onApplicationUnloaded":
		console.log("The application will be killed, it's time to save your application data");
		break;
		
	}
});
```

## HIDING APPLICATION

When the user clicks on the Home button the portal sends a message `WebPortal.onApplicationHide` to inform the app it has 100ms to save its state.
The Application is then hidden.

```javascript
//Global messages listeners
window.addEventListener("message", function(event){

	var data = event.data;
	var type = event.data.type;

	switch(type){

		//When the application is put in background    
		case "WebPortal.onApplicationHide":  
		console.log("Application is hidden");
		break;

	}
});
```


## SHOWING APPLICATION

When the application gains focus after the user clicked on it while it was hidden, the portal sends a `WebPortal.onApplicationShow` to inform the app.

```javascript
//Global messages listeners
window.addEventListener("message", function(event){

	var data = event.data;
	var type = event.data.type;

	switch(type){

		//When the application is put in foreground
		case "WebPortal.onApplicationShow":
		console.log("Application is shown");
		break;

	}
});
```
