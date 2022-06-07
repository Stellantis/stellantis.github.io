---
name: engine.energyType
privacy: Full Private
type:
  - get
domain: engine
params: none
data:
  - name: electricalEngine
    description: Is this vehicle has an electrical engine?
    type: boolean
    unit-value: n/a
    example: true
  - name: internalCombustionEngine
    description: Is this vehicle has an internal comustion engine?
    type: boolean
    unit-value: n/a
    example: false
  - name: rearEletricalEngine
    description: Is this vehicle has a rear electrical engine?
    type: boolean
    unit-value: n/a
    example: true
  - name: hybridType
    description: Vehicle hybrid type.
    type: int
    unit-value:
      - '0: ''PHEV'''
      - '1: ''MHEV'''
    example: 1
short: This API allows to work with vehicle energy type.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

