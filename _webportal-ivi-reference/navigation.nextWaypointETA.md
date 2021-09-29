---
privacy: Public
type:
  - get
  - subscribe
name: navigation.nextWaypointETA
domain: navigation
data:
  - name: nextWaypointETA
    type: integer
    description: Estimate Time of Arrival (ETA) at next waypoint in seconds.
    unit-value: seconds
    example: 3952
short: This API allows to retrieve next waypoint Estimate Time of Arrival (ETA).
---

If no guidance returns: `"status": 403, "statusText": "Forbidden"`.
