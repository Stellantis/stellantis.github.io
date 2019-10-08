---
title: 'addVehicleWithVIN:andUIN:'
type: ios api
---

### `addVehicleWithVIN:andUIN:`

This method is to make the user’s device scan for a vehicle with a given
VIN and UIN.

For the time being, GroupePSAConnectedVehiclesSDK supports only one vehicle at a time. In order to switch to another vehicle, you will need to stop the service, add the vin of the second vehicle, then start the service again.

```objective_c
- (GPCVVehicle *_Nullable)addVehicleWithVIN:(nonnull NSString *)vin
andUIN:(nonnull NSString *)uin;
```

#### Parameters

Parameter | Type | Description | Requirement
----|----|----|----
`vin` | *NSString* | Unique identifier of a vehicle. | Required.
`uin` | *NSString* | Unique identifier of a SDCM. | Required.

#### Returns

Type | Description 
----|----
`GPCVVehicle` | The vehicle object newly created. 
