---
privacy: Full Private
type:
  - get
  - set
name: media.playerControlsAvailability
domain: media
paramsget: none
dataget:
  - name: repeat
    description: >-
      Inform if the **repeat** function of the Media Player is available in this
      context or not.
    type: boolean
    unit-value: n/a
    example: false
  - name: shuffle
    description: >-
      Inform if the **shuffle** function of the Media Player is available in
      this context or not.
    type: boolean
    unit-value: n/a
    example: true
  - name: next
    description: >-
      Inform if the **next** function of the Media Player is available in this
      context or not.
    type: boolean
    unit-value: n/a
    example: true
  - name: prev
    description: >-
      Inform if the **previous** function of the Media Player is available in
      this context or not.
    type: boolean
    unit-value: n/a
    example: false
paramsset:
  - name: repeat
    description: Enable or disable **repeat** in Media Player.
    type: boolean
    unit-value: n/a
    example: false
    required: false
  - name: shuffle
    description: Enable or disable **shuffle** in Media Player.
    type: boolean
    unit-value: n/a
    example: true
    required: false
  - name: next
    description: Enable or disable **next** in Media Player.
    type: boolean
    unit-value: n/a
    example: true
    required: false
  - name: prev
    description: Enable or disable **previous** in Media Player.
    type: boolean
    unit-value: n/a
    example: false
    required: false
short: >-
  This API allows to check the availability of a Media Player function and
  enable or disable it's availability.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

