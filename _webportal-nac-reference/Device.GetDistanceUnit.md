---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Device.GetDistanceUnit()
domain: Device
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetDistanceUnit()`

| **Description** | Gets the currently used distance unit.
| **Response** | *String*  The distance unit, Possible values are: - km, - miles

#### Example

```javascript
var distanceUnit = Device.GetDistanceUnit()
// distanceUnit = "km"
```

*Appeared in Software version 5.14.11.30*