---
title: WebPortal.nativePopup.evt.ok

supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *OK* button of the [native popup](#api-WebPortal-nativePopup-open) is clicked.

### EXAMPLE

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *OK* button of the native popup is clicked.
	    case "WebPortal.nativePopup.evt.ok":
		console.log("The *OK* button of the native popup is clicked");
		alert("The *OK* button of the native popup is clicked");
		break;

	    }
	}
    });
```