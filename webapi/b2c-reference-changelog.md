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
[b2c_v4.10.1](#b2c_v4101) | 4.10.1
[b2c_v4.0.0](#b2c_v400) | 4.0.0

<hr>

## b2c_v4.10.1

{% include published_on.html date='17 Oct 2023' %}

**Vehicles API**
- Deprecate brand/label/pictures data
- Add extension to manage onboardCapabilities, branding, pictures data
- Add query parameter extension
- Add query parameter vinPrefix for /user/vehicles

**Status API**
- Deprecate service, preconditioning and energy objects
- Add energies, drivingBehavior, lightingSystem, alarm, powertrain, engines objects
- Remove extension odometer & kinetic which are now available at root level of status object
- Add updatedAt value at root level of status object
- Ignition - Rename updatedAt by createdAt in ignition object
- Ignition - Remove unnecessary free enum value for ignition.type
- Last position - Remove updatedAt date in lastPosition
- Last position - Move createdAt date from lastPosition to lastPosition.properties
- Last position - Add fixStatus in lastPosition.properties
- Environment - Remove updatedAt date
- Environment - Move createdAt date from enviroment to environment.air and environment.luminosity
- Safety - Remove betlWarning that is replaced by beltStatus
- Safety - Remove eCallTriggeringRequest that is replaced by autoECallTriggering
- Battery - Remove battery.current value
- Kinetic - Remove pace data
- DoorState - Remove updatedAt that is replaced by createdAt
- DoorState - Remove lockedState that is replaced by lockedStates
- Preconditionning - Remove updatedAt that is replaced by createdAt
- Preconditionning - Deprecated updatedAt date

**Monitor API**
- Add GET /user/vehicles/{id}/callbacks/{cbid}/monitors
- Add POST/user/vehicles/{id}/callbacks/{cbid}/monitors
- Add PUT/user/vehicles/{id}/callbacks/{cbid}/monitors/{mid}
- Add GET/user/vehicles/{id}/callbacks/{cbid}/monitors/{mid}
- Add DELETE/user/vehicles/{id}/callbacks/{cbid}/monitors/{mid}
- Add PUT/user/vehicles/{id}/callbacks/{cbid}/monitors/{mid}/status

**Callback API**
- GET/user/callbacks
- POST/user/callbacks
- PUT/user/callbacks/{cbid}
- GET/user/callbacks/{cbid}
- DELETE/user/callbacks/{cbid}
- PUT/user/callbacks/{cbid}/status

<hr>

## b2c_v4.0.0

{% include published_on.html date='11 Apr 2019' %}

**Candidate Version**

<hr>

