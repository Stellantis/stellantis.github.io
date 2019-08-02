---
title: Car.driverDistractionOff
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the distraction status is changed to OFF (hide driver distraction popup).

>**Note :** This event is triggered when the speed exceeds 5km/h.

### Example

```javascript
try {
	
	// Car
	if ((typeof Car !== "undefined") && (typeof Car.addEventListener !== "undefined")) {
		Car.addEventListener("driverDistractionOff", function(){
			alert("Driver distraction mode is now off");
		});
	}
}catch(e) {
	DealWithCarError(e);
}
```

*Appeared in Software version 5.14.11.30*