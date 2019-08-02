---
title: HMI.Settings.languageSet
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the user changes the language in the settings.

### Example

```javascript
try{// HMI.Settings
	if ((typeof HMI !== "undefined") && (typeof HMI.Settings !== "undefined") && (typeof HMI.Settings.addEventListener !== "undefined")) {
		HMI.Settings.addEventListener("languageSet", ChangeLanguageDisplayed(WebPortal.getLanguage()));
	}
} catch(e) {
	DealWithHMISettingsError(e);
}
```

*Appeared in Software version 30.11.04.10*