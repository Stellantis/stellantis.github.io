---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.GetManeuverInfo()
domain: Navigation
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetManeuverInfo()`

| **Description** | Retrieves the position of the next maneuver to be done and stores it inside `Navigation.ManeuverInfo`.
| **Response** | *Boolean*  `True` if the value is now correctly stored in `Navigation.ManeuverInfo`, else `False` if the process failed.
| **Parameter**   | *Void*

#### Fields

`Navigation.ManeuverInfo` is the object where are stored the informations about the next maneuver to be done after a successful call to `Navigation.GetManeuverInfo`.


- `Navigation.ManeuverInfo.Latitude`, *Number* in WGS84 Signed Decimal Degrees
- `Navigation.ManeuverInfo.Longitude`, *Number* in WGS84 Signed Decimal Degrees
- `Navigation.ManeuverInfo.nextStreetName`, *String*
- `Navigation.ManeuverInfo.Town`, *String*
- `Navigation.ManeuverInfo.City`, *String*
- `Navigation.ManeuverInfo.Province`, *String* 
- `Navigation.ManeuverInfo.Country`, *String*

#### Example

```javascript
if ( Navigation.GetManeuverInfo() === false ) {
	// GPS error, Navigation.ManeuverInfo is empty
} else {
	var ManeuverLatitude = Navigation.ManeuverInfo.Latitude;
	var ManeuverLongitude = Navigation.ManeuverInfo.Longitude;
	var ManeuverNextStreetName = Navigation.ManeuverInfo.nextStreetName;
	var ManeuverTown = Navigation.ManeuverInfo.Town;
	var ManeuverCity = Navigation.ManeuverInfo.City;
	var ManeuverProvince = Navigation.ManeuverInfo.Province;
	var ManeuverCountry = Navigation.ManeuverInfo.Country;
}
```

#### Remark

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

>**Note:** `Navigation.GetManeuverInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.

*Appeared in Software version 40.03.42.30*