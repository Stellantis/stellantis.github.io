---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Privacy.ModePublic
domain: Privacy
supported:
  - 3
  - 4
type: event
---
Event triggered when the Public privacy mode is selected.

### Example

```javascript
try {
	// Privacy
	if ((typeof Privacy !== "undefined") && (typeof Privacy.addEventListener !== "undefined")) {
		Privacy.addEventListener("ModePublic", function(){
			alert("Public privacy mode is now active");
		});
	}
} catch(e) {
	DealWithPrivacyError(e);
}
```

*Appeared in Wave 4.1 - version 30.05.14.30*