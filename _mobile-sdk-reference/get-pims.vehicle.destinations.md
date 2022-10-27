---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.destinations
domain: vehicle
type: 
    - get
params: none
data: 
  - name: destinations
    description: Destinations information.
    type: List of Object
    fields: 
      - name: vin
        description: Vehicle Identification Number.
        type: String
        unit-value: n/a
        example: VR1AB12C3D45678909
      - name: userid
        description: User id value.
        type: String
        unit-value: n/a
        example: user@provider.tld
      - ref: locationCoordinates
        name: location
        description: Location of the destination.
dataget_example: |-
  { 
      "destination": [
        // First Destination
        {
          "vin": "VR1AB12C3D45678909",
          "userid": "user@provider.tld"
          "location": {
            "latitude": "trustedPhone",
            "longitude": "2.2151043",
            "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
          }
        },
        // Second Destination
        {
          "vin": "VR2AB12C3D45678909",
          "userid": "otheruser@provider.tld"
          "location": {
            "latitude": "37.32772",
            "longitude": "12.0432151",
            "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
          }
        },
      ]
    }
error: 
  - code: 2001
  - code: 2301
short: |- 
  This api allows retrieving the list of stored navigations. Navigation are stored when the vehicle was not reachable when sending a navigation using **pims.vehicle.destination**. 
  
  See **pims.vehicle.destination - Coordinate** or **pims.vehicle.destination - Extension**.
component:
  - SendToNav
---