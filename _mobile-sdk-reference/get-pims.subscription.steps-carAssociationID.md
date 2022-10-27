---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.subscription.steps
subname: carAssociationID
domain: subscription
type: 
    - get
params:
  - name: carAssociationID
    required: false
    type: String
    description: Car association id.
    example: " " #TODO
    unit-value: n/a
  - name: resetSteps
    required: true
    type: Boolean
    description: Indicates if must reset all step status.
    example: true
    unit-value: n/a
  - name: stepsStatus
    required: true
    type: String
    description: Step name used to filter the result.
    example: all
    unit-value:
      - all
      - todo
      - alreadyDone
data:
- name: stepsID
  type: String
  example:  " " #TODO
  unit-value: n/a
  description: Steps id value.
- ref: step
  type: Object
  name: trustedPhone
  description: "Information about trusted phone." 
- ref: step
  type: Object
  name: deviceActivation
  description: "Information about device activation." 
- ref: step
  type: Object
  name: mediumCarKey
  description: "Information about medium car key."
dataget_example: |-
  { 
      "stepsID": 132324,
      "trustedPhone": {
          "name": "trustedPhone",
          "status": "alreadyDone",
          "order": 1
      },
      "deviceActivation": {
          "name": "deviceActivation",
          "status": "todo",
          "order": 2
      },
      "mediumCarKey": {
          "name": "mediumCarKey",
          "status": "todo",
          "order": 3
      }
    }
error: 
  - code: 2000
  - code: 2101
  - code: 2102
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
short: |-
  Returns the user vehicle steps with **carAssociationID**.
  
  Use resetSteps = true in tow cases:
   - Whenever you receive the error code 2312.
   - If you get the error code 2317 while using your pin code.
component: 
  - UserVehicleSteps
---