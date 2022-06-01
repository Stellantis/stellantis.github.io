---
privacy: Public
type:
  - get
  - subscribe
name: navigation.tripEndGPSQuality
domain: navigation
params: none
data:
  - name: tripEndGPSQuality
    description: Next waypoint city name.
    type: string
    unit-value:
      - '0x00: ''maximum accuracy'''
      - '0x0E: ''minimum accuracy'''
      - '0x0F: ''position undetermined'''
      - '0xFF: ''PQI not available'''
    example: '0x00'
short: This API allows to retrieve the current navigation next waypoint.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

