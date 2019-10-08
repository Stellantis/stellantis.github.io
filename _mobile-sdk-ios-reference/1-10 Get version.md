---
title: 'getVersion;'
type: ios api
---

### `getVersion;`

This method returns the framework’s version.

```objective_c
- (NSString *)getVersion;
```

#### Returns

Type | Description 
----|----
`NSString` | Returns the value of the framework’s version. | 

#### Example

```objective_c
NSString *version = [[GPCVManager sharedManager] getVersion];
```
