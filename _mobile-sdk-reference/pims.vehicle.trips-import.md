---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.trips
domain: vehicle
subname: import
type: 
    - set
paramsset:
  - name: action 
    required: true
    unit-value: 
      - import
    type: String
    description: Filter mode, in this case `import`.
    example: import
  - name: file
    type: String
    unit-value: n/a
    required: true
    description: Trips data to import.
    example: " " #TODO
dataset:
  - name: total
    type: Number
    description: Number of trips detected in the file.
    example: 42
    unit-value: n/a
  - name: imported
    type: Number
    description: Number of trips imported from the file.
    example: 23
    unit-value: n/a
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
  - code: 2373
short: This API allows importing trips in stored the head-unit.
component:
  - TripNDrive
---