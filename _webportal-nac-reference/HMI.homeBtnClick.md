---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: HMI.homeBtnClick
domain: HMI
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