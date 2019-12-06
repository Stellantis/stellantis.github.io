---
title: Car.GetDayNightStatus()
supported:
  - 4
type: api
---

### `Car.GetDayNightStatus()`

| **Description** | Returns if the portal should use the day or night theme.
| **Response** | *Integer*  0 for day, 1 for night.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
// It's noon
var GetDayNightStatus = Car.GetDayNightStatus();
// GetDayNightStatus = 0
```


*Appeared in Software version 40.03.51.50*