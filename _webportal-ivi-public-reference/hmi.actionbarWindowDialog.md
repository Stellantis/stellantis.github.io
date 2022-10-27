---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.actionbarWindowDialog
domain: HMI
paramsset:
  - name: contentUrl
    type: string
    description: URI of the action bar window diaog page content.
    required: true
    unit-value: n/a
    example: 'https://content.com/dialog.html'
  - name: fullscreen
    description: Display fullscreen? Default `false`.
    required: false
    unit-value: n/a
    example: false
    type: boolean
  - name: primaryButton1Icon
    type: string
    description: Base 64 encoded URI of primary butto first icon.
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: primaryButton2Icon
    type: string
    description: Base 64 encoded URI of primary button second icon.
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: primaryButton3Icon
    type: string
    description: Base 64 encoded URI of primary button third icon.
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: secondaryButton1Icon
    description: Base 64 encoded URI of secondary button first icon.
    type: string
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: secondaryButton2Icon
    description: Base 64 encoded URI of secondary button second icon.
    type: string
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: secondaryButton3Icon
    type: string
    description: Base 64 encoded URI of secondary button third icon.
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: secondaryButton4Icon
    type: string
    description: Base 64 encoded URI of secondary button fourth icon.
    required: true
    unit-value: n/a
    example: aHR0cHM6Ly9jb250ZW50LmNvbS9kaWFsb2cuaHRtbA==
  - name: userData
    type: Object
    required: false
    description: >-
      Custom parameters of any types available when notification activity is
      triggered.
    unit-value: n/a
    example:
      custom: payload
      myObj:
        a: hello
        b:
          - 1
          - 2
          - 3
dataset:
  - name: dialogId
    description: >-
      ID of the actionbarWindowDialog you just set-up. This ID is also returned
      in *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
  - name: dialogOpenError
    description: Error code related to the toast.
    type: int
    unit-value:
      - '0: Dialog successfully openeded.'
      - '1: Failed, unspecified error happened.'
      - '2: Failed, invalid parameters were passed.'
      - '3: Failed, higher priority panel is currently shown on the screen.'
      - '4: Failed, discarded because incorrect specific conditions.'
    example: 0
paramssubscribe:
  - name: dialogId
    description: >-
      ID of the actionbarWindowDialog you want to subscribe. If not provided
      will subscribe to every dialogs.
    type: int
    unit-value: n/a
    example: 42
    required: false
datasubscribe:
  - name: dialogId
    description: >-
      ID of the actionbarWindowDialog being triggered. This ID is also returned
      in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: eventType (button)
    description: Button related to the triggering of this actionbarWindowDialog.
    type: Enum of strings
    unit-value:
      - primaryButton1
      - primaryButton2
      - primaryButton3
      - secondaryButton1
      - secondaryButton2
      - secondaryButton3
      - secondaryButton4
    example: primaryButton1
  - name: target (button)
    description: .
    type: String
    unit-value: n/a
    example: dialog
  - name: eventType (dialog)
    description: Event related to the triggering of this actionbarWindowDialog.
    type: Enum of strings
    unit-value:
      - open
      - close
    example: close
  - name: target (dialog)
    description: .
    type: String
    unit-value: n/a
    example: dialog
short: >-
  This API allows to create and interact with the HMI *actionbarWindowDialog*
  element.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

<!-- <img src="{{site.baseurl}}/assets/images/webportal-v2-toast.png" alt="webportal-v2-toast" style="width: 400px"> -->
