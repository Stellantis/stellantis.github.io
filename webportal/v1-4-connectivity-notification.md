---
layout: doc-article
permalink: /webportal/v1/connectivity/notification/
section: webportal
subsection: v1
categorie: Connectivity
title: Notification
description: "Send notification from your back-end to your app."
---


# SENDING POPUP

### WHAT YOU NEED

- [Being connected to the MQTT Broker]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-connection)

- Your [MQTT Publishing Topic]({{site.baseurl}}/webportal/v1/connectivity/mqtt/#mqtt-topic) looking as follows:
	`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`

## SENDING NOTIFICATIONS (POPUP)

The Notification message or popup lets you display a modal window on the NAC in order to redirect the user's attention over a precise action or information

This notification will be displayed regardless of the current active module (Navigation, Media, ...) and thus isn't limited to the NAC's Web module.

The user is able to:

- Press the *OK* button. [See okBtn event]({{site.baseurl}}/webportal/v1/reference/list/#event-WebPortal-okBtnPopupRequestClicked).
- Press the Return arrow to the top left. [See cancelBtn event]({{site.baseurl}}/webportal/v1/reference/list/#event-WebPortal-cancelBtnPopupRequestClicked).
- Not do anything, in which case the window will close automatically after 15 seconds. [See closeTimeout event]({{site.baseurl}}/webportal/v1/reference/list/#event-WebPortal-closeTimeoutPopupRequest).

The action done by the user is transferred to the embedded Application for it to react accordingly.

## IMPORTANT

>**Caution:** Popups (either [MQTT]({{site.baseurl}}/webportal/v1/connectivity/notification/#sending-popup) or [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open)) must not be asked more often than once every 20 seconds.

> **Caution 2:** [Navigation.LaunchGuidance()]({{site.baseurl}}//webportal/v1/reference/list/#api-Navigation-LaunchGuidance) and [Navigation.LaunchGuidanceWaypoints()]({{site.baseurl}}/webportal/v1/reference/list/#api-Navigation-LaunchGuidanceWaypoints) can **not** be launched when a popup (either [MQTT]({{site.baseurl}}/webportal/v1/connectivity/notification/#sending-popup) or [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open)) is displayed. To make sure the guidance have actually been launched please check that LaunchGuidance function return is `True`.

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

## HANDLING POPUP

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