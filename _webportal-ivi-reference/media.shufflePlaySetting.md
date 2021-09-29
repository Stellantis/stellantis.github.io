---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.shufflePlaySetting
domain: media
datasubscribe:
  - name: media.shufflePlaySetting
    description: Value of the shuffle synchronization command when changed.
    type: Boolean
    unit-value:
      - 'false: ''no shuffle'''
      - 'true: ''shuffle song'''
    example: true
paramsset:
  - name: media.shufflePlaySetting
    description: shuffle synchronization command to send.
    type: Boolean
    unit-value:
      - 'false: ''no shuffle'''
      - 'true: ''shuffle song'''
    example: song
    required: true
short: This API allows to synchronize the Media Player shuffle setting.
---

