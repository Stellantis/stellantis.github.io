---
title: WebPortal.onApplicationUnloaded

supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the application is unloaded.

### EXAMPLE

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the application is killed or reloaded via an update
	    case "WebPortal.onApplicationUnloaded":
		console.log("The application will be killed, it's time to save your application data");
		alert("The application will be killed, it's time to save your application data");
		break;

	    }
	}
    });
```