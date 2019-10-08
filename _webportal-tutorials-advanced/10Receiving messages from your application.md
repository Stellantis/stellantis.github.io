---
type: tutorial advanced
---

# Receiving a message from your Application

#### What you need

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal/tutorial-advanced/#connecting-to-the-mqtt-broker)

- Your [MQTT Subscription Topic]({{ site.baseurl }}/webportal/tutorial-advanced/#selecting-your-mqtt-publishing-topic) looking as follows : `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN|#}/` 

### Receiving an Applicative Message

The Application generates a message that is encapsulated inside the *content* field then sent to the Applicaton server through the PSA Messaging System.

#### Structure of MQTT Message
```javascript
{
	/**
	 * Arbitrary data from your application
	 * @type {object|string}
	 */
	"content": {
		"type": "action",
		"action": "doSomething",
		"params": {
			"arg1": 42,
			"arg2": "a string",
			"arg3": [1, 2, 3, 4],
			"arg4": {"firstname": "John", "lastname": "Doe"}
		}
	}
}
```

#### Handling messages

```javascript
const mqttSubscribeTopic = `psa/OVIPPartners-Dev/to/uid/${mqttConfig.username}/opa/#`;
mqttClient.subscribe(mqttSubscribeTopic);

mqttClient.onMessage(function(topic, payload) {
	const myAppMessage = JSON.parse(payload).content;
	MyAppDomain.processMessage(myAppMessage);
});
```

>**Note**: the max size for a MQTT message is 128 Kio
