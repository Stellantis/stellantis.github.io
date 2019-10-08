---
title: WebPortal.cancelBtnPopupRequestClicked

supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *Cancel* popup button is clicked.

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

		//When the application is put in foreground
	    case "WebPortal.cancelBtnPopupRequestClicked":
		console.log("Popup cancel button clicked!");
		alert("Popup cancel button clicked!");
		break;
	    
	    }
	}
 });
```