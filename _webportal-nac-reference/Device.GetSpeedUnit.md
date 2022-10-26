---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Device.GetSpeedUnit()
domain: Device
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetSpeedUnit()`

| **Description** | Gets the currently used speed unit.
| **Response** | *String*  The speed unit, Possible values are: - km/h, - mph
| **Parameter**   | *Void*

#### Example

```javascript
var speedUnit = Device.GetSpeedUnit()
// speedUnit = "km/h"
```

*Appeared in Software version 5.14.11.30*