---
title: Car.GetAutonomy()
layout: headunit-sdk
supported:
  - 2
  - 3
type: api
---

### `Car.GetAutonomy()`

| **Description** | Gets the total autonomy remaining always in km. | 
| **Response** | `Number`   Remaining autonomy in km.   | 
| **Parameter**   | *Void* 

#### Example

```javascript
var CarAutonomy = Car.GetAutonomy();
// CarAutonomy = 342 km
// The max length is 3 characters
```