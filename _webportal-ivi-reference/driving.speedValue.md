---
name: driving.speedValue
privacy: Full Private
domain: driving
type:
  - get
  - subscribe
params: none
data:
  - name: speedValue
    description: Current vehicle speed.
    type: number
    unit-value: >-
      Unit depend on [speedUnit](#api-configuration-speedUnit) API. Max value:
      255.
    example: 15
short: This API allows to retrieve the current speed of a vehicle.
---

