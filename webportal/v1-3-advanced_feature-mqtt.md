---
layout: doc-article
permalink: /webportal/v1/advanced-features/mqtt/
section: webportal
subsection: v1
categorie: Advanced Features
title: MQTT Messages
description: "This tutorial details the MQTT feature of Webportal in order to interact with back-end."
redirect_from:
    - /webportal/v1/connectivity/
    - /webportal/v1/connectivity/mqtt/
    - /webportal/v1/connectivity/message/
    - /webportal/v1/connectivity/notification/
---

Using WebPortal build in APIs you have access to [MQTT protocol](http://mosquitto.org/man/mqtt-7.html) has a queue message feature.

![WebPortal Schema]({{ site.baseurl }}/assets/images/webportal-nac-mqtt-schema.svg)

## Server Configuration 

#### MQTT Topic

To communicate with your application you need to configure MQTT topics:
- **Publishing** topic: `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN}/`
- **Subscribing** topic: `psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

Where **{UID}** is your login & **{VIN}** is the Vehicle ID Number corresponding to the vehicle the message is published/received.

#### MQTT Connection

##### What you need before Beginning

- Your SSL client certificate to secure the connection
- Your credentials: login (UID) and MQTT password

They will be created by Stellantis and given to you.

##### What you need to do

You have to connect to the environment corresponding to your case by using `MQTTClient.connect()`.

2 different environments exist:

- Preprod: *iot-partners-preprod.mpsa.com:8886*
- Production: *iot-partners-mpsa.com:8886*

##### Example

```javascript
const mqttConfig = {
  "uri": "iot-partners-preprod.mpsa.com:8886",
  "sslClientCert": "./mqtt.client.crt",
  "username": "MY_UID",
  "password": "MY_PASSWORD",
}

var mqttClient = new MQTTClient(mqttConfig);
mqttClient.connect();
```

You are now connected to the MQTT Broker, you can start sending messages to your application.


## From App to Server: Send

##### What you Need

- Server's [MQTT Subscribing Topic](#mqtt-topic) looking as follows : `psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/` 
- [Server connected to the MQTT Broker](#mqtt-connection)

##### Sending a Message

The Application generates a message that is encapsulated inside the *content* field then sent to the WebPortal before being forwarded to the Application server through the Stellantis Messaging System.

To send a message you can do the following:

```javascript
window.parent.postMessage({
    'type' : 'WebPortal.onSendNotificationRequest',
    'value' : yourDataPayload
}, '*');
```

>**Note**: the max size for a MQTT message is 128 Kio

>**Note 2:** If your app requires to automatically retry sending a message then you should directly implement it as this functionality does not exist by default in the WebPortal.


## From Server to App: Receive

When receiving data from your server, if:

- The NAC module is active
- Your application is launched (not in background)

Then we are in the **Foreground** case.

If at least one of those 2 conditions is not fulfilled then we are in the **Background** case.

#### Foreground

When both WebPortal and your application are running, your messages are transmitted directly by WebPortal using the HTML5 API `window.postMessage()`

To retrieve your messages you have to implement the `"message"` event handler and filter on the type `WebPortal.onCurrentNotificationReceived`


**Foreground Implementation example:**
```javascript
window.addEventListener('message', function(messageEvent) {
  var webportalMessage = messageEvent.data;
  
  if (webportalMessage.type === 'WebPortal.onCurrentNotificationReceived') {
      var mqttMessagePayload = webportalMessage.value;
      var appServerMessage = mqttMessagePayload.content;
  
      // Use your own application message handler
      myHandleServerMessage(appServerMessage);
  }
});
```

#### Background

When WebPortal is in background or your application isn't running, WebPortal keeps in cache memory the last 10 data messages sent to your application.

To retrieve those pending messages you have to use the `WebPortal.getPendingNotifications()` method that is directly injected in your application's `window` object and so can be called directly.

In order to retrieve the messages over time, you can call this method:

- at fixed interval, using `setTimeout` or `setInterval`
- when detecting the following WebPortal events being triggered:
  + `WebPortal.onApplicationShow`  
  + `WebPortal.onApplicationHide`


**Background Implementation example:**

```javascript
/**
 * Get the buffered messages for application 'appId'
 * and clean/reset the WebPortal's buffer
 * 
 * @param {string} Application id
 * @return {array} List of buffered MQTT messages or empty array if none
 */
WebPortal.getPendingNotifications = function(appId) {};

const MY_APP_ID = 'some_id';

(function processWebportalPendingNotifications() {
  var pendingNotifications = WebPortal.getPendingNotifications(MY_APP_ID);
  for (var i = 0; i < pendingNotifications.length; ++i) {
    var mqttMessage = pendingNotifications[i];

    /*
    mqttMessage = {
      "content": {
        // application data here
      }
    }
    */

    //Use your own function to process the message
    processMqttMessage(mqttMessage);
  }

  setTimeout(processWebportalPendingNotifications, 5000);
})();
```

## From Server to App: Send

##### What you Need

- Server's [MQTT Publishing Topic](#mqtt-topic) looking as follows : `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN}/` 
- [Being connected to the MQTT Broker](#mqtt-connection)

##### Sending a Message

The Applicative message lets you send data to your application.

##### Structure of MQTT Message
```javascript
{
  /**
   * Your application identifier (provided by Stellantis)
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

##### Publishing the Message

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


## From App to Server: Receive

##### What you Need

- Server's [MQTT Publishing Topic](#mqtt-topic) looking as follows : `psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN}/` 
- [Being connected to the MQTT Broker](#mqtt-connection)

##### Receiving an App Message

The Application generates a message that is encapsulated inside the *content* field then sent to the Application server through the Stellantis Messaging System.

##### Structure of MQTT Message

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

##### Handling Messages

```javascript
const mqttSubscribeTopic = `psa/OVIPPartners-Dev/to/uid/${mqttConfig.username}/opa/#`;
mqttClient.subscribe(mqttSubscribeTopic);

mqttClient.onMessage(function(topic, payload) {
  const myAppMessage = JSON.parse(payload).content;
  MyAppDomain.processMessage(myAppMessage);
});
```

>**Note**: the max size for a MQTT message is 128 Kio