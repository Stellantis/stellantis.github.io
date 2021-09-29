---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: HVAC.climateSettings
domain: HVAC
data:
  - name: AC
    description: ' '
    type: int
    unit-value: n/a
    example: 1 " "
  - name: mono
    description: ' '
    type: int
    unit-value: n/a " "
    example: 1
  - name: position
    description: Position of the airflow direction..
    type: Enum of int
    unit-value:
      - 0 = Auto confort
      - 1 = Auto visibility
      - 2 = Foot
      - 3 = Body
      - 4 = Head
      - 5 = Foot + Body
      - 6 = Foot + Head
      - 7 = Head + Body
      - 8 = Head + Foot
      - 9 = Defrosting different
    example: 1
  - name: recycled
    description: ' '
    type: int
    unit-value: n/a
    example: 1
  - name: speed
    description: ' '
    type: int
    unit-value: n/a
    example: 1
  - name: autoSpeed
    description: Auto Speed of the flow
    type: Enum of int
    unit-value:
      - 0 = Soft/Light
      - 1 = Normal
      - 2 = Strong
      - 4 = *not used*
    example: 1
params:
  - name: AC
    description: ' '
    type: int
    unit-value: n/a
    example: 1 " "
    required: false
  - name: mono
    description: ' '
    type: int
    unit-value: n/a
    example: 1
    required: false
  - name: position
    description: Position of the airflow direction..
    type: Enum of int
    unit-value:
      - 0 = Auto confort
      - 1 = Auto visibility
      - 2 = Foot
      - 3 = Body
      - 4 = Head
      - 5 = Foot + Body
      - 6 = Foot + Head
      - 7 = Head + Body
      - 8 = Head + Foot
      - 9 = Defrosting different
    example: 1
    required: false
  - name: recycled
    description: ' '
    type: int
    unit-value: n/a
    example: 1
    required: false
  - name: speed
    description: ' '
    type: int
    unit-value: n/a
    example: 1
    required: false
  - name: autoSpeed
    description: Auto Speed of the flow
    type: Enum of int
    unit-value:
      - 0 = Soft/Light
      - 1 = Normal
      - 2 = Strong
      - 4 = *not used*
    example: 1
    required: false
short: This API allows to work with the climate values.
---

