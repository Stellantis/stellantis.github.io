---
title: 'manager:didLoseVehicle:'
type: ios callback
---

### `manager:didLoseVehicle:`

This delegate method is called when a previously discovered vehicle is lost.
```objective_c
- (void)manager:(nonnull GPCVManager *)manager 
didLoseVehicle:(nonnull GPCVVehicle *)vehicle;
```

#### Parameters


Parameter | Type | Description 
----|----|----
`vehicle` | *GPCVVehicle* | The vehicle object which is losts. 
`manager` | *GPCVManager* | The manager triggering the callback. 
