---
title: Navigation.GetDestination()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetDestination()`

| **Description** | Retrieves the current position and stores it inside `Navigation.Destination`.  `Navigation.Destination.Latitude` and `Navigation.Destination.Longitude` are given in WGS84 Signed Decimal Degrees.
| **Response** | *Boolean*  `True` if the value is now correctly stored in `Navigation.Destination`, else `False` if the process failed.
| **Parameter**   | *Void*

#### Example

```javascript
if ( Navigation.GetDestination() === false ) {
	// GPS error, Navigation.Destination is empty
} else {
	var DestinationLatitude = Navigation.Destination.Latitude;
	var Destinationlongitude = Navigation.Destination.Longitude;
	var Destinationaddress = Navigation.Destination.address;
	var DestinationTown = Navigation.Destination.Town;
	var Destinationity = Navigation.Destination.City;
	var DestinationProvince = Navigation.Destination.Province;
	var DestinationCountry = Navigation.Destination.Country;
}
```

#### Remark

>**Note :** `Navigation.GetDestination` must always be used before accessing the value stored in `Navigation.Destination`.