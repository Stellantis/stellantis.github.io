---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.coordinate
domain: vehicle
type: 
  - get
params:
  - name: extensionInformation
    required: true
    type: String
    description: Link of the address get from an external application.
    example: https://goo.gl/maps/8VPNW6yTfHgPPqb16
    unit-value: n/a
data:
  - ref: locationCoordinates
    name: location
    description: Location of the destination.
dataget_example: |-
  { 
      "location": {
          "latitude": 48.77232,
          "longitude":  2.2151043,
          "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
      }
    }
error:
  - code: 2001
  - code: 2101
  - code: 2102
  - code: 2205
short: This API allows to retrieve coordinates from ShaeExtension (Apple Maps, Google Maps, Here WeGo, Waze & Whats3Words). Depending on the link the response can also contain an address field.
component:
  - SendToNav
---