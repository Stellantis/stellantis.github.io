---
type: tutorial advanced
---

# SENDING A MESSAGE TO YOUR SERVER

#### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal/tutorial-advanced/#connecting-to-the-mqtt-broker)

- Your [MQTT Subscription Topic]({{ site.baseurl }}/webportal/tutorial-advanced/#selecting-your-mqtt-publishing-topic) looking as follows : `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN|#}/` 

### SENDING A MESSAGE

The Application generates a message that is encapsulated inside the *content* field then sent to the WebPortal before being forwarded to the Application server through the PSA Messaging System.

To send a message you can do the following:

```javascript
window.parent.postMessage({
    'type' : 'WebPortal.onSendNotificationRequest',
    'value' : yourDataPayload
}, '*');
```

>**Note**: the max size for a MQTT message is 128 Kio
