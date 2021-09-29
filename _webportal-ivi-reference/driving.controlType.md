---
name: driving.controlType
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: driving
data:
  - name: controlType
    description: Value of the cruise/limit controler.
    type: int
    unit-value:
      - '0: ''off'''
      - '1: ''cruise control'''
      - '2: ''limit function'''
      - '3: ''adaptative Cruise Control'''
    example: '0'
short: This API allows to retrieve cruise or limit controler values.
---

