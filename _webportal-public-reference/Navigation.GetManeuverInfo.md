---
title: Navigation.GetManeuverInfo()

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

>**Note :** `Navigation.GetManeuverInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.

*Appeared in Software version 40.03.42.30*