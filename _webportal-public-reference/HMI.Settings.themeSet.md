---
title: HMI.Settings.themeSet
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the theme is changed.

### Example

```javascript
try{// HMI.Settings
	if ((typeof HMI !== "undefined") && (typeof HMI.Settings !== "undefined") && (typeof HMI.Settings.addEventListener !== "undefined")) {
		HMI.Settings.addEventListener("themeSet", function(){
			Alert("The theme was changed");
		});
	}
} catch(e) {
	DealWithHMISettingsError(e);
}
```

*Appeared in Software version 30.11.04.10*