---
name: media.audioSources
privacy: Full Private
type:
  - get
  - set
  - subscribe
domain: media
paramsset:
  - name: audioSourceID
    description: ID of an audio source.
    type: int
    unit-value: n/a
    example: 10
    required: true
dataset: none
data:
  - name: audioSourceID
    description: ID of an audio source.
    type: int
    unit-value: n/a
    example: 10
short: >-
  Read the current active media source or change the current media source (to
  WP, BT, USB, Radio, etc...).
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

This API allows to read or modify the media audio source using IDs.
Theses IDs are available in [media.availableAudioSource](#get-media-availableaudiosources) API.
