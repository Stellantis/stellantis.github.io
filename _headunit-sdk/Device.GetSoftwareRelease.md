---
title: Device.GetSoftwareRelease()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetSoftwareRelease()`

| **Description** | Gets the currently used software release.
| **Response** | *String*  Software release.
| **Parameter**   | *Void*

#### Example

```javascript
var Soft = Device.GetSoftwareRelease()
// Soft = 31.09.46.60_NAC-r0
```