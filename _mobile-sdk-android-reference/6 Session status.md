---
title: Session status
type: android api
---


### `isOpenSession()`

To check if an open session already exist.

```java
public void isOpenSession(String vin, checkIsOpenSessionListener mCheckIsOpenSessionListener)
```

#### Parameters

Parameter | Type | Description | Required
----|----|----|----
`vin` | *String* | the unique identifier of the vehicle | 
`mCheckIsOpenSessionListener` | *checkIsOpenSessionListener* | Pass to **onSuccess** if the check is done with success else it pass to **onFailure**. | 

### Example

```java
ADSDManager.getInstance(getContext()).isOpenSession(vin, new mCheckIsOpenSessionListener() {

    @Override
    public void onSuccess() {
        //TODO process with success
    }

    @Override
    public void onFailure(ADSDError adsdError) {
        //TODO process with error
    }
});
```