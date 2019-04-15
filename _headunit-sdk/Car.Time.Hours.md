---
title: Car.Time.Hours()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.Time.Hours()`

| **Description** | Gets the current hour of the car.
| **Response** | *Number*  Hour part of the car time.
| **Parameter**   | *Void*

#### Example

```javascript
//Update the time values
Car.Time.GetTime()

//Updated time values
var CurrentHour = Car.Time.Hours()
```

#### Remark

>**Note :** `Car.Time.GetTime` should always be called before reading time values to make sure all the values are synchronized.