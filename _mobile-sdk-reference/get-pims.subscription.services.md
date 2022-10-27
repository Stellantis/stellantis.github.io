---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.subscription.services
domain: subscription
type: 
    - get
params:
- ref: vin
data:
- name: services
  description: Services available for this VIN.
  type: List of Objects
  fields:
    - name: name
      type: String
      example: " " #TODO
      unit-value: n/a
      description: Service name value.
    - name: code
      type: String
      example: " " #TODO
      unit-value: n/a
      description: Service name value.
dataget_example: |-
  { 
      "services": [
        {
          "code": "service_code",
          "name": "service_name"
        },
        {
          "code": "service_code",
          "name": "service_name"
        }
      ]
    }
error: 
  - code: 2000
  - code: 2101
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
short: Returns list of services for a given vehicle identifier.
component: 
  - UserVehicleSteps
---