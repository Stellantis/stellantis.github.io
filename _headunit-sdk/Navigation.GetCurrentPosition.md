---
title: Navigation.GetCurrentPosition()
layout: headunit-sdk
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

#### Example

```javascript
if ( Navigation.GetCurrentPosition === false ) {
	// GPS error, Navigation.CurrentPosition is empty
} else {
	let Storedaddress = Navigation.CurrentPosition.address;
	let StoredTown = Navigation.CurrentPosition.Town;
	let StoredCity = Navigation.CurrentPosition.City;
	let StoredProvince = Navigation.CurrentPosition.Province;
	let StoredCountry = Navigation.CurrentPosition.Country;
}
```

#### Remark

>**Note :** `Navigation.GetCurrentPosition` must always be used before accessing the value stored in `Navigation.CurrentPosition`.