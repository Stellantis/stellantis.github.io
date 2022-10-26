---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.authentication.token
subname: customerAt
domain: authentication
type: 
  - get
params:
- name: type
  required: true
  type: String
  unit-value: 
    - customerAt
  description: Token type, in this case `customerAt`.
  example: customerAt
- name: action
  required: true
  type: String
  unit-value: 
    - get
    - refresh
  description: Type of query.
  example: get
data: 
  - name: type
    type: String
    description: Token type.
    unit-value: 
      - customerAt
    example: customerAt
  - name: token
    type: String
    description: Token value.
    unit-value: n/a
    example: "XXi2oI9Fglmgivv7RAJ7i"
error:
  - code: 2001
  - code: 2006
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2204
  - code: 2301
short: Returns a customerAt token.
component: 
  - BasicAuthentication
---