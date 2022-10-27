---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.command
subname: warning
domain: vehicle
type: 
    - set
params:
  - name: action
    required: true
    type: String
    description: Name of the remote action to perform, in this case `warning`.
    example: warning
    unit-value:
      - warning
textset: |-
 Before sending any remote to vehicle, you should subscribe **pims.vehicle.signal**.
 Use this set of parameters with `pims.vehicle.command` to set a light blinking.
error:
  - code: 2101
  - code: 2102
  - code: 2000
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
  - code: 2301
  - code: 2302
  - code: 2329
  - code: 2359
  - code: 2377
short: This API allows to send remote command to the vehicle.
component: 
  - LongRangeRemote(Remote)
---

