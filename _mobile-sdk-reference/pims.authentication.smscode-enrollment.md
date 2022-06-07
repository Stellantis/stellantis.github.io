---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.smscode
subname: enrollment
domain: authentication
type: 
    - get
    - set
paramsget:
- name: type
  required: true
  description: Type of SMS, in this case `enrollment`.
  type: String
  unit-value: 
    - 'enrollment: sms for enrollment'
  example: enrollment
dataget: none
paramsset:
- name: action
  required: true
  description: Name of the action to perform, in this case *Enrollment*. 
  type: String
  unit-value: 
    - 'enrollment: enroll device'
  example: enrollment
- name: smsCode
  required: true
  description: SMS code value. See [GET pims.authentication.smscode - enrollment](#api-pims-authentication-smscode-enrollment).
  type: Integer
  unit-value: n/a
  example: " " #TODO
dataset: 
  - name: status
    description: Status of the action.
    type: string
    unit-value:
      - NotEnrolled
      - AlreadyEnrolled
    example: AlreadyEnrolled
errorget: 
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
errorset: 
  - code: 2001
  - code: 2006
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
  The Get & Set operations of this api allows to perform the first steps of device enrollment, next step is [pims.authentication.enrollment - enroll](#api-pims-authentication-enrollment-enroll).

textget: |-
  **GET** will request an SMS code. The code is send to the user trusted phone number, that's why a trusted phone number should is required before calling this API, cf [pims.authentication.trustedphonenumber](#api-pims-authentication-trustedphonenumber). 
  
  When the code is receive, it should be validated using the **SET** operation.
textset: |-
  **SET** will send the SMS code received on the user trusted phone number for validation.
  
  The SMS is received using the **GET** operation.
component: 
  - StrongAuthentication
---