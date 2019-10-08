---
title: Device.GetPortalSubscriptionStatus()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetPortalSubscriptionStatus()`

| **Description** | Get the current status for the portal subscription
| **Response** | *boolean* Portal subscription status, `True` if correctly subscribed, else `False`
| **Parameter**   | *Void*

#### Example

```javascript
var SubscriptionState = Device.GetPortalSubscriptionStatus()
```

#### Remark

No to use

*Appeared in Software version 5.14.11.30*