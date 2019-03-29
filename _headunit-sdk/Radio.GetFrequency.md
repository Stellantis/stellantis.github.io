---
title: Radio.GetFrequency()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Radio.GetFrequency()`

| **Description** | Gets the currently selected radio frequency of the car in kHz.
| **Response** | *Number*  Frequency currently selected.
| **Parameter**   | *Void*

#### Example

```javascript
//Get the Radio Frequency
let MyFrequency1 = Radio.GetFrequency()
```
	
#### Remark

>**Note :** The interval of values returned depends on the band that is being used.

Band | Interval
----|----
FM | [87500 - 108000]
DaB | [0 -63]
aM |[144 - 288], [531-1629]