---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.popup.evt.cancel
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *Cancel* button of the [popup]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-open#article) is clicked.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *cancel* button of the  popup is clicked.
	    case "WebPortal.popup.evt.cancel":
		console.log("The *cancel* button of the  popup is clicked");
		alert("The *cancel* button of the  popup is clicked");
		break;

	    }
	}
    });
```