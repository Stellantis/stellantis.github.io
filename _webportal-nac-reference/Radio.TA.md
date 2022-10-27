---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Radio.TA()
domain: Radio
supported:
  - 3
  - 4
type: api
---

### `Radio.TA()`

| **Description** | Returns true if traffic announcement is available.
| **Response** | *boolean*  Traffic announcement.
| **Parameter**   | *Void*

#### Example

```javascript
// Get the Radio TA
var RadioTA = Radio.TA()
// RadioTA = false
```

*Appeared - version 30.00.09.00*