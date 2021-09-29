---
name: driving.controlTypeStatus
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: driving
data:
  - name: controlTypeStatus
    description: Status of the cruise/limit controler.
    type: int
    unit-value:
      - '0: ''Stand by'''
      - '1: ''Activity without overspeeding'''
      - '2: ''Limitation activated by cruise control'''
      - '3: ''Activity with overspeeding without pedal pick-up'''
      - '4: ''Activity with overspeeding on pedal pick-up'''
      - '5: ''Reserved'''
      - '6: ''Function no activation possible'''
      - '7: ''Faul'''
    example: '2'
short: This API allows to retrieve cruise or limit controler status.
---

