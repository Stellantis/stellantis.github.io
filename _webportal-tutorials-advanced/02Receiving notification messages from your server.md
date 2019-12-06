---
type: tutorial advanced
---

# RECEIVING NOTIFICATION MESSAGES FROM YOUR SERVER

Receiving notification messages is very similar to Receiving data messages, the only difference being the presence of the property `popupAction` that indicates the action type corresponding to the notification message.

**MQTT message structure**

```javascript
{

    /**
     * @type {string} WebPortal.okBtnPopupRequestClicked
     *             or WebPortal.cancelBtnPopupRequestClicked
     *             or WebPortal.closeTimeoutPopupRequest
     */
    "popupAction": "WebPortal.okBtnPopupRequestClicked",

    /**
     * @type {object} The data payload sent by your application server
     */
    "content": {
        "someKey": "someData"
    }
}

```

#### HANDLING MESSAGES

```javascript
window.addEventListener('message', function(messageEvent) {
    var webportalMessage = messageEvent.data;

    if (webportalMessage.type === 'WebPortal.onCurrentNotificationReceived') {
        var mqttMessagePayload = webportalMessage.value;
        var appServerMessage = mqttMessagePayload.content;

        // Your application message handler
        handleServerMessage(mqttMessagePayload);
    }
});

function handleServerMessage(mqttMessagePayload) {
    if ('popupAction' in mqttMessagePayload) {
        // Action related to a notification message (popup)
        handlePopupAction(mqttMessagePayload.popupAction, mqttMessagePayload.content);
    } else {
        // Application data message
        handleDataMessage(mqttMessagePayload.content);
    }
}
```

#### POSSIBLE VALUES FOR *popupAction*

Type | Triggered by
----|----
`okBtnPopupRequestClicked`| Pressing on the *OK* button
`cancelBtnPopupRequestClicked`| Pressing on the *Cancel* button
`closeTimeoutPopupRequest`| The notification's display duration has expired (15s)

