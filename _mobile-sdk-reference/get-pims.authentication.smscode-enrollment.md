---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.smscode
subname: enrollment
domain: authentication
type: 
    - get
paramsget:
- name: type
  required: true
  description: Type of SMS, in this case `enrollment`.
  type: String
  unit-value: 
    - 'enrollment: sms for enrollment'
  example: enrollment
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
  This api allows to perform the first steps of device enrollment, next step is **pims.authentication.enrollment - enroll**.

  **GET** will request an SMS code. The code is send to the user trusted phone number, that's why a trusted phone number should is required before calling this API, cf **pims.authentication.trustedphonenumber**. 
  
  When the code is receive, it should be validated using **SET pims.authentication.smscode**.
component: 
  - StrongAuthentication
---