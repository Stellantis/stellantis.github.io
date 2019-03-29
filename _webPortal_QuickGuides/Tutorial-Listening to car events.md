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


**The Driving Mode Guidelines:**

+ The App must not distract the user with images, texts nor audios.
+ Popups shouldn't ask for a confirmation, only be informative.

# Listening to other car events

To be able to deal with all events your application might encounter, you have to implement event listeners for each of them.  

To listen to changes of the used units, the following can be used:

```javascript
//Car events listeners
	//Triggered when the fuel unit has changed
	Car.addEventListener('fuelUnit',function(){
	    console.log("fuel unit has changed. Use Car.GetFuelUnit() to get the new unit");
	});

	//Triggered when the distance unit has changed
	Car.addEventListener('distanceUnit',function(){
	    console.log("distance unit has changed. Use Device.GetDistanceUnit() to get the new unit");	
	});

	//Triggered when the speed unit has changed
	Car.addEventListener('speedUnit',function(){
	    console.log("speed unit has changed. Use Device.GetSpeedUnit() to get the new unit");
	});
```
