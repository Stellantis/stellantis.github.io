---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Device.GetSoftwareRelease()
domain: Device
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

*Appeared in Software version 5.14.11.30*