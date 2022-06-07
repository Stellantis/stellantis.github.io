---
name: navigation.remainingTravelTime
privacy: Public
type:
  - get
  - subscribe
domain: navigation
params: none
data:
  - name: remainingTravelTime
    description: >-
      Remaining time (in second) before arrival in current navigation guidance
      within the infotainment system. `null` if no guidance active.
    type: int
    unit-value: seconds
    example: '2438'
short: >-
  This API allows to work with the remaining travel time of the navigation
  feature within the infotainment system.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

