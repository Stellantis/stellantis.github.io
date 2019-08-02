---
title: Media.Audio.configure()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.Audio.configure(String Type,String Sound_State)`

| **Description** | Configures the sound.
| **Response** | *None*

Parameter | Type | Description | Required
----|----|----|----
`Type` | *String* | The player to configure, 31 characters max Possible values : - MEDIA_PLAYER_SOURCE, - TEMPORARY_SOURCE | Required
`Sound_State` | *String* | To activate or deactivate sound, 8 characters max Possible values : - Active, - Inactive | Required

#### Example

```javascript
// Wait for the browser to fully load
HMI.WebBrowser.addEventListener("show", activateSource);

// Configure media
var activateSource = function(){
Media.Audio.configure("MEDIA_PLAYER_SOURCE", "Active");
};

// Handle player and events
var player = document.getElementById('player')[0];
player.src = './sounds/louvre-les-voyages-de-champollion.mp3';
document.getElementById('play').onclick = function(){
player.play();
};
document.getElementById('pause').onclick = function(){
player.pause();
};
```

*Appeared in Software version 30.04.48.50*