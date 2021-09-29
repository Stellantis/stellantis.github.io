---
name: engine.engineStatus
privacy: Geolocation Private
domain: engine
type:
  - get
  - subscribe
params: none
data:
  - name: batteryAutonomy
    description: Current status of the engine.
    type: int
    unit-value:
      - 0 = Engine not running
      - 1 = Starting
      - 2 = Engine running
      - 3 = Engine stopped in stop phase
    example: 1
short: This API allows to know the current status of the engine.
---

