---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.trips
domain: vehicle
subname: export
type: 
    - set
paramsset:
  - name: action 
    required: true
    unit-value: 
      - export
    type: String
    description: Filter mode, in this case `export`.
    example: export
  - name: ids
    type: List of Numbers
    unit-value: n/a
    description: Identifiers of the trip(s) to export
    required: true
    example: "[418, 419]"
dataset:
  - name: file
    type: String
    description: String containing data of exported trips.
    unit-value: n/a
    example: "" #ToDo
error:
  - code: 2374
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
short: This API allows exporting trips in stored the head-unit.
component:
  - TripNDrive
---