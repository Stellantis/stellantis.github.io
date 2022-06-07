---
name: configuration.privacy
privacy: Full Private
domain: configuration
type:
  - subscribe
  - get
params: none
data:
  - name: privacy
    description: An *int* that correspond to the privacy setting.
    type: int
    unit-value:
      - '0: ''FULL_PRIVATE'''
      - '1: ''GEOLOC_PRIVATE'''
      - '2: ''NO_PRIVATE'''
    example: 0
short: This API allows to work with the infotainment privacy setting.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

