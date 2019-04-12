---
title: Sending message to application
layout: page2
---

# Sending a message (data) to your Application

#### What you need

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal_TutorialAdvanced/#connecting-to-the-mqtt-broker)

- Your [MQTT Publishing Topic]({{ site.baseurl }}/webportal_TutorialAdvanced/#selecting-your-mqtt-publishing-topic) looking as follows :
	`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

#### Sending an Applicative Message

The Applicative message lets you send data to your application.

#### Structure of MQTT Message
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

#### Handling message

```javascript
let targetVin = "0123456789ABCDEFG";
let mqttPublishTopic = `psa/OVIPPartners-Dev/from/uid/${mqttConfig.username}/opa/${targetVin}`;
let payload = {
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

let mqttMessage = new MQTTMessage();
mqttMessage.payload = JSON.stringify(payload);
mqttMessage.qos = 0;

mqttClient.publish(mqttPublishTopic, mqttMessage);
```

>**Note**:
> The QOS 0, QOS 1 and QOS 2 connections will all be downgraded to QOS 0. This means that if acknowledgement of a message is needed then this functionnality must be implemented directly by the application.

>**Note**: the max size for a MQTT message is 128 Kio