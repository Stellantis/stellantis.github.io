---
name: driving.drivingState
privacy: Full Private
type:
  - get
  - subscribe
domain: driving
params: none
data:
  - name: drivingState
    description: >-
      Driver distraction is set to `true` when the driver is able to use the
      infotainment system and to `false` otherwise.
    type: boolean
    unit-value: n/a
    example: true
short: This API allows to work with driver distraction status.
---

You can retrieve driver distraction disclaimer text with [this API]({{site.baseurl}}/webportal/v2/reference/list/#api-HMI-driverDistractionText).

**Note:** driverDistraction is set to `true` under 5 km/h and to `false` upon 5km/h.

**Warning:** When driverDistraction is set to `false`: 
- the app must not display heavy animated elements. 
- the app must not include games or other features outside the intended app types.
