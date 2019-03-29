---
title: Navigation.GetCurrentPositionLatitude()
layout: headunit-sdk
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

#### Example

```javascript
let CurrentLatitude = Navigation.GetCurrentPositionLatitude();
// CurrentLatitude = 48.866669
```

#### Remark

>**Note :** The returned latitude's length < 11 characters.