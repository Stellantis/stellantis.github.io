---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.carkey
domain: vehicle
type: 
    - get
paramsget:
  - ref: vin
dataget: 
  - name: isCarKeyVerified 
    description: true if car key is verified , otherwise false
    type: Boolean 
    unit-value: n/a
    example: true
  - name: cvsStatus
    type: String
    description: CarKey status
    unit-value: 
      - unknown
      - active
      - suspended
      - disabled
    example: disabled
  - name: maxReactivationDate 
    description: If the status of carkey is suspended, user should active carkey before this date.
    type: String
    unit-value: date
    example: "2021-07-29T22:25:09.898Z"
errorget: 
  - code: 2000
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
short: Check carKey status.
component: 
  - Carkey
---
