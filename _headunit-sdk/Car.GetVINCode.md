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
let VINCode = Car.GetVINCode();
// VINCode = VF7BSISCT00000001
```

#### Remark

>**Note :** a VIN code is always 17 characters long.