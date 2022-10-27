---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.nativePopup.open
deprecated: true
domain: WebPortal
supported:
    - 2
    - 3
    - 4
type: api
---

### `WebPortal.popup.open`

| **Description** | Request from your application to display a disruptive popup, whether the user is browsing your application or not.
|**Type**| `postMessage` command. See [implementation tutorial]({{site.baseurl}}/webportal/v1/application/events/#article) for post message commands. |
| **Parameter** | _None_ |

### See Also

-   Event: [OK button]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-evt-ok#article).
-   Event: [Cancel Button]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-evt-cancel#article).
-   Event: [Display timeout]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-evt-timeout#article).

```js
(function (w) {
  var WebPortal = {
    MESSAGE_NATIVE_POPUP_OPEN: "WebPortal.popup.open",
    MESSAGE_NATIVE_POPUP_EVT_OPENED: "WebPortal.popup.evt.opened",
    MESSAGE_NATIVE_POPUP_EVT_OK: "WebPortal.popup.evt.ok",
    MESSAGE_NATIVE_POPUP_EVT_CANCEL: "WebPortal.popup.evt.cancel",
    MESSAGE_NATIVE_POPUP_EVT_TIMEOUT: "WebPortal.popup.evt.timeout",
  };
  var _messageListenerInitialized = false;

  /**
   *@param {String} text - Text to display un the popup
   *@param {callback} okCallback - The OK button callback to execute when the OK button is clicked
   *@param {callback} cancelCallback - The Cancel callback to execute when the Cancel button is clicked
   *@param {callback} timeoutCallback - The timeout callback to execute when the popup close timeout is reached
   */
  w.openPopup = function (text, okCallback, cancelCallback, timeoutCallback) {
    var popupMessageHandler = function (e) {
      var eventMap = {};
      eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_OK] = okCallback;
      eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_CANCEL] = cancelCallback;
      eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_TIMEOUT] = timeoutCallback;

      var msg = e.data;
      console.log("[openPopup] message:");
      console.log(msg);
      // Ignore unknown message type
      if (!msg || !msg.type || !eventMap[msg.type]) return;

      _messageListenerInitialized = false;
      console.log("[openPopup] calling callback for msg.type: " + msg.type);
      eventMap[msg.type]();

      console.log("[openPopup] removing web message handler");
      this.removeEventListener("message", popupMessageHandler);
    };

    // Init web message event listener
    if (!_messageListenerInitialized) {
      _messageListenerInitialized = true;
      console.log("[openPopup] adding web message listener");
      this.addEventListener("message", popupMessageHandler);
    }

    console.log("[openPopup] request to open native popup");
    var msg = {
      type: WebPortal.MESSAGE_NATIVE_POPUP_OPEN,
      text: text,
    };
    console.log("[openPopup] msg: ");
    console.log(msg);
    parent.postMessage(msg, "*");
  };

  // Web message listener
  w.addEventListener("message", function (e) {
    var msg = { origin: e.origin, data: e.data };
    console.log("MessageEvent received: " + JSON.stringify(msg));
  });

  // Popup button handler
  openPopup(
    "popup from app",
    function () {
      console.log("OK callback called");
    },
    function () {
      console.log("Cancel callback called");
    },
    function () {
      console.log("Timeout callback called");
    }
  );
})(window);
```

#### IMPORTANT

> **Caution:** For accessibility reasons, popup should not be created more often than once every 20 seconds.

> **Caution 2:** [Navigation.LaunchGuidance()]({{site.baseurl}}/doc/webportal/v1/api-reference/navigation-launchguidance#article) and [Navigation.LaunchGuidanceWaypoints()]({{site.baseurl}}/webportal/v1/api-reference/navigation-launchguidancewaypoints#article) can **not** be launched when a popup (either **MQTT** or [Popup]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-open#article)) is displayed. To make sure the guidance have actually been launched please check that LaunchGuidance function return is `True`.
