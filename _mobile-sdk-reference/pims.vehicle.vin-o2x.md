---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.vin
subname: O2X
domain: vehicle
type: 
    - get
params: none
dataget:
- name: vin
  description: Vehicle Identification Number 
  type: String
  unit-value: n/a
  example: VR1AB12C3D45678909
errorget: 
  - code: 2000
  - code: 2101
  - code: 2102
short: This API allows retrieve Vehicle VIN, for O2X vehicles only.
component: 
  - O2X
---