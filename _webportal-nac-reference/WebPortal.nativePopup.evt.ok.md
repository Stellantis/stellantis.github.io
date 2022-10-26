---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.nativePopup.evt.ok
deprecated: true
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *OK* button of the [ popup]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-open#article) is clicked.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *OK* button of the  popup is clicked.
	    case "WebPortal.popup.evt.ok":
		console.log("The *OK* button of the  popup is clicked");
		alert("The *OK* button of the  popup is clicked");
		break;

	    }
	}
    });
```