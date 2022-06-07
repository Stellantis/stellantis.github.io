---
privacy: Public
type:
  - get
  - subscribe
name: navigation.recentDestinations
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
    required: true
dataget:
  - name: name
    description: Name of this recent destination.
    unit-value: n/a
    type: string
    example: ' '
  - name: address
    description: Address of this recent destination.
    unit-value: n/a
    type: Object
    example: ' '
  - name: coordinates
    description: Coordinates of this recent destination.
    type: string
    fields:
      - longitude: null
        name: longitude
        description: Next maneuver longitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - latitude: null
        name: latitude
        description: Next maneuver latitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - altitude: null
        name: altitude
        description: Next maneuver altitude.
        type: number
        unit-value: n/a
        example: 8.74301
  - name: mapMatchedCoordinates
    description: Map matched coordinates of this recent destination.
    type: Object
    fields:
      - longitude: null
        name: longitude
        description: Next maneuver longitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - latitude: null
        name: latitude
        description: Next maneuver latitude.
        type: number
        unit-value: n/a
        example: 8.74301
      - altitude: null
        name: altitude
        description: Next maneuver altitude.
        type: number
        unit-value: n/a
        example: 8.74301
datasubscribe:
  - name: action
    unit-value:
      - add
      - remove
    type: Enum of strings
    example: add
    description: Action performed on the recent destination triggering this event.
  - name: location
    description: Location triggering this.
    type: Object
    fields:
      - name: name
        description: Name of this recent destination.
        unit-value: n/a
        type: string
        example: null
      - name: address
        description: Address of this recent destination.
        type: Object
      - name: coordinates
        description: Coordinates of this recent destination.
        unit-value: n/a
        type: string
        example: null
        fields:
          - longitude: null
            name: longitude
            description: Next maneuver longitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - latitude: null
            name: latitude
            description: Next maneuver latitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - altitude: null
            name: altitude
            description: Next maneuver altitude.
            type: number
            unit-value: n/a
            example: 8.74301
      - name: mapMatchedCoordinates
        description: Map matched coordinates of this recent destination.
        type: Object
        fields:
          - longitude: null
            name: longitude
            description: Next maneuver longitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - latitude: null
            name: latitude
            description: Next maneuver latitude.
            type: number
            unit-value: n/a
            example: 8.74301
          - altitude: null
            name: altitude
            description: Next maneuver altitude.
            type: number
            unit-value: n/a
            example: 8.74301
dataget_example: |-
  [
      {
        "name": "Kiran's Club",
        "address": {
          /* Address */
          },
        "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
        "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      },
      {
        "name": "Vishal's Villa",
        "address": {
          /* Address */
          },
        "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
        "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      },
    ]
datasubscribe_example: |-
  {
      "action": "add"
      "location": {
          "name": "Kiran's Club",
          "address": {
            /* Address */
          },
          "coordinates": {"latitude": 8.74301, "longitude": 8.74301}
          "mapMatchedCoordinates": {"latitude": 8.74301, "longitude": 8.74301}
      }
    }
short: This API allows to retrieve recent destinations within the navigation system.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

