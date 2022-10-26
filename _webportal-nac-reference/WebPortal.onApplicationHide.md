---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.onApplicationHide
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the application loses focus.

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