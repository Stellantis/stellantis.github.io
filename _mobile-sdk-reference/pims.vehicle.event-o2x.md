---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.event
subname: O2X
domain: vehicle
type: 
  - subscribe
params:
  - name: actionType
    required: true
    type: String
    description: Action name, in this case `O2X`.
    example: O2X
    unit-value: 
      - O2X
data:
  - name: event
    type: String
    description: This api allows to be notified (unsubscribe) when the connection with vehicle is lost or unable  to charge.
    unit-value: 
      - disconnected
      - cantCharge
    example: disconnected
error: 
  - code: 2001
short: This api allows to be notified when an event has occured in relation with O2X.
component:
  - O2X
---