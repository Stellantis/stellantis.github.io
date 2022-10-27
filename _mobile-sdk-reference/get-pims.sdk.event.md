---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.1
domain: PushNotification
name: pims.sdk.event
type: 
  - get
params:
- name: vins
  description: List of vehicle's VIN to subscribe.
  type: Array of strings
  unit-value: n/a
  required: true
  example: '["VR1AB12C3D4567890", "VR2AB12C3D4567890"]'
params_example: 
  kotlin: Pair("vins", listOf("VR1AB12C3D4567890", "VR2AB12C3D4567890")) 
  swift: '"vins": ["VR1AB12C3D4567890", "VR2AB12C3D4567890"]'
data: 
- name: events
  description: Informations about events grouped by VIN.
  type: Array of Objects
  fields:
  - ref: vin
  - name: notifications
    description: List of notification for this VIN.
    type: Array of Objects
    unit-value: n/a
    fields:
    - name: name
      description: Event name.
      type: String
      unit-value: 
        - remoteChargeFinished
        - remoteChargeInterrupted
    - name: status
      description: Event status.
      type: enum 
      unit-value:
        - disabled
        - enabled
data_example: |-
  {
      "events": [
        { 
          "vin": "VR1AB12C3D4567890",
          "notification": [
            { "name": "remoteChargeFinished",
              "status": "enabled" },
            { "name": "remoteChargeInterrupted",
              "status": "disabled" }
            ]
        },
        { 
          "vin": "VR2AB12C3D4567890",
          "notification": [
            { "name": "remoteChargeFinished",
              "status": "disabled" },
            { "name": "remoteChargeInterrupted",
              "status": "enabled" }
            ]
        },
      ]
    }
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
short: Receive the list of notification received on the device.
---