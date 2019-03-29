---
title: Car.GetSpeed()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
privacy: Geoloc
---

### `Car.GetSpeed()`

| **Description** | Gets the current Speed of the car in the unit currently used.
| **Response** | *Number*  Speed in the currently used speed unit.
| **Parameter**   | *Void*

#### Example

```javascript
let Speed = Car.GetSpeed();
// Speed = 117
```

#### Remark

>**Note :** The speed's max length is 3 characters.

>**Note 2:** This information **must not** be passed to your server. If you want to use this value then you have to do it directly on the embedded part of the app.