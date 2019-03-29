---
title: WebPortal.closeTimeoutPopupRequest
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the popup timeout occurs (10 seconds by default).

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

		//When the application is put in foreground
	    case "WebPortal.closeTimeoutPopupRequest":
		console.log("Popup timeout reached");
		alert("Popup timeout reached");
		break;
	    
	    }
	}
 });
```