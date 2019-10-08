---
title: Navigation.WebDestinationReached

supported:
  - 4
type: event
---
Event triggered when a route launched via `Navigation.LaunchGuidance` or `Navigation.LaunchGuidanceWaypoints` has reached the destination.

### Example

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("WebDestinationReached", InformUserDestinationReached()	}
} catch(e) {
	DealWithNavigationError(e);
}
```

>**Note :** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.

*Appeared in Wave 4.1 - version 40.03.49.50*