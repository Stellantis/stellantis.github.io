---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: HMI.WebBrowser.hide
domain: HMI
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when focus is not on WebPortal.

### Example

```javascript
try {
	// HMI.WebBrowser
	if ((typeof HMI !== "undefined") && (typeof HMI.WebBrowser !== "undefined") && (typeof HMI.WebBrowser.addEventListener !== "undefined")) {
		HMI.WebBrowser.addEventListener("hide", function(){
			alert("The Browser has been hidden");
		});
	}
} catch(e) {
	DealWithHMIWebBrowserError(e);
}
```

*Appeared in Software version 30.11.04.10*