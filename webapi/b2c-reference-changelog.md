---
layout: doc-article
permalink: /webapi/b2c/api-reference/changelog/
section: webapi
subsection: b2c
categorie: API Reference
title: Changelog
redirect_from: 
    - /webapi/b2c/changelog/
---


Version|Name
-|-
[b2c_v4.14.0](#b2c_v4140) | 4.14.0
[b2c_v4.13.0](#b2c_v4130) | 4.13.0
[b2c_v4.12.0](#b2c_v4120) | 4.12.0
[b2c_v4.11.0](#b2c_v4110) | 4.11.0
[b2c_v4.10.1](#b2c_v4101) | 4.10.1
[b2c_v4.10.0](#b2c_v4100) | 4.10.0
[b2c_v4.9.1](#b2c_v491) | 4.9.1
[b2c_v4.9.0](#b2c_v490) | 4.9.0
[b2c_v4.8.0](#b2c_v480) | 4.8.0
[b2c_v4.7.0](#b2c_v470) | 4.7.0
[b2c_v4.6.1](#b2c_v461) | 4.6.1
[b2c_v4.6.0](#b2c_v460) | 4.6.0
[b2c_v4.5.0](#b2c_v450) | 4.5.0
[b2c_v4.4.0](#b2c_v440) | 4.4.0
[b2c_v4.3.0](#b2c_v430) | 4.3.0
[b2c_v4.2.0](#b2c_v420) | 4.2.0
[b2c_v1.0.3](#b2c_v103) | B2C Spec for PIV RLEV 1.1
[b2c_v1.0.2](#b2c_v102) | APIs B2C new schema
[b2c_v0.0.2](#b2c_v002) | APIs BtoC release before the merge with B2B spec
[1.0](#10) | APIs BtoC release

<hr>

## b2c_v4.14.0

{% include published_on.html date='PreProd' %}

**Vehicles API**
- Update remote section in onboardCapabilities object

**Callbacks API**
- Update attributes on wehbook & websocket

<hr>

## b2c_v4.13.0

{% include published_on.html date='PreProd' %}

**Vehicles API**
- Update onboardCapabilities object

**Status & Telemetry API**
- Update energies objects

**Status API**
- Update failureCause enum in preconditioning object
- Add startingCause data in preconditioning object

**Monitors API**
- Add charging type data trigger.

**Remote API**
- Update charging remote operation

<hr>

## b2c_v4.12.0

{% include published_on.html date='PreProd' %}

**Vehicles API**
- Add alarms information in link section

**Others**
- Add OAuth2.0 scope validation & filtering

<hr>

## b2c_v4.11.0

{% include published_on.html date='PreProd' %}

**Callbacks API**
- Update callbacks lifecycle rule
- Update push notification attribute

<hr>

## b2c_v4.10.1

{% include published_on.html date='PreProd' %}

**Telemetry & Status API**
- Update enum list ofrvv in adas object (LeakOfVisibilityRadar by LackOfVisibilityRadar)

**Others**
- Fix wording issues
- Remove several deprecated features

<hr>

## b2c_v4.10.0

{% include published_on.html date='PreProd' %}

**Vehicle API**
- Add motorization in vehicle object
- Deprecate brand, label, pictures in vehicle object
- Add extension in vehicle object and associated query parameter
- Add vinPrefix query parameter for /user/vehicles endpoint

**Telemetry & Status API**
- Update enum list in speed for wipingBlades object (replace Hight by High)
- Update enum list in mode for drivingBehavior object (replace Confort by Comfort)

**Remote API**
- Development of remote API

**Others**
- Add fixStatus in position object
- Update description and fix wording issues
- Add limitation for monitor associated to a customer/vid

<hr>

## b2c_v4.9.1

{% include published_on.html date='PreProd' %}

**Others**
- Update description & fix wording issue


<hr>

## b2c_v4.9.0

{% include published_on.html date='PreProd' %}

**Telemetry & Status API**
- Add powertrain object

**Others**
- Update description & fix wording issue
- Update format/type mileageBeforeMaintenance data

<hr>

## b2c_v4.8.0

{% include published_on.html date='PreProd' %}

**Telemetry & Status API**
- Update enum list of ignition (delete unnecessary "free" value)
- Add semiManual in transmission.gearbox.mode
- Add missing enum Fault in adas.bsm
- Replace adas.lrka by adas.llka (set adas.lrka in deprecated mode)
- Change wrong unit for kinetic.speed

**Others**
- Align date behavior
- Update description & fix missing format/type

<hr>

## b2c_v4.7.0

{% include published_on.html date='PreProd' %}

**Telemetry & Status API**
- Update enum list of autoECallTriggering
- Delete endAt data in alarm.trigger object
- Fix wording issue in one item of adas accr data
- Add sequential value in transmission.gearbox.mode

**Others**
- Align date behavior (set createdAt in mandatory, etc)

<hr>

## b2c_v4.6.1

{% include published_on.html date='PreProd' %}

**Collisions API**
- Add mandatory state for side in collision object

**Others API**
- Aligne date behavior


<hr>

## b2c_v4.6.0

{% include published_on.html date='PreProd' %}

**Telemetry API**
- Update energies object
- Replace lighting by lightingSystem
- Update safety object
- Add drivingBehavior object
- Add wipingBlades object
- Delete pace in kinetic object
- Update pageSize boundaries
- Add timestamps parameter

**Status API**
- Update energies object
- Add lightingSystem object
- Add drivingBehavior object
- Delete pace in kinetic object

**Waypoint API**
- Update position object

**Monitors API**
- Add 2 new data trigger : vehicle.alert / vehicle.drivingBehavior.mode

**Others**
- Add collisions links in vehicle/trip API
- Align date (createdAt/UpdateAt) behavior
- Update alarms object
- Update descriptions for several objects/parameters


<hr>

## b2c_v4.5.0

{% include published_on.html date='PreProd' %}

**Telemetry API**
- Update rvv enum list

**Monitor & Subscribe API**
- Add previous feature
- Add vehicle.safety.autoECallTriggering in datatrigger capability

<hr>

## b2c_v4.4.0

{% include published_on.html date='PreProd' %}

**Status & Telemetry API**
- Update engines object to include extension.thermic.air.temp information

**Monitor & Subscribe API**
- Update TimeTrigger structure definition
- Update list of FCM attributes in PushNotif callback type

**Others**
- Specification bugfixing/optimization (add missing unit, swagger improvements)


<hr>

## b2c_v4.3.0

{% include published_on.html date='PreProd' %}

**Alarm API**
- Add alarm APIs & monitors

**Others**
- Delete duplicated enum in AlertMsgEnum
- Add inside the following APIs monitors and callbacks links: /user - /user/vehicles - /user/vehicles/{id}

<hr>

## b2c_v4.2.0

{% include published_on.html date='25 Jul 2022' %}

**API Status:**
- Replace safety.eCallTriggeringRequest by safety.autoECallTriggering in status object
- Add preconditioning information in status object
- Add energies in status object
- Add odometer & kinetic at the root of status object
- Add lockedStates inside doorsState object
- Deprecate energy section in status object
- Deprecate preconditionning section in status object
- Deprecate odometer & kinetic extensions
- Deprecate lockedState inside doorsState object

**API Telemetry:**
- Replace lockedState by lockedStates inside doorsState object

**API Maintenance:**
- Fix spelling error on data daysBeforeMaintenance

**API Monitor:**
- Add additional callback attributes to monitor#subscribeParam

**Others:**
- Delete engine from Vehicle Information
- Add missing link telemetry for vehicles APIs
- Update swagger structure & commentary
- Delete unused battery.current / engines.extension.thermic.scr data & brakingSystem object


<hr>

## b2c_v1.0.3

{% include published_on.html date='20 Nov 2019' %}

#### `B2C Spec for PIV RLEV 1.1`
Content:
[APIs B2C new schema](https://github.psa-cloud.com/mph00/Spec/releases/tag/b2c_v1.0.2) (tag b2c_v1.0.2) with:

##### API Status
* Add RoofWindow to ```DoorsState#opening#identifier``` enum.
* Rename door state enum ```DoorsState#opening#state.Close``` to ```Closed```
* Add  ```CargoDoorsLocked , RearDoorsUnlocked, RearDoorsLocked``` consts to ```DoorsState#lockedState``` enum.
* Add ```Safety```  to Status object
* Add ```ServiceType```  to Status object
* Add ```locale``` to monitor object to support Internationalization.
* Add ```time-zone``` to monitor object to adapt this trigger to the time change according to local (region/country) criteria/rules.
* API vehicle Status: add lockedStates array of state (compliant with new DC RLEV Spec)  and make lockedState depricated.
* Add OverallAutonomy (with its own date) to status
* Add VehicleOdometer (with its own date)  to status
* Add precond program slot number.
* date-time review (align with standard RFC 3339)

##### API Monitor
* Add ```PUT /monitors/{mid}```: update an existing monitor
* Add ```PUT /monitors/{mid}/status```: update an existing monitor stau to (active, paused)
* Add fields literalValue & objectValues to body#values struct (To monitor callback template)
##### Alert-ENUM
Fix enum spelling (*Collant -> *Coolant)
### Removed
odometer, autonomy fields from the status struct.


Content:
[APIs B2C new schema](https://github.psa-cloud.com/mph00/Spec/releases/tag/b2c_v1.0.2) (tag b2c_v1.0.2) with:

##### API Status
* Add RoofWindow to ```DoorsState#opening#identifier``` enum.
* Rename door state enum ```DoorsState#opening#state.Close``` to ```Closed```
* Add  ```CargoDoorsLocked , RearDoorsUnlocked, RearDoorsLocked``` consts to ```DoorsState#lockedState``` enum.
* Add ```Safety```  to Status object
* Add ```ServiceType```  to Status object
* Add ```locale``` to monitor object to support Internationalization.
* Add ```time-zone``` to monitor object to adapt this trigger to the time change according to local (region/country) criteria/rules.
* API vehicle Status: add lockedStates array of state (compliant with new DC RLEV Spec)  and make lockedState depricated.
* Add OverallAutonomy (with its own date) to status
* Add VehicleOdometer (with its own date)  to status
* Add precond program slot number.
* date-time review (align with standard RFC 3339)



##### API Monitor
* Add ```PUT /monitors/{mid}```: update an existing monitor
* Add ```PUT /monitors/{mid}/status```: update an existing monitor stau to (active, paused)
* Add fields literalValue & objectValues to body#values struct (To monitor callback template)


##### Alert-ENUM
Fix enum spelling (*Collant -> *Coolant)


### Removed
odometer, autonomy fields from the status struct.

<hr>

## b2c_v1.0.2

{% include published_on.html date='19 Sep 2019' %}

#### `APIs B2C new schema`

<hr>

## b2c_v0.0.2

{% include published_on.html date='17 Jun 2019' %}

#### `APIs BtoC release before the merge with B2B spec`

<hr>

## 1.0

{% include published_on.html date='11 Apr 2019' %}

#### `APIs BtoC release`

<hr>

