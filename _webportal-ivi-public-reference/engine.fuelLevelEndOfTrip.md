---
name: engine.fuelLevelEndOfTrip
privacy: Geolocation Private
domain: engine
type:
  - get
  - subscribe
params: none
data:
  - name: fuelLevelEndOfTrip
    description: Expected fuel left at the end of the trip.
    type: int
    unit-value: '%'
    example: 42
short: >-
  This API allows to work with the estimated vehicle autonomy at the end of the
  trip.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

