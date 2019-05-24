---
title: Navigation.WebDestinationReached
layout: headunit-sdk
supported:
  - 3
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