---
title: 'manager:didUpdateVehicle:'
type: ios callback
---

### `manager:didUpdateVehicle:`

This callback is triggered when a discovered vehicle’s state is updated.

```objective_c
- (void)manager:(nonnull GPCVManager *)manager 
didUpdateVehicle:(nonnull GPCVVehicle *)vehicle;
```

#### Parameters


Parameter | Type | Description 
----|----|----
`vehicle` | *GPCVVehicle* | The vehicle object with its updated properties. 
`manager` | *GPCVManager* | The manager triggering the callback.  
