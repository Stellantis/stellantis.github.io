---
privacy: Full Private
type:
  - set
  - subscribe
name: media.playerState
domain: media
datasubscribe:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
  - name: playState
    description: Playstate to synchronized in the Media player.
    type: Enum of strings
    unit-value:
      - play
      - pause
      - fastForward
      - fastReverse
      - next
      - previous
      - resume
    example: play
paramsset:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
    required: true
  - name: playState
    description: Playstate to synchronize in the Media player.
    type: Enum of strings
    unit-value:
      - play
      - pause
      - fastForward
      - fastReverse
      - stop
    example: play
    required: true
short: >-
  This API allows to synchronize the Media Player state. It allows to inform the
  HMI about the media player status according to a song being played.
---

