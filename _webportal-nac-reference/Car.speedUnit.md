---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Car.speedUnit
domain: Car
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

*Appeared in Software version 5.14.11.30*