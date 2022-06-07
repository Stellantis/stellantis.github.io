---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.carkey
domain: vehicle
type: 
    - get
    - set
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
errorget: 
  - code: 2000
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
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
short: Retrieve carkey status.
component: 
  - Carkey
---
