---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Media.GetTotalTracks()
domain: Media
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetTotalTracks()`

| **Description** | Gets the total number of tracks on the connected media.
| **Response** | *Number*  The total number of tracks < 9999.
| **Parameter**   | *Void*

#### Example

```javascript
//Check the state of the media

if (Media.GetMediaState() === 2) {
	// Media currently playing
	
	var tracknumber = Media.GetCurrentTrack()
	var totaltracks = Media.GetTotalTracks()
	
	// tracksremaining = totaltracks - tracknumber
}
```

Appeared in Software version 30.10.10.00*