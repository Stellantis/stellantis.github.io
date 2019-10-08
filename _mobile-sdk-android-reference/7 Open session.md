---
title: Open a session
type: android api
---

### `openSession()`

Open a new session with the selected vehicle using a VIN and authentication token.

```java
public void openSession(String vin, String token, openSessionListener mOpenSessionListener)
```

#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`vin` | *String* | Unique identifier of a vehicle. | Required.
`token` | *String* | Token that authenticate the current user to open session with the vehicle | Required.
`mOpenSessionListener`| *openSessionListener* | Object that pass to **onOpenSessionSuccess** if the session is opened else it pass to **onOpenSessionFailure**. |


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
