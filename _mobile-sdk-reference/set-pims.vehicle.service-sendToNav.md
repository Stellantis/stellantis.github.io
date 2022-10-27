---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.service
domain: vehicle
subname: sendToNav
type: 
  - set
params:
  - name: action
    required: true
    type: String
    description: Connect or disconnect `sendToNav` service.
    example: start
    unit-value: 
      - 'start: start the service'
      - 'stop: stop the service'
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
  - code: 2339
  - code: 2345
  - code: 2367
short: "This api allows to connect or disconnect `sendToNav` service."
component: 
  - SendToNav
---