---
title: WebPortal
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: class
---

#### Overview

Provides messages corresponding to events useful for managing your app.

Method | Return Type | Description
-----|----|----
[WebPortal.getCountry()]({{ site.baseurl }}/webportal_list/#api-WebPortal-getCountry) | *String* | Gets the country currently selected.
[WebPortal.getLanguage()]({{ site.baseurl }}/webportal_list/#api-WebPortal-getLanguage) | *String* | Gets the language currently being used.
[WebPortal.getPendingNotifications()]({{ site.baseurl }}/webportal_list/#api-WebPortal-getPendingNotifications) | *Array* | Gets the notifications currently pending.
[WebPortal.showPopup()]({{ site.baseurl }}/webportal_list/#api-WebPortal-showPopup) | *None* | Shows a popup in the NAC.

#### Messages Summary

Message Type | Description
----|----
[WebPortal.okBtnPopupRequestClicked]({{ site.baseurl }}/webportal_list/#event-WebPortal-okBtnPopupRequestClicked) | Triggered when *Ok* button is clicked in popup.
[WebPortal.cancelBtnPopupRequestClicked]({{ site.baseurl }}/webportal_list/#event-WebPortal-cancelBtnPopupRequestClicked) | Triggered when *Cancel* button is clicked in popup.
[WebPortal.closeTimeoutPopupRequest]({{ site.baseurl }}/webportal_list/#event-WebPortal-closeTimeoutPopupRequest) | Triggered after the interval for user action (10 seconds) has passed without any user interaction.
[WebPortal.onCurrentNotificationReceived]({{ site.baseurl }}/webportal_list/#event-WebPortal-onCurrentNotificationReceived) | Triggered when a new notification is received.
[WebPortal.onApplicationUnloaded]({{ site.baseurl }}/webportal_list/#event-WebPortal-onApplicationUnloaded) | Triggered when the application is unloaded.
[WebPortal.onApplicationShow]({{ site.baseurl }}/webportal_list/#event-WebPortal-onApplicationShow) | Triggered when the application gains focus.
[WebPortal.onApplicationHide]({{ site.baseurl }}/webportal_list/#event-WebPortal-onApplicationHide) | Triggered when the application loses focus.
[WebPortal.onApplicationUpdated]({{ site.baseurl }}/webportal_list/#event-WebPortal-onApplicationUpdated) | Triggered when the application has been updated.
[WebPortal.onApplicationLoaded]({{ site.baseurl }}/webportal_list/#event-WebPortal-onApplicationLoaded) | Must be sent by the application when it has fully loaded.
[WebPortal.onSendNotificationRequest]({{ site.baseurl }}/webportal_list/#event-WebPortal-onSendNotificationRequest) | Must be sent by the application to display a notification.

>**Note :** `onApplicationLoaded` **must** be sent, to the portal, by your Application after it has been launched.
