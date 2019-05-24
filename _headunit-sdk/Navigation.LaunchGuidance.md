---
title: Navigation.LaunchGuidance()
layout: headunit-sdk
supported:
  - 2
  - 3
type: api
privacy: Public
---

### `Navigation.LaunchGuidance(String desc, Number destLon, Number destLat, Number s1Lon, Number s1Lat, Number s2Lon, Number s2Lat, Number s3Lon, Number s3Lat, Number shifted)`

| **Description** | Starts the navigation to the specified destination.
| **Response** | *Boolean*  `True` if the final destination and Intermediary destinations were all correctly set, else `False` if the process failed.

Parameter | Type | Description | Required
----|----|----|----
`desc` | *String* | The destination's description, Should have a length < 60 characters. | Required
`destLon` | *Number* | The destination's longitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Required
`destLat`| *Number* | The destination's latitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Required
`s1Lon` | *Number* | The first waypoint's longitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`s1Lat` | *Number* | The first waypoint's latitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`s2Lon` | *Number* | The second waypoint's longitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`s2Lat` | *Number* | The second waypoint's latitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`s3Lon` | *Number* | The third waypoint's longitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`s3Lat` | *Number* | The third waypoint's latitude, Should be WGS84 Signed Decimal Degrees and have a length < 4 characters. | Optional
`shifted` | *Number* | The coordinate system to use, Should be either 0 or 1 | Optional

#### Example

```javascript
var Description ="Ignored"
var DestinationLongitude = 48.866669
var DestinationLatitude = 2.33333
var Waypoint1Lat = 0
var Waypoint1Lon = 0
var Waypoint2Lat = 0
var Waypoint2Lon = 0
var Waypoint3Lat = 0
var Waypoint3Lon = 0
var Shifted = 0

if ( Navigation.LaunchGuidance(DestinationLongitude, DestinationLatitude, Waypoint1Lat, Waypoint1Lon, Waypoint2Lat, Waypoint2Lon, Waypoint3Lat, Waypoint3Lon, Shifted) === false ) {
	// Error, Itinerary not correctly set
} else {
	// Itinerary started
}
```

#### Remark

>**Note :** Only the `destLon` and `destLat` parameters are needed, the others will be ignored so they can be replaced by 0.

>**Note 2:** The old version of the LaunchGuidance will ask for confirmation before overriding the current journey with the one being passed.

>**Note 3:** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.


>**Important :** In order to verify if you can use the new API `Navigation.LaunchGuidanceWaypoints` or the old one `Navigation.LaunchGuidance`, you can check the existence of one of the following JS events :
>- *Navigation.InvalidCoordinates*
>- *Navigation.RouteCalculationSuccessful*
>- *Navigation.RouteCalculationCanceled*
>- *Navigation.RouteCalculationFailed*
>
>```javascript
>function() {
>    try{
>      if('undefined' != typeof Navigation)
>      {
>        if(Navigation.hasOwnProperty('InvalidCoordinates'))
>        {
>          this.newInterface = true
>        }
>      }      
>    } catch (e)
>    {
>      this.newInterface = false
>    }
>  }
>```
>
>If newInterface is false then you should use the old one `Navigation.LaunchGuidance`