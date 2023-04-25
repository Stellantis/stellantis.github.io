---
layout: doc-article
permalink: /mobile-sdk/sdk-features/trips/
section: mobile-sdk
categorie: SDK Features
title: Trips
description: "Retrieve vehicle trips with connected vehicle mobile SDK."
require: api-reference
mobile-sdk-component: TripNDrive
---

{% include_relative content/mobile-sdk-feature-security-connectivity-v2.html %}

{%- capture trip -%}
      "alerts": [2,59,70], "category": "WORK", 
      "createdAt": "2021-03-30T08:18:20.143Z", "daysUntilNextMaintenance": 27,
      "destination": { "altitude": 1034, "city": "Paris", "country": "France", 
        "date": "2020-11-02T02:50:12.208Z", "intersection": "Rue de Rennes, Boulevard Saint-Germain", 
        "latitude": 8.74301, "longitude": 8.74301, "mileage": 10762, 
        "postalCode": 75019, "quality": 1, "street": "Rue de Rennes", "streetNumber": "16 Bis" },
      "distance": 42, "distanceToNextMaintenance": 596,
      "end": { "altitude": 1034, "city": "Paris", "country": "France", 
        "date": "2020-11-02T02:50:12.208Z", "intersection": "Rue de Rennes, Boulevard Saint-Germain", 
        "latitude": 8.74301, "longitude": 8.74301, "mileage": 10762, 
        "postalCode": 75019, "quality": 1, "street": "Rue de Rennes", "streetNumber": "16 Bis" },
      "fuelAutonomy": 150, "fuelConsumption": 3242500, "fuelLevel": 84,
      "id": 71, "maintenancePassed": true, "mergedIds": [2, 59, 70], "otherEnergyAutonomy": 98, 
      "otherEnergyConsumption": 817, "otherEnergyDistance": 48, "otherEnergyLevel": 20,
      "otherEnergyType": 1, "priceElectric": 0.85, "priceFuel": 1.27, "source": "CEA",
      "start": { "altitude": 1034, "city": "Paris", "country": "France", 
        "date": "2020-11-02T02:50:12.208Z", "intersection": "Rue de Rennes, Boulevard Saint-Germain", 
        "latitude": 8.74301, "longitude": 8.74301, "mileage": 10762, 
        "postalCode": 75019, "quality": 1, "street": "Rue de Rennes", "streetNumber": "16 Bis" },
      "travelTime": 748, "tripNumber": 7, "updatedAt": "2021-03-31T18:07:01.737Z", 
      "user": "uzumaqui.naruto@stellantis.com", "vin": "VR1AB12C3D45678909"
{%- endcapture -%}

{%- capture listOfTrips -%}
{
    "trips": [ // The Response is a List of Trips
      { // First Trip
        {{trip}}
      },
      {  // Second Trip
        {{trip}}
      }
    ]
  }
{%- endcapture -%}

{%- capture tripWithType -%}
{
    "type": "Current",
    "trip": {
        {{trip}}
    }
  }
{%- endcapture -%}

{%- capture tripWithoutType -%}
{
    "trip": {
      {{trip}}
    }
  }
{%- endcapture -%}

Within *Stellantis Connected Vehicles SDK*, **Trips** are records of the **vehicle activity** during a navigation 🗺


You can subscribe to *Trips* when the mobile phone is connected to the vehicle through **Bluetooth**. Then, when a navigation will end in the vehicle infotainment system, a record of the *Trip* will be saved in a dedicated local **database of the mobile phone**.

These records include information about navigation (start, end, destination), alerts, maintenance, autonomy, and consumption.

![navigation-system]({{site.baseurl}}/assets/images/trips-nac.jpg)

## Features

- 🔔 First of all, you need to [subscribe to *Trips*](#subscribe-to-new-trips):
  - This is mandatory in order to receive ending navigation as *Trips* in the **local database** of the mobile phone.
  - An **event** will also be received each time a *Trips* is received in the mobile phone database.
- 💾 Then, you will be able to **work with this local database** using the following APIs:
  - [Retrieve *Trips*](#retrieve-local-trips) in database.
  - [Edit](#edit) trip data (category/price of energy).
  - [Remove](#remove) a Trip you don't need anymore.
  - [Import](#import) a new trip in the database.
  - [Export](#export) *Trips* from the database.
  - [Merge](#merge) *Trips* together or [Unmerge](#unmerge).
- 🔋 It's also possible to [set default energy price](#energy-price).
- 🛠 [Statistics APIs](#statistics) allow retrieving figures about vehicle use during a period of time.

## Subscribe to new *Trips*

If the mobile phone is connected with the vehicle using Bluetooth, it's possible to subscribe to *Trips*. Once the **service is enabled**, when a navigation ends in the vehicle infotainment system:
- The *Trip* will be stored in the mobile phone local database.
- You'll receive an event with the *Trip* data.


Follow this tutorial to **subscribe to vehicle *Trips***:

## 1 - Subscribe: Connection Info

First of all, you should subscribe to *pims.vehicle.connection*. This api **does not connect** the vehicle with the device, but is made to subscribe to upcoming connection events.

It will send **events** when the vehicle connect/disconnect, see [subscribe - pims.vehicle.trips](#4---subscribe-trips).


> **Note:** Starting from [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article), this API has been transferred from *Trips* to *Bluetooth Connectivity* component. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

{%- capture connectionTripResponse -%}
{
    "vin": "VR1AB12C3D4567890",
    "status": "Connected",
    "protocol": "CEA",
    "model": "NAC",
    "version": "1.0.2",
    "privacy": "Full"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.connection"
  request_params_swift="no_params"
  request_params_kotlin="no_params"
  response="null"
  notification=connectionTripResponse
  component="BTConnectivity"
%}

## 2 - Subscribe: Errors

Then, you should subscribe to *pims.vehicle.event - tripNDrive*. It's not mandatory, but this API will trigger events when an **error occurs** during the reception of a *Trip*.

Again, this api **does not connect** the vehicle with the device, but is made to subscribe to upcoming events.

{%- capture errorEventRequestKotlin -%}
  Pair("actionType", "tripNDrive")
{%- endcapture -%}

{%- capture errorEventRequestSwift -%}
  "actionType": "tripNDrive"
{%- endcapture -%}

{%- capture eventTripAndDriveResponse -%}
{
    "event": "CEAError <error_code>-<error_subcode> : <error_text>"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.event"
  subname="tripNDrive"
  request_params_swift=errorEventRequestSwift
  request_params_kotlin=errorEventRequestKotlin
  notification=eventTripAndDriveResponse
  response="null"
  component="TripNDrive"
%}

## 3 - Start Service

Before subscribing to *Trips*, it's mandatory to activate *bluetooth* service using the following API:

{%- capture setVehicleServiceKotlin -%}
  Pair("action", "start"),
  Pair("vins", mapOf(
    mapOf(
      Pair("vin", "VR1AB12C3D4567890"),
      Pair("gdpr", true))
    ),
    mapOf(
      Pair("vin", "VR1AB12C3D4567891"),
      Pair("gdpr", false)
    )
  )
{%- endcapture -%}

{%- capture setVehicleServiceSwift -%}
  "action": "tripNDrive",
  "vins": [
  [
      "vin": "VR1AB12C3D4567890",
      "gdpr": true
  ],
  [
      "vin": "VR1AB12C3D4567891",
      "gdpr": false
  ]
  ]
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  component="BTConnectivity"
  type="set"
  name="pims.vehicle.service"
  request_params_swift=setVehicleServiceSwift
  request_params_kotlin=setVehicleServiceKotlin
  response="null"
%}

> **Note:** This API has been released in [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article). Before v2.3, [subscribe-pims.vehicle.trips](#4---subscribe-trips) would include a VIN parameter. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

## 4 - Subscribe: *Trips*

Once subscribed to *[pims.vehicle.connection](#1---subscribe-connection-info)* & *[pims.vehicle.event](#2---subscribe-errors)* and [pims.vehicle.service](#3---start-service) has been activated, you can subscibe to *pims.vehicle.trips*. Subscribing to this API will:
- **Populate** the *Trip* local database. Navigation that ends will be stored in the local database as *Trips*. You can access the database using the [dedicated APIs](#features).
- **Trigger** a new event with information about the *Trip* each time a navigation ends.

This API allows subscribing to **multiples VINs**. If you need to add more VIN to this subscribe, you should unsubscribe first and make a new API request with the updated list.

> **Trip reception error**: when the trip is not successfully received right away after being emitted by the vehicle. The vehicle behavior depends on the **gdpr** parameter:
  - `false`: the trip is stored in the vehicle memory. The vehicle will **retry** to send the trip each time the device is connected, until the trip is successfully received.
  - `true`: the trip is deleted right away.


> **Trip type:** the `type` field inform if this *Trip* has been received just after a navigation ends in the vehicle (`Current`), or if the *Trip* is received after beeing `Stored` in the vehicle memory (check-out *Trip reception error*).

> **New Phone:** any phone connected for the first time to a vehicle will trigger the deletion of all stored *Trip(s)* in the vehicle memory.

{%- capture eventTripRequestKotlin -%}
  Pair("vins", mapOf(
    mapOf(
      Pair("vin", "VR1AB12C3D4567890"),
      Pair("gdpr", true))
    ),
    mapOf(
      Pair("vin", "VR1AB12C3D4567891"),
      Pair("gdpr", false)
    )
  )
{%- endcapture -%}

{%- capture eventTripRequestSwift -%}
  "vins": [
    [
      "vin": "VR1AB12C3D4567890",
      "gdpr": true
    ],
    [
      "vin": "VR1AB12C3D4567891",
      "gdpr": false
    ]
  ]
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.trips"
  request_params_swift=eventTripRequestSwift
  request_params_kotlin=eventTripRequestKotlin
  notification=tripWithType
  response="null"
  component="TripNDrive"
%}


## 5 - Subscribe: Check subscribed vins

If you want to retrieve the list of **VINs subscribed** to [*Subscribe* pims.vehicle.trips](#4---subscribe-trips) in the previous step, you can use the following API:

{%- capture subVinsResponse -%}
[
    {
      "vin": "VR1AB12C3D45678908",
      "gdpr": true
    },
    {
      "vin": "VR1AB12C3D45678909",
      "gdpr": false
    }
  ]
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.vins"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=subVinsResponse
  component="TripNDrive"
%}

## Retrieve Local *Trips*

Once the *Trip* is stored in the mobile's local storage, you can access using the following methods:

#### *Trip* ID

Retrieve *Trip* one by one using *Trip* unique ID.

{%- capture retrieveTripByIDRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "id")
  Pair("id", "<trip_id>")
{%- endcapture -%}

{%- capture retrieveTripByIDRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "id",
  "id": "<trip_id>"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.trip"
  subname="id"
  request_params_swift=retrieveTripByIDRequestSwift
  request_params_kotlin=retrieveTripByIDRequestKotlin
  response=tripWithoutType
  component="TripNDrive"
%}


#### *Trip* Range

Retrieve *Trip* one by one using range (`first` or `last` trip).

{%- capture retrieveTripByRangeRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "range"),
  Pair("range", "last")
{%- endcapture -%}

{%- capture retrieveTripByRangeRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "range",
  "range": "last"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.trip"
  subname="range"
  request_params_swift=retrieveTripByRangeRequestSwift
  request_params_kotlin=retrieveTripByRangeRequestKotlin
  response=tripWithoutType
  component="TripNDrive"
%}

#### List of *Trips*

Retrieve a List of *Trips* that meet the following parameters:
- **from**: include *Trip* starting after this date.
- **to**: include *Trip* ending before this date.
- **offset:** position of the first *Trip*.
- **limit:** postition of the latest *Trip*.
- **category:** filter based on the user categories.
- **query:** sql query on *Trip* fields.

Then you can select the order:
- **orderBy:** select on which field ordering the resut. Default is `id`.
- **order:** select ascending or descending order. Default is `asc`.


{%- capture retrieveTripsRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "trips"),
  Pair("limit", "20"),
  Pair("offset", "40"),
  Pair("from", "2020-04-06T17:15:00Z"),
  Pair("to", "2020-04-06T17:36:00Z"),
  Pair("category", "<custom_user_category>"),
  Pair("query", "<sql_request>")
  Pair("orderBy", "daysUntilNextMaintenance")
  Pair("order", "desc")
{%- endcapture -%}

{%- capture retrieveTripsRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "trips",
  "limit": "20",
  "offset": "40",
  "from": "2020-04-06T17:15:00Z",
  "to": "2020-04-06T17:36:00Z",
  "category": "<custom_user_category>",
  "query": "<sql_request>,
  "orderBy": "daysUntilNextMaintenance,
  "order": "desc
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  subname="trips"
  name="pims.vehicle.trips"
  request_params_swift=retrieveTripsRequestSwift
  request_params_kotlin=retrieveTripsRequestKotlin
  response=listOfTrips
  component="TripNDrive"
%}


## Edit & Remove Local Trips

#### Edit

Editing a *Trip* will modify it in the local storage. This is the data you can edit:
- *Trip* category
- Price of fuel
- Price of electricity

{%- capture editTripsRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "edit"),
  Pair("ids", mapOf(3, 9, 67)),
  Pair("data", mapOf(
    Pair("category", "WORK"),
    Pair("priceFuel", 1.25),
    Pair("priceElectric", 0.89),
  ))
{%- endcapture -%}

{%- capture editTripsRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "edit",
  "ids": [3, 9, 12],
  "data": [
    "category": "WORK",
    "priceFuel": 1.25,
    "priceElectric": 0.89,
  ]
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="edit"
  request_params_swift=editTripsRequestSwift
  request_params_kotlin=editTripsRequestKotlin
  response=listOfTrips
  component="TripNDrive"
%}

#### Remove

Remove *Trips* from the mobile phone local storage using their ID(s):

{%- capture removeTripsRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "remove"),
  Pair("ids", mapOf(3, 9, 67))
{%- endcapture -%}

{%- capture removeTripsRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "remove",
  "ids": [3, 9, 12]
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="remove"
  request_params_swift=removeTripsRequestSwift
  request_params_kotlin=removeTripsRequestKotlin
  response="null"
  component="TripNDrive"
%}

This API always return `result: null`.

## Import & Export Local *Trips*

#### Import

Import *Trips* from a file to the local storage of the mobile phone. This feature is useful in case of changing device.

{%- capture importTripsRequestKotlin -%}
  Pair("action", "import"),
  Pair("file", "<file_name>")
{%- endcapture -%}

{%- capture importTripsRequestSwift -%}
  "action": "remove",
  "file": "<file_name>"
{%- endcapture -%}

{%- capture importTripsResponse -%}
{
    "total": 42,
    "imported": 23
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="import"
  request_params_swift=importTripsRequestSwift
  request_params_kotlin=importTripsRequestKotlin
  response=importTripsResponse
  component="TripNDrive"
%}

#### Export

Export *Trips* from the local storage of the mobile phone to a file:

{%- capture exportTripsRequestKotlin -%}
  Pair("action", "export"),
  Pair("ids", mapOf(3, 9, 67))
{%- endcapture -%}

{%- capture exportTripsRequestSwift -%}
  "action": "export",
  "ids": [3, 9, 12]
{%- endcapture -%}

{%- capture exportTripsResponseSwift -%}
{
    "file": "<data of exported trips>"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="export"
  request_params_swift=exportTripsRequestSwift
  request_params_kotlin=exportTripsRequestKotlin
  response=exportTripsResponseSwift
  component="TripNDrive"
%}

## Merge & Unmerge Local *Trips*

#### Merge

Merge *Trips* in the local storage of the mobile phone. The *Trip* resulting from the merge will look like the following:
- `start` of the first trip of the list
- `end` & `destination` of the last trip of the list
- an average of `distance`, `travelTime` & `fuelConsumption` 
- weighted average by distance of `priceFuel` & `priceElectric`
- other values: last trip of the list

{%- capture mergeTripsRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "merge"),
  Pair("ids", mapOf(3, 9))
{%- endcapture -%}

{%- capture mergeTripsRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "merge",
  "ids": [3, 9]
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="merge"
  request_params_swift=mergeTripsRequestSwift
  request_params_kotlin=mergeTripsRequestKotlin
  response=tripWithoutType
  component="TripNDrive"
%}


#### Unmerge

Unmerge *Trip* in the local storage of the mobile phone, the *Trip* should have been merged before using the previous API.

{%- capture unmergeTripsRequestKotlin -%}
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("action", "unmerge"),
  Pair("id", 3)
{%- endcapture -%}

{%- capture unmergeTripsRequestSwift -%}
  "vin": "VR1AB12C3D4567890",
  "action": "unmerge",
  "ids": 3
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.trips"
  subname="unmerge"
  request_params_swift=unmergeTripsRequestSwift
  request_params_kotlin=unmergeTripsRequestKotlin
  response=listOfTrips
  component="TripNDrive"
%}


## Energy Price

In the *Trip* data, the price of the energy is taken in account.

Before accessing working on trip energy price with *get-pims.vehicle.price* and *set-pims.vehicle.price*, you must select vehicle using this API:

{%- capture setVehicleVinKotlin -%}
  Pair("vin", "VR1AB12C3D45678909")
{%- endcapture -%}

{%- capture setVehicleVinSwift -%}
  "vin": "VR1AB12C3D45678909"
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.vin"
  request_params_swift=setVehicleVinSwift
  request_params_kotlin=setVehicleVinKotlin
  response="null"
  component="VehicleInformation"
%}

> **Note:** This API has been released in [SDK version 2.3]({{site.baseurl}}/mobile-sdk/references/v2-3/#article). Before v2.3, *get-pims.vehicle.price* and *set-pims.vehicle.price* would include a VIN parameter. Check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

#### Read energy Price

The following api allows reading the energy price:

{%- capture getEnergyPriceResponse -%}
{ 
    "priceFuel": 1.27,
    "priceElectric": 0.85
  }
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.price"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=getEnergyPriceResponse 
  component="TripNDrive"
%}

#### Change energy Price

The following api allows changing the energy price:

{%- capture setEnergyPriceRequestKotlin -%}
  Pair("priceFuel", 1.27),
  Pair("priceElectric", 0.85)
{%- endcapture -%}

{%- capture setEnergyPriceRequestSwift -%}
  "priceFuel": 1.27,
  "priceElectric": 0.85
{%- endcapture -%}


{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.price"
  request_params_swift=setEnergyPriceRequestSwift
  request_params_kotlin=setEnergyPriceRequestKotlin
  component="TripNDrive"
%}

## Statistics

Trips component allows retrieving **sum of data** about trips available in the local database, you can request the following figures:
- 🛢 **Consumption** of energy.
- 📏 **Distance** traveled.
- 🕛 **Duration** of the Trips.

Theses API will calculate the sum of requested data during a certain period of time (*day, week, month, year, beginning*), it can help in creating user statistics.

Example for **Trips Consumption**:

{%- capture getConsumptionStatRequestKotlin -%}
  Pair("action", "consumption"),
  Pair("vin", "VR1AB12C3D4567890"),
  Pair("period", "begining")
{%- endcapture -%}

{%- capture getConsumptionStatRequestSwift -%}
  "action": "consumption",
  "vin": "VR1AB12C3D4567890",
  "period": "begining"
{%- endcapture -%}

{%- capture getConsumptionStatResponse -%}
{ 
    "fuelConsumtion": 3600,
    "otherEnergyConsumtion": 3600
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.statistics"
  subname="consumption"
  request_params_swift=getConsumptionStatRequestSwift
  request_params_kotlin=getConsumptionStatRequestKotlin
  response=getConsumptionStatResponse
  component="TripNDrive"
%}