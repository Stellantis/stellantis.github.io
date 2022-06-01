---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.user
subname: login
domain: authentication
type:
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `login`.
  unit-value: 
    - login
  example: login
- ref: context
data: none
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2368
short: This api allows to login. It will prompt an external user agent (web view).
component:
  - BasicAuthentication
security: none
---