---
title: WebPortal.cancelBtnPopupRequestClicked
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the *Cancel* popup [MQTT popup]({{site.baseurl}}/webportal/v1/connectivity/notification/#sending-popup) button is clicked.

> **Be carefull**: To retrieve this event you have to use [WebPortal.getPendingNotifications()]({{site.baseurl}}/webportal/v1/connectivity/message/#receiving-message) method.

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