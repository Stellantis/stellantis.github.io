---
title: 'logoutWithSuccess:andFailure:'
type: ios api
---

### `logoutWithSuccess:andFailure:`

This method logs out the user. It stops the service and all background
processes and cleans local data.

```objective_c
- (void)logoutWithSuccess:(void (^_Nullable)(void))success
andFailure:(void (^_Nullable)(NSError * _Nullable error))failure;
```

Parameter | Description | Requirement
----|----|----
`success` | The success block. | Not Required.
`failure` | The error block with the *NSError* error. | Not Required.

Refer to [callback]({{site.baseurl}}/ios/reference/#callback) section for more infos about success and failure handling.

#### Example

```objective_c
[[GPCVManager sharedManager] logoutWithSuccess:^{
    // success block
} andFailure:^(NSError * _Nullable error) {
    // error management
}];
```
