---
title: Car.GetVINCode()
layout: headunit-sdk
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

#### Example

```javascript
var VINCode = Car.GetVINCode();
// VINCode = VF7AAAAAA00000001
```

#### Remark

>**Note :** a VIN code is always 17 characters long.

*Appeared in Software version 5.14.11.30*