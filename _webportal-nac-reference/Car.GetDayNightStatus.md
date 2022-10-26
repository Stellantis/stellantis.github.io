---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.GetDayNightStatus()
domain: Car
supported:
  - 4
type: api
---

### `Car.GetDayNightStatus()`

| **Description** | Returns if the portal should use the day or night theme.
| **Response** | *Integer*  0 for day, 1 for night.
| **Parameter**   | *Void*

#### Example

```javascript
// It's noon
var GetDayNightStatus = Car.GetDayNightStatus();
// GetDayNightStatus = 0
```


*Appeared in Software version 40.03.51.50*