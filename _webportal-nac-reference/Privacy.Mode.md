---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Privacy.Mode()
domain: Privacy
supported:
  - 3
  - 4
type: api
---

### `Privacy.Mode()`

| **Description** | Gets the privacy mode.
| **Response** | *String*  Current privacy mode.
| **Parameter**   | *Void*

#### Example

```javascript
If (Privacy.Mode() === "Private" || Privacy.Mode() === "Geoloc" ) {
	
} else {
	//Privacy.Mode() = "Public"
	Startapplication()
}
```

#### Remark

>**Note:** 3 values are available
- `Public`: All informations are available (Geolocalisation and internet connectivity are authorized)
- `Geoloc`: Geolocalisation is authorized
- `Private`: No Data sharing is authorized (No internet and no Geolocalisation) 

*Appeared in Wave 4.1 - version 30.05.14.30*