---
privacy: Full Private
type:
  - set
  - subscribe
name: media.playAlternateSound
domain: media
paramsset:
  - name: url
    description: 'Audio ressource : `file://` or `http(s)://`.'
    type: string
    unit-value: n/a
    example: 'https://appsportal-preprod.nea.p3cs.com/static/music.mp3'
    required: true
  - name: ducking
    description: Ducking effect.
    type: boolean
    unit-value:
      - 'true: ''enable (default)'''
      - 'false: ''disable'''
    example: true
    required: false
data:
  - name: trackingId
    description: ID of the event. Available in SET & SUBSCRIBE.
    type: int
    unit-value: n/a
    example: 67
textset: >-
  Response `status: 503` if another sound is already being played.<br> Response
  `status: 400` if disabling ducking isn't supported.<br>
textsubscribe: SUBSCRIBE would trigger when the song has been fully played.
short: This API allows to work with the previous song or radio station function.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

