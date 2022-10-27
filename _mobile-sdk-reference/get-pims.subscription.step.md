---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.subscription.step
domain: subscription
type: 
  - get
params:
  - name: stepsID
    required: true
    type: String
    example:  " " #TODO
    unit-value: n/a
    description: Steps id value.
data: 
- ref: step
  type: Object
  name: trustedPhone
  description: "Information about trusted phone. Returned only if this step is the next one."
- ref: step
  type: Object
  name: deviceActivation
  description: "Information about device activation. Returned only if this step is the next one." 
- ref: step
  type: Object
  name: mediumCarKey
  description: "Information about medium car key. Returned only if this step is the next one." 
dataget_example: |-
  {
      // If next Step is trustedPhone
      "trustedPhone": {
        "name": "trustedPhone",
          "status": "todo",
          "order": 1
      },
      // If next Step is deviceActivation
      "deviceActivation": {
        "name": "deviceActivation",
          "status": "todo",
          "order": 1
      },
      // If next Step is mediumCarKey
      "mediumCarKey": {
          "name": "mediumCarKey",
          "status": "todo",
          "order": 1
      }
      // Null if no next steps
    }
error: 
  - code: 2101
  - code: 2102
  - code: 2346
short: Return the next to do step. This API return only **one STEP** at the time.
component: 
  - UserVehicleSteps
---