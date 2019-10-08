---
title: Stop service
type: android api
---

### `stopService()`

The method stopServiceWithSuccess:failure: stops the current
connection (if any) and stop discovering for avaible vehicle.

```java
public void stopService(IStopServiceCallback callback)
```

#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`callback` | *IStopServiceCallback* |  | Required

#### Example

```java
ADSDManager.getInstance(context).stopService(new IStopServiceCallback(){

    @Override
    public void onStopService() {
        //TODO process with stop service success
    }
});
```
