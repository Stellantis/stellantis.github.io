---
title: 'manager:errorOccured:'
type: ios callback
---

### `manager:errorOccured:`

This delegate method is called when an error occurs on the SDCM.

```objective_c
- (void)manager:(nonnull GPCVManager *)manager
errorOccured:(nonnull NSError *)error;
```

#### Parameters


Parameter | Type | Description
----|----|----
`error` | *NSError* | The NSError object describing the issue.
`manager` | *GPCVManager* | The manager triggering the callback.
