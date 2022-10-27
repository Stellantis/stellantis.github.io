---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.trips
domain: vehicle
type: 
    - subscribe
paramssubscribe:
  - name: vins
    description: List of vehicle's VIN to subscribe with the GDPR rule.
    required: true
    type: Array of Objects
    fields:
      - name: vin
        required: true
        description: Vehicle Identification Number.
        type: String
        unit-value: n/a
        example: VR1AB12C3D4567890
      - name: gdpr
        type: boolean
        description: GDRP setting for the associated vehicle's vin. If `false`, when a trip is not receive it will be received until success when the device connect with the vehicle, if `true` the trip is lost.
        unit-value: n/a
        example: true
        required: true
datasubscribe:
  - name: type
    type: Enum of Strings
    description: "Inform if this *Trip* has been received just after a navigation ends in the vehicle (`Current`), or if the *Trip* is received after beeing `Stored` in the vehicle memory."
    unit-value: 
      - Current
      - Stored
      - Unknown
    example: Current
  - ref: trip 
    name: trip
    required: true
    description: Trip informations.
datasubscribe_example: |-
  {
      "type": "Current",
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
textsubscribe: |-
  Subscribing to this API allows to receive an event when a new **trips ends** in the head-unit (destination reached or trip canceled).

  It launch discover under VINs passed as parameters to connect and receive notifications about trips.

  The **unsubscribe** api stop current connections and discover proccess and removes registration on trips notifications.
errorsubscribe:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
  - code: 2005
short: This API allows to receive events when a trip ends in the vehicle.
component:
  - TripNDrive
---