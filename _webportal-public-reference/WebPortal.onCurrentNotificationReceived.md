---
title: WebPortal.onCurrentNotificationReceived
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when a notification is received.

### EXAMPLE

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

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
	}
});
```