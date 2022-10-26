---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.getLanguage()
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: api
---

### `WebPortal.getLanguage()`

| **Description** | Gets the language currently being used.
| **Response** | `String`  The language in the following format: "en-GB".
| **Parameter**   | Void 

#### Example

```javascript
var userLanguage = WebPortal.getLanguage()
// userLanguage = "fr-FR"
if (userLanguage === "fr-FR") {
	ContentInFrench()
}
```