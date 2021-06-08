---
title: Navigation.LaunchGuidanceWaypoints()
supported:
  - 2
  - 4
type: api
privacy: Public
---

### `Navigation.LaunchGuidanceWaypoints(Number destLon, Number destLat, [object{lat: Number, lon: Number}] waypoints, Boolean customerConfirmation)`

| **Description** | Starts the navigation to the specified destination and going through all the specified waypoints.
| **Response** | *Boolean*  `True` if the destination and waypoints were all correctly set, else `False` if the process failed.

Parameter | Type | Description | Required
----|----|----|----
`destLon` | *Number* | The destination's longitude, should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Required
`destLat` | *Number* | The destination's latitude, should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Required
`waypoints` | *array[object(lat: Number, lon: Number)]* | The waypoints to go through before the final destination (9 waypoints max), Each waypoint should be WGS84 Signed Decimal Degrees and have a length < 11 characters. | Optional
`customerConfirmation`| *Boolean* | Available since *42.02.64.50*, if set to true, a pop-up will ask the user to confirm the new guidance request. | Optional, default: *false*.

#### IMPORTANT

> **Caution:** Guidance can **not** be launched when a popup (either [MQTT]({{site.baseurl}}/webportal/v1/connectivity/notification/#sending-popup) or [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open)) is displayed. To make sure the guidance have actually been launched please check that {{page.title}} return is `True`.

#### EXAMPLE

```javascript
var DestinationLongitude = 48.866669
var DestinationLatitude = 2.33333
var Waypoint1Lat = 48.77745
var Waypoint1Lon = 2.22366
var Waypoint2Lat = 48.111111
var Waypoint2Lon = 2.11132
var CustomerConfirmation = true

if ( Navigation.LaunchGuidanceWaypoints(DestinationLongitude, DestinationLatitude, [{lat: Waypoint1Lat, lon: Waypoint1Lon}, {lat: Waypoint2Lat, lon: Waypoint2Lon}], CustomerConfirmation) === false) {
	// Error, Itinerary not correctly set
} else {
	// Itinerary started
}
```

#### REMARK

>**Note:** This new version of the LaunchGuidance will override the current journey with the one being passed.

>**Note 2:** The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints`.

*Appeared in Software version 21.08.15.30*

*Appeared in Software version 40.03.49.50*
