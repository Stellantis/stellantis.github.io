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
	var Storedaddress = Navigation.CurrentPosition.address;
	var StoredTown = Navigation.CurrentPosition.Town;
	var StoredCity = Navigation.CurrentPosition.City;
	var StoredProvince = Navigation.CurrentPosition.Province;
	var StoredCountry = Navigation.CurrentPosition.Country;
}
```

#### Remark

>**Note :** `Navigation.GetCurrentPosition` must always be used before accessing the value stored in `Navigation.CurrentPosition`.

*Appeared in Software version 40.03.42.30*