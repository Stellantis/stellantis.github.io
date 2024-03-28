---
layout: doc-article
permalink: /webportal/v1/application/events/
section: webportal
subsection: v1
categorie: Application
title: Handling Events
description: "Webportal is designed to communicate with your app through event. Some of these events are very important to handle."
---

# Webportal Events

Your app run in an **iframe** inside the infotainment **browser**. In order to communicate with the vehicle through WebPortal you need to use [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) events.

The WebPortal will forward events to your application in order to be informed about the current state of both the App and the Portal. Some of these events are very **important to handle**. Indeed, some events are required for your app to work properly.

## Structure of a WebPortal Message
```javascript
{
  //@type {string}
  "type": "WebPortal.onCurrentNotificationReceived",

  // Only present when type=WebPortal.onCurrentNotificationReceived
  // Contains the payload of the MQTT message
  "value": {}
}
```

## Handling Event Message

To deal with these events you will need to implement *event listeners* and call the functions you need in each case.
Below is an example on how to manage them.

```javascript
//Global messages listeners
window.addEventListener("message", function(event){

  var data = event.data;
  var type = event.data.type;

  switch(type){

  //When the application is killed or reloaded via an update
  case "WebPortal.onApplicationUnloaded":
  console.log("The application will be killed, it's time to save your application data");
  alert("The application will be killed, it's time to save your application data");
  break;

  //When a notification is pushed to the application
  case "WebPortal.onCurrentNotificationReceived":
  if (typeof data.value !== 'undefined'){
    console.log("Notification received",data.value);
    if (typeof data.value === 'object'){
    alert("Notification received: "+JSON.stringify(data.value));
    } else {
    alert("Notification received: "+data.value);
    }
  }
  break;
  }
});
```

We will now see how to handle the main events.


## Connectivity Mode

It is important to handle changes in the connectivity mode in order to inform the user of any connectivity issue or even to change the behavior of your application.

```javascript
Connectivity.addEventListener("connectivityOn", function(){
  console.log("success, " + "Connectivity.connectivityOn()");
});
Connectivity.addEventListener("connectivityOff", function(){
  console.log("success, " + "Connectivity.connectivityOff()");
});
```


## Privacy Mode

For every app it is also mandatory to handle the privacy mode of the user.

Check out [this page]({{site.baseurl}}/webportal/{{page.subsection}}/application/privacy#article) for more information about privacy management.

Some functionnalities will be unavailable in Geoloc or Full privacy mode.

```javascript
if ((typeof Privacy !== "undefined") && (typeof Privacy.addEventListener !== "undefined")) {
  Privacy.addEventListener("ModePublic", function(){
    console.log("success, " + "Privacy.ModePublic()");
  });
  Privacy.addEventListener("ModeFull", function(){
    console.log("success, " + "Privacy.ModeFull()");
  });
  Privacy.addEventListener("ModeGeoloc", function(){
    console.log("success, " + "Privacy.ModeGeoloc()");
  });
}
```

## Driving Mode

When indicating the configuration of your app you will have to specify the behavior in the case of the driving mode:
- The App supports driving mode: The application has to have a specific display mode for driving mode.  
    The application will receive the events triggered when the driving mode changes and will have to adapt its display.

- The App does not support driving mode: The portal will hide the application with an overlay when the user is driving.


The application receives the events, `Car.driverDistractionOn` and `Car.driverDistractionOff`, triggered when the driving mode changes and **must** adapt its display accordingly.

```javascript
//Triggered when the driver distraction mode switches from off to on
Car.addEventListener('driverDistractionOn',function(){
  console.log("driver distraction mode switches from off to on");
});

//Triggered when the driver distraction mode switches from on to off
Car.addEventListener('driverDistractionOff',function(){
  console.log("driver distraction mode switches from on to off");
});
```

> **Note:** Remember the Driving mode has its specific guidelines to follow.

## Date and Time

Do not use the methods of the JavaScript Date class.
Instead, you sould use the [methods from WebPortal]({{ site.baseurl }}/webportal/v1/api-reference/list/#api-Car-GetTime) meant to manipulate those values as they correspond to the current time of the user.