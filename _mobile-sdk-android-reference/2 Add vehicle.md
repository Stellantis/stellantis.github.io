---
title: Add a vehicle
type: android api
---

### `addVehicle()`

This method is to make the user’s device scan for a vehicle with a given
VIN and UIN.

For the time being, GroupePSAConnectedVehiclesSDK supports only one vehicle at a time. In order to switch to another vehicle, you will need to stop the service, add the vin of the second vehicle, then start the service again.

```java
public void addVehicle(@NonNull String vin, final IAddVehicleCallback addVehicleCallback)
```

#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`vin` | *String* | Unique identifier of a vehicle. | Required
`addVehicleCallback` | *IAddVehicleCallback* | The add vehicle callback, on success it will pass to  **successToAddVehicle** else it will be pass to **getUinError**. | 

#### Example

```java
ADSDManager.getInstance(getContext()).addVehicle(vin, new IAddVehicleCallback() {

    @Override
    public void successToAddVehicle(ADVehicle vehicle, ADSDError adsdError) {
        //TODO process with success add vehicle
    }

    @Override
    public void getUinError(int codeError) {
        //TODO process with get Uin Error
    }
});
```