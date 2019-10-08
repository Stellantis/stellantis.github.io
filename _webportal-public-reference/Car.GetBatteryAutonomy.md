---
title: Car.GetBatteryAutonomy()

supported:
  - 4
type: api
---

### `Car.GetBatteryAutonomy()`

| **Description** | Gets the Battery autonomy remaining always in km.
| **Response** | *Number*  Remaining battery autonomy.
| **Parameter**   | *Void*

#### Example

```javascript
var Batteryautonomy = Car.GetBatteryAutonomy();
// Batteryautonomy = 1000 km
```

#### Remark

>**Note :** The Battery autonomy's max length is 4 characters.

*Appeared in Software version 40.03.51.50*