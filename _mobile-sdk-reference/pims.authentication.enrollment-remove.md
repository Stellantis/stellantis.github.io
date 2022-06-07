---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.enrollment
subname: remove
domain: authentication
type: 
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `remove`. 
  unit-value:
    - 'remove: remove enrollment'
  example: remove
data: none
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2202
  - code: 2204
  - code: 2305
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
short: This api allows to remove all device enrollment within the current account.
component:
  - StrongAuthentication
---