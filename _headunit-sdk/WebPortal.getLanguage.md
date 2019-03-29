---
title: WebPortal.getLanguage()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `WebPortal.getLanguage()`

| **Description** | Gets the language currently being used.
| **Response** | `String`  The language in the following format : "en-GB".
| **Parameter**   | Void 

#### Example

```javascript
var userLanguage = WebPortal.getLanguage()
if (userLanguage === "fr-FR") {
	ContentInFrench()
}
```