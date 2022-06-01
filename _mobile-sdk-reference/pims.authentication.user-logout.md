---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.user
subname: logout
domain: authentication
type:
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `logout`.
  unit-value:
    - logout
  example: logout
- ref: context
data: none 
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
  - code: 2301
short: This api allows to logout.
component:
  - BasicAuthentication
---