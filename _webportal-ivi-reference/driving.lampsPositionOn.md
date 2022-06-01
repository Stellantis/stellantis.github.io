---
name: driving.lampsPositionOn
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: driving
data:
  - name: lampsPositionOn
    description: Status of the position lamps.
    type: int
    unit-value:
      - '`0`:position lamp off'
      - '`1`:position lamp on'
    example: 1
short: This API allows to retrieve the position lamps.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

