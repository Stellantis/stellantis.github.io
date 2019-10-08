---
title: 'stopServiceWithSuccess:andFailure:'
type: ios api
---

### `stopServiceWithSuccess:andFailure:`

The method stopServiceWithSuccess:andFailure: stops the current
connection (if any) and stop discovering for avaible vehicle.

```objective_c
- (void)stopServiceWithSuccess:(void (^_Nullable)(void))success
andFailure:(void (^_Nullable)(NSError * _Nullable error))failure;
```

Parameter | Description | Requirement
----|----|----
`success` | The success block. | Not Required.
`failure` | The error block with the *NSError* error. | Not Required.

Refer to [callback]({{site.baseurl}}/ios/reference/#callback) section for more infos about success and failure handling.


#### Example

```objective_c
[[GPCVManager sharedManager] stopServiceWithSuccess:^{
    //TODO process with start service success
} andFailure:^(NSError * _Nullable error) {
    //TODO process with start service fail
}];
```
