---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.pincode
subname: reset
domain: authentication
type: 
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `reset`. 
  unit-value:
    - 'reset: reset PIN code'
  example: reset
- name: pinCode
  example: "1234"
  unit-value: n/a
  required: true
  type: int
  description: New PIN code value.
- name: smsCode
  example: "789012"
  unit-value: n/a
  required: true
  type: int
  description: SMS code value. See **GET pims.authentication.smscode - resetPIN**.
data: none
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2305
  - code: 2308
  - code: 2309
  - code: 2310
  - code: 2311
  - code: 2312
  - code: 2313
  - code: 2314
  - code: 2315
  - code: 2316
  - code: 2317
  - code: 2344
short: |-
  This api allows to reset current account PIN code. 
  
  The required SMS Code is available using **pims.authentication.smscode - resetPIN**."
component:
  - StrongAuthentication
---