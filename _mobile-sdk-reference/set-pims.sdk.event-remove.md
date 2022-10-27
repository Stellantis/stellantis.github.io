---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
domain: PushNotification
name: pims.sdk.event
subname: remove
type: 
  - set
params:
- name: action
  description: Action Name, in this case `remove`.
  type: String
  unit-value:
    - remove
  required: true
- ref: vin
error: 
- code: 2001
- code: 2101
- code: 2102
- code: 2201
- code: 2202
- code: 2203
- code: 2204
component: 
  - PushNotification
short: Remove notification.
---