---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.actionListDialog
domain: HMI
paramsset:
  - name: title
    type: string
    description: Name of the actionListDialog icon.
    unit-value: n/a
    example: My actionListDialog.
    required: true
  - name: text
    type: string
    description: Name of the actionListDialog icon.
    unit-value: n/a
    example: 'This actionListDialog allow to do many things:'
    required: true
  - name: icon
    type: string
    description: URI (filesystem or image data) of the actionListDialog icon.
    unit-value: n/a
    example: 'file:///vdappdata/HMI/...'
    required: true
  - name: actionList
    description: ' '
    type: Array of Objects
    required: true
    fields:
      - name: id
        type: string
        description: Id of this action.
        unit-value: n/a
        example: timestamp
        required: true
      - name: title
        type: string
        description: Name of this action.
        unit-value: n/a
        example: First Action
        required: true
      - name: text
        type: string
        description: Text of this action.
        unit-value: n/a
        example: This action allowws to do something.
        required: true
      - name: icon
        type: string
        description: URI (filesystem or image data) of this action icon.
        unit-value: n/a
        example: 'data:image/png;base64,...'
        required: true
paramsset_example: |-
  {
      "id": "abc",
      "title": "....",
      "text": "...",
      "title": "Car maintenance reminder",
      "text": "Your appointment with your favorite garage has been confirmed.",
      "actionList": [
          {"id": "def", "title": "....", "text": "...", "icon": "data:image/png;base64,..."},
          {"id": "ghi", "title": "....", "text": "...", "icon": "data:image/png;base64,..."},
      ]
    }
dataset:
  - name: dialogId
    description: >-
      ID of the actionListDialog you just set-up. This ID is also returned in
      *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
paramssubscribe:
  - name: dialogId
    description: >-
      ID of the actionListDialog you want to subscribe to. If not provided will
      subscribe to every dialogs.
    type: int
    unit-value: n/a
    example: 42
    required: false
datasubscribe:
  - name: dialogId
    description: >-
      ID of the actionListDialog being triggered. This ID is also returned in
      *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: eventType
    description: Dialog event related to the triggering of this actionListDialog.
    type: Enum of strings
    unit-value:
      - created
      - opened
      - closed
    example: created
  - name: target (dialog)
    description: .
    type: String
    unit-value: n/a
    example: dialog
  - name: eventType
    description: Button event related to the triggering of this actionListDialog.
    type: Enum of strings
    unit-value:
      - pressed
    example: pressed
  - name: target (button)
    description: .
    type: String
    unit-value: n/a
    example: listItem
  - name: selectedIndex
    description: Index of the selected item (zero-based).
    type: int
    unit-value: n/a
    example: '2'
  - name: selectedItem
    description: Value of selected item's id attribute.
    type: String
    unit-value: n/a
    example: ghi
short: This API allows to interact with the HMI *actionListDialog* element.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

<!-- <img src="{{site.baseurl}}/assets/images/webportal-v2-toast.png" alt="webportal-v2-toast" style="width: 400px"> -->
