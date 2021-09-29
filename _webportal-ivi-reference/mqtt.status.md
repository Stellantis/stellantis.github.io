---
privacy: Full Private
type:
  - get
  - subscribe
name: MQTT.status
domain: MQTT
data: 
  - name: connection
    description: "MQTT connection status."
    type: Enum of strings
    unit-value: 
      - idle
      - connecting
      - connected
      - disconnected
    example: "connected"
short: >-
  This API allows to retrieve status information about the head-unit's MQTT
  client.
---

