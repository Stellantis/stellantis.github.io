---
privacy: Public
type:
  - get
  - set
  - subscribe
name: navigation.guidanceCriteria
domain: navigation
params: none
data:
  - name: avoidTollRoads
    type: boolean
    description: Avoids toll roads.
    unit-value: n/a
    example: false
  - name: avoidFerries
    type: boolean
    description: Avoids ferries.
    unit-value: n/a
    example: false
  - name: avoidHOVLanes
    type: boolean
    description: Avoids hight occupancy lanes.
    unit-value: n/a
    example: false
  - name: avoidUnpavedRoads
    type: boolean
    description: Avoids unpaved roads.
    unit-value: n/a
    example: true
  - name: avoidMotorways
    type: boolean
    description: Avoids motorways roads.
    unit-value: n/a
    example: false
  - name: routeType
    type: boolean
    description: Type of route.
    unit-value:
      - '0: Shortest'
      - '1: Fatest'
      - '2: Eco'
    example: 1
  - name: reroutingMode
    type: boolean
    description: Mode of rerouting.
    unit-value:
      - '1: auto, will rerout without confirmation.'
      - '2: manual, will ask confirmation for rerouting.'
    example: 1
dataset: none
paramsset:
  - name: avoidTollRoads
    type: boolean
    description: Avoids toll roads.
    unit-value: n/a
    example: false
    required: false
  - name: avoidFerries
    type: boolean
    description: Avoids ferries.
    unit-value: n/a
    example: false
    required: false
  - name: avoidHOVLanes
    type: boolean
    description: Avoids hight occupancy lanes.
    unit-value: n/a
    example: false
    required: false
  - name: avoidUnpavedRoads
    type: boolean
    description: Avoids unpaved roads.
    unit-value: n/a
    example: true
    required: false
  - name: avoidMotorways
    type: boolean
    description: Avoids motorways roads.
    unit-value: n/a
    example: false
    required: false
  - name: routeType
    type: boolean
    description: Type of route.
    unit-value:
      - '0: Shortest'
      - '1: Fatest'
      - '2: Eco'
    example: 1
    required: false
  - name: reroutingMode
    type: boolean
    description: Mode of rerouting.
    unit-value:
      - '1: auto, will rerout without confirmation.'
      - '2: manual, will ask confirmation for rerouting.'
    example: 1
    required: false
short: This API allows to interact with current navigation guidance criteria.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

