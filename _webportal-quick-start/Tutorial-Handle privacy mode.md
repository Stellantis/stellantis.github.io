---
type: quick start
---

# Privacy mode

For every app it is also mandatory to handle the privacy mode of the user.

The user can select one of 3 modes :
- Public, you can access both the internet and the geolocation of the user
- Geoloc, you can only access the internet as the geolocation is locked
- Full, you can access neither the internet nor the geolocation

```javascript
if ((typeof Privacy !== "undefined") && (typeof Privacy.addEventListener !== "undefined")) {
	Privacy.addEventListener("ModePublic", function(){
		console.log("success, " + "Privacy.ModePublic()");
	});
	Privacy.addEventListener("ModeFull", function(){
		console.log("success, " + "Privacy.ModeFull()");
	});
	Privacy.addEventListener("ModeGeoloc", function(){
		console.log("success, " + "Privacy.ModeGeoloc()");
	});
}
```

Some functionnalities will be unavailable in Geoloc or Full privacy mode.

### When Privacy.Mode()=Full

The following methods return undefined :
- Car.GetVINCode()
- Car.GetSpeed()
- Navigation.GetCurrentPositionLatitude()
- Navigation.GetCurrentPositionLongitude()
- Navigation.CurrentPosition.Altitude
- Navigation.GetCurrentPosition()
- Navigation.CurrentPosition.Address
- Navigation.CurrentPosition.Town
- Navigation.CurrentPosition.City
- Navigation.CurrentPosition.Province
- Navigation.CurrentPosition.Coutry
- Navigation.GetDestination()
- Navigation.Destination.Latitude
- Navigation.Destination.Longitude
- Navigation.Destination.Address
- Navigation.Destination.Town
- Navigation.Destination.City
- Navigation.Destination.Province
- Navigation.Destination.Coutry
- Navigation.GetManeuverInfo()
- Navigation.ManeuverInfo.Latitude
- Navigation.ManeuverInfo.Longitude
- Navigation.ManeuverInfo.nextStreetName
- Navigation.ManeuverInfo.Town
- Navigation.ManeuverInfo.City
- Navigation.ManeuverInfo.Province
- Navigation.ManeuverInfo.Country
- Navigation.GetJourneyInfo()
- Navigation.JourneyInfo.estimatedTimeOfArrivalH
- Navigation.JourneyInfo.estimatedTimeOfArrivalMin
- Navigation.GetNextWaypoint.ETAHours()
- Navigation.GetNextWaypoint.ETAMinutes()
	
These methods won't do anything and return false :
- Navigation.LaunchGuidance()
- Navigation.LaunchGuidanceWaypoint()

### When Privacy.Mode()=geoloc

The following methods return undefined :
- Navigation.GetCurrentPositionLatitude()
- Navigation.GetCurrentPositionLongitude()
- Navigation.CurrentPosition.Altitude
- Navigation.GetCurrentPosition()
- Navigation.CurrentPosition.Address
- Navigation.CurrentPosition.Town
- Navigation.CurrentPosition.City
- Navigation.CurrentPosition.Province
- Navigation.CurrentPosition.Coutry
- Navigation.GetDestination()
- Navigation.Destination.Latitude
- Navigation.Destination.Longitude
- Navigation.Destination.Address
- Navigation.Destination.Town
- Navigation.Destination.City
- Navigation.Destination.Province
- Navigation.Destination.Coutry
- Navigation.GetManeuverInfo()
- Navigation.ManeuverInfo.Latitude
- Navigation.ManeuverInfo.Longitude
- Navigation.ManeuverInfo.nextStreetName
- Navigation.ManeuverInfo.Town
- Navigation.ManeuverInfo.City
- Navigation.ManeuverInfo.Province
- Navigation.ManeuverInfo.Country
- Navigation.GetJourneyInfo()
- Navigation.JourneyInfo.estimatedTimeOfArrivalH
- Navigation.JourneyInfo.estimatedTimeOfArrivalMin
- Navigation.GetNextWaypoint.ETAHours()
- Navigation.GetNextWaypoint.ETAMinutes()
	
These methods won't do anything and return false :
- Navigation.LaunchGuidance()
- Navigation.LaunchGuidanceWaypoint()
