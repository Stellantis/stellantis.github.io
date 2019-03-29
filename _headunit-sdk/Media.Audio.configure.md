---
title: Media.audio.configure()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Media.audio.configure(String Type,String Sound_State)`

| **Description** | Configures the sound.
| **Response** | *None*

Parameter | Type | Description | Required
----|----|----|----
`Type` | *String* | The player to configure, 31 characters max Possible values : - MEDIA_PLAYER_SOURCE, - TEMPORARY_SOURCE | Required
`Sound_State` | *String* | To activate or deactivate sound, 8 characters max Possible values : - active, - Inactive | Required

#### Example

```javascript
Media.audio.configure("MEDIA_DEVICE_BT Streaming", "Inactive")
```