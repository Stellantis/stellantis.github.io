---
title: Navigation.RouteCalculationSuccessful
layout: headunit-sdk
supported:
  - 3
  - 4
type: event
---
Event triggered when the calculation of the itinerary ended without any error.

### Example

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("RouteCalculationSuccessful", HandleRouteSuccess());
	}
} catch(e) {
	DealWithNavigationError(e);
}
```

>**Note :** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.