---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.sdk.version
domain: sdk
type: 
    - get
params: none
data:
- name: versionCore
  type: String
  unit-value: n/a
  example: "1.2.5"
  description: Facade core version.
- name: versionFacade
  type: String
  unit-value: n/a
  example: "1.2.5"
  description: Facade version
# error: #TODO
#   - code: 2000
short: Returns the facade core version and the facade version.
component:
  - SDK
---