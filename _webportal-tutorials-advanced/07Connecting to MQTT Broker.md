---
type: tutorial advanced
---

# CONNECTING TO THE MQTT BROKER

### WHAT YOU NEED BEFORE BEGINNING

- Your SSL client certificate to secure the connexion
- Your credentials : login (UID) and MQTT password

They will be created by PSA and given to you.

### WHAT YOU NEED TO DO

You have to connect to the environment corresponding to your case by using `MQTTClient.connect()`.

2 different environments exist :

- Preprod : *iot-partners-preprod.mpsa.com:8886*
- Production : *iot-partners-mpsa.com:8886*

### EXAMPLE
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