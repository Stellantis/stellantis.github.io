---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.services
domain: vehicle
type: 
    - get
params:
  - name: services 
    required: true
    type: List
    description: List of available services name.
    unit-value: 
      - o2x
      - sendtonav
      - tripsanddrive
    example: "o2x"
data:
- name: services
  description: Information about the service.
  type: Object
  fields:
  - name: name
    type: String
    description: Service name.
    unit-value: n/a
    example: o2x
  - name: status
    type: List
    description: Status of the service.
    unit-value: 
      - started
      - stopped
      - notLoaded
    example: started
data_example: |-
    {
        "services": [
          {
            "name": "o2x",
            "status": "started"
          },
          {
            "name": "sendtonav",
            "status": "notLoaded"
          }
        ]
      }
error: 
  - code: 2001
  - code: 2101
  - code: 2102
short: This API return state of available services.
component:
  - O2X
  - SendToNav
  - TripNDrive
---