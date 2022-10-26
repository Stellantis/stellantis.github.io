---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.OverflowPopup
domain: WebPortal
supported: #todo
type: event
---

### WebPortal.OverflowPopup

| **Description** | This event is triggered when the popup queue contains 5 popp and a new popup try to be added.
| **Type**| `event` message. |

## Example

```js
window.addEventListener("message", function(event){
  
  if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

    var data = event.data;
    var type = event.data.type;

    switch(type){

      // Popup Queue Exceeded
      case "WebPortal.OverflowPopup":
        console.log("The Popup queue exceed max of 5 popups.");
        break;

    }
  }
});
```

### See Also

- Method **Create a WebPortal Notification**: [WebPortal.notification.new]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-new.html#article)
- Method **Create a Classic Popup**: [WebPortal.popup.open]({{site.baseurl}}/webportal/v1/api-reference/webportal-popup-open#article)