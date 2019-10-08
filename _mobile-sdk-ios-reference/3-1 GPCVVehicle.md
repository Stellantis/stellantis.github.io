---
title: GPCVVehicle
type: ios model
---

### Vehicle Model

The GPCVVehicle class is the model of our vehicle. Here is a list of all the properties that it holds. And the one which may be useful to you is commented.

#### Attributes

|Name|Type|Description|
|--|--|--|
|vin |`@property (nonatomic, copy, nonnull, readonly) NSString *vin;`| Unique identifier of a vehicle. |
|carData |`@property (nonatomic, copy, nullable, readonly) NSString *carData;`| carData is required to request an acces token for a vehicle.|
|uin |`@property (nonatomic, copy, nonnull, readonly) NSString *uin;`| Unique identifier of a SDCM.|
|isApcOn |`@property (nonatomic, readonly) BOOL isApcOn;`| This boolean is set to `true` after car ignition.|
|isSelectivityConductorOn |`@property (nonatomic, readonly) BOOL isSelectivityConductorOn;`| This boolean is set to `true` if Selectivity Conductor is on.|
|isTrunkWindowsOpen |`@property (nonatomic, readonly) BOOL isTrunkWindowsOpen;`| This boolean is set to `true` if Trunk Windows are open.|
|doorsState |`@property (nonatomic, readonly) DoorLockState doorsState;`| An enum which holds one of the 7 values: `VEHICLE_DOORS_INVALID`, `VEHICLE_DOORS_LOCKED`, `VEHICLE_DOORS_SUPPER_LOCKED`, `VEHICLE_DOORS_UNLOCKED`, `VEHICLE_DOORS_DRIVER_UNLOCKED`, `VEHICLE_DOORS_CAB_UNLOCKED` or `VEHICLE_DOORS_LOADING_ZONE_UNLOCKED`.|
|isDriverDoorOpen |`@property (nonatomic, readonly) BOOL isDriverDoorOpen;`| This boolean is set to `true` if Driver Door is open.|
|isPassengerDoorOpen|`@property (nonatomic, readonly) BOOL isPassengerDoorOpen;`| This boolean is set to `true` if Passenger Door is open.|
|isBackLeftDoorOpen|`@property (nonatomic, readonly) BOOL isBackLeftDoorOpen;`| This boolean is set to `true` if Back Left Door is open.|
|isBackRightDoorOpen|`@property (nonatomic, readonly) BOOL isBackRightDoorOpen;`| This boolean is set to `true` if Back Right Door is open.|
|isTrunkOpen|`@property (nonatomic, readonly) BOOL isTrunkOpen;`| This boolean is set to `true` if trunk is open.|
|canTrunkMove|`@property (nonatomic, readonly) BOOL canTrunkMove;`| This boolean is set to `true` if Trunk can Move.|
|isGlassRoofOpen|`@property (nonatomic, readonly) BOOL isGlassRoofOpen;`| This boolean is set to `true` if Glass Roof is open.|
|isAwningOpen|`@property (nonatomic, readonly) BOOL isAwningOpen;`| This boolean is set to `true` if Awning is open.|
|isDriverWindowsOpen|`@property (nonatomic, readonly) BOOL isDriverWindowsOpen;`| This boolean is set to `true` if Driver Window is open.|
|isPassengerWindowsOpen|`@property (nonatomic, readonly) BOOL isPassengerWindowsOpen;`| This boolean is set to `true` if Passenger Window is open.|
|isBackRightWindowsOpen|`@property (nonatomic, readonly) BOOL isBackRightWindowsOpen;`| This boolean is set to `true` if Back Right Window is open.|
|isBackLeftWindowsOpen|`@property (nonatomic, readonly) BOOL isBackLeftWindowsOpen;`| This boolean is set to `true` if Back Left Window is open.|
|isHeadlightOn|`@property (nonatomic, readonly) BOOL isHeadlightOn;`| This boolean is set to `true` if Head Light is on.|
|needAskToStart|`@property (nonatomic, readonly) BOOL needAskToStart;`| This boolean is set to `true` if the vehicle received a start notification request.|
|needAskToUnlock|`@property (nonatomic, readonly) BOOL needAskToUnlock;`| This boolean is set to `true` for two seconds if the vehicle zone goes from extend to short.|
|needAskToLock|`@property (nonatomic, readonly) BOOL needAskToLock;`| This boolean is set to `true` for two seconds if the vehicle zone goes from inner to short.|
|vehicleZone |`@property (nonatomic, readonly) VehicleZone vehicleZone;`| An enum which holds one of the 4 values: `VEHICLEZONEINNER`, `VEHICLEZONESHORT`, `VEHICLEZONEEXTEND` or `VEHICLEZONEUNKNOWN`.|

#### Vehicle Zone

![VehicleZone]({{site.baseurl}}/assets/images/MobileVehicleZone.png)