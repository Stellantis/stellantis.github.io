---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.trips
domain: vehicle
subname: remove
type: 
    - set
paramsset:
  - ref: vin
  - name: action 
    required: true
    unit-value: 
      - remove
    type: String
    description: Filter mode, in this case `remove`.
    example: remove
  - name: ids
    type: List of Numbers
    unit-value: n/a
    description: Identifier of the trip(s) to remove.
    required: true
    example: "[418, 419]"
dataset: none
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
  - code: 2370
short: This API allows removing trip(s) in stored the head-unit.
component:
  - TripNDrive
---