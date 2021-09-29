---
name: technical.softwareRelease
privacy: Full Private
type:
  - get
domain: technical
params: none
data:
  - name: version
    description: Return a *int* that correspond to a vehicle manufacturer brand.
    type: string
    unit-value: XX.XX.XX.XX
    example: 21.07.16.32
  - name: environment
    description: Engineering or production environment.
    type: Enum of strings
    unit-value:
      - production
      - engineering
    example: production
short: This API allows to retrieve infotainment system software release.
---

