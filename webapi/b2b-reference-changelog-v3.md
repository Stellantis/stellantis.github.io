---
layout: doc-article
permalink: /webapi/b2b/api-reference-v3/changelog/
section: webapi
redirect_from: 
    - /webapi/b2b/api-reference/specification-v3/
    - /webapi/b2b/api-reference-v3/
subsection: b2b
categorie: API Reference v3 
title: Changelog
---



Version|Name
-|-
[b2b_v3.0.6](#b2b_v306) | 3.0.6
[b2b_v3.0.5](#b2b_v305) | 3.0.5
[b2b_v3.0.4](#b2b_v304) | 3.0.4
[b2b_v3.0.3](#b2b_v303) | 3.0.3
[b2b_v3.0.0](#b2b_v300) | Candiate version

<hr>

## b2b_v3.0.6

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Tue Feb 9 2021</span></div>

- Update Typo (Description, Patterns...)
- Update DoorState & mileage object
- Remove collisions API
- Add NextDelayedTime as mandatory for remote Charging
- Add RemoteType WakeUp
- Add 2 new enum for lockedState

<hr>


## b2b_v3.0.5

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Wed Jan 6 2021</span></div>

- Fix door.states enum by vehicle.doorsStates in extendedEventParam object
- Fix alerts enum by vehicle.alerts in extendedEventParam object
- Replacement OnChange by onChange in monitors descriptions
- Replacement Estimate enum to Estimated in lastPosition object

<hr>

## b2b_v3.0.4

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Tue Nov 24 2020</span></div>

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

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Wed Oct 14 2020</span></div>


- Add Open API SPEC (V3) security schemes support.
- Add TimeStamps (query parameter) extension to support period.
- Reduce extension enum list for Telemetry API.
- Add Telemetry Type filtering query parameter to all telemetry getter APIs.
- Add wakeup remote.

## b2b_v3.0.0

<div class="tags has-addons is-pulled-right"><span class="tag is-dark">Published On</span><span class="tag is-info">Tue Mar 24 2020</span></div>

#### `Candiate version`
Spec version : b2b_v3.0.0

