---
title: 'startServiceWithSuccess:andFailure:'
type: ios api
---

### `startServiceWithSuccess:andFailure:`

Use the method `startServiceWithSuccess:andFailure:` to try connecting
to the vehicle you just added.

```objective_c
- (void)startServiceWithSuccess:(void (^_Nullable)(void))success
andFailure:(void (^_Nullable)(NSError * _Nullable error))failure;
```

Parameter | Description | Requirement
----|----|----
`success` | The success block. | Not Required.
`failure` | The error block with the *NSError* error. | Not Required.

Refer to [callback]({{site.baseurl}}/ios/reference/#callback) section for more infos about success and failure handling.


#### Example

```objective_c
[[GPCVManager sharedManager] startServiceWithSuccess:^{
    //TODO process with start service success
} andFailure:^(NSError * _Nullable error) {
    //TODO process with start service fail
}];
```
