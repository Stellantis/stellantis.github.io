---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.privacy
domain: vehicle
type: 
  - get
params:
  - name: vin
    description: Vehicle Identification Number 
    type: String
    unit-value: n/a
    example: VR1AB12C3D45678909
    required: true
data: 
  - name: privacy
    type: String
    description: privacy value
    unit-value: 
      - fullPrivate
      - geolocationPrivate
      - none
    example: geolocationprivate
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2205
  - code: 2301
  - code: 2304
  - code: 2341
  - code: 2342
  - code: 2367
short: This api allows to get the vehicle privacy. This API require *sendToNav* being enable using **pims.vehicle.service - Start**.
textget: |-
  They are 3 levels of privacy:
    - *none*: data & geolocation are authorized.
    - *geolocationPrivate*: data is authorized but not geolocation.
    - *fullPrivate*: data & geolocation are not authorized, sometime called *plane mode*.
  
  ***pims.vehicle.destination*** is available only if privacy is set to `none`.
component:
  - SendToNav
---