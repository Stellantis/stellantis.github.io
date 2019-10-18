---
title: Car
supported:
  - 2
  - 3
  - 4
type: class
---

#### Overview

Provides the methods to manage informations about the vehicle.

#### Methods Summary

Method | Response Type | Description
-----|----|----
[Car.GetVINCode()]({{ site.baseurl }}/webportal/reference/#api-Car-GetVINCode) | String | Gets the VIN code of the vehicle.
[Car.GetFuelType()]({{ site.baseurl }}/webportal/reference/#api-Car-GetFuelType) | Number| Gets the fuel type of the vehicle.
[Car.GetSpeed()]({{ site.baseurl }}/webportal/reference/#api-Car-GetSpeed) | Number| Gets the current speed.
[Car.GetBatteryAutonomy()]({{ site.baseurl }}/webportal/reference/#api-Car-GetBatteryAutonomy) | Number| Gets the remaining battery autonomy.
[Car.GetBatteryLevel()]({{ site.baseurl }}/webportal/reference/#api-Car-GetBatteryLevel) | Number| Gets the current battery level.
[Car.GetDrivingState()]({{ site.baseurl }}/webportal/reference/#api-Car-GetDrivingState) | Boolean | Gets the current driving state.
[Car.GetTime()]({{ site.baseurl }}/webportal/reference/#api-Car-GetTime) | Boolean | Synchronizes time values.
[Car.Time.Hours()]({{ site.baseurl }}/webportal/reference/#api-Car-Time-Hours) | Number | Gets current hour.
[Car.Time.Minutes()]({{ site.baseurl }}/webportal/reference/#api-Car-Time-Minutes) | Number | Gets current minute.
[Car.Time.OffsetUTC()]({{ site.baseurl }}/webportal/reference/#api-Car-Time-OffsetUTC) | Number | Gets current offset.
[Car.GetFuelLevel()]({{ site.baseurl }}/webportal/reference/#api-Car-GetFuelLevel) | Number | Gets current fuel level.
[Car.GetFuelUnit()]({{ site.baseurl }}/webportal/reference/#api-Car-GetFuelUnit) | String | Gets current fuel unit.
[Car.GetMileage()]({{ site.baseurl }}/webportal/reference/#api-Car-GetMileage) | Number | Gets current mileage.
[Car.GetDayNightStatus()]({{ site.baseurl }}/webportal/reference/#api-Car-GetDayNightStatus) | Integer | Returns if the portal should use the day or night theme.

#### Events Summary

Event | Description
----|----
[Car.driverDistractionOn]({{ site.baseurl }}/webportal/reference/#event-Car-driverDistractionOn) | Event triggered when the driving state is changed to False.
[Car.driverDistractionOff]({{ site.baseurl }}/webportal/reference/#event-Car-driverDistractionOff) | Event triggered when the driving state is changed to True.
[Car.distanceUnit]({{ site.baseurl }}/webportal/reference/#event-Car-distanceUnit) | Event triggered when the distance unit is changed.
[Car.fuelUnit]({{ site.baseurl }}/webportal/reference/#event-Car-fuelUnit) | Event triggered when the fuel unit is changed.
[Car.speedUnit]({{ site.baseurl }}/webportal/reference/#event-Car-speedUnit) | Event triggered when the speed unit is changed.
