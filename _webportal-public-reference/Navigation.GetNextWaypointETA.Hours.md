---
title: Navigation.GetNextWaypoint.ETAHours()

supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetNextWaypoint.ETAHours()`

| **Description** | Calculates and returns the estimated time of arrival at the next waypoint, precisely the hour.
| **Response** | *Number*  Estimated arrival hour at next waypoint.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
var WaypointETAHours = Navigation.GetNextWaypoint.ETAHours();
// WaypointETAHours = 1 Hour
```

#### REMARK

>**Note :** `Navigation.GetNextWaypoint.ETAHours` only gives the "Hour" part of the Estimated Time of arrival. To get the "Minutes" part, use `Navigation.GetNextWaypoint.ETAMinutes`.

*Appeared in Software version 40.03.42.30*
