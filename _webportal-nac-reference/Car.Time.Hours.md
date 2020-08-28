---
title: Car.Time.Hours()
supported:
  - 3
  - 4
type: api
---

### `Car.Time.Hours()`

| **Description** | Gets the current hour of the car.
| **Response** | *Number*  Hour part of the car time.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
//Update the time values
Car.GetTime()

//Updated time values
var CurrentHour = Car.Time.Hours()
// CurrentHour = 13 hours
```

#### REMARK

>**Note:** `Car.GetTime` should always be called before reading time values to make sure all the values are synchronized.

*Appeared in Software version 30.04.64.40*