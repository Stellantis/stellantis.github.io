---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.GetSpeed()
domain: Car
supported:
  - 2
  - 3
  - 4
type: api
privacy: Geoloc
---

### `Car.GetSpeed()`

| **Description** | Gets the current Speed of the car aways in km/h.
| **Response** | *Number*  Speed in km/h
| **Parameter**   | *Void*

#### Example

```javascript
var Speed = Car.GetSpeed();
// Speed = 117 km/h
```

#### Remark

>**Note:** The speed's max length is 3 characters.

>**Note 2:** This information **must not** be passed to your server. If you want to use this value then you have to do it directly on the embedded part of the app.

*Appeared in Software version 5.14.11.30*