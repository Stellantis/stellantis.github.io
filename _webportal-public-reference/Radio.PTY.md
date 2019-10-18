---
title: Radio.PTY()
supported:
  - 3
  - 4
type: api
---

### `Radio.PTY()`

| **Description** | Returns the program type as defined by either RDS or RBDS. Possible values are [0-31].
| **Response** | *boolean*  Program type.
| **Parameter**   | *Void*

#### Example

```javascript
// Get the Radio PTY
var RadioPTY = Radio.PTY()
// RadioPTY = false
```

*Appeared - version 30.00.09.00*