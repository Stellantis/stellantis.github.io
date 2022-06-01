---
name: settings.audio.balance
privacy: Full Private
type:
  - get
  - set
  - subscribe
domain: settings
data:
  - name: settings.audio.balance
    description: Audio balance setting.
    type: int
    unit-value:
      - 0 = centered
      - '[-7, -1] = offset left'
      - '[1, 7] = offset right'
    example: 3
dataset: none
paramsset:
  - name: settings.audio.balance
    description: Audio balance setting.
    type: int
    unit-value:
      - 0 = centered
      - '[-7, -1] = offset left'
      - '[1, 7] = offset right'
    example: 3
    required: true
short: This API allows to manage vehicle audio balance setting.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

