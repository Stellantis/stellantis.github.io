---
title: Start service
type: android api
---

### `startService()`

Use the method `startService()` to try connecting to the vehicle you just added.

```java
public void startService(IStartServiceCallback startServiceCallback)
```

#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`startServiceCallback` | *IStartServiceCallback* | On success it pass to **successToStartService** otherwise it pass to **failToStartService**. | Required

#### Example

```java
ADSDManager.getInstance(getContext()).startService(new IStartServiceCallback() {

    @Override
    public void successToStartService() {
        //TODO process with start service success
    }

    @Override
    public void failToStartService(ADSDError adsdError) {
        //TODO process with start service fail
    }
});
```
