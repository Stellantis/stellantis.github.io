---
name: HMI.dialogWindow
privacy: Full Private
type:
  - set
  - subscribe
domain: HMI
paramsset:
  - name: title
    description: Title of the message.
    type: string
    unit-value: n/a
    example: Warning
    required: true
  - name: secondaryTitle
    description: Subtitle of the message.
    type: string
    unit-value: n/a
    example: Your tire pressure is down
    required: false
  - name: content
    description: Content of the message.
    type: string
    unit-value: n/a
    example: >-
      You should fix your tires pressure in order to maintain your safety and
      your vehicle durability.
    required: true
  - name: contentIcon
    description: Url of an icon displayed with the content of the message.
    type: string
    unit-value: n/a
    example: 'data:image/jpg,base64;...'
    required: true
  - name: button1Label
    description: Text displayed on button 1.
    type: string
    unit-value: n/a
    example: Call garage
    required: true
  - name: button2Label
    description: Text displayed on button 2.
    type: string
    unit-value: n/a
    example: Close
    required: false
  - name: button3Label
    description: Text displayed on button 3.
    type: string
    unit-value: n/a
    example: Nav to closest gas station
    required: false
  - name: button4Label
    description: Text displayed on button 4.
    type: string
    unit-value: n/a
    example: Panic!
    required: false
dataset:
  - name: dialogId
    description: >-
      ID of the dialog window you just set-up. This ID is also returned in
      *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
dataset_example: '{ "dialogId": 42 }'
paramssubscribe: none
datasubscribe:
  - name: dialogId
    description: ID of the dialog beaign triggered. This ID is also returned in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: eventType
    description: Type of interaction choosen by the user.
    type: Enum of strings
    unit-value:
      - buttonPressed
      - closed
    example: buttonPressed
  - name: target
    description: >-
      Retrieve which button was clicked by the user.*This field is displayed if
      `'eventType': 'buttonPressed'`*.
    type: Enum of strings
    unit-value:
      - button1
      - button2
      - button3
      - button4
    example: button2
short: >-
  This API allows to use the HMI *dialog window* element (popup) in order to
  send a message to the user.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---
<img src="{{site.baseurl}}/assets/images/webportal-v2-dialog-window.png" alt="webportal-v2-dialog-window" style="width: 400px">
