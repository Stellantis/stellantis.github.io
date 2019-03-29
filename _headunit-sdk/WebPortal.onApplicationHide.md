---
title: WebPortal.onApplicationHide
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the applicaton loses focus.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

		//When the application is put in background    
	    case "WebPortal.onApplicationHide":  
		console.log("Application is hidden");
		alert("Application is hidden");
		break;

	    }
	}
});
```