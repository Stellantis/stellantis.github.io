---
title: WebPortal.getCountry()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `WebPortal.getCountry()`

| **Description** | Gets the country currently selected by the user.
| **Response** | `String`  The country's name.
| **Parameter**   | Void 

#### Example

```javascript
var userCountry = WebPortal.getCountry()
if (userCountry === "France") {
	DisplayFranceContent()
}
```
