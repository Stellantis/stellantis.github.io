---
title: WEBPORTAL
supported:
  - 2
  - 3
  - 4
type: class
---

#### OVERVIEW

Provides messages corresponding to events useful for managing your app.

Method | Return Type | Description
-----|----|----
[WebPortal.getCountry()]({{ site.baseurl }}/webportal/v1/reference/list/#api-WebPortal-getCountry) | *String* | Gets the country currently selected.
[WebPortal.getLanguage()]({{ site.baseurl }}/webportal/v1/reference/list/#api-WebPortal-getLanguage) | *String* | Gets the language currently being used.
[WebPortal.getPendingNotifications()]({{ site.baseurl }}/webportal/v1/reference/list/#api-WebPortal-getPendingNotifications) | *Array* | Gets the notifications currently pending.
[WebPortal.openNativePopup()]({{ site.baseurl }}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open) | *None* | Request from your application to display a disruptive popup.

#### MESSAGES SUMMARY

Message Type | Description
----|----
[WebPortal.okBtnPopupRequestClicked]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-okBtnPopupRequestClicked) | Triggered when *Ok* button is clicked in popup.
[WebPortal.cancelBtnPopupRequestClicked]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-cancelBtnPopupRequestClicked) | Triggered when *Cancel* button is clicked in popup.
[WebPortal.closeTimeoutPopupRequest]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-closeTimeoutPopupRequest) | Triggered after the interval for user action (10 seconds) has passed without any user interaction.
[WebPortal.onCurrentNotificationReceived]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onCurrentNotificationReceived) | Triggered when a new notification is received.
[WebPortal.onApplicationUnloaded]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onApplicationUnloaded) | Triggered when the application is unloaded.
[WebPortal.onApplicationShow]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onApplicationShow) | Triggered when the application gains focus.
[WebPortal.onApplicationHide]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onApplicationHide) | Triggered when the application loses focus.
[WebPortal.onApplicationUpdated]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onApplicationUpdated) | Triggered when the application has been updated.
[WebPortal.onApplicationLoaded]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-onApplicationLoaded) | Must be sent by the application when it has fully loaded.
[WebPortal.nativePopup.evt.ok]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-nativePopup-evt-ok) | Event triggered when the OK button of the native popup is clicked.
[WebPortal.nativePopup.evt.cancel]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-nativePopup-evt-cancel) | Event triggered when the Cancel button of the native popup is clicked.
[WebPortal.nativePopup.evt.timeout]({{ site.baseurl }}/webportal/v1/reference/list/#event-WebPortal-nativePopup-evt-timeout) | Event triggered when the timeout of the native popup is finish.

>**Note:** `onApplicationLoaded` **must** be sent, to the portal, by your Application after it has been launched.
