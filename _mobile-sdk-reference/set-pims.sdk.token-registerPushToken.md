---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
domain: PushNotification
name: pims.sdk.token
subname: registerPushToken
type: 
  - set
params:
- name: action
  description: Action Name, in this case `registerPushToken`.
  type: String
  unit-value:
    - registerPushToken
  required: true
- name: token
  description: FireBase token.
  type: String
  unit-value: n/a
  required: true
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
short: Register a push notification token.
---