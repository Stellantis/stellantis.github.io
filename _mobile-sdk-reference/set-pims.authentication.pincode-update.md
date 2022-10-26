---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.pincode
subname: update
domain: authentication
type: 
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `update`. 
  unit-value:
    - 'update: update pin code'
  example: update
- name: oldPIN
  required: true
  type: String
  description: Old pin value.
  example: "1234"
  unit-value: n/a
- name: newPIN
  required: true
  type: int
  description: New pin value.
  example: "4321"
  unit-value: n/a
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
short: This api allows to update current account PIN code.
component:
  - StrongAuthentication
---