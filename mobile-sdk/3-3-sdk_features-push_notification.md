---
layout: doc-article
permalink: /mobile-sdk/sdk-features/push-notification/
section: mobile-sdk
categorie: SDK Features
title: Push Notification
description: "Configure push notification about vehicles."
require: api-reference tab-content
mobile-sdk-component: PushNotification
---

{% include_relative content/mobile-sdk-feature-security-connectivity.html %}

*Push Notification* is a feature allowing receiving system notifications on the End User mobile device through Stellantis' Firebase service.

Notifications can be triggered by the following events:
- ✅🔋 Remote charge **ends** successfully: the vehicle battery reaches 100%.
- ❌🔌 remote charge is **interrupted**: the charge is stopped before reaching 100%.

In order to add the *Push Notification* feature to your project, you **must perform** the following steps:
  - [Step 1](#1-firebase-config): Configure Stellantis' Firebase Account in the project.
  - [Step 2](#2-deal-with-firebase-token): Deal with Stellantis' Firebase Token registration.
  - [Step 3](#3-select-vehicles--check-their-status): Select the vehicle(s) to enable Push Notif on.
  - [Step 4](#4-enable-an-event): Enabled service on the selected vehicles
  - [Step 5](#5-customize-system-notif): Customize the notification appearance on the user device.

## 1. Firebase Config

First of all, you need to set up Stellantis' Firebase configuration in your App. 

*Push Notification* are triggered by Stellantis' Firebase, that why Stellantis Firebase Account should be activated inthe project. Doing so, Stellantis will be able to trigger push notification on the user device.

Once set up, you must inform create a link between the mobile device and Stellantis Firebase account by [registering token](#2-deal-with-firebase-token).

To implement Firebase in your project, checkout firebase configuration for [iOS](https://firebase.google.com/docs/ios/setup) or [Android](https://firebase.google.com/docs/android/setup).


{% capture multiAccountFirebaseIos %}
**Add config files**

Add the 3 config files from the firebase console in your project:
- GoogleService-Info-Debug.plist
- GoogleService-Info-Push.plist
- GoogleService-Info.plist

**Register the supplementary config**

Use this code to register the supplementary config:

```swift
if let pushFilePath = Bundle.main.path(forResource: "GoogleService-Info-Push", ofType: "plist"),
    let pushOptions = FirebaseOptions(contentsOfFile: pushFilePath) {
    FirebaseApp.configure(name: firebaseName, options: pushOptions)
  }
```

**Retrieve Firebase token**

Implement this code to retrieve the firebase token:

```swift
guard let pushConfig = FirebaseApp.app(name: firebaseName) else { return }
Messaging.messaging().retrieveFCMToken(forSenderID: pushConfig.options.gcmSenderID) { fcmToken, error in
    if let fcmToken = fcmToken {
        // Configure SET pims.sdk.token
        // Check-out Step 2
    }
}
```
{% endcapture %}

{% capture multiAccountFirebaseAndroid %}
**Delete unnecessary provider**

If `com.google.firebase.provider.FirebaseInitProvide` it is registered in the manifest of your project, you should delete it.


**Register the supplementary config**

Use this code to register the supplementary config:

```java
val firebaseOptions = FirebaseOptions.Builder().setApiKey("AIzaSyCCdTRue6r3Y3d-jfU-AasXeVmFyKCnIIE")
    .setProjectId("rt-b2c-fcm-staging")
    .setGcmSenderId("1024186873749")
    .setStorageBucket("rt-b2c-fcm-staging.appspot.com")
    .setApplicationId("1:1024186873749:android:88ac59e395d56f4a27289c").build()

FirebaseApp.initializeApp(applicationContext, firebaseOptions,"pushNotifications")
```

**Retrieve Firebase token**

Implement this code to retrieve the firebase token:

```java
val messagingApp = FirebaseApp.getInstance("pushNotifications")
val firebaseMessaging = messagingApp.get(FirebaseMessaging::class.java) as FirebaseMessaging

firebaseMessaging.token.addOnCompleteListener(
  OnCompleteListener { task ->
    if (!task.isSuccessful) {
        Timber.w("Fetching FCM registration token failed with exception: ${task.exception}")
        return@OnCompleteListener
    }

    // Get new FCM registration token
    val token = task.result
    Timber.i("registerForPushNotifications : pushId = $token")
  }
)
```
{% endcapture %}

{% include tab-content.html
  name="multiAccountFirebase"
  title="Multiple Firebase Accounts"
  subtitle="In case you already have Firebase configured for your own use, this is how you can add a second account in your project."
  tab1Name="<i class='fab fa-android'></i> Android"
  tab1Content=multiAccountFirebaseAndroid
  tab2Name="<i class='fab fa-apple'></i> iOS"
  tab2Content=multiAccountFirebaseIos
%}

## 2. Deal with Firebase Token

[Setting up Firebase](#1-firebase-config) on the device allows retrieving a Firebase FCM token. 

This token needs to be registered to Stellantis' in order to create an association with a mobile device.

**Register FCM Token**

The Firebase FCM token needs to be registered in the following API in order for Stellantis to trigger Push Notification on the user device:

{%- capture registerTokenRequestKotlin -%}
  Pair("action", "registerPushToken"),
  Pair("token", "<fcm_token>")
{%- endcapture -%}

{%- capture registerTokenRequestSwift -%}
  "action": "registerPushToken",
  "token": "<fcm_token>",
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.sdk.token"
  subname="registerPushToken"
  request_params_swift=registerTokenRequestSwift
  request_params_kotlin=registerTokenRequestKotlin
  response="null"
%}

**Unregister FCM Token**

You should implement a listener function in your App, if the system **notifications are disabled by the user**, you should call the following API to unregister the token:

{%- capture unregisterTokenRequestKotlin -%}
  Pair("action", "unregisterPushToken"),
{%- endcapture -%}

{%- capture unregisterTokenRequestSwift -%}
  "action": "unregisterPushToken",
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.sdk.token"
  subname="unregisterPushToken"
  request_params_swift=unregisterTokenRequestSwift
  request_params_kotlin=unregisterTokenRequestKotlin
  response="null"
%}


## 3. Select Vehicles & check their status

Once, the [Firebase Token is registered](#2-deal-with-firebase-token), the mobile device and Stellantis account are linked. We should then inform Stellantis to enable the service for a vehicle(s)/device. To do this, we first need to **select vehicles**.

Therefore you must use the following API to achieve the following goals:
- **Check the current status** of the service on the vehicles (enable/disabled).
- **Select the vehicle(s)** to enable/disable the service on, in [Step 4](#4-enable-an-event).

This API performs **both action** at the same time: vehicle(s) are selected for *step 4* & returns the status of the services currently active. 

You must use this information to choose which action you want to perform, if the service is already activated, it doesn’t need to be activated again. Also you can deactivate only services that are already activated.

{%- capture getEventsRequestKotlin -%}
  Pair("vins", listOf("VR1AB12C3D4567890", "VR2AB12C3D4567890"))
{%- endcapture -%}

{%- capture getEventsRequestSwift -%}
  "vins": ["VR1AB12C3D4567890", "VR2AB12C3D4567890"]
{%- endcapture -%}

{%- capture getEventsResponse -%}
{
  "events": [
    { 
      "vin": "VR1AB12C3D4567890",
      "notification": [
        { "name": "remoteChargeFinished",
          "status": "enabled" },
        { "name": "remoteChargeInterrupted",
          "status": "disabled" }
        ]
    },
    { 
      "vin": "VR2AB12C3D4567890",
      "notification": [
        { "name": "remoteChargeFinished",
          "status": "disabled" },
        { "name": "remoteChargeInterrupted",
          "status": "enabled" }
        ]
    },
  ]
}
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.sdk.event"
  request_params_swift=getEventsRequestSwift
  request_params_kotlin=getEventsRequestKotlin
  response=getEventsResponse
%}

The response of this API let you know if these VIN has already subscribed. Also, vehicles requested with this API are selected for Step 4.

## 4. Enable an event

In order to activate the *PushNotification* feature, we should **enable** at least one service on the vehicle(s). *pims.sdk.event-enable* API allows enabling services on the vehicles selected in [step 3](#3-select-vehicles--check-their-status). The following events are available:
- ✅🔋 *remoteChargeFinished*
- ❌🔌 *remoteChargeInterrupted*

>**Service status**: enabling service on a vehicle should be done according to the [current status](#3-select-vehicles--check-their-status) of the service. Already activated services don't need to be activated again. Otherwise, we can [disable service](#disable-an-event).

>**Selecting Vehicle(s):** this API effects vehicles selected in the previous step that's why selecting vehicle(s) is mandatory before using it. Check out [step 3](#3-select-vehicles--check-their-status) to select & check vehicle(s) status.


{%- capture setEnableEventsRequestKotlin -%}
  Pair("action", "enable"),
  Pair("type", listOf("remoteChargeFinished", "remoteChargeInterrupted"))
{%- endcapture -%}

{%- capture setEnableEventsRequestSwift -%}
  action": "enable",
  type": ["remoteChargeFinished", "remoteChargeInterrupted"]
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.sdk.event"
  subname="enable"
  request_params_swift=setEnableEventsRequestSwift
  request_params_kotlin=setEnableEventsRequestKotlin
  response="null"
%}

If you want to turn off the *PushNotification* system, use [pims.sdk.event-disable](#disable-an-event).

## 5. Customize System Notif

At this step, the *PushNotification* system should be properly functional on the device. But the notification message needs to be **customized** to fit your *App* needs.

{% capture setUpSystemNotifAndroid %}
**Add a FirebaseMessagineService**

Add a class *FirebaseMessagineService* in your App, check out the [official documentation](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService).

**Edit the Notification Extension**

In the *FirebaseMessagineService*, create a method *onMessageReceived()*.

Add the following code to the method:

```kotlin
val title = resources.getString(
  resources.getIdentifier(
  remoteMessage.data["title"], "string",packageName))

val body = resources.getString(
  resources.getIdentifier(
  remoteMessage.data["body"], "string",packageName))
```

This will link the title and the content of the notification to the localizable file.

**Add localizable file(s)**

Add a localizable file *strings.xml* for every supported language, here is the format of the english version:

```xml
<string name="remoteChargeFinished.title">Charge notification</string>
<string name="remoteChargeFinished.body">Your vehicle is 100% charged</string>
<string name="remoteChargeFinished.action">Charge notification action</string>

<string name="remoteChargeInterrupted.title">Charge Interrupted</string>
<string name="remoteChargeInterrupted.body">Your vehicle is no longer charging</string>
<string name="remoteChargeInterrupted.action">Charge Interrupted action</string>
```
{% endcapture %}

{% capture setUpSystemNotifIos %}
**Add a UNNotificationServiceExtension**

Create a new template and add an *iOS Notification Service Extension* to your project. Check out the [UNNotificationServiceExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) Apple documentation.

<img src="{{site.baseurl}}/assets/images/mobile-sdk-add-ios-notif_service-extension.jpg" alt="Add Notif Service Extension" style="max-width: 50%; min-width: 150px">

**Edit the Notification Extension**

In the file *NotificationService.swift*, in the first method *didReceive()* find this line of code:

```swift
bestAttemptContent.title = "\(bestAttemptContent.title) [modified]"
```

We should replace it with the following code:

```swift
bestAttemptContent.title = NSLocalizedString(bestAttemptContent.title, comment: "")
bestAttemptContent.body = NSLocalizedString(bestAttemptContent.body, comment: "")
```

This will link the title and the content of the notification to the localizable file.

**Add localizable file(s)**

Add a localizable file *Localizable.string* for every supported language, here is the format of the english version:

```json
"remoteChargeFinished.title" = "Charge notification";
"remoteChargeFinished.body" = "Your vehicle is 100% charged";

"remoteChargeInterrupted.title" = "Charge Interrupted";
"remoteChargeInterrupted.body" = "Your vehicle is no longer charging";
```
{% endcapture %}

{% include tab-content.html
  name="setUpSystemNotif"
  title="Set Up System Notif"
  subtitle="By default, the notification title and content are not clear to an end user. These guidance allows to custom the push notification:"
  tab1Name="<i class='fab fa-android'></i> Android"
  tab1Content=setUpSystemNotifAndroid
  tab2Name="<i class='fab fa-apple'></i> iOS"
  tab2Content=setUpSystemNotifIos
%}

## Disable an event

On the action of the End User, you should disable event notification by calling the following API:


{%- capture setDisableEventsRequestKotlin -%}
  Pair("action", "disable"),
  Pair("type", listOf("remoteChargeFinished", "remoteChargeInterrupted"))
{%- endcapture -%}

{%- capture setDisableEventsRequestSwift -%}
  action": "disable",
  type": ["remoteChargeFinished", "remoteChargeInterrupted"]
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.sdk.event"
  subname="disable"
  request_params_swift=setDisableEventsRequestSwift
  request_params_kotlin=setDisableEventsRequestKotlin
  response="null"
%}

## Remove a vehicle

On the action of the End User, you should remove a vehicle from the event system:


{%- capture setRemoveEventsRequestKotlin -%}
  Pair("action", "remove"),
  Pair("vin", "VR1AB12C3D4567890")
{%- endcapture -%}

{%- capture setRemoveEventsRequestSwift -%}
  action": "remove",
  vin": "VR1AB12C3D4567890"
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.sdk.event"
  subname="remove"
  request_params_swift=setRemoveEventsRequestSwift
  request_params_kotlin=setRemoveEventsRequestKotlin
  response="null"
%}
