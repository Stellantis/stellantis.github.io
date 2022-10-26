---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.price
domain: vehicle
type: 
  - get
paramsget:
  - ref: vin
dataget:
  - name: priceFuel
    type: Number
    description: Price for fuel.
    unit-value: n/a
    example: 1.27
  - name: priceElectric
    type: Number
    description: Price for electricity.
    unit-value: n/a
    example: 0.85
errorget:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
short: This API allows to retrieve the value of fuel/electricity price.
component: 
  - TripNDrive
---