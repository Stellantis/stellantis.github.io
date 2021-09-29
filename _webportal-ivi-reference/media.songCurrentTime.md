---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.songCurrentTime
domain: media
data:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
  - name: currentTime
    description: Value of the current song's time position.
    type: Float
    unit-value: second
    example: 126.34
paramsset:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
    required: true
  - name: currentTime
    description: Value of the current song's time position.
    type: Float
    unit-value: second
    example: 126.34
    required: true
short: >-
  This API allows to synchronize the Media Player time position setting of the
  playing song.
---

