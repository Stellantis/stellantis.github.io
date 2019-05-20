---
title: Car.GetTime()
layout: headunit-sdk
supported:
  - 3
  - 4
type: api
---

### `Car.GetTime()`

| **Description** | Synchronizes all time values : `Car.Time.Hours`, `Car.Time.Minutes` and `Car.Time.OffsetUTC`.
| **Response** | *Boolean*  `True` if the time values were synchronized correctly, else `False`.
| **Parameter**   | *Void*

#### Example

```javascript
//If the user goes from one time zone to another the Time.GetTime function will update all time values

//Time values before updating
Car.Time.Hours()
Car.Time.Minutes()
Car.Time.OffsetUTC()

//Update the time values
Car.GetTime()

//Updated time values
Car.Time.Hours()
Car.Time.Minutes()
Car.Time.OffsetUTC()
```
	
#### Remark

>**Note :** `Car.GetTime` should always be called before reading time values to make sure all the values are synchronized.

>**Note 2:** For example a car going from France to England having its time updated based on Navigation satellites  will see the time values displayed changed.