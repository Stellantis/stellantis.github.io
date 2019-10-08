---
title: 'sendCommand:toVehicle:withSuccess:andFailure:'
type: ios api
---

### `sendCommand:toVehicle:withSuccess:andFailure:`

This method is to know whether or not the manager is busy sending a command.

```objective_c
- (void)sendCommand:(GPCVCommand)command 
toVehicle:(nonnull GPCVVehicle *)vehicle 
withSuccess:(void (^)(void))success 
andFailure:(void (^)(NSError * _Nonnull error))failure;
```

#### Parameters


Parameter | Type | Description | Requirement
----|----|----|----
`vehicle` | *GPCVVehicle* | The vehicle object you want to send the command to. | Required.
`command` | *GPCVCommand* | The command parameter is a value of [GPCVCommand enum]({{site.baseurl}}/ios/reference/#model-GPCVCommand).| 
`success` | | The success block. | Not Required.
`failure` | | The error block with the *NSError* error. | Not Required.

Refer to [callback]({{site.baseurl}}/mobile_ios_list/#callback) section for more infos about success and failure handling.


#### Example

```objective_c
[[GPCVManager sharedManager] sendCommand:GPCVCommandUnLock
AllDoors toVehicle:vehicle withSuccess:^{
    // Command succeded
} andFailure:^(NSError * _Nonnull error) {
    // Command failed with error
}];
```
