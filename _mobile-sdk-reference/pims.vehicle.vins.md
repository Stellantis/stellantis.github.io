---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.vins
domain: vehicle
type: 
    - get
params: none
data: 
  - name: vins
    description: List of listening VINs and GDPR config. Empty if no subscribtion.
    type: Object
    fields:
      - ref: vin
      - name: gdpr
        type: boolean
        description: GDRP configuration.
        unit-value: n/a
        example: true
data_example: |-
  [
      {
        "vin": "VR1AB12C3D45678908",
        "gdpr": true
      },
      {
        "vin": "VR1AB12C3D45678909",
        "gdpr": false
      }
    ]
error: 
  - code: 2001
  - code: 2344
short: Returns the list of VINs subcribed on API `pims.vehicle.trips`.
component:
  - TripNDrive
---