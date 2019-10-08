---
title: Media
supported:
  - 2
  - 3
  - 4
type: class
---

#### Overview

Provides the methods to interact with the Media player.

#### Methods Summary

Method | Response Type | Description
-----|----|----
[Media.GetAlbumName()]({{ site.baseurl }}/webportal_list/#api-Media-GetAlbumName) |  String | Gets the album name.
[Media.GetArtistName()]({{ site.baseurl }}/webportal_list/#api-Media-GetArtistName) | String | Gets the artist name.
[Media.GetCurrentTrack()]({{ site.baseurl }}/webportal_list/#api-Media-GetCurrentTrack) | Number | Gets the current track number.
[Media.GetFolderName()]({{ site.baseurl }}/webportal_list/#api-Media-GetFolderName) | String | Returns the folder where the current media is located.
[Media.GetMediaState()]({{ site.baseurl }}/webportal_list/#api-Media-GetMediaState) | Number | Gets the current state of the media.
[Media.GetTotalTracks()]({{ site.baseurl }}/webportal_list/#api-Media-GetTotalTracks) | Number | Gets the total number of tracks.
[Media.GetTrackName()]({{ site.baseurl }}/webportal_list/#api-Media-GetTrackName) | String | Gets the name of the current track.
[Media.GetTypeName()]({{ site.baseurl }}/webportal_list/#api-Media-GetTypeName) | Number | Returns the current media's type.
[Media.audio.configure()]({{ site.baseurl }}/webportal_list/#api-Media-Audio-configure) | None | Connects or disconnects an audio source.

#### Events Summary

Event | Description
----|----
[Media.Audio.audioAvailable]({{ site.baseurl }}/webportal_list/#event-Media-Audio-audioavailable) | Triggered when audio source is connected.
[Media.Audio.audioLost]({{ site.baseurl }}/webportal_list/#event-Media-Audio-audioLost) | Triggered when audio source is disconnected.
