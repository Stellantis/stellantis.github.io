---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.account
subname: isDeviceActivated
domain: authentication
type:
    - get
params:
- name: actionType
  required: true
  type: String
  description: Action Name, in this case `strong`.
  unit-value:
    - strong
  example: strong
- name: type
  required: true
  type: String
  description: Retrieve if the device is activated or not.
  unit-value: 
    - isDeviceActivated
  example: isDeviceActivated
data:
- name: isDeviceActivated
  type: boolean
  description: Indicates if the device is activated or not.
  unit-value: n/a
  example: false
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
short: Returns if the device is activated or not.
component: 
  - StrongAuthentication
---