---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.authentication.token
subname: cvs
domain: authentication
type:
  - get
params:
- name: type
  required: true
  type: String
  unit-value: 
    - cvs
  description: Token type, in this case `cvs`.
  example: cvs
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
      - cvs
    example: cvs
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
short: Returns a CVS token.
component: 
  - BasicAuthentication
---