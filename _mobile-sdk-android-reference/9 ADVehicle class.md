---
title: ADVehicle class
type: android model
---

### ADVehicle

The class ADVehicle contains these privates attributes, you can access them via getters and setters.

#### Attributes

- `String vin;`
- `String uin;`
- `String blePairingCode;`
- `String carData;`
- `boolean isApcOn;`
- `boolean isSelectivityConductorOn;`
- `VEHICLE_DOOR_STATE doorsState;` value from this Enum: 
    - VEHICLE_DOORS_INVALID,    
    - VEHICLE_DOORS_LOCKED, 
    - VEHICLE_DOORS_SUPPER_LOCKED, 
    - VEHICLE_DOORS_UNLOCKED, 
    - VEHICLE_DOORS_DRIVER_UNLOCKED, 
    - VEHICLE_DOORS_CAB_UNLOCKED,    
    - VEHICLE_DOORS_LOADING_ZONE_UNLOCKED.
- `boolean isTrunkWindowsOpen;`
- `boolean isDriverDoorOpen;`
- `boolean isPassengerDoorOpen;`
- `boolean isBackLeftDoorOpen;`
- `boolean isBackRightDoorOpen;`
- `boolean isTrunkLock;`
- `boolean isTrunkOpen;`
- `boolean canTrunkMove;`
- `boolean isGlassRoofOpen;`
- `boolean isAwningOpen;`
- `boolean isDriverWindowsOpen;`
- `boolean isPassengerWindowsOpen;`
- `boolean isBackLeftWindowsOpen;`
- `boolean isBackRightWindosOpen;`
- `boolean isHeadLightOn;`
- `boolean needAskToStart;`
- `boolean needAskToUnlock;`
- `VEHICLE_ZONE zone;` value from this Enum: 
    - VEHICLE_ZONE_EXTEND, 
    - VEHICLE_ZONE_SHORT, 
    - VEHICLE_ZONE_INNER.

#### Vehicle Zone

![VehicleZone]({{site.baseurl}}/assets/images/MobileVehicleZone.png)