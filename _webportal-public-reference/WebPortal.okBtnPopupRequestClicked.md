---
title: WebPortal.okBtnPopupRequestClicked
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *OK* button of the [MQTT popup]({{site.baseurl}}/webportal/tutorial-advanced/#sending-popup) is clicked.

### EXAMPLE

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