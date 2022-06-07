---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.trips
subname: count
domain: vehicle
type: 
    - get
paramsget:
  - name: action
    required: true
    type: String
    unit-value: count
    description: Action name, in this case `count`.
    example: count
  - ref: vin
dataget:
  - name: count
    type: Int
    unit-value: n/a
    description: Number of trips in database.
    example: 102
errorget: 
  - code: 2001
  - code: 2101
  - code: 2102
short: This API allows to retrieve the number of trips in the local storage.
component:
  - TripNDrive
---