---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.infotip
domain: HMI
paramsset:
  - name: text
    type: string
    description: Text of the info tip.
    unit-value: n/a
    example: |-
      This is an InfoTipGroup with multiple
      lines of text because sometimes we
      need to have more explanation.
    required: true
dataset:
  - name: dialogId
    description: >-
      ID of the infoTip you just set-up. This ID is also returned in
      *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
datasubscribe:
  - name: dialogId
    description: ID of the infoTip being triggered. This ID is also returned in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: eventType
    description: Dialog event related to the triggering of this infoTip.
    type: Enum of strings
    unit-value:
      - open
      - close
    example: created
  - name: target
    description: ' '
    type: String
    unit-value: ' '
    example: dialog
short: This API allows to interact with the HMI *infoTip* element.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

<!-- <img src="{{site.baseurl}}/assets/images/webportal-v2-toast.png" alt="webportal-v2-toast" style="width: 400px"> -->
