---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.mute
domain: media
paramsset:
  - name: feedback
    description: Feedback icon to display on the HMI.
    type: int
    unit-value:
      - '0: Do not display mute feedback icon.'
      - '1: Display the feedback icon on the cluster display.'
      - '2: Display the feedback icon on the central screen display.'
    example: 1
    required: true
dataset: none
data:
  - name: mute
    description: Value of the mute setting
    type: boolean
    unit-value:
      - 'true: mute is activated'
      - 'false: mute is desactivated'
    example: false
short: This API allows to work with the mute setting.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

