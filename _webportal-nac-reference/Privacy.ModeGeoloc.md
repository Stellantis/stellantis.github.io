---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Privacy.ModeGeoloc
domain: Privacy
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

*Appeared in Wave 4.1 - version 30.05.14.30*