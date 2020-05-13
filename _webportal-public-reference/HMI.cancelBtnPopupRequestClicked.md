---
title: HMI.cancelBtnPopupRequestClicked
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the *Cancel* button is clicked on the HMI popup request.

### EXAMPLE

```javascript
try {
	// HMI
	if ((typeof HMI !== "undefined") && (typeof HMI.addEventListener !== "undefined")) {
		HMI.addEventListener("cancelBtnPopupRequestClicked", CancelAction());
	}
} catch(e) {
	DealWithHMIError(e);
}
```

*Appeared in Software version 30.11.04.10*