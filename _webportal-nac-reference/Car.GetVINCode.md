---
title: Car.GetVINCode()
supported:
  - 2
  - 3
  - 4
type: api
privacy: Geoloc
---

### `Car.GetVINCode()`

| **Description** | Gets the VIN code, a vehicle's unique identifier.
| **Response** | *String*  The VIN code.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
var VINCode = Car.GetVINCode();
// VINCode = VF7AAAAAA00000001
```

#### REMARK

>**Note:** a VIN code is always 17 characters long.

*Appeared in Software version 5.14.11.30*