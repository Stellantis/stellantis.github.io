---
layout: doc-article
permalink: /webapi/b2b/api-reference/changelog/
section: webapi
redirect_from: 
    - /webapi/b2b/api-reference-v2/changelog/
    - /webapi/b2b/api-reference-v3/changelog/
    - /webapi/b2b/changelog/
subsection: b2b
categorie: API Reference 
title: Changelog
---

Version|Name
-|-
[b2b_v3.16.0](#b2b_v3160) | 3.16.0
[b2b_v3.15.0](#b2b_v3150) | 3.15.0
[b2b_v3.14.0](#b2b_v3140) | 3.14.0
[b2b_v3.13.1](#b2b_v3131) | 3.13.1
[b2b_v3.13.0](#b2b_v3130) | 3.13.0
[b2b_v3.12.0](#b2b_v3120) | 3.12.0
[b2b_v3.11.0](#b2b_v3110) | 3.11.0
[b2b_v3.10.0](#b2b_v3100) | 3.10.0
[b2b_v3.9.0](#b2b_v390) | 3.9.0
[b2b_v3.8.0](#b2b_v380) | 3.8.0
[b2b_v3.7.1](#b2b_v371) | 3.7.1
[b2b_v3.7.0](#b2b_v370) | 3.7.0
[b2b_v3.6.0](#b2b_v360) | 3.6.0
[b2b_v3.5.0](#b2b_v350) | 3.5.0
[b2b_v3.4.1](#b2b_v341) | 3.4.1
[b2b_v3.4.0](#b2b_v340) | 3.4.0
[b2b_v3.3.0](#b2b_v330) | 3.3.0
[b2b_v3.2.0](#b2b_v320) | 3.2.0
[b2b_v3.1.1](#b2b_v311) | 3.1.1
[b2b_v3.1.0](#b2b_v310) | 3.1.0
[b2b_v3.0.9](#b2b_v309) | 3.0.9
[b2b_v3.0.8](#b2b_v308) | 3.0.8
[b2b_v3.0.7](#b2b_v307) | 3.0.7
[b2b_v3.0.6](#b2b_v306) | 3.0.6
[b2b_v3.0.5](#b2b_v305) | 3.0.5
[b2b_v3.0.4](#b2b_v304) | 3.0.4
[b2b_v3.0.3](#b2b_v303) | 3.0.3 
[b2b_v3.0.0](#b2b_300) | B2B-3.0.0 Remote
[b2b_v2.0.5](#b2b_v205) | B2B Spec For PIV-RLEV 1.1
[b2b_v2.0.4](#b2b_v204) | B2B Multi-Fleets support
[b2b_v2.0.3](#b2b_v203) | Candiate version (Lot1/Version2)
[b2b_v2.0.2](#b2b_v202) | 1st candiate version (lot1)
[b2b_v2.0.1](#b2b_v201) | supported object in extensions
[b2b_v2.0.0](#b2b_v200) | B2B - Partners Release - 
[b2b_v1.0.0](#b2b_v100) | 1st release (B2B)

<hr>

## b2b_v3.16.0

{% include published_on.html date='PreProd' %}

**Monitors API**
- Add vehicle.alarm.trigger.type & vehicle.alarm.status.activation as datatriggers


<hr>

## b2b_v3.15.0

{% include published_on.html date='PreProd' %}

**Vehicles API**
- Update remote section in onboardCapabilities object

**Vehicles API**
- Add /vehicles/{vin} endpoint in B2B API


<hr>

## b2b_v3.14.0

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

## b2b_v3.13.1

{% include published_on.html date='PreProd' %}

**Vehicles API**
- Add alarms information in link section

<hr>

## b2b_v3.13.0

{% include published_on.html date='20 Jul 2023' %}

**Alarms API**
- Add of 2 news API : GET /fleets/{fid}/vehicles/{vid}/alarms & GET /fleets/{fid}/vehicles/{vid}/alarms/{aid}

**Telemetry API**
- Update TelemetryEnum list to include alarm values for type query parameter

**Telemetry & Status API**
- Update enum list ofrvv in adas object (LeakOfVisibilityRadar by LackOfVisibilityRadar)

**Others**
- Deprecate API /fleets/{fid}/vehicles/{vid}/lastPosition
- Remove several deprecated features

<hr>

## b2b_v3.12.0

{% include published_on.html date='20 Jul 2023' %}

**Vehicle API**
- Add motorization in vehicle object

**Telemetry & Status API**
- Update enum list in speed for wipingBlades object (replace Hight by High)
- Update enum list in mode for drivingBehavior object (replace Confort by Comfort)

**Trips API**
- Deprecate the following endpoints : /fleets/{fid}/trips/{tid}/telemetry & /fleets/{fid}/trips/{tid}/wayPoints & /fleets/{fid}/trips/{tid}/alerts/{aid} & /fleets/{fid}/trips/{tid}/alerts & /fleets/{fid}/trips/{tid} & /fleets/{fid}/trips/{tid}/collisions

**Others**
- Add fixStatus in position object
- Update description and fix wording issues

<hr>

## b2b_v3.11.0

{% include published_on.html date='26 Apr 2023' %}

**Telemetry & Status API**
- Add alarm object

<hr>

## b2b_v3.10.0

{% include published_on.html date='26 Apr 2023' %}

**Telemetry & Status API**
- Add powertrain object

**Others**
- Update description & fix wording issue
- Update format/type mileageBeforeMaintenance data

<hr>

## b2b_v3.9.0

{% include published_on.html date='26 Apr 2023' %}

**Telemetry & Status API**
- Update enum list of ignition (delete unnecessary "free" value)
- Add semiManual in transmission.gearbox.mode
- Replace adas.lrka by adas.llka (set adas.lrka in deprecated mode)

**Others**
- Aligne date behavior
- Update description & fix missing format/type

<hr>

## b2b_v3.8.0

{% include published_on.html date='20 feb 2023' %}


**Telemetry & Status API**
- Update enum list of autoECallTriggering
- Fix wording issue in one item of adas accr data
- Add sequential value in transmission.gearbox.mode

**Others**
- Align date behavior (set createdAt in mandatory, etc)


<hr>

## b2b_v3.7.1

{% include published_on.html date='20 feb 2023' %}

**Collisions API**
- Add mandatory state for side in collision object

**Others API**
- Aligne date behavior


<hr>

## b2b_v3.7.0

{% include published_on.html date='29 nov 2022' %}

**Telemetry API**
- Add vehicle.lightingSystem in telemetry.type enum parameter
- Update energies object

**Status API**
- Update energies object

**Others**
- Align date (createdAt/UpdateAt) behavior


<hr>

## b2b_v3.6.0

{% include published_on.html date='29 nov 2022' %}

**Telemetry & Status API**
- Update Lights object to add position information

**Telemetry API**
- Update rvv enum list


<hr>

## b2b_v3.5.0

{% include published_on.html date='14 Oct 2022' %}


**Status & Telemetry API**
- Update energies object to include hydrogen motorization

**Telemetry API**
- Add rgi (recommend gear indicator) in adas object

**Monitor API**
- Update TimeTrigger structure definition

**Others**
- Specification bugfixing/optimization (add missing unit, swagger improvements)


<hr>

## b2b_v3.4.1

{% include published_on.html date='14 Oct 2022' %}


**Alerts API**
- Update description for startPosition & endPosition

**Telemetry API**
- Update maxItem for telemetry type parameter

**Monitor API**
- Set AirConditioning in required state for remote preconditioning

**Others**
- Add a new enum in adas.parkAssist.rear

<hr>

## b2b_v3.4.0

{% include published_on.html date='14 Oct 2022' %}

**Status API**
- Delete deprecated extensions : odometer & kinetic
- Delete deprecated data : engines.oil
- Add vin & createdAt in required state

**Telemetry API**
- Delete deprecated extensions : odometer & kinetic
- Delete deprecated data : engines.oil
- Add vehicle.wipingBlades enum in type parameter

**Webhook & Monitor**
- Add vehicle.trip in extendedEventParam list enum

**Maintenance API**
- Add vin in maintenance response and put it in required state
- Delete required state for daysBeforeMaintenance & mileageBeforeMaintenance
- Change updatedAt by createdAt in required state

**Others API**
- Add mapping for the following data/objects : lightingSystem.fog, drivingBehavior, transmission.gearbox.ratio, engines.thermic.extension.thermic.air, wipingBlades, energy.thermic.extension.comsumptions.instant
- Deprecated energy.thermic.extension.comsumption which is replaced by energy.thermic.extension.comsumptions
- Add vin & createdAt in required state
- Update summary description
- Add vin & createdAt in required state in Alerts API
- Delete deprecated reduced in Waypoints API
- Add id data in required state in Fleet API
- Add vin & createdAt in required state in Collisions API

<hr>

## b2b_v3.3.0

{% include published_on.html date='02 Jun 2022' %}

**API Maintenance**
- Fix spelling error on data daysBeforeMaintenance

**API Monitor**
- Add new data trigger monitor : vehicle.trip.start & vehicle.trip.stop

**Fleets API**
- Add remote/callback link

**Webhook API**
- Add missing fleetID in monitor event notification

**Others**
- Add missing link telemetry for vehicles APIs
- Update swagger structure & commentary
- Change unit of fuel consumption
- Add energy type hydrogen
- Change unit of energy.extension.electric.residual
- Update energy.type description
- Delete unused battery.current, lightingSystem.position, engines.extension.thermic.scr data & brakingSystem object


<hr>

## b2b_v3.2.0

{% include published_on.html date='27 Jan 2022' %}

- Add monitor airConditioning
- Add remote failureCause : CanceledByDriver
- driver approval deprecated
- Add remote precond prog delete features
- Remote doors: Forced field deprecedated

<hr>

## b2b_v3.1.1

{% include published_on.html date='18 Oct 2021' %}

- Update typo for "depricated"
- Remove unused deprecated structure in vehicle.energy
- Add unit for engine.speed and environment.air.temp
- Update description for all pageSize parameters

<hr>

## b2b_v3.1.0

{% include published_on.html date='28 Jul 2021' %}

- Update remote navigation command (SENDTONAV)
- Refactoring of odometer & kinetic in telemetry & status
- Update pageSize & pageToken for telemtry & waypoints



<hr>

## b2b_v3.0.9

{% include published_on.html date='25 Jun 2021' %}

- Update Trigger name creation for monitor
- Refactoring of the vehicle structure (Removing unused embedded)
- Update charging & preconditionning remote command
- Update alertEnum
- Add remote navigation command
- Update Kinetic bloc

<hr>

## b2b_v3.0.8

{% include published_on.html date='19 Apr 2021' %}

- Update FailureCause for remote callbacks
- Add "forced" parameter for doors remotes
- Update lockedStates format for remotes
- Update pattern for trigger names
- Remove telemetry Links for fleets
- Correct wakeUp for remote actions
- Remove label for GET /Vehicles
- Update alert vehicle list
- Add slot parameter as mandatory for remote preconditionning command



<hr>

## b2b_v3.0.7


{% include published_on.html date='24 Feb 2021' %}

- Remove fleet/{fid}/telemetries API


<hr>

## b2b_v3.0.6

{% include published_on.html date='9 Feb 2021' %}

- Update Typo (Description, Patterns...)
- Update DoorState & mileage object
- Remove collisions API
- Add NextDelayedTime as mandatory for remote Charging
- Add RemoteType WakeUp
- Add 2 new enum for lockedState

<hr>

## b2b_v3.0.5

{% include published_on.html date='6 Jan 2021' %}

- Fix door.states enum by vehicle.doorsStates in extendedEventParam object
- Fix alerts enum by vehicle.alerts in extendedEventParam object
- Replacement OnChange by onChange in monitors descriptions
- Replacement Estimate enum to Estimated in lastPosition object


<hr>

## b2b_v3.0.4

{% include published_on.html date='24 Nov 2020' %}

#### MPH Addons&Changes:

- Remove duration from remote ligth
- Fix includedIn keyword
- Replacement of energy by energies in API Status & Telemetries
- Fix missing type for brand field in vehicles object
- Add missing format for type: number
- Add description for triggerParam>boolExp field in API Monitors
- fix startd for startedAt

#### Webhook Monitor Template change:
- Change extension body type from array to object


<hr>

## b2b_v3.0.3

{% include published_on.html date='14 Oct 2020' %}

- Add Open API SPEC (V3) security schemes support.
- Add TimeStamps (query parameter) extension to support period.
- Reduce extension enum list for Telemetry API.
- Add Telemetry Type filtering query parameter to all telemetry getter API.
- Add wakeup remote.

<hr>

##  b2b_3.0.0 

{% include published_on.html date='24 Mar 2020' %}


#### `B2B-3.0.0 Remote`

Based on: 
[B2B-2.1.0-Monitor-NG](https://github.psa-cloud.com/mph00/Spec/releases/edit/b2b_v2.1.0) (tag b2b_v2.1.0) 
With major changes :
* Support of Car remote for B2B fleet management.

<hr>

## b2b_v2.0.5

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Wed Nov 20 2019</span></div>


#### `B2B Spec For PIV-RLEV 1.1`
Based on:
[B2B Multi-Fleets support](https://github.psa-cloud.com/mph00/Spec/releases/tag/b2b_v2.0.4) (tag b2b_v2.0.4) 

_With:_

#### API B2B

##### API Status
* Add RoofWindow to ```DoorsState#opening#identifier``` enum.
* Rename door state enum ```DoorsState#opening#state.Close``` to ```Closed```
* Add  ```CargoDoorsLocked , RearDoorsUnlocked, RearDoorsLocked``` consts to ```DoorsState#lockedState``` enum.
* Add ```Safety``` struc to Status object
* Add ```ServiceType``` struct to Status object
* date-time review (align with stadar RFC 3339
* Add ```OverallAutonomy``` (with its own date) to status
* Add ```VehicleOdometer``` (with its own date)  to status
* Change ```Status.createdAt``` to ```updatedAt```
* API vehicuel Status: add lockedStates array of state (compliant with new DC RLEV Spec)  and make lockedState depricated.
* Change odometer field from type number to objet (VehicleOdometer).
* Remove  autonomy field from status struct.

##### API Monitor
* Add ```PUT /monitors/{mid}```: update an existing monitor
* Add fields literalValue & objectValues to body#values struct (To monitor callback template)


##### Alert-ENUM
Fix enum spelling (*Collant -> *Coolant)

#### Huawei interface changes:
* Add tid to alert
* Add tid to collision
* Add ```Safety```  to Status object
* Add ```ServiceType```  to Status object
* Add done status to Trip object
* Add faults list to Trip object
* ADD timed.odometer to Status
* ADD ```overall.autonomy``` to Status
* Statusodometer & autonomy are now pricated 
* Remove ResourceHeader from position to be compliant with GeoJSON
* Rename the field Position.point  to geometry -->compliante GeoJSON
* Rename in ```Monitor.data.trigget```: privacy.status to privacy.state
* ```DoorsState.opening```: enum Close renamed to Closed
* ```DoorsState.opening```: Add RoofWindow to idenfier enum
* ```DoorsState.lockedState```: Add conts CargoDoorsUnlocked, RearDoorsUnlocked, RearDoorsLocked to lockedState
* API vehicule Status: add lockedStates array of state (compliant with new DC RLEV Spec)  and make lockedState depricated
* Struct Status: ```odometer & autonomy``` are , from now, depricated. 
* A new filed named ```vehicleOdometer``` (time stamped type) has been added to status

<hr>

## b2b_v2.0.4

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Mon Sep 23 2019</span></div>


#### `B2B Multi-Fleets support`
compound with: b2b_v2.0.3 + "Multi-Fleets" support .

##### API new:
-Now prefixed by
```/fleets/{fid}``` 
- add Monitor ```label``` field when creating monitor (POST)
- add vehicle autonomy value entry to monitor#data-trogger parameter.


##### Note:
Mapping Fleets(s) will be done on APIC side.


<hr>

## b2b_v2.0.3

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Mon Sep 02 2019</span></div>


#### `Candiate version (Lot1/Version2)`
Spec version : b2b_v2.0.3


#### Release note:
Iso ```b2b_v2.0.2```  _1st candiate version (lot1)_ by adding:

##### B2B PSA Public API
* Add ```/fleet/collisions```
* Add ```/fleet/trips/{tid}/wayPoints```
* Status monitor enum changed : ```[Running, Paused, Failed]``` ->  ```[Running, Paused]```
* Ignition: rename const Contact -> SrartUp
* Add Battery struct to Telemetry
* Refactoring list of results: using CollectionResult struct header
* Add MD doc : array of supported data trigger (value, description and operations)
* AlertMsgEnum: add mising anums
* TelemetryEnum: replace both ```vehicle.lightingSystem.signal``` and ```vehicle.lightingSystem.foglight``` by a uniq ```vehicle.lighting```
* Review Monitor#DataTrigger.data value enum (doc on allowed OP for Door Opening and Lock states))

##### Huawei interface
* Add Battery struct to Telemetry
* Make waypoints API pageable 
* Fix spelling "Maintenace" -> "Maintenance"
* Add ```reduced``` to waypoints result to determines whether this result set has been reduced or not.
* Review Monitor#DataTrigger.data value enum (doc on allowed OP for Door Opening and Lock states))

<hr>

## b2b_v2.0.2

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Fri Jun 14 2019</span></div>


#### `1st candiate version (lot1)`


<hr>

## b2b_v2.0.1

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Wed Jun 12 2019</span></div>

Content : b2b_v2.0.0 with  supported object in extensions

<hr>

## b2b_v2.0.0

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Wed Jun 12 2019</span></div>


#### `B2B - Partners Release - `

#### PSA/Huawei interfacing review:

##### Monitor :
* add the extension and refresh-event support
* remove callback
* add compound trigger support

##### Pull:
* add Telemetry
* add vin to batch resources
* add update-date to batch resources 
* add an extension to telemetry API (resource:  location, alerts, collision, maintenance)


#### PSA Public interface:

##### Monitor:
* add extension
* add compound trigger support

##### Pull:
* add Telemetry
* add vin to batch resources
* add update-date to batch resources 
* add an extension to telemetry API (resource: location, alerts, collision, maintenance).


<hr>

## b2b_v1.0.0

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Tue May 07 2019</span></div>


#### `1st release (B2B)`
* As delivered to Huawei regarding interfacing API
* As delivered to MPH/API team regarding public B2B API