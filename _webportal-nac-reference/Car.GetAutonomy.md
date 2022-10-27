---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.GetAutonomy()
domain: Car
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

*Appeared in Software version 5.14.11.30*
