---
type: tutorial advanced
---

## SEND MESSAGE TO APP

#### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal/tutorial-advanced/#connecting-to-the-mqtt-broker)

- Your [MQTT Publishing Topic]({{ site.baseurl }}/webportal/tutorial-advanced/#selecting-your-mqtt-publishing-topic) looking as follows:
	`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

#### SENDING AN APPLICATIVE MESSAGE

The Applicative message lets you send data to your application.

#### STRUCTURE OF MQTT MESSAGE
```javascript
{
	/**
	 * Your application identifier (provided by PSA)
	 * @type {string}
	 */
	"idApp": "yourAppIdentifier",

	/**
	 * Flag to allow the WebPortal to recognize the message type
	 * @type {boolean}
	 */
	"popup": false,

	/**
	 * Arbitrary data for your application
	 * @type {object}
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

#### HANDLING MESSAGE

```javascript
var targetVin = "0123456789ABCDEFG";
var mqttPublishTopic = `psa/OVIPPartners-Dev/from/uid/${mqttConfig.username}/opa/${targetVin}`;
var payload = {
	"idApp": "MY_APP_ID",
	"popup": false,
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
};

var mqttMessage = new MQTTMessage();
mqttMessage.payload = JSON.stringify(payload);
mqttMessage.qos = 0;

mqttClient.publish(mqttPublishTopic, mqttMessage);
```

>**Note**:
> The QOS 0, QOS 1 and QOS 2 connections will all be downgraded to QOS 0. This means that if acknowledgment of a message is needed then this functionality must be implemented directly by the application.

>**Note**: the max size for a MQTT message is 128 Kio