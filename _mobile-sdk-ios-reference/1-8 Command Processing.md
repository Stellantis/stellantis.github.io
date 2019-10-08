---
title: 'isProcessingCommand;'
type: ios api
---

### `isProcessingCommand;`

This method sends a command to the vehicle.

```objective_c
- (BOOL)isProcessingCommand;
```

#### Returns

Type | Description 
----|----
`BOOL` | Returns true if a command is processing. | 

#### Example

```objective_c
BOOL isProcessing = [[GPCVManager sharedManager] isProcessingCommand];
```
