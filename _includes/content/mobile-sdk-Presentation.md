# Groupe PSA Connected Vehicles SDK

The Groupe PSA Connected Vehicles SDK let your application benefits of remote vehicles features on smart-device. You will be able to interact with vehicles using smartphone related technologies such as bluetooth and mobile internet.

For now, the only service avaible is **public delegation**. It is dedicated to partners owning fleet of vehicles. With this SDK, you can add remote vehicle features to your app. Check out further to learn more about this remote feature.

- **Authorization** (virtual key): This library will let us allow your client to use a vehicle. We will perform together authentication via bluetooth and internet.
- **Public delegation**: This library contains classes for remote vehicles via bluetooth.

We are working on others features like end-user development, feel free to check this website for new release!

## Requirements

Knowledge of:
- **iOS**: Objetive C & Swift
- **Android**: Kotlin & Java

Bluetooth & internet connection enabled on the device.

# Public Delegation

<p>
<div class="bd-content">
<div class="notification">
  <strong>Note:</strong> Our Public Delegation mobile SDK is dedicated to fleet owners. Furthermore, this feature require vehicles with dedicated hardware. If you are intersted please contact groupe PSA for more infos!
</div></div>
</p>

As a fleet owner you will be able to develop mobile applications with advanced action-feature.

![presentationFlowchartAuth]({{site.baseurl}}/assets/images/presentationFlowchartAuth.png)

Theses SDKs are avaible for iOS and Android development. It's comming with the authentication process module included.

## Public delegation: Key Features

Here is the features you can implement in your mobile application: 
- **Unlock & Lock**: No need for a key, your client's mobile phone will become one! 
- **Hazard light & Horn**: If your client need to find his vehicle on a car park.
- **Starting on**: You will be able to allow vehicles to start-on.


## Public delegation: Authentication
Public delegation use **Bluethooth & internet connection** in order to authenticate the user of the vehicle. This authentication is designed to allow sensitive remote actions with the approval of the owner of the fleet. The process is perform over BLE (Bluetooth Low Energy) & internet between the end-user mobile phone and the vehicle. 

This authentication is not avaible on evry vehicle avaiables. Effectively, a component call **SDCM** is required for public delegation. Contact Groupe PSA for more infos about vehicles avaible with public delegation.

In order to get a virtual key for a vehicle, the end user must send a request to the fleet owner (via internet on mobile app). This request is process on the **fleet owner network** in order to check if this user is **allowed** to use this particular vehicle. Once you have reached this step, the fleet owner will request Groupe PSA a virtual key for this vehicle (usable for 72 hours). At the end the fleet owner send back the virtual key to the user, this key allow actions on the vehicle using bluetooth on his mobile.


# See Also

##### Preview

Want to see what it's look like ? Browse our Quickstart for [iOS]({{site.baseurl}}/mobile-sdk/ios/quick-start/) and for [Android]({{site.baseurl}}/mobile-sdk/android/quick-start/).

##### Try out!

To test the SDK you can check the [Android Reference]({{ site.baseurl }}/mobile-sdk/android/reference/) and [iOS Reference]({{ site.baseurl }}/mobile-sdk/ios/reference/).
