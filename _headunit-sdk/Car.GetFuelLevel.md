---
title: Car.GetFuelLevel()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.GetFuelLevel()`

| **Description** | Gets the current fuel level of the vehicle.
| **Response** | *Number*  The fuel level of the car in percentage.
| **Parameter**   | *Void*

#### Example

```javascript
var fuelLevel = Car.GetFuelLevel()
alert("You are at" + fuelLevel + "of fuel left")
```