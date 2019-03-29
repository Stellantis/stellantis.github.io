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
Car.Time.GetTime()

//Updated time values
let CurrentOffset = Car.Time.OffsetUTC()
```

#### Remark

>**Note :** `Car.Time.GetTime` should always be called before reading time values to make sure all the values are synchronized.