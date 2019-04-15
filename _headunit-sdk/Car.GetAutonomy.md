---
title: Car.GetAutonomy()
layout: headunit-sdk
supported:
  - 2
  - 3
type: api
---

### `Car.GetAutonomy()`

| **Description** | Gets the total autonomy remaining in the currently used distance unit. | 
| **Response** | `Number`   Remaining autonomy in currently used distance unit.   | 
| **Parameter**   | *Void* 

#### Example

```javascript
var CarAutonomy = Car.GetAutonomy();
// CarAutonomy = 342
// The max length is 3 characters
```