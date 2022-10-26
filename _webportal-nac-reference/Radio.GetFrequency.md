---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Radio.GetFrequency()
domain: Radio
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
var MyFrequency1 = Radio.GetFrequency()
// MyFrequency1 = 89800 kHz
```
	
#### Remark

>**Note:** The interval of values returned depends on the band that is being used.

Band | Interval
----|----
FM | [87500 - 108000]
DaB | [0 -63]
aM |[144 - 288], [531-1629]

*Appeared in Wave 4.1 - version 30.00.09.00*