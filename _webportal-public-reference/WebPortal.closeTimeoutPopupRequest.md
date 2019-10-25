---
title: WebPortal.closeTimeoutPopupRequest

supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the popup [MQTT popup]({{site.baseurl}}/webportal/tutorial-advanced/#sending-a-popup-to-your-application) timeout occurs (15 seconds by default).

### Example

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