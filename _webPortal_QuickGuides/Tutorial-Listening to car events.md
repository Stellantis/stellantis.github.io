---
title: Listening to car events
layout: page2
---

# Driving mode

When indicating the configuration of your app you will have to specify the behavior in the case of the driving mode :
- The App supports driving mode : The application has to have a specific display mode for driving mode.  
    The application will receive the events triggered when the driving mode changes and will have to adapt its display.

- The App does not support driving mode : The portal will hide the application with an overlay when the user is driving.


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

> **Note :** Remember the Driving mode has its specific guidelines to follow.