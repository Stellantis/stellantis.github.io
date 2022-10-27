---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: HMI.Settings.languageSet
domain: HMI
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