---
title: Car.Time.Minutes()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Car.Time.Minutes()`

| **Description** | Gets the current minutes of the car.
| **Response** | *Number*  Minute part of the car time.
| **Parameter**   | *Void*

#### Example

```javascript
//Update the time values
Car.Time.GetTime()

//Updated time values
var CurrentMinutes = Car.Time.Minutes()
```
	
#### Remark

>**Note :** `Car.Time.GetTime` should always be called before reading time values to make sure all the values are synchronized.