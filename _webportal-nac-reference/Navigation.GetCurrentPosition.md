---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.GetCurrentPosition()
domain: Navigation
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetCurrentPosition()`

| **Description** | Retrieves the current position and stores it inside `Navigation.CurrentPosition`.
| **Response** | *Boolean*  `True` If the value is now correctly stored in `Navigation.CurrentPosition`, else `False` if the process failed.
| **Parameter**   | *Void*

#### Fields

`Navigation.CurrentPosition` is the object where are stored the informations about the current position after a successful call to `Navigation.GetCurrentPosition`.

- `Navigation.CurrentPosition.address`, *String*
- `Navigation.CurrentPosition.Town`, *String*
- `Navigation.CurrentPosition.City`, *String*
- `Navigation.CurrentPosition.Province`, *String* 
- `Navigation.CurrentPosition.Country`, *String*

#### Example

```javascript
if ( Navigation.GetCurrentPosition === false ) {
	// GPS error, Navigation.CurrentPosition is empty
} else {
	var Storedaddress = Navigation.CurrentPosition.address;
	var StoredTown = Navigation.CurrentPosition.Town;
	var StoredCity = Navigation.CurrentPosition.City;
	var StoredProvince = Navigation.CurrentPosition.Province;
	var StoredCountry = Navigation.CurrentPosition.Country;
}
```

#### Remark

>**Note:** `Navigation.GetCurrentPosition` must always be used before accessing the value stored in `Navigation.CurrentPosition`.

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

*Appeared in Software version 40.03.42.30*