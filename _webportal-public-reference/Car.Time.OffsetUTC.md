---
title: Car.Time.OffsetUTC()
supported:
  - 3
  - 4
type: api
---

### `Car.Time.OffsetUTC()`

| **Description** | Get the current Offset/Time zone of the car. |
| **Response** | *String*  Offset format is `[-]HHMM`. With `HHMM`: Hours and minutes. And `-` is displayed if timezone is negative. If the timezone is positive, only `HHMM` is displayed. See example below. |
| **Parameter**   | *Void* |

#### EXAMPLE

```javascript
//Update the time values
Car.GetTime()

//Save time values
var CurrentOffset = Car.Time.OffsetUTC()
// Example 1 - Timezone is negative: CurrentOffset = "-0900";
// Example 2 - Timezone if positive: CurrentOffset = "0100";
```

#### REMARK

>**Note:** `Car.GetTime` should always be called before reading time values to make sure all the values are synchronized.

*Appeared in Software version 30.04.64.40*