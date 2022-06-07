---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.configuration
domain: vehicle
type: 
  - set
params:
- name: monitoring
  description: Information about log monitoring.
  type: Object
  required: true
  fields:
  - name: loglevel
    required: true
    type: Enum of Strings
    description: The log level value.
    unit-value: 
      - 'low: activates all log except the advertising logs'
      - 'high: all logs are activated'
    example: "high"
params_example:
  kotlin: |- 
    Pair("monitoring", map0f(
          Pair("logLevel", "high")
        )
  swift: |- 
    "monitoring": [
          "logLevel": "high"
        ]
data: none
error:
 - code: 2001
 - code: 2101
 - code: 2102
short: This api configure the loglevel of O2X.
component: 
  - O2X
---