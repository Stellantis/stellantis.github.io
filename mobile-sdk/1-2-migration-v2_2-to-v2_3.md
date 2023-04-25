---
layout: doc-article
permalink: /mobile-sdk/overview/migration-v2-2-to-v2-3/
section: mobile-sdk
categorie: Overview
title: Migration v2.2 to v2.3
require: api-reference
description: "Migration from Stellantis Connected Vehicles SDK from 2.2 to 2.3."
---

This page list the breaking changes introduced **from v2.2 to v2.3** of of *Stellantis Connected Vehicles SDK*. The following APIs should be modified in your integration when updating the SDK. If you are looking for new features introduced in v2.3, check-out the [changelog]({{site.baseurl}}/mobile-sdk/references/changelog/#v23).

- Enabling the Bluetooth Service
- Selecting VINs

## SendToNav - Set - pims.vehicle.service

- This API now allows to work with all bluetooth services (except O2X), not only SendToNav.
- The ***"vins"*** object has been added as a new parameter.

{%- capture setVehicleServiceKotlin -%}
  Pair("action", "start"),
  Pair("service", "bluetooth"),
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
  "action": "start",
  "service": "bluetooth",
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
  sdk_version="2.3"
%}

## TripNDrive - Subscribe - pims.vehicle.trips

- This API doesn't start TripNDrive service anymore. You should use [set-pims.vehicle.service](#sendtonav---set---pimsvehicleservice).
- The ***"vins"*** object parameter has been removed.

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

{%- capture tripWithType -%}
{
    "type": "Current",
    "trip": {
        {{trip}}
    }
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="subscribe"
  name="pims.vehicle.trips"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  notification=tripWithType
  response="null"
  component="TripNDrive"
  sdk_version="2.3"
%}

## SendToNav/TripNDrive/Carkey - Set - pims.vehicle.vin

- This API allows to select a vehicle before using another API.

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
  sdk_version="2.3"
%}

## TripNDrive - Get - pims.vehicle.price

- This API now require first setting vin with [set-pims.vehicle.vin](#sendtonavtripndrivecarkey---set---pimsvehiclevin).
- The ***"vin"*** parameter has been removed.

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
  sdk_version="2.3"
%}

## TripNDrive - Set - pims.vehicle.price

- This API now require first setting vin with [set-pims.vehicle.vin](#sendtonavtripndrivecarkey---set---pimsvehiclevin).
- The ***"vin"*** parameter has been removed.

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
  sdk_version="2.3"
%}

## SendToNav - Get - pims.vehicle.privacy

- This API now require first setting vin with [set-pims.vehicle.vin](#sendtonavtripndrivecarkey---set---pimsvehiclevin).
- The ***"vin"*** parameter has been removed.
- This API has been transferred from *SendToNav* to *BTConnectivity* component.

{%- capture getPrivacyResponse -%}
{ 
    "privacy": "fullPrivate"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.privacy"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=getPrivacyResponse
  component="BTConnectivity"
  sdk_version="2.3"
%}

## SendToNav - Set - pims.vehicle.destination

- This API now require first setting VIN with [set-pims.vehicle.vin](#sendtonavtripndrivecarkey---set---pimsvehiclevin).
- The ***"vin"*** parameter has been removed.
- These changes affects **[pims.vehicle.destination-extension]({{site.baseurl}}/mobile-sdk/references/v2-3/sendtonav-set-pims-vehicle-destination-extension/#article)** & **[pims.vehicle.destination-coordinates]({{site.baseurl}}/mobile-sdk/references/v2-3/sendtonav-set-pims-vehicle-destination-coordinate/#article)**.

{%- capture destinationExtensionRequestKotlin -%}
  Pair("action", "extension"),
  Pair("preserve", true),
  Pair("extensionInformation", "https://goo.gl/maps/8VPNW6yTfHgPPqb16")
{%- endcapture -%}

{%- capture destinationExtensionRequestSwift -%}
  "action": "extension",
  "preserve": true,
  "extensionInformation": "https://goo.gl/maps/8VPNW6yTfHgPPqb16"
{%- endcapture -%}

{%- capture destinationExtensionResponse -%}
{
    "status": "sent"
  }
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="set"
  name="pims.vehicle.destination"
  subname="extension"
  request_params_swift=destinationExtensionRequestSwift
  request_params_kotlin=destinationExtensionRequestKotlin
  response=destinationExtensionResponse
  component="SendToNav"
  sdk_version="2.3"
%}

## Carkey - Get - pims.vehicle.carkey

- This API now require first setting vin with [set-pims.vehicle.vin](#sendtonavtripndrivecarkey---set---pimsvehiclevin).
- The ***"vin"*** parameter has been removed.

{%- capture checkAuthResponse -%}
{ 
    "isCarKeyVerified": "true",
    "cvsStatus": "active",
    "maxReactivationDate": "2021-07-29T22:25:09.898Z"
  } 
{%- endcapture -%}

{% include api-reference-code-sample.html
  sdk_name=page.section
  type="get"
  name="pims.vehicle.carkey"
  request_params_swift='no_params'
  request_params_kotlin='no_params'
  response=checkAuthResponse
  component="Carkey"
  sdk_version="2.3"
%}