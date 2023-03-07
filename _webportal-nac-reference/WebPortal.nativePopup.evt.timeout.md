---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.nativePopup.evt.timeout
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event triggered when the *timeout* of the [popup]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-open#article) is finish.

> **NativePopups** interacts with the [Notification Center]({{site.baseurl}}/webportal/v1/advanced-features/notification/#article) but they are **deprecated**, you should use [WebPortal.notification.new]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-new.html#article) instead.

### Example

```javascript
window.addEventListener("message", function(event){
	
	if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

	    var data = event.data;
	    var type = event.data.type;

	    switch(type){

	    //When the *timeout* of the  popup is finish
	    case "WebPortal.popup.evt.timeout":
		console.log("The the *timeout* of the  popup is finish");
		alert("The the *timeout* of the  popup is finish");
		break;

	    }
	}
    });
```