---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.smscode
subname: resetPIN
domain: authentication
type: 
    - get
paramsget:
- name: type
  required: true
  description: Type of SMS, in this case `resetPIN`.
  type: String
  unit-value: 
    - 'resetPIN : sms for reset pin'
  example: resetPIN
dataget: none
errorget: 
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
short: |-
  This api allows to request an SMS Code intended to reset the user's PIN Code. 
textget: |-
  The code is send to the user trusted phone number, that's why a trusted phone number is required before calling this API, cf **pims.authentication.trustedphonenumber**.
  
  When the code is receive, it should be send using **SET pims.authentication.pincode - reset**.
component: 
  - StrongAuthentication
---