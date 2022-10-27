---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.RouteCalculationCancelled
domain: Navigation
supported:
  - 2
  - 4
type: event
---
Event triggered when the calculation of the itinerary was ended abruptly *eg:* if the user perform SW update during route calculation.

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

>**Note:** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.

*Appeared in Software version 40.03.49.50*