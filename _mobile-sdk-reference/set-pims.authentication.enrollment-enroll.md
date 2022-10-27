---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.enrollment
subname: enroll
domain: authentication
type: 
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `Enroll`.
  unit-value:
    - 'enroll: finalize device enrollment'
  example: enroll
- name: pinCode
  required: true
  type: int
  description: Account PIN code value.
  example: "1234"
  unit-value: n/a
- name: smsCode
  required: true
  description: SMS code value. See **GET pims.authentication.smscode - enrollment**. *Only for iOS*.
  type: int
  example: " " #TODO
  unit-value: "n/a"
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
  - code: 2316
  - code: 2317
  - code: 2344
short: |-
  This api allows to finalize device enrollment.

  You should use this API after receiving an smsCode from **pims.authentication.enrollment - enroll**.
component:
  - StrongAuthentication
---