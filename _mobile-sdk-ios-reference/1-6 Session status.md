---
title: 'isSessionOpenedForVehicleWithVin:completion:'
type: ios api
---


### `isSessionOpenedForVehicleWithVin:completion:`

To check if an open session already exist for a given VIN.

```objective_c
- (void)isSessionOpenedForVehicleWithVin:(nonnull NSString*)vin
completion:(void (^_Nonnull)(BOOL isOpen, NSError * __nullable error)) completion;
```

**completion**: The block of code handling the answer, with a BOOL
indicating if a session is open for the given vin.

#### Parameters

Parameter | Type | Description | Requirement
----|----|----|----
`vin` | *String* | Unique identifier of a vehicle. | Required.
`completion` |  | The block of code handling the answer, with a *isOpen* BOOL indicating if a session is open for the given vin. | Not Required.

Refer to [callback]({{site.baseurl}}/ios/reference/#callback) section for more infos about completion handling.



### Example

```objective_c
[[GPCVManager sharedManager] isSessionOpenedForVehicleWithVin:@"__VEHICLE_VIN__" completion:^(BOOL isOpen, NSError *_Nullable error) {
if (isOpen) {
    // session open
} else {
    // session closed
}
}];
```