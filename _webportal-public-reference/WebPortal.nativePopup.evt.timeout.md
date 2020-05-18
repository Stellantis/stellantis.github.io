---
title: WebPortal.nativePopup.evt.timeout
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *timeout* of the [native popup](#api-WebPortal-nativePopup-open) is finish.

### EXAMPLE

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *timeout* of the native popup is finish
	    case "WebPortal.nativePopup.evt.timeout":
		console.log("The the *timeout* of the native popup is finish");
		alert("The the *timeout* of the native popup is finish");
		break;

	    }
	}
    });
```