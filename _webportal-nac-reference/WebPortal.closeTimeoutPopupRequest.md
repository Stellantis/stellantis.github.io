---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.closeTimeoutPopupRequest
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event triggered when the popup **MQTT popup** timeout occurs (15 seconds by default).

#### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(data.value.popupAction){

		//When the application is put in foreground
	    case "WebPortal.closeTimeoutPopupRequest":
		console.log("Popup timeout reached");
		alert("Popup timeout reached");
		break;
	    
	    }
	}
 });
```