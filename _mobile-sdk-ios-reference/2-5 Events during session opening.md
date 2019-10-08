---
title: 'manager:eventDuringSessionOpening:'
type: ios callback
---

### `manager:eventDuringSessionOpening:`

This delegate method is called when attempting to open a session, it describes any event that occurs during the process.

```objective_c
- (void)manager:(nonnull GPCVManager *)manager 
eventDuringSessionOpening:(GPCVCeaEvent)event;
```

#### Parameters


Parameter | Type | Description
----|----|----
`event` | *GPCVCeaEvent* | An enum value corresponding to the event which happened.
`manager` | *GPCVManager* | The manager triggering the callback.
