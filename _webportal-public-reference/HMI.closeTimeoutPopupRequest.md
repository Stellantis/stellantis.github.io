---
title: HMI.closeTimeoutPopupRequest

supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when no button is clicked on the HMI popup request and the timeout expires.

### EXAMPLE

```javascript
try {
	// HMI
	if ((typeof HMI !== "undefined") && (typeof HMI.addEventListener !== "undefined")) {
		HMI.addEventListener("closeTimeoutPopupRequest", TimeoutAction());
	}
} catch(e) {
	DealWithHMIError(e);
}
```

*Appeared in Software version 30.11.04.10*