---
title: WebPortal.onSendNotificationRequest
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event to send to WebPortal when you wish to send a notification.

>**Note :** Should be sent to the WebPortal using the Window.postMessage API.

### Example

```javascript
window.parent.postMessage({'type':'WebPortal.onSendNotificationRequest'}, '*');
```