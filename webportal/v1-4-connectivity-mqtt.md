---
layout: doc-article
permalink: /webportal/v1/connectivity/mqtt/
section: webportal
subsection: v1
categorie: Connectivity
title: MQTT
description: "MQTT tutorial."
redirect_from:
    - /webportal/v1/connectivity/
---

# MQTT TOPIC

To communicate with your application you need to indicate whom to publish your message to.

Your **publishing** topic looks as follows:

`psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN}/`  

What's more, your **subscribing** topic looks like this:

`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`  

Where:
- UID is your login
- VIN is the Vehicle ID Number  corresponding to the vehicle the message is destined to.

# MQTT CONNECTION

## WHAT YOU NEED BEFORE BEGINNING

- Your SSL client certificate to secure the connection
- Your credentials: login (UID) and MQTT password

They will be created by PSA and given to you.

## WHAT YOU NEED TO DO

You have to connect to the environment corresponding to your case by using `MQTTClient.connect()`.

2 different environments exist:

- Preprod: *iot-partners-preprod.mpsa.com:8886*
- Production: *iot-partners-mpsa.com:8886*

#### EXAMPLE
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
