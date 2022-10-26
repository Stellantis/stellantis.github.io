---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.MQTT.publish
domain: WebPortal
type: api
---

### `WebPortal.MQTT.publish`

| **Description** | Publish in a MQTT topic.

Parameter | Type | Description | Required
----|----|----|----
`type` | `String` | Name of the API `WebPortal.MQTT.publish` | Yes
`payload` | `String` | Content of the MQTT message | Yes
`subtopic` | `String` | Path of the subtopic to publish in. Leading '/' not mandatory. | No

Response Events:
- [Webportal.MQTT.evt.messageDelivered]({{site.baseurl}}/webportal/v1/api-reference/webportal-mqtt-evt-messagedelivered#article)
- [Webportal.MQTT.evt.messageNotDelivered]({{site.baseurl}}/webportal/v1/api-reference/webportal-mqtt-evt-messagenotdelivered#article)
- [Webportal.MQTT.evt.messagereceived]({{site.baseurl}}/webportal/v1/api-reference/webportal-mqtt-evt-messagereceived#article)

#### Example

```javascript
window.parent.postMessage(
{
  'type':'WebPortal.MQTT.publish',
  'payload':'Hello World'
  'subtopic':'my/sub/topic',
}
, '*');
```