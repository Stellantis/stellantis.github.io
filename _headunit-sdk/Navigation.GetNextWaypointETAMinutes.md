---
title: Navigation.GetNextWaypointETAMinutes()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetNextWaypointETAMinutes()`

| **Description** | Calculate and return the estimated time of arrival at the next waypoint, precisely the minutes.
| **Response** | *Number*  Estimated minute of arrival at the next waypoint.
| **Parameter**   | *Void*

#### Example

```javascript
var WaypointETAMinutes = Navigation.GetNextWaypointETAMinutes();
```
	
#### Remark

>**Note :** `Navigation.GetNextWaypointETAMinutes` only gives the "Minutes" part of the Estimated Time of arrival. To get the "Hour" part, use `Navigation.GetNextWaypointETAHour`.