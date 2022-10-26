---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.distanceUnit
domain: Car
supported:
  - 2
  - 3
  - 4
type: event
---

Event triggered when the distance unit is changed.

### Example

```javascript
try {
	
	// Car
	if ((typeof Car !== "undefined") && (typeof Car.addEventListener !== "undefined")) {
		Car.addEventListener("distanceUnit", function(){
			alert("The distance unit is now:" + Car.GetDistanceUnit() );
		});
	}
}catch(e) {
	DealWithCarError(e);
}
```

*Appeared in Software version 5.14.11.30*