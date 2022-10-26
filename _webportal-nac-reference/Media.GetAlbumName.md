---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Media.GetAlbumName()
domain: Media
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetAlbumName()`

| **Description** | Gets the name of the current album.
| **Response** | *String*  The current album's name < 255 characters.
| **Parameter**   | *Void*

#### Example

```javascript
//Check the state of the media

if (Media.GetMediaState() === 2) {
	// Media currently playing
	
	var albumname = Media.GetAlbumName()
}
```

*Appeared in Software version 30.10.10.00*