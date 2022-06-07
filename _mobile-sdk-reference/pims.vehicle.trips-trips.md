---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.trips
subname: trips
domain: vehicle
type: 
    - get
paramsget:
  - name: action
    required: true
    type: String
    unit-value: trips
    description: Action name, in this case `trips`.
    example: trips
  - ref: vin
  - name: limit
    description: Number of results (maximum). Required if offset != null.
    required: false
    type: Int
    example: 100
    unit-value: n/a
  - name: offset
    description: Position of the first result.  Required if limit != null.
    required: false
    type: Int
    example: 10
    unit-value: n/a
  - name: from
    required: false
    type: String
    unit-value: date time
    description: Trip's with start datetime greater or equals
    example: '2020-04-06T17:15:00Z'
  - name: to
    required: false
    type: String
    unit-value: date time
    description: Trip's with end datetime less or equals
    example: '2020-04-06T17:36:00Z'
  - name: category
    required: false #TODO 
    type: string
    unit-value: n/a
    description: Category to filter (from user custom categories).
    example: daily
  - name: query
    required: false #TODO 
    type: string
    unit-value: n/a
    description: Custom SQL query using trips fields.
    example: "endmileage IS NOT NULL"
  - name: orderBy
    description: Select a field from the trip format to order the list of results. See response for available fileds. By default `order` is `id`.
    required: false
    type: String
    example: date
    unit-value: Fields of Trip.
  - name: order
    description: Sorts the records in descending or ascending order, `asc` by default.
    required: false
    type: String
    example: asc
    unit-value: 
      - asc
      - desc
dataget:
  - ref: trip
    name: trips
    required: true
    type: List of Trips
    description: Trips informations.
dataget_example: |-
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
errorget: 
  - code: 2001
  - code: 2101
  - code: 2102
textget: |-
 See **Subscribe** [pims.vehicle.trips](#api-pims-vehicle-trips) for more informations about receiving trips in local storage.
short: This API allows to retrieve trips from the local storage.
component:
  - TripNDrive
---