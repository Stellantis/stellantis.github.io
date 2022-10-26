---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
domain: PushNotification
name: pims.sdk.event
subname: enable
type: 
  - set
params:
- name: action
  description: Action Name, in this case `enable`.
  type: String
  unit-value:
    - enable
  required: true
- name: type
  description: List of notifications to enable.
  type: Array
  unit-value: 
    - remoteChargeFinished
    - remoteChargeInterrupted
  required: true
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
  - code: 2345
component: 
  - PushNotification
short: Enable notification.
---