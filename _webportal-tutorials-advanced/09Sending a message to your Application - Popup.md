---
type: tutorial advanced
---

# Sending a popup to your Application

#### What you need

- [Being connected to the MQTT Broker]({{ site.baseurl }}/webportal/tutorial-advanced/#connecting-to-the-mqtt-broker)

- Your [MQTT Publishing Topic]({{ site.baseurl }}/webportal/tutorial-advanced/#selecting-your-mqtt-publishing-topic) looking as follows :
	`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

#### Sending Notifications (Popup)

The Notification message or popup lets you display a modal window on the NAC in order to redirect the user's attention over a precise action or information

This notification will be displayed regardless of the current active module (Navigation, Media, ...) and thus isn't limited to the NAC's Web module.

The user is able to:

- Press the *OK* button
- Press the Return arrow to the top left (Cancelation)
- Not do anything, in which case the window will close automatically after 15 seconds (Also considered a cancelation)

The action done by the user is transferred to the embedded Application for it to react accordingly.


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
	"popup": true,

	/**
	 * Flag to allow the WebPortal to recognize the popup type, displaying the Ok button or not
	 * @type {boolean}
	 */
	"popupBtn": true,

	/**
	 * The text to be displayed in the modal popup
	 * @type {string}
	 */
	"popupText": "An example UTF-8 encoded string\nwith multiple lines\nPSA Group"

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

#### Handling Popup

```javascript
var targetVin = "0123456789ABCDEFG"; // VIN is an alphanumeric string of 17 characters
var mqttPublishTopic = `psa/OVIPPartners-Dev/from/uid/${mqttConfig.username}/opa/${targetVin}`;
var payload = {
	"idApp": "MY_APP_ID",
	"popup": true,
	"popupText": "You have a new message"
};

var mqttMessage = new MQTTMessage();
mqttMessage.payload = JSON.stringify(payload);
mqttMessage.qos = 1;

mqttClient.publish(mqttPublishTopic, mqttMessage);
```


>**Note**: the max size for a MQTT message is 128 Kio