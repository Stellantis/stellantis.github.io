---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.informations
subname: O2X
domain: vehicle
type: 
  - get
paramsget:
  - name: actionType
    required: true
    type: String
    description: Action name, in this case `O2X`.
    unit-value: 
      - "O2X: 'get the last saved vehicle information from O2X'"
    example: O2X
data:
  - ref: vin
  - name: receivedAt
    type: String
    description: Receive time.
    unit-value: n/a
    example: "YYYY-MM-DDTHH:MM:SSZ"
  - name: status
    type: String
    description: Vehicle status.
    unit-value:
      - unknown
      - driving
      - parked
      - charging
    example: charging
  - name: currentAlert
    description: CurrentAlert informations.
    type: Object
    fields:
    - name: parkingBrake
      type: Boolean
      description: Is parking brake alert active. 
      example: false
    - name: clusterIssue
      type: Boolean
      description: Is cluster issue alert active. 
      example: false
    - name: stop
      type: Boolean
      description: Is stop alert active. 
      example: true
    - name: batteryCharge
      type: Boolean
      description: Is battery charge alert active. 
      example: true 
    - name: brakeSystemProblem
      type: Boolean
      description: Is brake system problem alert. 
      example: true 
    - name: service
      type: Boolean
      description: Is service alert active. 
      example: false
    - name: batteryTemperature
      type: Boolean
      description: Is  batter temperature alert active. 
      example: true 
    - name: turtleMode
      type: Boolean
      description: Is turtle mode alert active. 
      example: false
  - name: previousAlert
    description: PreviousAlert informations.
    type: Object
    fields:
      - name: parkingBrake
        description: Is parking brake alert was active. 
        type: Boolean
        unit-value: n/a
        example: false
      - name: clusterIssue
        description: Is cluster issue alert was active. 
        type: Boolean
        unit-value: n/a
        example: false
      - name: stop
        description: Is stop alert was active. 
        type: Boolean
        unit-value: n/a
        example: true
      - name: batteryCharge
        description: Is battery charge alert was active. 
        type: Boolean
        unit-value: n/a
        example: true
      - name: brakeSystemProblem
        description: Is brake system problem alert was active. 
        type: Boolean
        unit-value: n/a
        example: true
      - name: service
        description: Is service alert was active. 
        type: Boolean
        unit-value: n/a
        example: false
      - name: batteryTemperature
        description: Is batter temperature alert was active. 
        type: Boolean
        unit-value: n/a
        example: true
      - name: turtleMode
        description: Is turtle mode alert was active. 
        type: Boolean
        unit-value: n/a
        example: false
  - name: data
    description: Data informations.
    type: Object
    fields:
      - name: batterySoc
        description: BatterySoc informations.
        type: Object
        fields:
          - name: value 
            type: String
            description: Battery soc value. 
            unit-value: n/a
          - name: unit
            type: String
            description: Battery soc unit. 
            unit-value: n/a
      - name: systemState
        type: String
        description: System state value. 
        unit-value: 
          - init
          - standby
          - driving
          - charging
          - noticed
          - powerdown
          - sleep
          - unknown
        example: sleep
      - name: batteryState
        type: String
        description: battery state value 
        unit-value: [ready, maintenaceautoid, bootloader, maintenancelogflash, maintenanceexit, maintenanceinit, shutdownwait, bootwait, bootexit, bootinit, errorwait, errorexit, errorinit, chargewait, chargeheatingaftercharging, chargeopenpwrrelays, chargechargingwithheating, chargecharging, chargeclosepwrrelays, chargeheatingforcharging, chargecheckchargerstatus, chargeactivebaltest, chargeexit, chargeinit, downgradedsafetyline, downgradedopenpwrrelays, downgradedheating, downgradedrunning, downgradedclosepwrrelays, downgradedexit, downgradedinit, runwaiting, runsafetyline, runopenpwrrelays, runheating, runrunning, runclosepwrrelays, runexit, runinit, docerror, unknown]
        example: ready
      - name: remainingAutonomy
        description: remainingAutonomy informations.
        type: Object
        fields:
        - name: value
          type: String
          description: Remaining autonomy value. 
          unit-value: n/a
        - name: unit
          type: String
          description: Remaining autonomy unit. 
          unit-value: n/a
      - name: rnd
        type: String
        description: the position of the gearbox  
        unit-value: 
          - unknown
          - reverse
          - neutral
          - drive
        example: neutral
      - name: chargeDelay
        description: chargeDelay informations.
        type: Object
        fields:
        - name: value
          type: String
          description: Charge delay value. 
          unit-value: n/a
        - name: unit
          type: String
          description: Charge delay unit. 
          unit-value: n/a
      - name: parkBrakeStatus
        type: String
        description: Park brake status. 
        unit-value: 
          - activated
          - notActivated
          - unknown
        example: notActivated
      - name: totalOdometer
        description: Total odometer information.
        type: object
        fields:
          - name: value
            type: String
            description: Total odometer value. 
            unit-value: n/a
          - name: unit
            type: String
            description: Total odometer unit. 
            unit-value: n/a
data_example: |-
  {
      "receivedAt": "YYYY-MM-DDTHH:MM:SSZ",
      "status": "charging",
      "currentAlert": {
        "parkingBrake": true,
        "clusterIssue": true,
        "stop": true,
        "batteryCharge": true,
        "brakeSystemProblem": true,
        "service": true,
        "batteryTemperature": true,
        "turtleMode": true
      },
      "previousAlert": {
        "parkingBrake": true,
        "clusterIssue": true,
        "stop": true,
        "batteryCharge": true,
        "brakeSystemProblem": true,
        "service": true,
        "batteryTemperature": true,
        "turtleMode": true
      },
      "data": {
        "batterySoc": {
            "unit": "unit_name",
            "value": 42
        },
        "systemState": "charging",
        "batteryState": "bootloader",
        "remainingAutonomy": {
            "unit": "unit_name",
            "value": 42
        },
        "rnd": "drive",
        "chargeDelay": {
            "unit": "unit_name",
            "value": 42
        },
        "parkBrakeStatus": "activated",
        "totalOdometer": {
            "unit": "unit_name",
            "value": 42
        }
      },
    }
errorget:
  - code: 2001
short: This API allows to retrieve O2X vehicle informations.
component:
  - O2X
---