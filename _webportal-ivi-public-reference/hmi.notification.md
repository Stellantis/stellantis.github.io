---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.notification
domain: HMI
paramsset:
  - name: appId
    description: ID of your App.
    type: string
    unit-value: n/a
    example: com.example.app
    required: true
  - name: title
    description: Notification title.
    type: string
    unit-value: n/a
    example: Car maitenance reminder
    required: true
  - name: text
    description: Notification text.
    type: string
    unit-value: n/a
    example: Your appointment with your favorite garage has been confirmed.
    required: true
  - name: timestamp
    description: Timestamp to display for this notification.
    type: string
    unit-value: regular unix timestamp
    example: 1573041587
    required: true
  - name: userData.cutsom
    description: Custom field for user data.
    type: string
    unit-value: n/a
    example: payload
    required: true
  - name: userData.trackingParam
    description: TrackingParam field for user data.
    type: string
    unit-value: n/a
    example: af0426
    required: true
paramsset_example: |-
  {
      "appId": "com.mybrand.app",
      "title": "Car maintenance reminder",
      "text": "Your appointment with your favorite garage has been confirmed.",
      "timestamp": 1573041587,
      "userData": {
        "custom": "payload",
        "trackingParam": "af0426"
      },
    }
dataset:
  - name: notificationId
    description: >-
      ID of the notification you just set-up. This ID is also returned in
      *Susbscribe*. *`'notificationId': 0` means that the notification has not
      been created (see errorCode)*
    type: int
    unit-value: n/a
    example: 42
  - name: errorCode
    description: Error code related to the notification.
    type: int
    unit-value:
      - 'eOk = 0: ''dialog was opened'''
      - 'eFailure: ''unspecified error happened'''
      - 'eInvalidParameters: ''invalid parameters were passed'''
      - 'eDiscardedByPriority: ''higher priority panel is shown on the screen'''
      - 'eConditionsNotCorrect: ''discarded by check of specific conditions'''
    example: 0
dataset_example: |-
  {
      "notificationId": 42, 
      "errorCode": 0
    }
paramssubscribe: none
datasubscribe:
  - name: notificationId
    description: ID of the notification being tiggered. This ID is also returned in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: event
    description: Event related to the triggering of this notification.
    type: Enum of strings
    unit-value:
      - closed
    example: 42
  - name: userData.cutsom
    description: Custom field for user data.
    type: string
    unit-value: n/a
    example: payload
  - name: userData.trackingParam
    description: TrackingParam field for user data.
    type: string
    unit-value: n/a
    example: af0426
datasubscribe_example: |-
  {
      "notificationId": 42,
      "event": "closed",
        "userData": {
          "custom": "payload",
          "trackingParam": "af0426"
        }
    }
short: This API allows to create and interact with the HMI *notification center*.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

<img src="{{site.baseurl}}/assets/images/webportal-v2-notification.png" alt="webportal-v2-notification" style="width: 400px">
