---
title: Navigation.RouteCalculationFailed
layout: headunit-sdk
supported:
  - 3
  - 4
type: event
---
Event triggered when the calculation of the itinerary ended with an error.

### Example

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("RouteCalculationFailed", HandleRouteFailure());
	}
} catch(e) {
	DealWithNavigationError(e);
}
```