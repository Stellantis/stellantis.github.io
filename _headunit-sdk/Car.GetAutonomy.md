---
title: Car.GetAutonomy()
layout: headunit-sdk
supported:
  - 2
  - 3
type: api
---

### `Car.GetAutonomy()`

| **Description** | Gets the autonomy remaining in the currently used distance unit. | 
| **Response** | `Number`   Remaining autonomy in currently used distance unit.   | 
| **Parameter**   | Void 

#### Example

```javascript
let CarAutonomy = Car.GetAutonomy();
// CarAutonomy = 342
// The max length is 3 characters
```

#### Remark

>**Note :** The `Car.GetAutonomy()` function exists in Wave 4 but should not be used because of incoherences.
			One should instead prefer using the `Car.GetFuelAutonomy()` and `Car.GetBatteryAutonomy()` functions.
