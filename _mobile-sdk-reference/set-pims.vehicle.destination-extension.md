---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.destination
subname: extension
domain: vehicle
type: 
  - set
params:
  - name: action
    required: true
    type: String
    description: Name of the action to perform, in this case `extension`.
    unit-value:
      - extension
    example: extension
  - ref: vin
  - name: preserve
    required: true
    type: Boolean
    description: If this parameter is true, the navigation will be send as soon as the vehicle is connected. Otherwise it will only try once.
    unit-value: n/a
    example: true
  - name: extensionInformation
    required: false
    type: String
    description: The link of address get from external app (Apple Maps, Google Maps, Here WeGo, Waze & Whats3Words).
    unit-value: link
    example: https://goo.gl/maps/8VPNW6yTfHgPPqb16
data: 
  - name: status
    type: Enum of Strings
    description: Indicates the status of request.
    unit-value: 
      - notAvailable
      - sent
      - stored
    example: sent
  - name: reason
    type: String
    description: Description of the failure reason.
    unit-value: 
      - GEOLOC_PRIVATE
      - FULL_PRIVATE
    example: GEOLOC_PRIVATE
error: 
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2205
  - code: 2301
  - code: 2304
  - code: 2341
  - code: 2342
  - code: 2367
short: This api allows sending destination (using Extension) from the mobile phone to the vehicle.
component:
  - SendToNav
---