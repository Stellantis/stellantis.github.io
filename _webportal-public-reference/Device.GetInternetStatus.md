---
title: Device.GetInternetStatus()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetInternetStatus()`

| **Description** | Gets the current status of the internet connection.
| **Response** | *Boolean*  `True` if the connection is up, else `False`.
| **Parameter**   | *Void*

#### Example

```javascript
var Myvar = setInterval(MyFunction,  30000);

function MyFunction() {
	if (Device.GetInternetStatus() === True){
		// Connection is up
		clearInterval(MyVar);
	}
}
```

*Appeared in Software version 5.14.06.10*