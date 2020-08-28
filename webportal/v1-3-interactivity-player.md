---
layout: doc-article
permalink: /webportal/v1/interactivity/player/
section: webportal
subsection: v1
categorie: User Interaction
title: Player
description: ""
---

# MANAGING AUDIO

When reading audio files, you have to manually implement and handle the html 5 events triggered by the  `<audio>` player such as play/stop...
If you do not handle them, the file will not be read.

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