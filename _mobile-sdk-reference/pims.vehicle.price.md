---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.price
domain: vehicle
type: 
  - get
  - set
paramsget:
  - ref: vin
paramsset:
  - ref: vin
  - name: priceFuel
    type: Number
    description: Price for fuel.
    unit-value: n/a
    example: 1.27
    required: true
  - name: priceElectric
    type: Number
    description: Price for electricity.
    unit-value: n/a
    example: 0.85
    required: true
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
textset: Edition will be done only in field is present.
errorset:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
  - code: 2378
errorget:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2344
short: This API allows to access and modify default fuel/electricity price.
component: 
  - TripNDrive
---