---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.event
subname: remote
domain: vehicle
type: 
    - subscribe
params:
  - name: actionType
    required: true
    type: String
    description: Action name, in this case `remote`.
    example: remote
    unit-value:
      - remote
  - name: type
    required: true
    type: Array of Strings
    description: Service type.
    unit-value:
      - remoteChargeFinished
      - remoteChargeInterrupted
    example: '["remoteChargeFinished", "remoteChargeInterrupted"]'
data: 
  - name: notification
    type: String
    description: Notification received when the charging is finished or interrupted.
    unit-value: 
      - remoteChargeFinished
      - remoteChargeInterrupted
    example: remoteChargeFinished
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
short: This api allows to be notified when a remote charge ends.
component:
  - LongRangeRemote
---