---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.sdk.device
domain: sdk
type: 
    - get
params: none
data: 
- name: OS
  type: String
  unit-value: n/a
  example: "Android" #TODO
  description: OS Name
- name: OSVersion
  type: String
  unit-value: n/a
  example: "9.0/PPR1.180610.011" #TODO
  description: OS Version
- name: PhoneModel
  type: String
  unit-value: n/a
  example: Galaxy S9 #TODO
  description: Phone model name.
- name: PhoneBrand
  type: String
  unit-value: n/a
  example: "Samsung" #TODO
  description: Phone Brand name.
# error: #TODO
#   - code: 2000
short: Returns the device information.
component:
  - SDK
---