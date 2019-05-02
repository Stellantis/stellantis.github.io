---
title: Car.GetMileage()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.GetMileage()`

| **Description** | Gets the mileage of the vehicle.
| **Response** | *Number*  The mileage of the car in kilometers, length is 9 characters max.
| **Parameter**   | *Void*

#### Example

```javascript
var carMileage = Car.GetMileage()
// carMileage = 125000 km
```