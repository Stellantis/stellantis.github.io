---
title: Device.GetDistanceUnit()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetDistanceUnit()`

| **Description** | Gets the currently used distance unit.
| **Response** | *String*  The distance unit, Possible values are : - km, - miles

#### Example

```javascript
var distanceUnit = Device.GetDistanceUnit()
// distanceUnit = "km"
```