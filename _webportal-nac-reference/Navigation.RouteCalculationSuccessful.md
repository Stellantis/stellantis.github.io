---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.RouteCalculationSuccessful
domain: Navigation
supported:
  - 2
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

>**Note:** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.

*Appeared in Software version 40.03.49.50*