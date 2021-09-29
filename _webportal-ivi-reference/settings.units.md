---
name: settings.units
domain: settings
type:
  - get
  - set
  - subscribe
privacy: Public
data:
  - name: distance
    description: Unit of distance in the HMI.
    type: string
    unit-value:
      - km
      - miles
    example: miles
  - name: volume
    description: Unit of volume in the HMI.
    type: string
    unit-value:
      - liter
      - gallon
    example: liter
  - name: consumption
    description: Unit of consumption in the HMI.
    type: string
    unit-value:
      - l/100km
      - km/l
      - mpg
      - Kwh/100km
      - km/Kwh
      - invalid
    example: km/l
  - name: speed
    description: Unit of speed in the HMI.
    type: string
    unit-value:
      - km/h
      - mph
    example: mph
short: This API allows to retrieve HMI units.
---

