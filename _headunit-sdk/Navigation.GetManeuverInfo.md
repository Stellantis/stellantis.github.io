---
title: Navigation.GetManeuverInfo()
layout: headunit-sdk
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
	let ManeuverLatitude = Navigation.ManeuverInfo.Latitude;
	let ManeuverLongitude = Navigation.ManeuverInfo.Longitude;
	let ManeuverNextStreetName = Navigation.ManeuverInfo.nextStreetName;
	let ManeuverTown = Navigation.ManeuverInfo.Town;
	let ManeuverCity = Navigation.ManeuverInfo.City;
	let ManeuverProvince = Navigation.ManeuverInfo.Province;
	let ManeuverCountry = Navigation.ManeuverInfo.Country;
}
```

#### Remark

>**Note :** `Navigation.GetManeuverInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.