---
title: Navigation.InvalidCoordinates

supported:
  - 2
  - 4
type: event
---
Event triggered when at least one of the coordinates used with `Navigation.LaunchGuidance` is invalid, due to : Type, size...

### EXAMPLE

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("InvalidCoordinates", InformUserInvalidCoordinates()	}
} catch(e) {
	DealWithNavigationError(e);
}
```

>**Note :** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.

*Appeared in Software version 40.03.49.50*