---
name: ecocoaching.noteBraking
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: ecocoaching
data:
  - name: noteBraking
    description: Braking note in Eco Coaching.
    type: int
    unit-value:
      - '''`[0, 10]: ''Braking Note'''
      - '''`14: ''Unavailable'''
      - '''`15: ''Invalid'''
    example: 8
short: >-
  This API allows to retrieve the eco coaching Braking note, providing instant
  Braking ranking in EcoCoaching trip.
---

