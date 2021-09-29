---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.notificationActivity
domain: HMI
paramsset:
  - name: action
    type: Enum of strings
    example: create
    description: Action to perform.
    unit-value:
      - create
      - close
    required: true
  - name: notificationId
    description: >-
      ID of the notification Activity UI element you want to close. This ID is
      return when creating the element. It's the only parameter required along
      with action if `action=close`.
    type: int
    unit-value: n/a
    example: 42
    required: true
  - name: title
    type: string
    example: Car maintenance reminder
    description: Name of the notification. If `action=create`.
    unit-value: n/a
    required: true
  - name: text
    type: string
    example: Your appointment with your favorite garage has been confirmed.
    description: Text of the notification.  If `action=create`.
    unit-value: n/a
    required: true
  - name: timestamp
    type: string
    example: 573041587
    description: Notification timestamp. If `action=create`.
    unit-value: unix timestamp
    required: true
  - name: button1Icon
    type: string
    example: 'file://assets/icons/play.png'
    description: 'File, data or URI of the button icon. If `action=create`.'
    unit-value: n/a
    required: true
  - name: button2Icon
    type: string
    example: 'data:image/png;base64,...'
    description: 'File, data or URI of the button icon. If `action=create`.'
    unit-value: n/a
    required: false
  - name: button3Icon
    type: string
    example: 'data:image/png;base64,...'
    description: 'File, data or URI of the button icon. If `action=create`.'
    unit-value: n/a
    required: false
  - name: userData
    type: Object
    unit-value: n/a
    required: false
    description: >-
      Custom parameters of any types available when notification activity is
      triggered.
    example:
      custom: payload
      myObj:
        a: hello
        b:
          - 1
          - 2
          - 3
dataset:
  - name: notificationId
    description: >-
      ID of the notificationActivity UI element you just set-up. This ID is also
      returned in *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
paramssubscribe:
  - name: notificationId
    description: >-
      ID of the notificationActivity UI element you want to subscribe to. If not
      provided will subscribe to every notifications.
    type: int
    unit-value: n/a
    example: 42
    required: false
datasubscribe:
  - name: notificationId
    description: >-
      ID of the notificationActivity UI element being triggered. This ID is also
      returned in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: event
    description: >-
      Notification event related to the triggering of this notificationActivity
      UI element.
    type: Enum of strings
    unit-value:
      - button1
      - button2
      - button3
      - content
    example: button1
  - name: userData
    type: Object
    unit-value: n/a
    description: Custom parameters provided in **Set**.
    example:
      custom: payload
      myObj:
        a: hello
        b:
          - 1
          - 2
          - 3
short: >-
  This API allows to interact with the HMI *notificationActivity UI element*
  element.
---

<!-- <img src="{{site.baseurl}}/assets/images/webportal-v2-toast.png" alt="webportal-v2-toast" style="width: 400px"> -->


