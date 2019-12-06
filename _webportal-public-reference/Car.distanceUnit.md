---
title: Car.distanceUnit
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the distance unit is changed.

### EXAMPLE

```javascript
try {
	
	// Car
	if ((typeof Car !== "undefined") && (typeof Car.addEventListener !== "undefined")) {
		Car.addEventListener("distanceUnit", function(){
			alert("The distance unit is now :" + Car.GetDistanceUnit() );
		});
	}
}catch(e) {
	DealWithCarError(e);
}
```

*Appeared in Software version 5.14.11.30*