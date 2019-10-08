---
title: 'manager:didDiscoverVehicle:'
type: ios callback
---

### `manager:didDiscoverVehicle:`

This callback is triggered when a vehicle is in range (after you called the [startServiceWithSuccess:andFailure:]({{site.baseurl}}/ios/reference/#api-Start%20service) method).

```objective_c
- (void)manager:(nonnull GPCVManager *)manager 
didDiscoverVehicle:(nonnull GPCVVehicle *)vehicle;
```

#### Parameters


Parameter | Type | Description 
----|----|----
`vehicle` | *GPCVVehicle* | The vehicle object you discovered. 
`manager` | *GPCVManager* | The manager triggering the callback. 
