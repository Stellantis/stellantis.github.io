---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.GetMileage()
domain: Car
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

*Appeared in Software version 5.14.11.30*