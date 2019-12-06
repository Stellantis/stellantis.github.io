---
title: MEDIA
supported:
  - 2
  - 3
  - 4
type: class
---

#### OVERVIEW

Provides the methods to interact with the Media player.

#### METHODS SUMMARY

Method | Response Type | Description
-----|----|----
[Media.GetAlbumName()]({{ site.baseurl }}/webportal/reference/#api-Media-GetAlbumName) |  String | Gets the album name.
[Media.GetArtistName()]({{ site.baseurl }}/rence/#api-Media-GetArtistName) | String | Gets the artist name.
[Media.GetCurrentTrack()]({{ site.baseurl }}/webportal/reference/#api-Media-GetCurrentTrack) | Number | Gets the current track number.
[Media.GetFolderName()]({{ site.baseurl }}/webportal/reference/#api-Media-GetFolderName) | String | Returns the folder where the current media is located.
[Media.GetMediaState()]({{ site.baseurl }}/webportal/reference/#api-Media-GetMediaState) | Number | Gets the current state of the media.
[Media.GetTotalTracks()]({{ site.baseurl }}/webportal/reference/#api-Media-GetTotalTracks) | Number | Gets the total number of tracks.
[Media.GetTrackName()]({{ site.baseurl }}/webportal/reference/#api-Media-GetTrackName) | String | Gets the name of the current track.
[Media.GetTypeName()]({{ site.baseurl }}/webportal/reference/#api-Media-GetTypeName) | Number | Returns the current media's type.
[Media.audio.configure()]({{ site.baseurl }}/webportal/reference/#api-Media-Audio-configure) | None | Connects or disconnects an audio source.

#### EVENTS SUMMARY

Event | Description
----|----
[Media.Audio.audioAvailable]({{ site.baseurl }}/webportal/reference/#event-Media-Audio-audioavailable) | Triggered when audio source is connected.
[Media.Audio.audioLost]({{ site.baseurl }}/webportal/reference/#event-Media-Audio-audioLost) | Triggered when audio source is disconnected.
