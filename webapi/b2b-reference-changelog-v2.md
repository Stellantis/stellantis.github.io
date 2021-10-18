---
layout: doc-article
permalink: /webapi/b2b/api-reference-v2/changelog/
section: webapi
subsection: b2b
redirect_from: 
    - /webapi/b2b/api-reference/specification-v2/
categorie: API Reference v2
title: Changelog
---


Version|Name
-|-
[b2b_v2.1.1](#b2b_v211) | 2.1.1
[b2b_v2.1.0](#b2b_v210) | 2.1.0
[b2b_v2.0.8](#b2b_v208) | 2.0.8
[b2b_v2.0.7](#b2b_v207) | 2.0.7
[b2b_v2.0.6](#b2b_v206) | 2.0.6
[b2b_v2.0.5](#b2b_v205) | 2.0.5
[b2b_v2.0.3-P6](#b2b_v203-p6) | Fix naming & enums
[b2b_v2.0.3-P5](#b2b_v203-p5) | Misprints & Missing format & Remove collision + profile 
[b2b_v2.0.3-P4](#b2b_v203-p4) | Security & TimeStamp
[b2b_v2.0.3-P3](#b2b_v203-p3) | Align with v3
[b2b_v2.0.3](#b2b_v203) | Candiate version


<hr>

## b2b_v2.1.1

{% include published_on.html date='18 Oct 2021' %}

- Update typo for "depricated"
- Add collisions API & associated monitors
- Remove unused deprecated structure in vehicle.energy
- Set occurence to mandatory for time trigger
- Add unit for engine.speed and environment.air.temp
- Update descirption for all pageSize parameters

<hr>

## b2b_v2.1.0

{% include published_on.html date='28 Jul 2021' %}

- Add driving behavior on V2 API & associated monitor
- Update privacy block for V2
- Add telemetryType for V2
- Update remote navigation command (SENDTONAV)
- Refactoring of odometer & kinetic in telemetry & status
- Update pageSize & pageToken for telemtry & waypoints


<hr>

## b2b_v2.0.8

{% include published_on.html date='25 Jun 2021' %}

- Refactoring of the vehicle structure (Removing unused embedded)
- Update alertEnum
- Update kinetic bloc
<hr>

## b2b_v2.0.7

{% include published_on.html date='19 Apr 2021' %}

- Update pattern for trigger names
- Remove telemetry Links for fleets
- Remove label for GET /Vehicles
- Update alert vehicle list
<hr>

## b2b_v2.0.6

{% include published_on.html date='24 Feb 2021' %}

- Remove fleet/{fid}/telemetries API
<hr>

## b2b_v2.0.5

{% include published_on.html date='9 Feb 2021' %}


- Update Typo (Descriptions, Patterns...)
- Removing onChange for maintenance monitors
- Remove indexRange for /fleets & /fleets/{fid}/vehicles

<hr>

## b2b_v2.0.3-P6

{% include published_on.html date='6 Jan 2021' %}


- Fix door.states enum by vehicle.doorsStates in extendedEventParam object
- Fix alerts enum by vehicle.alerts in extendedEventParam object
- Replacement OnChange by onChange in monitors descriptions
- Replacement Estimate enum to Estimated in lastPosition object


<hr>

## b2b_v2.0.3-P5

{% include published_on.html date='10 Nov 2020' %}


- Delete `createdAt` from odemeter object
- Fix misprint `odemeter` in telemetryExtension
- Fix `includedIn` keyword
- Remove API collision
- Remove Profile feature
- Replacement of `energy` by `energies` in API Status & Telemetries
- Fix missing type for `brand` field in vehicles object
- Replacement of `startdAt` by startedAt in alerts object
- Add missing format for `type: number`

<hr>

## b2b_v2.0.3-P4

{% include published_on.html date='14 Oct 2020' %}

- Add Open API SPEC (V3) security schemes support.
- Temporarily remove time repeat feature in time stamps spec.

<hr>

## b2b_v2.0.3-P3

{% include published_on.html date='21 Sep 2020' %}

#### `Align API B2B v2 with API B2B v2`
Spec version : b2b_v2.0.3-P3

<hr>

## b2b_v2.0.3

{% include published_on.html date='02 Sep 2019' %}


#### `Candiate version`
Spec version : b2b_v2.0.3

