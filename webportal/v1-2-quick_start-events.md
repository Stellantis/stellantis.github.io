---
layout: doc-article
permalink: /webportal/v1/quickstart/events/
section: webportal
subsection: v1
categorie: Quickstart
title: Handling Events
description: ""
---


# WEBPORTAL EVENTS

The WebPortal will forward events to your application in order to be informed about the current state of both the App and the Portal.

## STRUCTURE OF A WEBPORTAL MESSAGE
```javascript
{
	/**
		* @type {string}
		*/
	"type": "WebPortal.onCurrentNotificationReceived",

	/**
		* Only present when type=WebPortal.onCurrentNotificationReceived
		* Contains the payload of the MQTT message
		*/
	"value": {}
}
```

## HANDLING THE EVENT MESSAGES

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


# CONNECTIVITY MODE

It is important to handle changes in the connectivity mode in order to inform the user of any connectivity issue or even to change the behavior of your application.

```javascript
Connectivity.addEventListener("connectivityOn", function(){
	console.log("success, " + "Connectivity.connectivityOn()");
});
Connectivity.addEventListener("connectivityOff", function(){
	console.log("success, " + "Connectivity.connectivityOff()");
});
```


# PRIVACY MODE

For every app it is also mandatory to handle the privacy mode of the user.

The user can select one of 3 modes:
- Public, you can access both the internet and the geolocation of the user
- Geoloc, you can only access the internet as the geolocation is locked
- Full, you can access neither the internet nor the geolocation

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

Some functionnalities will be unavailable in Geoloc or Full privacy mode.

### WHEN Privacy.Mode()=Full

The following methods return undefined:
- Car.GetVINCode()
- Car.GetSpeed()
- Navigation.GetCurrentPositionLatitude()
- Navigation.GetCurrentPositionLongitude()
- Navigation.CurrentPosition.Altitude
- Navigation.GetCurrentPosition()
- Navigation.CurrentPosition.Address
- Navigation.CurrentPosition.Town
- Navigation.CurrentPosition.City
- Navigation.CurrentPosition.Province
- Navigation.CurrentPosition.Coutry
- Navigation.GetDestination()
- Navigation.Destination.Latitude
- Navigation.Destination.Longitude
- Navigation.Destination.Address
- Navigation.Destination.Town
- Navigation.Destination.City
- Navigation.Destination.Province
- Navigation.Destination.Coutry
- Navigation.GetManeuverInfo()
- Navigation.ManeuverInfo.Latitude
- Navigation.ManeuverInfo.Longitude
- Navigation.ManeuverInfo.nextStreetName
- Navigation.ManeuverInfo.Town
- Navigation.ManeuverInfo.City
- Navigation.ManeuverInfo.Province
- Navigation.ManeuverInfo.Country
- Navigation.GetJourneyInfo()
- Navigation.JourneyInfo.estimatedTimeOfArrivalH
- Navigation.JourneyInfo.estimatedTimeOfArrivalMin
- Navigation.GetNextWaypoint.ETAHours()
- Navigation.GetNextWaypoint.ETAMinutes()
	
These methods won't do anything and return false:
- Navigation.LaunchGuidance()
- Navigation.LaunchGuidanceWaypoint()

### WHEN Privacy.Mode()=geoloc

The following methods return undefined:
- Navigation.GetCurrentPositionLatitude()
- Navigation.GetCurrentPositionLongitude()
- Navigation.CurrentPosition.Altitude
- Navigation.GetCurrentPosition()
- Navigation.CurrentPosition.Address
- Navigation.CurrentPosition.Town
- Navigation.CurrentPosition.City
- Navigation.CurrentPosition.Province
- Navigation.CurrentPosition.Coutry
- Navigation.GetDestination()
- Navigation.Destination.Latitude
- Navigation.Destination.Longitude
- Navigation.Destination.Address
- Navigation.Destination.Town
- Navigation.Destination.City
- Navigation.Destination.Province
- Navigation.Destination.Coutry
- Navigation.GetManeuverInfo()
- Navigation.ManeuverInfo.Latitude
- Navigation.ManeuverInfo.Longitude
- Navigation.ManeuverInfo.nextStreetName
- Navigation.ManeuverInfo.Town
- Navigation.ManeuverInfo.City
- Navigation.ManeuverInfo.Province
- Navigation.ManeuverInfo.Country
- Navigation.GetJourneyInfo()
- Navigation.JourneyInfo.estimatedTimeOfArrivalH
- Navigation.JourneyInfo.estimatedTimeOfArrivalMin
- Navigation.GetNextWaypoint.ETAHours()
- Navigation.GetNextWaypoint.ETAMinutes()
	
These methods won't do anything and return false:
- Navigation.LaunchGuidance()
- Navigation.LaunchGuidanceWaypoint()


# DRIVING MODE

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