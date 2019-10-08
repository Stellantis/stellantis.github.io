---
title: Clean all vehicle data
type: android api
---

### `cleanAllData()`

Removes all vehicles data of the logged user, this method should be called before logging out.

```java
public void cleanAllData()
```

#### Example

```java
ADSDManager.getInstance(context).cleanAllData();
```
