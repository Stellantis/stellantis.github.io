---
name: settings.audio.fader
privacy: Full Private
type:
  - get
  - set
  - subscribe
domain: settings
data:
  - name: settings.audio.fader
    description: ' '
    type: int
    unit-value: ' '
    example: null
paramsset:
  - name: settings.audio.fader
    description: Audio fader setting.
    type: int
    unit-value:
      - 0 = centered
      - '[-7, -1] = offset front'
      - '[1, 7] = offset back'
    example: 3
    required: true
dataset: none
short: This API allows to manage vehicle audio fader setting.
---

