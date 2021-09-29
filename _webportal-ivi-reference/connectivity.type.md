---
name: connectivity.type
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: connectivity
params: none
data:
  - name: connectivityType
    description: Current type of internet connectivity.
    type: Enum of strings
    unit-value:
      - NOT_AVAILABLE
      - NO_CONNECTIVITY
      - wifi
      - cellular
    example: cellular
short: This API allows to retrieve head-unit internet connectivity type.
---

