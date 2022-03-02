---
name: engine.batteryTripMileage
privacy: Geolocation Private
domain: engine
type:
  - get
  - subscribe
params: none
data:
  - name: batteryTripMileage
    description: Percentage of the current trip spent with electrical energy.
    type: int
    unit-value: '%'
    example: 25
short: >-
  This API allows to know the Battery trip mileage in % of the current trip.
  **Example:** for a 100km trip, if 34km is done with electric energy, the API
  will return **34**.
---

