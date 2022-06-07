---
privacy: Full Private
type:
  - set
  - subscribe
name: media.repeatPlaySetting
domain: media
datasubscribe:
  - name: repeatPlaySetting
    description: Value of the repeat synchronization command when changed.
    type: Enum of strings
    unit-value:
      - 'off: ''no repeat'''
      - 'all: ''repeat inside current playlist'''
      - 'song: ''repeat only this song'''
    example: all
paramsset:
  - name: repeatPlaySetting
    description: Repeat synchronization command to send.
    type: Enum of strings
    unit-value:
      - 'off: ''no repeat'''
      - 'all: ''repeat inside current playlist'''
      - 'song: ''repeat only this song'''
    example: song
    required: true
short: This API allows to synchronize the Media Player repeat setting.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

