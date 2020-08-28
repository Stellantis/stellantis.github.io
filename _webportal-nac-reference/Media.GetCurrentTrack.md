---
title: Media.GetCurrentTrack()
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetCurrentTrack()`

| **Description** | Gets the current track number.
| **Response** | *Number*  Current Track number if there is one, else returns error state.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
//Check the state of the media

if (Media.GetMediaState() === 2) {
	// Media currently playing
	
	var tracknumber = Media.GetCurrentTrack()
}
```

*Appeared in Software version 30.10.10.00