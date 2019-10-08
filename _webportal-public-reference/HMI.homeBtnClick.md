---
title: HMI.homeBtnClick

supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered whenever the *Home* button is pressed.

### Example

```javascript
try {
	// HMI
	if ((typeof HMI !== "undefined") && (typeof HMI.addEventListener !== "undefined")) {
		HMI.addEventListener("homeBtnClick", function(){
			alert("Application is being hidden to back to Home");
		});
	}
} catch(e) {
	DealWithHMIError(e);
}
```