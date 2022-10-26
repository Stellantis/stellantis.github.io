---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.command
subname: preconditioning
domain: vehicle
type: 
    - set
params:
  - name: action
    required: true
    type: String
    unit-value: 
      - preconditioning
    description: Name of the remote action to perform, in this case `preconditioning`.
    example: preconditioning
  - name: startNow
    required: true
    type: Boolean
    description: Start or stop preconditioning.
    unit-value: 
      - 'true: start preconditioning'
      - 'false: stop preconditioning'
    example: true
  - name: programs
    required: true
    type: List of Objects
    description: Preconditioning program 
    fields:
      - name: hour
        required: true
        type: int
        description: Preconditioning program hour.
        example: 9
        unit-value: n/a
      - name: minute
        unit-value: n/a
        required: true
        type: int
        description: Preconditioning program minute.
        example: 32
      - name: isEnabled
        required: true
        type: Boolean
        description: Indicates if the program is active or no.
        unit-value: n/a
        example: true
      - name: occurrence # #TODO
        required: true
        type: List of Strings 
        description: Occurrence of program.
        unit-value:
          - mon
          - tue
          - wed
          - thu
          - fri
          - sat
          - sun
        example: Daily
      - name: slot
        required: true
        type: int
        description: Order of occurrence.
        example: 3
        unit-value: n/a
textset: |-
 Before sending any remote to vehicle, you should subscribe **pims.vehicle.signal**.
 Use this set of parameters with `pims.vehicle.command` to start or stop preconditioning.
 This remote command is only available for *Low Emission Vehicles (LEV)* and *Electric Vehicles (EV)*.
error:
  - code: 2101
  - code: 2102
  - code: 2000
  - code: 2201
  - code: 2202
  - code: 2203
  - code: 2204
  - code: 2301
  - code: 2302
  - code: 2338
  - code: 2377
  - code: 2329
  - code: 2333
  - code: 2334
  - code: 2335
  - code: 2336
short: This API allows to send remote command to the vehicle.
component: 
  - LongRangeRemote(Remote)
---

