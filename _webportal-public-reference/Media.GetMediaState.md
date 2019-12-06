---
title: Media.GetMediaState()

supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetMediaState()`

| **Description** | Gets the state of the media currently connected.
| **Response** | *Number*  State of the media.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
//Check the state of the media
if (Media.GetMediaState() === 2) {
	// Media currently playing
}
```
	
#### REMARK

The possible values returned are the following :

Value | State
----|----
1 | stop
2 | play
3 | pause
4 | seek up
5 | seek down

*Appeared in Software version 30.10.10.00*