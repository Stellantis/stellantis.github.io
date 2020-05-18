---
title: Media.GetTrackName()
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetTrackName()`

| **Description** | Gets the current track's name.
| **Response** | *String*  The name of the current track, 32 characters long max.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
//Check the state of the media

if (Media.GetMediaState() === 2) {
	// Media currently playing
	var currentTrack = Media.GetTrackName()
}
```

*Appeared in Software version 30.10.10.00*