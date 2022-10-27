---
privacy: Public
type:
  - get
  - set
  - subscribe
name: navigation.favoriteDestinations
domain: navigation
paramsget:
  - name: locationAttributes
    description: Location attributes to output in response.
    type: Array of strings
    unit-value:
      - address
      - coordinates
      - mapMatchedCoordinates
    example: '[''address'', ''coordinates'', ''mapMatchedCoordinates'']'
    required: false
dataget:
  - name: name
    description: Name of this favorite location.
    unit-value: n/a
    type: string
    example: favorite1
  - name: address
    description: Address of this favorite location.
    type: Object
    unit-value: n/a
    example: ' '
  - name: coordinates
    description: Coordinates of this favorite location.
    type: string
    fields:
      - name: longitude
        description: Next maneuver longitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: latitude
        description: Next maneuver latitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: altitude
        description: Next maneuver altitude.
        type: number
        unit-value: n/a
        example: 8.74301
  - name: mapMatchedCoordinates
    description: Map matched coordinates of this favorite location.
    type: Object
    fields:
      - name: longitude
        description: Next maneuver longitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: latitude
        description: Next maneuver latitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: altitude
        description: Next maneuver altitude.
        type: number
        unit-value: n/a
        example: 8.74301
datasubscribe:
  - name: action
    unit-value:
      - add
      - change
      - remove
    type: Enum of strings
    example: add
    description: Action performed on the favorite triggering this event.
  - name: location
    description: Location triggering this.
    type: Object
    fields:
      - name: name
        description: Name of this favorite location.
        unit-value: n/a
        type: string
        example: null
      - name: address
        description: Address of this favorite location.
        ref: null
        type: Object
      - name: coordinates
        description: Coordinates of this favorite location.
        unit-value: n/a
        type: string
        example: null
        fields:
          - name: longitude
            description: Next maneuver longitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: latitude
            description: Next maneuver latitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: altitude
            description: Next maneuver altitude.
            type: number
            unit-value: n/a
            example: 8.74301
      - name: mapMatchedCoordinates
        description: Map matched coordinates of this favorite location.
        type: Object
        fields:
          - name: longitude
            description: Next maneuver longitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: latitude
            description: Next maneuver latitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: altitude
            description: Next maneuver altitude.
            type: number
            unit-value: n/a
            example: 8.74301
dataget_example: |-
  [
      {
        "name": "Kiran's Club",
        "address": {
          /* ApiKitTypes::SAddress */
          },
        "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
        "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      },
      {
        "name": "Vishal's Villa",
        "address": {
          /* ApiKitTypes::SAddress */
          },
        "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
        "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      },
    ]
datasubscribe_example: |-
  {
      "action": "change"
      "location": {
          "name": "Kiran's Club",
          "address": {
            /* ApiKitTypes::SAddress */
          },
          "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
          "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      }
    }
paramsset:
  - name: action
    unit-value:
      - add
      - change
      - remove
    description: Action to perform.
    type: Enum of String
    example: add
    required: true
  - name: location
    description: Location Object to remove. Only if `action = remove`
    type: Object
    required: false
    fields:
      - name: name
        type: string
        description: Name of the favorite location to remove.
        unit-value: n/a
        required: true
        example: Egor's Castle
  - name: location
    description: Location Object to add/change. Only if `action = add` or `action = change`
    type: Object
    required: true
    fields:
      - name: name
        type: string
        description: Name of the favorite location to `add/change`.
        unit-value: n/a
        required: true
        example: Egor's Castle
      - name: address
        type: string
        description: >-
          Name of the favorite location to `add/change`. Only one between
          address and coordinates should be provided.
        ref: null
        required: true
      - name: coordinates
        description: >-
          Coordinates of the favorite location to `add/change`. Only one between
          address and coordinates should be provided.
        unit-value: n/a
        type: string
        fields:
          - name: longitude
            description: Next maneuver longitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: latitude
            description: Next maneuver latitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - name: altitude
            description: Next maneuver altitude.
            type: number
            unit-value: n/a
            example: 8.74301
dataset: none
paramsset_example: |-
  {
    "action": "add"
    "location": {
        "name": "Egor's Castle",
        // Only ONE (address OR coordinates) of the following field MUST be provided
        "address": {
          /* ApiKitTypes::SAddress */
        },
        "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
  }
textset: >
  Providing Address & Coordinates together will produce a 400 Bad Request error
  (provide only one!)
short: This API allows to manage favorite location.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

