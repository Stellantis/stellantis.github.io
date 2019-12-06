---
type: quick start
---

# CONNECTIVITY MODE

It is important to handle changes in the connectivity mode in order to inform the user of any connectivity issue or even to change the behaviour of your application.

```javascript
Connectivity.addEventListener("connectivityOn", function(){
	console.log("success, " + "Connectivity.connectivityOn()");
});
Connectivity.addEventListener("connectivityOff", function(){
	console.log("success, " + "Connectivity.connectivityOff()");
});
```
