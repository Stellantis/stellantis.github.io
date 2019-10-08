---
title: Media.Audio.audioavailable

supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the audio source is connected.

### Example

```javascript
try{
	
	// Media
	if ((typeof Media !== "undefined") && (typeof Media.Audio !== "undefined") && (typeof Media.Audio.addEventListener !== "undefined")) {
		Media.Audio.addEventListener("audioAvailable", function(){
			alert("Audio files are available");
		});
	}
} catch(e) {
	DealWithMediaError(e);
}
```

*Appeared in Software version 31.06.42.30*