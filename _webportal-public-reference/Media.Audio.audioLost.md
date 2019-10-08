---
title: Media.Audio.audioLost

supported:
  - 2
  - 3
  - 4
type: event
---
Event triggered when the audio source is disconnected.

### Example

```javascript
try{
	
	// Media
	if ((typeof Media !== "undefined") && (typeof Media.Audio !== "undefined") && (typeof Media.Audio.addEventListener !== "undefined")) {
		Media.Audio.addEventListener("audioLost", function(){
			printLogCb("success", "Media.Audio.audioLost()");
		});
		Media.Audio.addEventListener("audioAvailable", function(){
			printLogCb("success", "Media.Audio.audioAvailable()");
		});
		Media.Audio.addEventListener("startPlayback", function(){
			printLogCb("success", "Media.Audio.startPlayback()");
		});
		Media.Audio.addEventListener("stopPlayback", function(){
			printLogCb("success", "Media.Audio.stopPlayback()");
		});
		Media.Audio.addEventListener("playPreviousTrack", function(){
			printLogCb("success", "Media.Audio.playPreviousTrack()");
		});
		Media.Audio.addEventListener("playNextTrack", function(){
			printLogCb("success", "Media.Audio.playNextTrack()");
		});
	}
} catch(e) {
	HandleMediaAudioError(e);
}
```

*Appeared in Software version 31.06.42.30*