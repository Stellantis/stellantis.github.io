---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.getPendingNotifications()
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: api
deprecated: true
---

### `WebPortal.getPendingNotifications()`

| **Description** | Gets the notifications currently pending.
| **Response** | The Notifications as `Array` (either empty or containing Strings) or `Unrecognised Error` if the application is not fully launched.
| **Parameter**   | *String* The application ID (AppID).

#### Example

```javascript
var notificationMessages = WebPortal.getPendingNotifications()
// notificationMessages = []
```
