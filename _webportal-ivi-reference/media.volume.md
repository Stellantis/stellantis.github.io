---
privacy: Full Private
type:
  - get
  - set
  - subscribe
name: media.volume
domain: media
dataset: none
data:
  - name: volume
    description: Value of the volume level.
    type: int
    unit-value: n/a
    example: 2
paramsset:
  - name: volumeStep
    description: Increment or decrement current volume.
    type: number
    unit-value:
      - '1: ''increment'''
      - '-1: ''decrement'''
    example: 1
    required: true
  - name: feedback
    description: Feedback icon to display on the HMI.
    type: int
    unit-value:
      - '0: Do not display volume feedback icon.'
      - '1: Display the feedback icon on the cluster display.'
      - '2: Display the feedback icon on the central screen display.'
    example: 1
    required: true
short: This API allows work with volume level.
---

