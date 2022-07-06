---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.account
subname: isAccountBlocked
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
  description: Retrieve if account is blocked.
  unit-value: 
    - isAccountBlocked
  example: isAccountBlocked
data:
- name: isAccountBlocked
  type: Enum of Strings
  description: Indicates if the user account's is blocked or not.
  unit-value: 
    - Unknown
    - PinBlocked
    - NotBlocked
  example: NotBlocked
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
short: Returns if the account is blocked or not.
component: 
  - StrongAuthentication
---