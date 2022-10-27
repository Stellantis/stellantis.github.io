---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.okBtnPopupRequestClicked
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event triggered when the *OK* button of the **MQTT popup** is clicked.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(data.value.popupAction){

		//When the application is put in foreground
	    case "WebPortal.okBtnPopupRequestClicked":
		console.log("Popup ok button clicked!");
		alert("Popup ok button clicked!");
		break;
	    
	    }
	}
 });
```