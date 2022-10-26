---
name: driving.breakPedal
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: driving
data:
  - name: breakPedal
    description: Status of the break pedal.
    type: int
    unit-value:
      - '0: ''pedal realsed'''
      - '1: ''pedal pressed'''
    example: '3'
short: >-
  This API allows to retrieve rear right indication of obstacle visual distance
  (parking sensor).
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

