---
title: WebPortal.getPendingNotifications()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `WebPortal.getPendingNotifications()`

| **Description** | Gets the notifications currently pending.
| **Response** | The Notifications as `Array` (either empty or containing Strings) or `Unrecognised Error` if the application is not fully launched.
| **Parameter**   | Void

#### Example

```javascript
var notificationMessages = WebPortal.getPendingNotifications()
```

#### Remark

>**Note :** .