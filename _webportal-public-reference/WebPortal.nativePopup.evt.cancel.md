---
title: WebPortal.nativePopup.evt.cancel

supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *Cancel* button of the [native popup](#api-WebPortal-nativePopup-open) is clicked.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *cancel* button of the native popup is clicked.
	    case "WebPortal.nativePopup.evt.cancel":
		console.log("The *cancel* button of the native popup is clicked");
		alert("The *cancel* button of the native popup is clicked");
		break;

	    }
	}
    });
```