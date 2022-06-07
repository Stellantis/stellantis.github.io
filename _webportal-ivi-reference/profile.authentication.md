---
name: profile.authentication
privacy: Full Private
type:
  - get
  - subscribe
domain: profile
params: none
data:
  - name: authenticated
    description: Return if this profile is authenticated or not.
    type: boolean
    unit-value: n/a
    example: 'true'
short: >-
  This API allows to work with authentication (using the vehicle manufacturer
  smart device application).
data_example: |-
  {
      "authenticated": true 
    }
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

This API will return `true` when a mobile phone with the manufacter App and a logged profile is synced with the vehicle.
