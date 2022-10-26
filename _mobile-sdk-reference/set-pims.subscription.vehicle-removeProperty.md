---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
name: pims.subscription.vehicle
subname: removeProperty
domain: subscription
type: 
    - set
params:
  - name: action
    description:  Action Name, in this case `removeProperty`.
    type: String
    unit-value: 
      - removeProperty
    example: removeProperty
    required: true
  - name: vin
    required: true
    description: Vehicle Identification Number 
    type: String
    unit-value: n/a
    example: VR1AB12C3D4567890
error: 
- code: 2001
- code: 2101
- code: 2102
- code: 2201
- code: 2202
- code: 2203
- code: 2204
- code: 2302
- code: 2308
- code: 2309
- code: 2310
- code: 2311
- code: 2312
- code: 2313
- code: 2314
- code: 2316
- code: 2317
short: Delete the vehicle from the user account (for example when the vehicle is sold).
component: 
  - UserInformation
---