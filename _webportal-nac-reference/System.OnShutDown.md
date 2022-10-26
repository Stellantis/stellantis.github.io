---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: System.OnShutDown
domain: System
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the system is being shut down.

>**Note:** This event is triggered 2 seconds before the system is completely shut down.

### Example

```javascript
try{
	
	// System
	if ((typeof System !== "undefined") && (typeof System.addEventListener !== "undefined")) {
		System.addEventListener("OnShutDown", SaveAllBeforeShutDown());
	}
} catch(e) {
	DealWithSystemError(e);
}
```

*Appeared in Wave 4.1 - version 21.02.23.40*