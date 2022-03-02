---
privacy: Geolocation Private
type:
  - set
  - subscribe
name: MQTT.publish
domain: MQTT
paramsset:
  - name: message
    type: any
    description: Data message to send.
    unit-value: n/a
    example: my data
    required: true
  - name: subtopic
    type: string
    description: Name of the subtopic.
    unit-value: n/a
    example: SectionA
    required: false
dataset:
  - name: messageId
    type: int
    unit-value: n/a
    example: 42
    description: Identifier of the message sent.
datasubscribe:
  - name: messageId
    type: int
    unit-value: n/a
    example: 42
    description: Identifier of the message sent.
  - name: status
    type: string
    unit-value:
      - delivered
      - notDelivered
    example: delivered
    description: Delivery status.
short: This API allows publish data to your offboard system.
---

