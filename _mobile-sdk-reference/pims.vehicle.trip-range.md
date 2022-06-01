---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.trip
domain: vehicle
subname: range
type: 
    - get
paramsget:
  - ref: vin
  - name: action
    required: true
    type: String
    description: Filter mode, in this case `range`.
    example: range
    unit-value: 
      - range
  - name: range
    required: false
    type: String
    description: Trip's position in database.
    example: Last
    unit-value:
      - first
      - last
data: 
  - ref: trip 
    name: trip
    description: Trip informations.
data_example: |-
  {
      "trip": {
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
          "mileage": 10762,
          "postalCode": 75019,
          "quality": 1,
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
          "quality": 1,
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
          "mileage": 10762,
          "postalCode": 75019,
          "quality": 1,
          "street": "Rue de Rennes",
          "streetNumber": "16 Bis"
        },
        "travelTime": 748,
        "tripNumber": 7,
        "updatedAt": "2021-03-31T18:07:01.737Z",
        "user": "uzumaqui.naruto@stellantis.com",
        "vin": "VR1AB12C3D45678909"
      }
    }
errorget:
  - code: 2001
  - code: 2101
  - code: 2102
# errorset: #TODO
short: This api allows to retrieve first and last trip in the local storage. See **Subscribe** [pims.vehicle.trips](#api-pims-vehicle-trips) for more informations about receiving trips in local storage.
component: 
  - TripNDrive
---