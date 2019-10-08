---
title: Device.GetCarBrand()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetCarBrand()`

| **Description** | Get the brand of the vehicle
| **Response** | *Number* Car brand 

> Value | Car Brand
> ----|----
> 0 | Peugeot
> 1 | Citroen
> 2 | DS

| **Parameter**   | *Void*

#### Example

```javascript
var carBrand = Device.GetCarBrand()
if (carbrand === 2) {
  DisplayMenuDS()
} else {
  DisplayMenu()
}
```

*Appeared in Software version 5.14.11.30*