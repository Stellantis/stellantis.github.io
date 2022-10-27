---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Media.GetArtistName()
domain: Media
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetArtistName()`

| **Description** | Gets the name of the current artist.
| **Response** | *String*  The current artist's name < 255 characters.
| **Parameter**   | *Void*

#### Example

```javascript
//Check the state of the media

if (Media.GetMediaState() === 2) {
	// Media currently playing
	
	var artistname = Media.GetArtistName()
}
```

*Appeared in Software version 30.10.10.00*