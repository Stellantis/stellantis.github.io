---
title: Radio.GetBand()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Radio.GetBand()`

| **Description** | Gets the currently used Radio Band.
| **Response** | *String*  The currently used radio band.
| **Parameter**   | *Void*

#### Example

```javascript
//Get the Radio Band
var RadioBand = Radio.GetBand()
// RadioBand = "FM"
```

#### Remark

The possible values for the radio band are the following strings:
- FM HD
- **MW**
- LW
- **FM**
- **DaB**
- DMB
- SDaRS
- DaB+

*Appeared in Wave 4.1 - version 30.00.09.00*