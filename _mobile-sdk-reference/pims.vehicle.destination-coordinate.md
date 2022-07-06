---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.destination
subname: coordinate
domain: vehicle
type: 
  - set
params:
  - name: action
    required: true
    type: String
    description: Name of the action to perform, in this case `coordinate`.
    unit-value:
      - coordinate
    example: coordinate
  - ref: vin
  - name: preserve
    required: true
    type: Boolean
    description: If this parameter is true, the navigation will be send as soon as the vehicle is connected. Otherwise it will only try once.
    unit-value: n/a
    example: true
  - name: location
    type: Object
    required: true
    description: Destination Location.
    fields:
      - name: latitude
        description: latitude value
        type: Double
        unit-value: n/a
        example: 48.77232
        required: true
      - name: longitude 
        description: longitude value
        type: Double
        unit-value: n/a
        example: 2.2151043
        required: true
paramsset_example:
  kotlin: |-
    Pair("action", "coordinate"),
        Pair("vin", "VR1AB12C3D4567890"),
        Pair("preserve", true),
        Pair("coordinate", map0f(
          // coordinates
          Pair("latitude", "48.77232"),
          Pair("longitude", "2.2151043"),
        )
  swift: |-
    "action": "coordinate"
        "vin": "VR1AB12C3D4567890",
        "preserve": true,
        "coordinate": [
          // coordinates
          "latitude": "48.77232",
          "longitude": "2.2151043",
        ]
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
    type: string
    description: Description of the failure reason.
    unit-value: 
      - GEOLOC_PRIVATE
      - FULL_PRIVATE
    example: GEOLOC_PRIVATE
error: 
  - code: 2101
  - code: 2102
  - code: 2205
  - code: 2301
  - code: 2304
  - code: 2341
  - code: 2342
  - code: 2367
short: This api allows sending a navigation (using Coordinates) from the mobile phone to the vehicle.
component:
  - SendToNav
---