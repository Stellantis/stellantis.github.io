---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.user
subname: createAccount
domain: authentication
type:
  - set
params:
- name: action
  required: true
  type: String
  description: Name of the action to perform, in this case `createAccount`. 
  unit-value: 
    - createAccount
  example: createAccount
- ref: context
data: none
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2368
short: This api allows the user to create an account. It will prompt an external user agent (web view).
component:
  - BasicAuthentication
security: none
---