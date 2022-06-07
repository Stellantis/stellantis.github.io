---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.songTotalTime
domain: media
data:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
  - name: songTotalTime
    description: Value of the current song's total time.
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
  - name: songTotalTime
    description: Value of the current song's total time.
    type: Float
    unit-value: second
    example: 126.34
    required: true
short: >-
  This API allows to synchronize the Media Player total time setting of the
  playing song.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

