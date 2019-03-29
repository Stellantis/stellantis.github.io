---
title: Navigation.RouteCalculationCancelled
layout: headunit-sdk
supported:
  - 3
  - 4
type: event
---
Event triggered when the calculation of the itinerary was ended abruptly.

### Example

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("RouteCalculationCancelled", HandleRouteCancelation());
	}
} catch(e) {
	DealWithNavigationError(e);
}
```