---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
name: pims.vehicle.statistics
subname: duration
domain: vehicle
type: 
    - get
params:
- name: action
  required: true
  type: String
  description: Action Name, in this case `duration`.
  unit-value:
    - duration
  example: duration
- name: vin
  required: true
  description: Vehicle Identification Number 
  type: String
  unit-value: n/a
  example: VR1AB12C3D4567890
- name: period
  required: true
  type: Enum of String
  description: Time period of the statistics.
  unit-value:
    - day
    - week
    - month
    - year
    - beginning
  example: day
data: 
- name: duration
  type: Number
  description: Sum of Trip duration during the period.
  unit-value: n/a
  example: 3600
short: Returns the total duration of Trips during the requested time period.
error: 
  - code: 2001
  - code: 2101
  - code: 2102
component:
  - TripNDrive
---