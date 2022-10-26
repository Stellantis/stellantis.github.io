---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.GetDestination()
domain: Navigation
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetDestination()`

| **Description** | Retrieves the current destination and stores it inside `Navigation.Destination`.  `Navigation.Destination.Latitude` and `Navigation.Destination.Longitude` are given in WGS84 Signed Decimal Degrees.
| **Response** | *Boolean*  `True` if the value is now correctly stored in `Navigation.Destination`, else `False` if the process failed.
| **Parameter**   | *Void*


*Navigation*

#### Fields

`Navigation.Destination` is the object where are stored the informations about the destination after a successful call to `Navigation.GetDestination`.

- `Navigation.Destination.Latitude`, *Number* in WGS84 Signed Decimal Degrees
- `Navigation.Destination.Longitude`, *Number* in WGS84 Signed Decimal Degrees
- `Navigation.Destination.address`, *String*
- `Navigation.Destination.Town`, *String*
- `Navigation.Destination.City`, *String*
- `Navigation.Destination.Province`, *String* 
- `Navigation.Destination.Country`, *String*


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

>**Note:** `Navigation.GetDestination` must always be used before accessing the value stored in `Navigation.Destination`.

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

*Appeared in Software version 40.03.42.30*