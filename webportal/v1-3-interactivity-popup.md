---
layout: doc-article
permalink: /webportal/v1/interactivity/popup/
section: webportal
subsection: v1
categorie: User Interaction
title: Popup
description: ""
---

# OPEN POPUP

Follow this example to open a native popup from your app. See [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open) reference.

```javascript

(function(w) {
    var WebPortal = {
        MESSAGE_NATIVE_POPUP_OPEN: 'WebPortal.nativePopup.open',
        MESSAGE_NATIVE_POPUP_EVT_OPENED : 'WebPortal.nativePopup.evt.opened',
        MESSAGE_NATIVE_POPUP_EVT_OK     : 'WebPortal.nativePopup.evt.ok',
        MESSAGE_NATIVE_POPUP_EVT_CANCEL : 'WebPortal.nativePopup.evt.cancel',
        MESSAGE_NATIVE_POPUP_EVT_TIMEOUT: 'WebPortal.nativePopup.evt.timeout',
    };
    var _messageListenerInitialized = false;
    
    /** 
     *@param {String} text - Text to display un the popup
     *@param {callback} okCallback - The OK button callback to execute when the OK button is clicked
     *@param {callback} cancelCallback - The Cancel callback to execute when the Cancel button is clicked
     *@param {callback} timeoutCallback - The timeout callback to execute when the popup close timeout is reached
    */ 
    w.openNativePopup = function(text, okCallback, cancelCallback, timeoutCallback) {
        var popupMessageHandler = function(e) {
            var eventMap = {};
            eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_OK] = okCallback;
            eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_CANCEL] = cancelCallback;
            eventMap[WebPortal.MESSAGE_NATIVE_POPUP_EVT_TIMEOUT] = timeoutCallback;

            var msg = e.data;
            console.log("[openNativePopup] message:");
            console.log(msg);
            // Ignore unknown message type
            if (!msg || !msg.type || !eventMap[msg.type])
                return;

            _messageListenerInitialized = false;
            console.log("[openNativePopup] calling callback for msg.type: "+ msg.type);
            eventMap[msg.type]();

            console.log("[openNativePopup] removing web message handler");
            this.removeEventListener('message', popupMessageHandler);
        };

        // Init web message event listener
        if (!_messageListenerInitialized) {
            _messageListenerInitialized = true;
            console.log("[openNativePopup] adding web message listener");
            this.addEventListener('message', popupMessageHandler);
        }

        console.log("[openNativePopup] request to open native popup");
        var msg = {
            type: WebPortal.MESSAGE_NATIVE_POPUP_OPEN,
            text: text
        };
        console.log("[openNativePopup] msg: ");
        console.log(msg);
        parent.postMessage(msg, '*');
    };

  // Web message listener
  w.addEventListener('message', function(e) {
    var msg = {origin: e.origin, data: e.data};
      console.log("MessageEvent received: "+ JSON.stringify(msg));
  });

  // Popup button handler
  openNativePopup(
    "popup from app",
      function() { console.log("OK callback called") },
      function() { console.log("Cancel callback called") },
      function() { console.log("Timeout callback called") }
  );
})(window);

```