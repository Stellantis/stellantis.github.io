---
title: Navigation.LaunchGuidanceWaypoints()
layout: headunit-sdk
supported:
  - 2
  - 4
type: api
privacy: Public
---

### `Navigation.LaunchGuidanceWaypoints(Number destLon, Number destLat, [object{Lat: Number, Lon: Number}] waypoints)`

| **Description** | Starts the navigation to the specified destination and going through all the specified waypoints.
| **Response** | *Boolean*  `True` if the destination and waypoints were all correctly set, else `False` if the process failed.

Parameter | Type | Description | Required
----|----|----|----
`destLon` | *Number* | The destination's longitude, Should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Required
`destLat` | *Number* | The destination's latitude, Should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Required
`waypoints` | *array[object(Lat: Number, Lon: Number)]* | The waypoints to go through before the final destination (9 waypoints max), Each waypoint should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Required


#### Example

```javascript
var DestinationLongitude = 48.866669
var DestinationLatitude = 2.33333
var Waypoint1Lat = 48.77745
var Waypoint1Lon = 2.22366
var Waypoint2Lat = 48.111111
var Waypoint2Lon = 2.11132

if ( Navigation.LaunchGuidanceWaypoints(DestinationLongitude, DestinationLatitude, [{lat: Waypoint1Lat, lon: Waypoint1Lon}, {lat: Waypoint2Lat, lon: Waypoint2Lon}]) === false ) {
	// Error, Itinerary not correctly set
} else {
	// Itinerary started
}
```

#### Remark

>**Note:** This new version of the LaunchGuidance will override the current journey with the one being passed.

>**Note 2:** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.


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
>If newInterface is true then you should use the new version of the API (wave 4)

*Appeared in Software version 21.08.15.30*

*Appeared in Software version 40.03.49.50*
