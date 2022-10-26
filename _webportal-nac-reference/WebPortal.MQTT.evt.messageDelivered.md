---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.MQTT.evt.messageDelivered
domain: WebPortal
type: event
---

Event triggered when the [MQTT message]({{site.baseurl}}/webportal/v1/api-reference/webportal-mqtt-publish#article) has been sucessfully delivered.

### Example

```javascript
window.addEventListener("message", function(event){

  if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

    var data = event.data;
    var type = event.data.type;

    switch(type){
      //When the MQTT message has been sucessfully delivered
      case "WebPortal.MQTT.evt.messageDelivered":
        console.log("The MQTT message has been sucessfully delivered");
        alert("The MQTT message has been sucessfully delivered");
        break;
    }
  }
});
```
