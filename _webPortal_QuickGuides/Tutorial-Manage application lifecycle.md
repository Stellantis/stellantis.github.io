---
title: Manage application lifecycle
layout: page2
---

# Managing Application lifecycle

This part will help you better understand the way your application's lifecycle is managed by the WebPortal

### Launching Application

When the DOM is loaded and the initialization is finished, the application **must** send a message to the WebPortal.
In order to know when the DOM is loaded you have to listen to the `DOMContentLoaded` event.
You can then send the message of type `WebPortal.onApplicationLoaded` to WebPortal.

For example it can be sent like this :

```javascript
window.addEventListener("load", function(event) {
    window.parent.postMessage({'type':'WebPortal.onApplicationLoaded'}, '*');
});
```

>**Note :** If the message is not received during a 10s timeframe, the application will be closed and an error message will be displayed to the user.

### Unloading Application

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

### Hiding Application

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


### Showing Application

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

You can now continue to the [Advanced Tutorial]({{ site.baseurl }}/webportal_TutorialAdvanced)