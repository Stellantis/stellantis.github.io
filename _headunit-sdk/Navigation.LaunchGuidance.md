---
title: Navigation.LaunchGuidance()
layout: headunit-sdk
supported:
  - 4
type: api
privacy: Public
---

### `Navigation.LaunchGuidance(Number destLon, Number destLat, [object{Lat: Number, Lon: Number}] waypoints)`

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

if ( Navigation.LaunchGuidance(DestinationLongitude, DestinationLatitude, [{lat: Waypoint1Lat, lon: Waypoint1Lon}, {lat: Waypoint2Lat, lon: Waypoint2Lon}]) === false ) {
	// Error, Itinerary not correctly set
} else {
	// Itinerary started
}
```

#### Remark

>**Note :** Should be compatible with wave 2 in future versions

>**Note 2:** This new version of the LaunchGuidance will override the current journey with the one being passed.


<div class="field is-grouped is-grouped-multiline">
    
    <div class="control">
        <div class="tags has-addons">
            <span class="tag is-dark">wave</span>
            <span class="tag is-info">2</span>
        </div>
    </div>
    
    <div class="control">
        <div class="tags has-addons">
            <span class="tag is-dark">wave</span>
            <span class="tag is-info">3</span>
        </div>
    </div>
    
</div>
<p>

</p>



### `Navigation.LaunchGuidance(String desc, Number destLon, Number destLat, Number s1Lon, Number s1Lat, Number s2Lon, Number s2Lat, Number s3Lon, Number s3Lat)`

[comment]: ### (In LaunchGuidance the parameter : Number *shifted* also exists and would have to be indicated after *s3Lat*)

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

[comment]: ### (The parameter `shifted`, *Number* also exists, it is 1 character long, whose value is either 0 or 1, and indicates whether the chinese gps coordinates system should be used or not)


#### Example

```javascript
var DestinationLongitude = 48.866669
var DestinationLatitude = 2.33333
var Waypoint1Lat = 48.77745
var Waypoint1Lon = 2.22366
var Waypoint2Lat = 48.111111
var Waypoint2Lon = 2.11132
var Waypoint3Lat = 48.55544
var Waypoint3Lon = 2.31111

if ( Navigation.LaunchGuidance(DestinationLongitude, DestinationLatitude, Waypoint1Lat, Waypoint1Lon, Waypoint2Lat, Waypoint2Lon, Waypoint3Lat, Waypoint3Lon) === false ) {
	// Error, Itinerary not correctly set
} else {
	// Itinerary started
}
```

#### Remark

>**Note :** Only the `destLon` and `destLat` parameters are needed, the others are ignored.

>**Note 2:** The old version of the LaunchGuidance will ask for confirmation before overriding the current journey with the one being passed.


>**Important :** In order to verify if you can use the new API (wave 4) or the old one, you can check the existence of one of the following JS events :
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