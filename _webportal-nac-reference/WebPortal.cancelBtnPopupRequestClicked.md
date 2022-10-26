---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.cancelBtnPopupRequestClicked
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event triggered when the *Cancel* popup **MQTT popup** button is clicked.

> **Be carefull**: To retrieve this event you have to use [WebPortal.getPendingNotifications()]({{site.baseurl}}/webportal/v1/api-reference/webportal-getpendingnotifications#article) method.

```javascript
//Retrieve pending notification
var getPendingNotifications = function(){
	var notificationsList = WebPortal.getPendingNotifications('app_id');
	notificationsList.map(processNotification);
};

//Process retrieved notification
var processNotification = function(notification) {
	if (notification.popupAction === 'WebPortal.cancelBtnPopupRequestClicked') {
		alert("Popup cancel button clicked!");
	}
}; 
```