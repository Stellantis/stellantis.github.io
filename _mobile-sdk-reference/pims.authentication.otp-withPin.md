---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.otp
subname: withPIN
domain: authentication
type: 
  - get
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `withPIN`. 
  unit-value: 
    - 'withPIN: get otp with pin'
  example: withPIN
- name: pinCode
  required: true
  type: Integer
  description: Account PIN code value.
  example: "1234"
  unit-value: n/a
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
short: Returns an OTP (One Time Password) with PIN.
component: 
  - StrongAuthentication
---