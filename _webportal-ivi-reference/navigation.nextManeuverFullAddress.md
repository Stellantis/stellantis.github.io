---
privacy: Public
type:
  - get
  - subscribe
name: navigation.nextManeuverFullAddress
domain: navigation
params: none
data:
  - name: exit
    type: Object
    description: Next exit.
    fields:
      - name: status
        type: String
        unit-value:
          - VALID
          - INVALID
        description: Next exit status.
        example: VALID
      - name: type
        type: String
        unit-value:
          - NONE
          - LEFT
          - RIGHT
          - TEXT
        description: Next exit type.
        example: LEFT
      - name: number
        type: String
        unit-value: n/a
        description: Next exit number.
        example: Exit A42
  - ref: roadShield
    name: instructionRoadShield
    description: Current road information.
  - name: instructionRoadName
    type: String
    unit-value: n/a
    description: Name of the current street.
    example: rue de Paris
  - name: instructionDistance
    type: Array of objects
    description: Distance to next waypoint.
    fields:
      - name: status
        type: String
        unit-value: n/a
        description: Distance to next waypoint status.
        example: null
      - name: integerPart
        type: String
        unit-value: n/a
        description: Distance to next waypoint integer value.
        example: 42
      - name: fractionalPart
        type: String
        unit-value: n/a
        description: Distance to next waypoint fractional value.
        example: 34
      - name: unit
        type: String
        unit-value:
          - KILOMETERS
          - METERS
          - MILES
          - YARDS
        description: Distance to next waypoint unit.
        example: KILOMETERS
  - name: instructionDirection
    type: String
    unit-value:
      - UNKNOWN
      - See values list below.
    description: Current instruction direction in the navigation.
    example: right
  - name: laneGuidance
    type: Array of objects
    description: Lane guidance information.
    fields:
      - name: directionType
        type: String
        unit-value:
          - UNKNOWN
          - See values list below.
        description: Lane guidance direction instruction.
        example: STRAIGHT
      - name: toFollow
        type: boolean
        unit-value: n/a
        description: Lane guidance to follow parameter.
        example: false
  - name: drivingSide
    type: String
    unit-value:
      - UNKNOWN
      - LEFT
      - RIGHT
    description: Current driving side on the road.
    example: RIGHT
  - ref: roadShield
    name: secondaryRoadShield
    description: Secondary road information.
  - name: instructionTowardsName
    type: String
    unit-value: n/a
    description: ' '
    example: Gran Via de Vigo
  - name: coordinates
    type: Object
    description: Current position coordinates of the vehicle.
    fields:
      - name: longitude
        description: Current longitude of the vehicle.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: latitude
        description: Current latitude of the vehicle.
        type: number
        unit-value: n/a
        example: 8.74301
  - name: intersectionName
    type: String
    unit-value: n/a
    description: Name of the intersection.
    example: Stellantis Cross-road
data_example: |-
  {
    "exit": {
        "status": "INVALID",
        "type": "NONE",
        "number": "Exit A42"
    },
    "instructionRoadShield": {
        "status": "INVALID",
        "roadNumber": "D394",
        "iconSetId": "...",
        "affixList": [
            { "type": "NORTH", "content": "example_data_1" },
            { "type": "NORTH", "content": "example_data_2" }
        ]
    },
    "instructionRoadName": "rue de Paris",
    "instructionDistance": {
        "status": "INVALID",
        "integerPart": 42,
        "fractionalPart": 34,
        "unit": "KILOMETERS"
    },
    "instructionDirection": "right",
    "laneGuidance": [
        { "directionType": "STRAIGHT","toFollow": false },
        { "directionType": "STRAIGHT", "toFollow": false },
        { "directionType": "STRAIGHT", "toFollow": false },
        { "directionType": "RIGHT", "toFollow": true },
        { "directionType": "RIGHT", "toFollow": tru e}
    ],
    "drivingSide": "RIGHT",
    "secondaryRoadShield": {
        "status": "INVALID",
        "roadNumber": "D394",
        "iconSetId": "...",
        "affixList": [
            { "type": "NORTH", "content": "example_data_1" },
            { "type": "NORTH", "content": "example_data_2" }
        ]
    },
    "instructionTowardsName": "Gran Via de Vigo",
    "coordinates": {
        "latitude": 42.24375034099321,
        "longitude": -8.721478119598396
    },
    "intersectionName": "Stellantis Cross-road"
  }
short: This API allows to retrieve next maneuver address.
---

List of `instructionDirection` values: 

```json 
{
  "instructionDirectionEnum": ["UNKNOWN", "STRAIGHT", "BEAR_RIGHT", "RIGHT", "SHARP_RIGHT", "RIGHT_U_TURN", "BEAR_LEFT", "LEFT", "SHARP_LEFT", "LEFT_U_TURN", "ROUNDABOUT_STRAIGHT", "ROUNDABOUT_STRAIGHT_UK", "ROUNDABOUT_BEAR_RIGHT"
  "ROUNDABOUT_BEAR_RIGHT_UK", "ROUNDABOUT_RIGHT", "ROUNDABOUT_RIGHT_UK", "ROUNDABOUT_SHARP_RIGHT", "ROUNDABOUT_SHARP_RIGHT_UK", "ROUNDABOUT_BEAR_LEFT", "ROUNDABOUT_BEAR_LEFT_UK", "ROUNDABOUT_LEFT"
  "ROUNDABOUT_LEFT_UK", "ROUNDABOUT_SHARP_LEFT", "ROUNDABOUT_SHARP_LEFT_UK", "ROUNDABOUT_U_TURN", "ROUNDABOUT_U_TURN_UK", "BIFURCATION_BEAR_RIGHT", "BIFURCATION_KEEP_RIGHT", "BIFURCATION_KEEP_RIGHT_LANE"
  "BIFURCATION_BEAR_LEFT", "BIFURCATION_KEEP_LEFT", "BIFURCATION_KEEP_LEFT_LANE", "ARRIVAL", "ARRIVAL_WAY_POINT", "FREEWAY", "FERRY", "CHAIN_INSTRUCTION_RIGHT_THEN_TURN_RIGHT"
  "CHAIN_INSTRUCTION_RIGHT_THEN_TURN_LEFT", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_NEXT_STOP", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_DESTINATION", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_FERRY"
  "CHAIN_INSTRUCTION_RIGHT_THEN_ENTER_MOTORWAY", "CHAIN_INSTRUCTION_RIGHT_THEN_ENTER_FREEWAY", "CHAIN_INSTRUCTION_LEFT_THEN_TURN_RIGHT", "CHAIN_INSTRUCTION_LEFT_THEN_TURN_LEFT"
  "CHAIN_INSTRUCTION_LEFT_THEN_REACH_NEXT_STOP", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_DESTINATION", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_FERRY", "CHAIN_INSTRUCTION_LEFT_THEN_ENTER_MOTORWAY"
  "CHAIN_INSTRUCTION_LEFT_THEN_ENTER_FREEWAY", "SECOND_RIGHT", "THIRD_RIGHT", "SECOND_LEFT", "THIRD_LEFT", "DRIVER_ROUTE", "BIFURCATION_MERGE_RIGHT_LANE", "BIFURCATION_MERGE_LEFT_LANE"
  "ARRIVAL_RIGHT", "ARRIVAL_LEFT", "ARRIVAL_WAYPOINT_RIGHT", "ARRIVAL_WAYPOINT_LEFT", "CARTRAIN", "TOLLROAD", "RESTRICTED_AREA", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_ARRIVAL_RIGHT"
  "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_ARRIVAL_LEFT", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_ARRIVAL_WAYPOINT_RIGHT", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_ARRIVAL_WAYPOINT_LEFT"
  "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_CARTRAIN", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_TOLLROAD", "CHAIN_INSTRUCTION_RIGHT_THEN_REACH_RESTRICTED_AREA", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_ARRIVAL_RIGHT"
  "CHAIN_INSTRUCTION_LEFT_THEN_REACH_ARRIVAL_LEFT", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_ARRIVAL_WAYPOINT_RIGHT", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_ARRIVAL_WAYPOINT_LEFT"
  "CHAIN_INSTRUCTION_LEFT_THEN_REACH_CARTRAIN", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_TOLLROAD", "CHAIN_INSTRUCTION_LEFT_THEN_REACH_RESTRICTED_AREA" ]
}
```

List of `laneGuidance.directionType` values: 

```json 
{
  "laneGuidanceDirectionTypeEnum": ["UNKNOWN", "STRAIGHT", "STRAIGHT_FLIPPED", "BEAR_RIGHT", "RIGHT", "SHARP_RIGHT", "RIGHT_U_TURN", "BEAR_LEFT", "LEFT", "SHARP_LEFT",
  "LEFT_U_TURN", "CONDENSED_STRAIGHT", "CONDENSED_STRAIGHT_FLIPPED", "CONDENSED_BEAR_RIGHT", "CONDENSED_RIGHT", "CONDENSED_SHARP_RIGHT", "CONDENSED_RIGHT_U_TURN",
  "CONDENSED_BEAR_LEFT", "CONDENSED_LEFT", "CONDENSED_SHARP_LEFT", "CONDENSED_LEFT_U_TURN"]
}
```
