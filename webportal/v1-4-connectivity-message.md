---
layout: doc-article
permalink: /webportal/v1/connectivity/message/
section: webportal
subsection: v1
categorie: Connectivity
title: Message
description: ""
---


# SEND MESSAGE TO SERVER

### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-connection)

- Your [MQTT Subscription Topic]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-topic) looking as follows : `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN|#}/` 

## SENDING A MESSAGE

The Application generates a message that is encapsulated inside the *content* field then sent to the WebPortal before being forwarded to the Application server through the PSA Messaging System.

To send a message you can do the following:

```javascript
window.parent.postMessage({
    'type' : 'WebPortal.onSendNotificationRequest',
    'value' : yourDataPayload
}, '*');
```

>**Note**: the max size for a MQTT message is 128 Kio


# SEND MESSAGE TO APP

### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal/v1/connectivity/mqtt/#mqtt-connection)

- Your [MQTT Publishing Topic]({{ site.baseurl }}/webportal/v1/connectivity/mqtt/#mqtt-topic) looking as follows:
	`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

## SENDING AN APPLICATIVE MESSAGE

The Applicative message lets you send data to your application.

## STRUCTURE OF MQTT MESSAGE
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

## HANDLING MESSAGE

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


# RECEIVING MESSAGE

### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-connection)
- Your [MQTT Publishing Topic]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-topic) looking as follows: `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN|#}/` 

## RECEIVING AN APPLICATIVE MESSAGE

The Application generates a message that is encapsulated inside the *content* field then sent to the Application server through the PSA Messaging System.

## STRUCTURE OF MQTT MESSAGE
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

## HANDLING MESSAGES

```javascript
const mqttSubscribeTopic = `psa/OVIPPartners-Dev/to/uid/${mqttConfig.username}/opa/#`;
mqttClient.subscribe(mqttSubscribeTopic);

mqttClient.onMessage(function(topic, payload) {
	const myAppMessage = JSON.parse(payload).content;
	MyAppDomain.processMessage(myAppMessage);
});
```

>**Note**: the max size for a MQTT message is 128 Kio
