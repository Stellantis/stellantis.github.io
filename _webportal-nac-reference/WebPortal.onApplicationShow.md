---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.onApplicationShow
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the application gains focus.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

		//When the application is put in foreground
	    case "WebPortal.onApplicationShow":
		console.log("Application is shown");
		alert("Application is shown");
		break;

	    }
	}
);
```