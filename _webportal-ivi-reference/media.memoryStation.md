---
privacy: Full Private
type:
  - set
name: media.memoryStation
domain: media
params:
  - name: memoryNumber
    description: 'Number of the preset to change, from 0 to 14.'
    type: int
    unit-value: 0 to 14
    example: 12
    required: true
  - name: sid
    description: Retrieve SID in media.stationsList.
    type: int
    unit-value: n/a
    example: 134
    required: true
short: This API allows to change the value of a radio preset.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

