---
title: 'manager:needsTokenForVehicleWithVIN:'
type: ios callback
---

### `manager:needsTokenForVehicleWithVIN:`

This method returns the framework’s version.

```objective_c
- (NSString *_Nullable)manager:(nonnull GPCVManager *)manager
needsTokenForVehicleWithVIN:(NSString *_Nonnull)vin;
```

#### Parameters


Parameter | Type | Description 
----|----|----
`vin` | *NSString* | The VIN unique identifier of the vehicle you want to open a session with. 
`manager` | *GPCVManager* | The manager triggering the callback. 
