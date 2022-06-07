---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.account
subname: username
domain: authentication
type: 
    - get
params:
- name: actionType
  required: true
  type: String
  description: Action Name, in this case `basic`.
  unit-value:
    - basic
  example: basic
- name: type
  required: true
  type: String
  description: Retrieve username (email).
  unit-value: 
    - username
  example: username
data:
- name: username
  type: String
  description: Username (email).
  unit-value: n/a
  example: user@provider.tld
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
short: Returns the user login email.
component: 
  - BasicAuthentication
---