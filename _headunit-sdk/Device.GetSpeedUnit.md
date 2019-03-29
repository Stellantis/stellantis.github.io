---
title: Device.GetSpeedUnit()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetSpeedUnit()`

| **Description** | Gets the currently used speed unit.
| **Response** | *String*  The speed unit, Possible values are : - km/h, - mph
| **Parameter**   | *Void*

#### Example

```javascript
var speedUnit = Device.GetSpeedUnit()
// speedUnit = "km/h"
```