---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.onApplicationUpdated
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event triggered when the application has been updated.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the application is killed or reloaded via an update
	    case "WebPortal.onApplicationUpdated":
		console.log("The application has been updated, data has changed");
		alert("The application has been updated, data has changed");
		break;

	    }
	}
    });
```