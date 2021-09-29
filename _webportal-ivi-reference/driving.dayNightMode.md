---
name: driving.dayNightMode
privacy: Full Private
type:
  - get
  - subscribe
domain: driving
params: none
data:
  - name: DayNightMode
    description: Day or Night mode of the HMI.
    type: int
    unit-value:
      - '0: Day mode (default value)'
      - '1: Night mode'
    example: 1
short: This API allows to know the status of the Day/Night mode parameter.
---

