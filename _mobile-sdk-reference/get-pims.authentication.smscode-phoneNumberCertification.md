---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.smscode
subname: phoneNumberCertification
domain: authentication
type: 
  - get
params:
- name: type
  required: true
  description: Type of SMS to request, in this case `phoneNumberCertification`.
  type: String
  unit-value: 
    - 'phoneNumberCertification'
  example: phoneNumberCertification
- name: phoneNumber
  required: true
  type: int
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
short: |-
  This api allows to receive an SMS code allowing to add/modify the user account phone number.
textget: |-
  It is possible to check if the user already has a phone number using **pims.authentication.trustedphonenumber**.
  
  When the code is receive, it should be validated using **pims.authentication.smscode - addPhoneNumber**, **pims.authentication.smscode - modifyPhoneNumber** or **pims.authentication.enrollment - enrollmentWithPhoneNumber**.
component: 
  - StrongAuthentication
---