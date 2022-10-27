---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Radio.RDS()
domain: Radio
supported:
  - 3
  - 4
type: api
---

### `Radio.RDS()`

| **Description** | Return true if the current radio stations supports RDS, false otherwise.
| **Response** | *boolean*  RDS support.
| **Parameter**   | *Void*

#### Example

```javascript
// Get the Radio RDS 
var RadioRDS = Radio.RDS()
// RadioRDS = true
```

*Appeared - version 30.00.09.00*