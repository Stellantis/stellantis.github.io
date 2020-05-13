---
title: Navigation.GetCurrentPositionLatitude()
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetCurrentPositionLatitude()`

| **Description** | Gets the current position's latitude in WGS84 Signed Decimal Degrees.
| **Response** | *Number*  Current position's latitude as WGS Signed Decimal Degrees.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
var CurrentLatitude = Navigation.GetCurrentPositionLatitude();
// CurrentLatitude = 48.866669
```

#### REMARK

>**Note:** The returned latitude's length < 11 characters.

*Appeared in Software version 40.03.42.30*