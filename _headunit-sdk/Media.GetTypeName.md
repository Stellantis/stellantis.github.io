---
title: Media.GetTypeName()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.GetTypeName()`

| **Description** | Gets the type of the media.
| **Response** | *Number*  The type of the media curretly connected.
| **Parameter**   | *Void*

Value | Type
----|----
0 | USB mass storage 1
1 | iPod 1
2 | External MonoCD drive
3 | BT streaming
4 | auxiliary input
5 | USB mass storage 2
6 | iPod 2
7 | External DVD drive by USB
8 | Phone by MirrorLink
9 | Phone by DIPO
10 | Embedded Ringtone
11 | Tuner FM/aM/DaB
12 | Phone by BT
13 | Webbrowser Media app
14 | Webradio
15 | USB Video
16 | Jukebox
17 | Media app by MirrorLink
18 | Media app by DIPO
19 | MirrorLink temporary
20 | FM-Ta
21 | DaB-NEWS
22 | Embedded Voice Recognition
23 | Text Reader (TTS)
24 | Text Reader MirrorLink (TTS)
25 | Text Reader DIPO (TTS)
26 | Ext. Voice Recognition by BT
27 | Ext. Voice Recognition by MirrorLink
28 | Ext. Voice Recognition by DIPO
29 | Webbrowser Voice Recognition

#### Example

```javascript
//Get the name of the media
var mediaName = Media.GetTypeName()
// mediaName = 0
```