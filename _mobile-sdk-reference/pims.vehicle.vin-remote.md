---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.vin
subname: remote
domain: vehicle
type: 
    - set
params:
  - name: vin
    description: Vehicle Identification Number 
    type: String
    unit-value: n/a
    example: VR1AB12C3D45678909
    required: true
short: This API allows to select the vehicle VIN before sending remote command with *pims.vehicle.command*.
component: 
  - LongRangeRemote
---