---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.smscode
subname: addPhoneNumber
domain: authentication
type: 
    - set
params:
- name: action
  required: true
  description: Name of the action to perform, in this case *addPhoneNumber*. 
  type: String
  unit-value: 
    - 'addPhoneNumber: validate trusted phone number'
  example: enrollment
- name: smsCode
  required: true
  description: SMS code value. See [GET pims.authentication.smscode - phoneNumberCertification](#api-pims-authentication-smscode-phonenumbercertification).
  type: Integer
  unit-value: n/a
  example: " " #TODO
- name: Phone number
  required: true
  description: New Phone number value.
  type: Integer
  unit-value: n/a
  example: 0123456789
dataset: none
error: 
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
  - code: 2344
short: |-
  This api allows to add phone number.
textset: |-
  You should use this API after receiving an smsCode from [pims.authentication.smscode - phoneNumberCertification](#api-pims-authentication-smscode-phonenumbercertification).

component: 
  - StrongAuthentication
---