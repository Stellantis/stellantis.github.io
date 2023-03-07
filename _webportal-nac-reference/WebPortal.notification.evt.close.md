---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.notification.evt.close
domain: WebPortal
supported: #todo
type: event
---

### WebPortal.notification.evt.close

| **Description** | This event is triggered when the user clicks on the **Delete Button** of a Notification Center (NC) Notification. Check out the [dedicated tutorial]({{site.baseurl}}/webportal/v1/interactivity/notification/#article).
| **Type**| `event` message. |

| **Output Data** | **Type** | **Description** | 
|-----|-----|-----|-----|
|**type**|*String*|`WebPortal.notification.evt.close`|
|**notifId**|*String*|Id of the notification|

## Example

```js
window.addEventListener("message", function(event){
  
  if (typeof event.data !== 'undefined' && typeof event.data.type !== 'undefined' ){

    var data = event.data;
    var type = event.data.type;

    switch(type){
      
      // When the user delete a NC Notification
      case "WebPortal.notification.evt.close":
        console.log("[WebPortal Notification] The user selected the `delete` button of the NC notification");
        console.log("[WebPortal Notification] ID:" + data.notifId +);
        break;

    }
  }
});
```

### See Also

- Method **Create a WebPortal Notification**: [WebPortal.notification.new]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-new.html#article)
- Event **Creation Success**: [WebPortal.notification.evt.created]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-evt-created.html#article)
- Event **Creation Error**: [WebPortal.notification.evt.error]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-evt-error.html#article)
- Event **Prompt Overflow**: [WebPortal.OverflowPopup]({{site.baseurl}}/webportal/v1/api-reference/webportal-overflowpopup#article)
- Event **NC Notification Opened**: [WebPortal.notification.show]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-show.html#article)
- Event **NC Notifcation: Open App button** clicked: [WebPortal.notification.evt.click]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-evt-click#article)
- Event **NC Notification: Delete button** clicked: [WebPortal.notification.event.close]({{site.baseurl}}/webportal/v1/api-reference/webportal-notification-evt-close.html#article)