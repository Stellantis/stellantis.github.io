---
title: Privacy.ModeFull
layout: headunit-sdk
supported:
  - 2
  - 3
type: event
---
Event triggered when the Full privacy mode is selected.

### Example

```javascript
try {
	// Privacy
	if ((typeof Privacy !== "undefined") && (typeof Privacy.addEventListener !== "undefined")) {
		Privacy.addEventListener("ModeFull", function(){
			alert("The privacy full mode is now Active");
		});
	}
} catch(e) {
	DealWithPrivacyError(e);
}
```