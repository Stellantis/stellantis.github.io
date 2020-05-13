---
type: tutorial advanced
---

## RECEIVING MESSAGE

#### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{site.baseurl}}/webportal/tutorial-advanced/#mqtt-connection)
- Your [MQTT Publishing Topic]({{site.baseurl}}/webportal/tutorial-advanced/#mqtt-topic) looking as follows: `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN|#}/` 

### RECEIVING AN APPLICATIVE MESSAGE

The Application generates a message that is encapsulated inside the *content* field then sent to the Application server through the PSA Messaging System.

#### STRUCTURE OF MQTT MESSAGE
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

#### HANDLING MESSAGES

```javascript
const mqttSubscribeTopic = `psa/OVIPPartners-Dev/to/uid/${mqttConfig.username}/opa/#`;
mqttClient.subscribe(mqttSubscribeTopic);

mqttClient.onMessage(function(topic, payload) {
	const myAppMessage = JSON.parse(payload).content;
	MyAppDomain.processMessage(myAppMessage);
});
```

>**Note**: the max size for a MQTT message is 128 Kio
