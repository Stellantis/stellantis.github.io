---
name: media.audioSources
privacy: Full Private
type:
  - set
  - subscribe
domain: media
paramsset:
  - name: currentTime
    description: Time position you want to set the current song in the media player.
    type: int
    unit-value: second
    example: 67
    required: true
datasubscribe:
  - name: appId
    description: Name of triggering App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
  - name: currentTime
    description: Time position in media player.
    type: int
    unit-value: second
    example: 67
short: Seek and play a media at specified time or retrieve events.
---

