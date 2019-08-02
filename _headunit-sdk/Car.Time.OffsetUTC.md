---
title: Car.Time.OffsetUTC()
layout: headunit-sdk
supported:
  - 3
  - 4
type: api
---

### `Car.Time.OffsetUTC()`

| **Description** | Get the current Offset/Time zone of the car.
| **Response** | *Number*  Offset corresponding to the current timezone.
| **Parameter**   | *Void*

#### Example

```javascript
//Update the time values
Car.GetTime()

//Updated time values
var CurrentOffset = Car.Time.OffsetUTC()
// CurrentOffset = +1
```

#### Remark

>**Note :** `Car.GetTime` should always be called before reading time values to make sure all the values are synchronized.

*Appeared in Software version 30.04.64.40*