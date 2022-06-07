---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.smscode
subname: modifyPhoneNumber
domain: authentication
type: 
    - set
params:
- name: type
  required: true
  description: Type of SMS to request, in this case `modifyPhoneNumber`.
  type: String
  unit-value: 
    - 'modifyPhoneNumber'
  example: modifyPhoneNumber
- name: smsCode
  required: true
  description: SMS code value. See [GET pims.authentication.smscode - phoneNumberCertification](#api-pims-authentication-smscode-phonenumbercertification).
  type: Integer
  unit-value: n/a
  example: " " #TODO
- name: phoneNumber
  required: true
  type: Integer
  unit-value: phoneNumber
  description: Phone number value.
  example: 0612345678
data: none
error: 
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
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
  This api allows to modify the phone number.

  You should use this API after receiving an smsCode from [pims.authentication.smscode - phoneNumberCertification](#api-pims-authentication-smscode-phonenumbercertification).
component:
  - StrongAuthentication
---