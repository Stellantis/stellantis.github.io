---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.postMessage
domain: WebPortal
type: api
---

This API allows to send and receive messages between WebPortal Applications.

### Send A Message

The sending App, should 

Parameter | Type | Description | Required
----|----|----|----
`type` | `String` | Name of the API `WebPortal.postMessage` | Yes
`appId` | `String` | Identifier of the Application to contact. | Yes
`content` | `Any` | The content of the message. It could be *Boolean, Int, String, Object* etc. | Yes

The receiving App should [listen to incoming messages](#receive-a-message).

```javascript
//send message to another App
window.parent.postMessage({
  type: 'WebPortal.postMessage',
  appId: "<appToContact>",
  content: "Hello App!"
}, '*');
```

### Receive a Message

Event message received when another App [post a message](#send-a-message) to yours. This code allows listening to `WebPortal.postMessage`.

```javascript
window.addEventListener("message", function(event){

  if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

    var data = event.data;
    var type = event.data.type;

    switch(type){  
    case "WebPortal.postMessage":
      // When the message has been received
      console.log("The content of the message recevied is: " + event.data.content);
      break;
    }
  }
});
```