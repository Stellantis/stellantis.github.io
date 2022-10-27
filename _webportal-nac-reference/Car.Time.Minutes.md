---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.Time.Minutes()
domain: Car
supported:
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
Car.GetTime()

//Updated time values
var CurrentMinutes = Car.Time.Minutes()
// CurrentMinutes = 17 minutes
```
	
#### Remark

>**Note:** `Car.GetTime` should always be called before reading time values to make sure all the values are synchronized.

*Appeared in Software version 30.04.64.40*