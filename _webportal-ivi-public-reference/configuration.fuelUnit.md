---
name: configuration.fuelUnit
privacy: Full Private
domain: configuration
type:
  - get
  - subscribe
params: none
data:
  - name: fuelUnit
    description: An *int* that correspond to a unit of volume.
    type: int
    unit-value:
      - '0: ''liter'''
      - '1: ''gallon'''
    example: 0
short: >-
  This API allows to work with the fuel unit in which fuel is displayed in the
  infotainment system (liter, gallon etc.).
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

