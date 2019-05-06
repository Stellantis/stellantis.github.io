---
title: Navigation.GetNextWaypointETAHours()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetNextWaypointETAHours()`

| **Description** | Calculates and returns the estimated time of arrival at the next waypoint, precisely the hour.
| **Response** | *Number*  Estimated arrival hour at next waypoint.
| **Parameter**   | *Void*

#### Example

```javascript
var WaypointETAHours = Navigation.GetNextWaypointETAHours();
// WaypointETAHours = 1 Hour
```

#### Remark

>**Note :** `Navigation.GetNextWaypointETAHours` only gives the "Hour" part of the Estimated Time of arrival. To get the "Minutes" part, use `Navigation.GetNextWaypointETAMinutes`.