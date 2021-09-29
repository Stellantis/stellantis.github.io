---
name: configuration.consumptionUnit
privacy: Public
domain: configuration
type:
  - get
  - set
  - subscribe
paramsset:
  - name: consumptionUnit
    description: An *int* that correspond to a unit of consumption
    type: int
    unit-value:
      - '0: ''Liters per 100 kms'''
      - '1: ''Kilometer per liter'''
      - '2: ''Miles per gallon'''
      - '3: ''KWh per 100 kms'''
      - '4: ''Km per KWh'''
      - '5: ''Miles per KWh'''
      - '6: ''Invalid unit'''
    example: 0
    required: true
dataset: none
data:
  - name: consumptionUnit
    description: An *int* that correspond to a unit of consumption.
    type: int
    unit-value:
      - '0: ''Liters per 100 kms'''
      - '1: ''Kilometer per liter'''
      - '2: ''Miles per gallon'''
      - '3: ''KWh per 100 kms'''
      - '4: ''Km per KWh'''
      - '5: ''Miles per KWh'''
      - '6: ''Invalid unit'''
    example: 0
short: This API allows to work HMI unit of consumption.
---

**Info**:
- Internal combustion engine vehicle, allowed values are in [0-2] range
- Electric vehicle, allowed values are in [3-5] range

**Error:** In case the vehicle do not allow the selected consumption unit (exemple: set kwh a thermic vehicle), you'll receive this response with `"status": 500,    "statusText": "Error: value isn't allowed in this configuration"`
