---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.carkey
domain: vehicle
type: 
    - set
dataset:
  - name: hasCarKey
    type: Boolean
    description: True if car key is set with success,  false otherwise.
    unit-value: true/false 
    example: true
  - name: vin
    type: String
    unit-value: n/a
    description:  Vehicle Identification Number
    example: VR1AB12C3D45678909
  - name: securityCode
    description: Security code
    type: String
    unit-value: n/a
    example: "c2hhemFtCg==" #TODO
  - name: securityExpiration
    type: String
    description: Expiration date of the security code.
    unit-value: date time
    example: "2021-07-29T22:25:09.898Z"
errorset:
  - code: 2000
  - code: 2006
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
  - code: 2205
  - code: 2341
  - code: 2342
  - code: 2354
  - code: 2355
  - code: 2356
short: Activate a carKey.
component: 
  - Carkey
---
