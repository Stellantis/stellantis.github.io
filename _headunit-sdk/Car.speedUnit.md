---
title: Car.speedUnit
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the speed unit is changed.

### Example

```javascript
try {
	
	// Car
	if ((typeof Car !== "undefined") && (typeof Car.addEventListener !== "undefined")) {
		Car.addEventListener("speedUnit", function(){
			alert("The speed unit is now:" + Car.GetSpeednUnit());
		});
	}
}catch(e) {
	DealWithCarError(e);
}
```