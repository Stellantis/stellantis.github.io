---
title: Car.GetBatteryAutonomy()
layout: headunit-sdk
supported:
  - 4
type: api
---

### `Car.GetBatteryAutonomy()`

| **Description** | Gets the Battery autonomy remaining in the currently used distance unit.
| **Response** | *Number*  Remaining battery autonomy.
| **Parameter**   | *Void*

#### Example

```javascript
let Batteryautonomy = Car.GetBatteryAutonomy();
// Batteryautonomy = 1000
```

#### Remark

>**Note :** The Battery autonomy's max length is 4 characters.