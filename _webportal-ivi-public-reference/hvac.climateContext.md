---
privacy: Full Private
type:
  - get
  - subscribe
name: HVAC.climateContext
domain: HVAC
data:
  - name: Activation
    description: Return if the AC status.
    type: int
    unit-value:
      - '0: off'
      - '1: on'
    example: true
  - name: CenteredValue
    description: ' '
    type: int
    unit-value: n/a
    example: ' '
  - name: OffsetLeft
    description: ' '
    type: int
    unit-value: n/a
    example: ' '
  - name: OffsetRight
    description: ' '
    type: int
    unit-value: n/a
    example: ' '
  - name: IsFarehneit
    description: Return if the setting of temperature Farehneit or not.
    type: boolean
    unit-value:
      - 'true: on'
      - 'false: off'
    example: false
  - name: NumberOfZones
    description: ' '
    type: Enum of strings
    unit-value:
      - '0: Monozone'
      - '1: Bizone'
    example: ' '
  - name: TypeClim
    description: Return 1 = Clim Type left.
    type: int
    unit-value: n/a
    example: 1
short: This API allows to retrieve the current climate context.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

