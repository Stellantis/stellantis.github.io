---
title: Car.GetFuelUnit()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.GetFuelUnit()`

| **Description** | Gets the currently used fuel unit.
| **Response** | *String*  The fuel unit, Possible values are : - l, - gal
| **Parameter**   | *Void*

#### Example

```javascript
if (Car.GetFuelUnit() === 'l') {
	var FuelUnit = 'Litre'
} else {
	var FuelUnit = 'Gallon'
}
```

*Appeared in Software version 5.14.11.30*