---
title: HMI.cancelBtnPopupRequestClicked
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the *Cancel* button is clicked on the HMI popup request.

### Example

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