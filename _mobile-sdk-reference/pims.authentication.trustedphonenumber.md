---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.trustedphonenumber
domain: authentication
type: 
    - get
data:
- name: phoneNumber
  description: Phone number. 
  type: " " # TODO
  unit-value: n/a
  example: 0612345678
error: 
  - code: 2001
  - code: 2006
  - code: 2201
  - code: 2202
  - code: 2204
  - code: 2307
short: |- 
  Returns the phone number if the user has one. 

  Adding a phone number to the account could be performed using [pims.authentication.smscode - addPhoneNumber](#api-pims-authentication-smscode-addphonenumber) or [pims.authentication.smscode - modifyPhoneNumber](#api-pims-authentication-smscode-modifyphonenumber).
component:
  - StrongAuthentication
---