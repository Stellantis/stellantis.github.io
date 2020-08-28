---
title: Car.GetFuelType()
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.GetFuelType()`

| **Description** | Gets the Fuel type of the car as a Number.
| **Response** | *Number*  Fuel type of the car.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
var FuelType = Car.GetFuelType;
// FuelType = 0
// The car uses Essence
```

#### REMARK

>**Note:** The fuel type's length is 2 characters max.

Number | Fuel type
-----|----
0 | Essence
1 | Bicarburation Essence GPL
2 | Bicarburation Essence GNV
3 | Diesel
4 | Essence et batterie
5 | Essence et alcool
6 | Diesel et batterie
7 | Battery
8 | Hydrogen
15 | Undefined

*Appeared in Software version 5.14.11.30*