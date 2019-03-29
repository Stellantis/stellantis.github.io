---
title: System.OnShutDown
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the system is being shut down.

>**Note :** This event is triggered 2 seconds before the system is completely shut down.

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