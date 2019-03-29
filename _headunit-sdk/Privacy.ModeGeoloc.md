---
title: Privacy.ModeGeoloc
layout: headunit-sdk
supported:
  - 3
  - 4
type: event
---
Event triggered when the Geolocalisation privacy mode is selected.

### Example

```javascript
try {
	// Privacy
	if ((typeof Privacy !== "undefined") && (typeof Privacy.addEventListener !== "undefined")) {
		Privacy.addEventListener("ModeGeoloc", function(){
			alert("Geoloc privacy mode is now active some functionnalities won't be available");
		});
	}
} catch(e) {
	DealWithPrivacyError(e);
}
```