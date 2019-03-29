---
title: Navigation.InvalidCoordinates
layout: headunit-sdk
supported:
  - 3
  - 4
type: event
---
Event triggered when at least one of the coordinates used with `Navigation.LaunchGuidance` is invalid, due to : Type, size...

### Example

```javascript
try{	
	// Navigation
	if ((typeof Navigation !== "undefined") && (typeof Navigation.addEventListener !== "undefined")) {
		Navigation.addEventListener("InvalidCoordinates", InformUserInvalidCoordinates()	}
} catch(e) {
	DealWithNavigationError(e);
}
```