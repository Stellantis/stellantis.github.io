---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.event
subname: tripNDrive
domain: vehicle
type: 
  - subscribe
params: 
  - name: actionType
    required: true
    type: String
    description: Action name, in this case `tripNDrive`.
    example: tripNDrive
    unit-value: tripNDrive
data:
- name: event
  type: String
  description: Event description.
  unit-value: 
    - "CEAError &lt;error_code&gt;-&lt;error_subcode&gt; : &lt;error_text&gt;"
    - migrationBegin
    - migrationEnd
    - noMigration
    - "Database error : Problem initializing SmartApps"
  example: "CEAError &lt;error_code&gt;-&lt;error_subcode&gt; : &lt;error_text&gt;"
error:
  - code: 2001
  - code: 2005
short: Subscribe on notifications about `tripNDrive` events.
component:
  - TripNDrive
---