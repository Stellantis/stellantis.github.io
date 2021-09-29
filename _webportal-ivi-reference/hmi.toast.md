---
privacy: Full Private
type:
  - set
  - subscribe
name: HMI.toast
domain: HMI
paramsset:
  - name: appId
    description: ID of your App.
    type: string
    unit-value: n/a
    example: com.example.app
    required: true
  - name: title
    description: Toast's text content.
    type: string
    unit-value: n/a
    example: Your appointment with your favorite garage has been confirmed.
    required: true
dataset:
  - name: dialogId
    description: ID of the toast you just set-up. This ID is also returned in *Susbscribe*.
    type: int
    unit-value: n/a
    example: 42
  - name: dialogOpenError
    description: Error code related to the toast.
    type: int
    unit-value: n/a
    example: 0
paramssubscribe: none
datasubscribe:
  - name: dialogId
    description: ID of the toast being tiggered. This ID is also returned in *Set*.
    type: int
    unit-value: n/a
    example: 42
  - name: eventType
    description: Event related to the triggering of this toast.
    type: Enum of strings
    unit-value:
      - closeTimeout
      - closeTouch
    example: closeTimeout
short: This API allows to create and interact with the HMI *Toast* element.
---

<img src="{{site.baseurl}}/assets/images/webportal-v2-toast.png" alt="webportal-v2-toast" style="width: 400px">
