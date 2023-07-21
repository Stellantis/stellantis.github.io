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
[b2b_v3.0.0](#b2b_v300) | Candiate version

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

## b2b_v3.0.0

{% include published_on.html date='24 Mar 2020' %}

#### `Candiate version`
Spec version : b2b_v3.0.0