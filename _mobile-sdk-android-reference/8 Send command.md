---
title: Send command
type: android api
---

### `sendCommand()`

This method sends a command to vehicle (Lock/Unlock doors, horn, lights …)

```java
public void sendCommand(ListCommands command, ADVehicle vehicle, ISendCommandCallback sendCommandCallback)
```

#### Parameters


Parameter | Type | Description | Required
----|----|----|----
`vehicle` | *ADVehicle* | The vehicle object you want to send the command to. |
`sendCommandCallback` | *ISendCommandCallback* |  | 
`command` | *ListCommands* | The “command” parameter it will be a value from the ListCommand Enum| 

Here is the Enum from class: **com.inetpsa.mmx.adsd.ListCommands**: 

Command | Description |
--- | ---
`ADSDCommandUnLockAllDoors` | Unlock all doors | 
`ADSDCommandLockAllDoors` | Lock all doors | 
`ADSDCommandUnLockRearPanel` | Unlock the rear panel | 
`ADSDCommandOpenRearPanel` | Open the rear panel | 
`ADSDCommandUnLockDriverDoor` | Unlock the driver door |
`ADSDCommandOpenAllWindows` | Open all windows | 
`ADSDCommandCloseAllWindows` | Close all windows | 
`ADSDCommandActivateLightning` | Activate the lights | 
`ADSDCommandDeactivateLightning` | Desactivate the lights | 
`ADSDCommandActivateWarning` | Activate the warning | 
`ADSDCommandActivateHorn` | Activate the horn | 
`ADSDCommandStartEngine` | Start car engine | 


#### Example

```java
ADSDManager.getInstance(getContext())
    .sendCommand(currentCommand, selectedCar,
        new ISendCommandCallback() {

            @Override
            public void sendCommandSuccess(Map result) {
                //TODO process with send command success.
            }

            @Override
            public void sendCommandError(ADSDError adsdError) {
                //todo process with send command error.
            }
        });
```
