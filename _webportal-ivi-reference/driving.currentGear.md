---
name: driving.currentGear
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: driving
data:
  - name: currentGear
    description: Value of the currently engaged gear.
    type: int
    unit-value:
      - '0: ''P'''
      - '1: ''R'''
      - '2: ''N'''
      - '3: ''D'''
      - '4: ''6th gear'''
      - '5: ''5th gear'''
      - '6: ''4th gear'''
      - '7: ''3rd gear'''
      - '8: ''2nd gear'''
      - '9: ''1st gear'''
      - '10: ''Invalid'''
      - '11: ''No gear to display'''
      - '12: ''7th gear'''
    example: '12'
short: This API allows to retrieve current gear engaged.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

This API is available starting software *20.60*.
