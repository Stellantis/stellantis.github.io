---
title: Navigation
supported:
  - 2
  - 3
  - 4
type: class
---

#### Overview

Provides the methods to manage the Navigation system.

#### Methods Summary

Method | Response Type | Description
-----|----|----
[Navigation.GetCurrentPositionLatitude()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetCurrentPositionLatitude) | Number | Gets the current position's latitude in WGS84 Signed Decimal Degrees.
[Navigation.GetCurrentPositionLongitude()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetCurrentPositionLongitude) | Number| Gets the current position's longitude in WGS84 Signed Decimal Degrees.
[Navigation.GetCurrentPosition()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetCurrentPosition) | Boolean | Retrieves the current position and store it inside `Navigation.CurrentPosition`.
[Navigation.GetDestination()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetDestination) | Boolean | Retrieves the current position and store it inside `Navigation.Destination`.
[Navigation.LaunchGuidance()]({{ site.baseurl }}/webportal_list/#api-Navigation-LaunchGuidance) | Boolean | Starts the navigation to the specified destination and passing through all intermediary destinations.
[Navigation.LaunchGuidanceWaypoints()]({{ site.baseurl }}/webportal_list/#api-Navigation-LaunchGuidanceWaypoints) | Boolean | Starts the navigation to the specified destination and passing through all the specified waypoints.
[Navigation.GetManeuverInfo()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetManeuverInfo) | Boolean | Retrieves information on the next maneuver and store it inside `Navigation.ManeuverInfo`.
[Navigation.GetJourneyInfo()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetJourneyInfo) | Boolean | Retrieves information on the estimated time of arrival at destination and store it inside `Navigation.JourneyInfo`.
[Navigation.GetNextWaypoint.ETAHours()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetNextWaypoint-ETAHours) | Number | Returns the estimated hour of arrival at the next waypoint.
[Navigation.GetNextWaypoint.ETAMinutes()]({{ site.baseurl }}/webportal_list/#api-Navigation-GetNextWaypoint-ETAMinutes) | Number | Returns the estimated minute of arrival at the next waypoint.

#### Events Summary

Event | Description
----|----
[Navigation.InvalidCoordinates]({{ site.baseurl }}/webportal_list/#event-Navigation-InvalidCoordinates) | Event triggered when at least one coordinate passed is invalid.
[Navigation.RouteCalculationSuccessful]({{ site.baseurl }}/webportal_list/#event-Navigation-RouteCalculationSuccessful) | Event triggered when the calculation of itinerary was completed successfully.
[Navigation.RouteCalculationCancelled]({{ site.baseurl }}/webportal_list/#event-Navigation-RouteCalculationCancelled) | Event triggered when the calculation of itinerary was cancelled abruptly.
[Navigation.RouteCalculationFailed]({{ site.baseurl }}/webportal_list/#event-Navigation-RouteCalculationFailed) | Event triggered when the calculation of itinerary ended with an error.
[Navigation.WebDestinationReached]({{ site.baseurl }}/webportal_list/#event-Navigation-WebDestinationReached) | Event triggered when the destination has been reached.

> The Navigation events are triggered only if the Navigation was launched using either `LaunchGuidance` or `LaunchGuidanceWaypoints` and not through the car's Navigation GUI.
