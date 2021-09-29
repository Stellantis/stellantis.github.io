---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: HVAC.ACModeAuto
domain: HVAC
paramsset:
  - name: ACModeAuto
    description: Parameter for switching between AC Mode auto or not auto.
    type: boolean
    unit-value:
      - 'true: mode auto on'
      - 'false: mode auto off'
    example: true
    required: true
dataset: none
data:
  - name: ACModeAuto
    description: 'Value of the AC Mode: auto or not.'
    type: boolean
    unit-value:
      - 'true: mode auto on'
      - 'false: mode auto off'
    example: true
short: This API allows to work with the AC Mode Auto.
---

