---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.device
domain: vehicle
type: 
    - set
params:
  - name: isConnected
    required: true
    type: Boolean
    description: Indicates if you choose to connect the device or not.
    example: true
    unit-value: n/a
data: none
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2301
  - code: 2345
short: This api allows filtering device to connect or not. This API exists only for **Android**, this step is not required, and does not exist for iOS.
component: 
  - SendToNav
---