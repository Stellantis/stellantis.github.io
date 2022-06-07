---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.command
subname: chargeDeferredTime
domain: vehicle
type: 
  - set
params:
  - name: action
    required: true
    type: String
    description: Name of the remote action to perform, in this case `chargeDeferredTime`.
    unit-value: 
      - chargeDeferredTime
    example: chargeDeferredTime
  - name: startNow
    required: true
    type: Boolean
    description: Start or stop a charge.
    unit-value: 
      - 'true: start charge'
      - 'false: stop charge'
    example: true
  - name: deferredTime
    required: true
    type: String
    unit-value: duration
    description: Next deferred charge time.
    example: PTxxHxxM
  - name: checkStartCharge #TODO
    required: true
    description: Perform check on starting charge. 
    type: Boolean
    unit-value: n/a
    example: true
textset: |-
 Before sending any remote to vehicle, you should subscribe [pims.vehicle.signal](#api-pims-vehicle-signal).
 Use this set of parameters with `pims.vehicle.command` to set deferred charging time.
 This remote command is only available for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*.
error: 
  - code: 2337
  - code: 2101
  - code: 2102
  - code: 2000
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
  - code: 2301
  - code: 2302
  - code: 2325
  - code: 2326
  - code: 2329
  - code: 2330
  - code: 2331
  - code: 2332
  - code: 2339
  - code: 2377
short: This API allows to send remote command to the vehicle.
component: 
  - LongRangeRemote
---

