---
privacy: Full Private
type:
  - set
name: HVAC.climateControlPush
domain: HVAC
params:
  - name: cliamateConstrolPush
    description: Modifier to apply on the current climate.
    type: Enum of int
    unit-value:
      - 0 = IncreaseFrontLeftTemp
      - 1 = decreaseFrontLeftTemp
      - 2 = IncreaseFrontRightTemp
      - 3 = decreaseFrontRightTemp
    example: 1
    required: true
short: This API allows to set the climate values.
---

