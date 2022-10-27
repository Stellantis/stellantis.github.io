---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.trips
domain: vehicle
subname: unmerge
type: 
    - set
paramsset:
  - ref: vin
  - name: action 
    required: true
    unit-value: 
      - unmerge
    type: String
    description: Filter mode, in this case `unmerge`.
    example: unmerge
  - name: id
    required: true
    description: "Trip identifier to unmerge."
    example: 418
    unit-value: n/a
    type: " " #TODO
dataset:
  - ref: trip
    type: List of Objects
    name: trips
    description: List of trips composing resultant after unmerging.
dataset_example: |-
  {
      "trips": [
        { // First Trip
          "alerts": [2, 59, 70],
          "category": "WORK",
          "createdAt": "2021-03-30T08:18:20.143Z",
          "daysUntilNextMaintenance": 27,
          "destination": {
            "altitude": 1034,
            "city": "Paris",
            "country": "France",
            "date": "2020-11-02T02:50:12.208Z",
            "intersection": "Rue de Rennes, Boulevard Saint-Germain",
            "latitude": 8.74301,
            "longitude": 8.74301,
            "mileage":,
            "postalCode": 75019,
            "quality": ,
            "street": "Rue de Rennes",
            "streetNumber": "16 Bis"
          },
          "distance": 42,
          "distanceToNextMaintenance": 596,
          "end": {
            "altitude": 1034,
            "city": "Paris",
            "country": "France",
            "date": "2020-11-02T02:50:12.208Z",
            "intersection": "Rue de Rennes, Boulevard Saint-Germain",
            "latitude": 8.74301,
            "longitude": 8.74301,
            "mileage": 10762,
            "postalCode": 75019,
            "quality": ,
            "street": "Rue de Rennes",
            "streetNumber": "16 Bis"
          },
          "fuelAutonomy": 150,
          "fuelConsumption": 3242500,
          "fuelLevel": 84,
          "id": 71,
          "maintenancePassed": true,
          "mergedIds": "[2, 59, 70]",
          "otherEnergyAutonomy": 98,
          "otherEnergyConsumption": 817,
          "otherEnergyDistance": 48,
          "otherEnergyLevel": 20,
          "otherEnergyType": 1,
          "priceElectric": 0.85,
          "priceFuel": 1.27,
          "source": "CEA",
          "start": {
            "altitude": 1034,
            "city": "Paris",
            "country": "France",
            "date": "2020-11-02T02:50:12.208Z",
            "intersection": "Rue de Rennes, Boulevard Saint-Germain",
            "latitude": 8.74301,
            "longitude": 8.74301,
            "mileage":,
            "postalCode": 75019,
            "quality": ,
            "street": "Rue de Rennes",
            "streetNumber": "16 Bis"
          },
          "travelTime": 748,
          "tripNumber": 7,
          "updatedAt": "2021-03-31T18:07:01.737Z",
          "user": "uzumaqui.naruto@stellantis.com",
          "vin": "VR1AB12C3D45678909"
        },
        { /* Another Trip */ }
      ]
    }
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2372
  - code: 2301
short: This API allows unmerging trips in stored the head-unit, undo `merge` operation.
component:
  - TripNDrive
---