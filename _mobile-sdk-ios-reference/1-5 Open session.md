---
title: 'openSessionWithVin:token:succes:andFailure:'
type: ios api
---

### `openSessionWithVin:token:succes:andFailure:`

Open a new session with the selected vehicle using a VIN and authentication token.

```objective_c
- (void)openSessionWithVin:(nonnull NSString *)vin
token:(nonnull NSString *)token
success:(void (^_Nullable)(void))success
andFailure:(void (^_Nullable)(NSError * _Nullable error))failure;
```


#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`vin` | *NSString* | Unique identifier of a vehicle. | Required.
`token` | *NSString* | Token that authenticate the current user to open session with the vehicle. | Required.


#### Example

```objective_c
[[GPCVManager sharedManager] openSessionWithVin@"__VEHICLE_VIN__" token:@"__VALID_TOKEN__" :^{
    / / success block
} andFailure:^(NSError * _Nullable error) {
    // error management
}];
```
