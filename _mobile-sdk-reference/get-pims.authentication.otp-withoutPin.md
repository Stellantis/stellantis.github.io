---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.otp
subname: withoutPIN
domain: authentication
type: 
  - get
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `withoutPIN`. 
  unit-value: 
    - 'withoutPIN: get otp without pin'
  example: withoutPIN
data:
- name: otp
  type: String
  description: OTP value.
  example: " " #TODO
  unit-value: n/a
error: 
  - code: 2000
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2202
  - code: 2308
  - code: 2309
  - code: 2310
  - code: 2311
  - code: 2312
  - code: 2313
  - code: 2314
  - code: 2316
  - code: 2317
short: Returns an OTP (One Time Password) without PIN.
component: 
  - StrongAuthentication
---