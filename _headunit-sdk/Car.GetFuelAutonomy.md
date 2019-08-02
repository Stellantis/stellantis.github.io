---
title: Car.GetFuelAutonomy()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.GetFuelAutonomy()`

| **Description** | Gets the Fuel autonomy remaining always in km.
| **Response** | *Number*  Remaining fuel autonomy.
| **Parameter**   | *Void*

#### Example

```javascript
var FuelAutonomy = Car.GetFuelAutonomy();
// FuelAutonomy = 2000 km
```

#### Remark

>**Note :** The Fuel Autonomy's max length is 4 characters.

*Appeared in Software version 40.03.51.50*