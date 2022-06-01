---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.mediaInfo
domain: media
paramsset:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
    required: true
  - name: trackName
    description: Current track name.
    type: string
    unit-value: n/a
    example: Starman
    required: true
  - name: artistName
    description: Current artist name.
    type: string
    unit-value: n/a
    example: David Bowie
    required: true
  - name: albumName
    description: Current album name.
    type: string
    unit-value: n/a
    example: Ziggy Stardust and the Spiders from Mars
    required: true
  - name: covertArtPicture
    description: Current cover art.
    type: string
    unit-value: n/a
    example: 'data:image/png;base64,...'
    required: true
dataset: none
data:
  - name: appId
    description: Name of your App.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
  - name: trackName
    description: Current track name.
    type: string
    unit-value: n/a
    example: Starman
  - name: artistName
    description: Current artist name.
    type: string
    unit-value: n/a
    example: David Bowie
  - name: albumName
    description: Current album name.
    type: string
    unit-value: n/a
    example: Ziggy Stardust and the Spiders from Mars
  - name: covertArtPicture
    description: Current cover art.
    type: string
    unit-value: n/a
    example: 'data:image/png;base64,...'
short: This API allows to retrieve the current media info.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

