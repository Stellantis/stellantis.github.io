---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.signal
domain: vehicle
type: 
  - subscribe
params: none
data:
  - name: code
    type: Boolean
    description: indicates the response code status.
    example: 200
    unit-value: 
       - 900
       - 901
       - 902
       - 903
       - 200
  - ref: vehicle
    type: Object
    name: vehicle
    description: Vehicle informations.
data_example: |-
  {
      "code": 200,
      "vehicle": {
       "resources": {
          "status": {
            "lastUpdate": "2022-02-14T13':'41':58Z",
            "fuelInformation": {
              "autonomy":145.0,
              "chargingInformation": {
                "chargingMode":null,
                "chargingRate":0.0,
                "isPlugged":false,
                "chargingState":null,
                "remainingTime": "PT0S"
              },
              "chargingLevel":42.0,
              "lastUpdate": "2022-02-14T13':'41':57Z",
              "consumption":0.0,
              "type": "fuel"
            },
            "doorStateInformation": {
              "isDriverDoorOpened": false,
              "isPassengerDoorOpened": false,
              "isRearLeftDoorOpened": false,
              "isRearRightDoorOpened": false,
              "isRearWindowOpened": false,
              "isRoofWindowOpened": false,
              "isTrunkOpened": false,
              "state": [
                  "Locked"
              ]
            },
            "precondInformation": {
              "lastUpdate": "2022-02-14T13':'41':57Z",
              "status": "disabled",
              "precondScheduling": [
                {
                  "hour":1,
                  "isEnabled":false,
                  "occurence": [
                    "Mon"
                  ],
                  "slot":1,
                  "recurrence": "Daily",
                  "minute":48
                },
                {
                  "hour": 12,
                  "isEnabled": false,
                  "minute": 12,
                  "occurence": [
                      "Wed"
                  ],
                  "recurrence": "Daily",
                  "slot": 2
                }
              ]
            },
            "electricInformation": {
              "autonomy":0.0,
              "chargingInformation": {
                "chargingMode": "no",
                "chargingRate":0.0,
                "isPlugged":false,
                "nextDeferredChargingDate": "2022-02-14T18':'00':10.715Z",
                "chargingState": "disconnected",
                "remainingTime": "PT0S"
              },
              "chargingLevel":1.0,
              "lastUpdate": "2022-02-14T13':'41':57Z",
              "type": "electric"
            },
            "vehicleType": "hybrid",
            "vin": "VR3ATTENTKY102274"
          }
        },
        "attributes": {
          "engine": "PHEV",
          "vin": "VR3ATTENTKY102274",
          "brand": "peugeot"
        }
      }
    }
error: 
  - code: 2325
  - code: 2326
  - code: 2329
  - code: 2330
  - code: 2331
  - code: 2332
  - code: 2333
  - code: 2334
  - code: 2335
  - code: 2336
  - code: 2337
  - code: 2338
  - code: 2339
  - code: 2358
  - code: 2359
  - code: 2360
  - code: 2361
  - code: 2362
  - code: 5
  - code: 6
  - code: 7
short: |- 
  This api allows to be notified when receiving vehicle data after a **pims.vehicle.command**: 
    - Charge
    - ChargeDeferredTime
    - Doors
    - Horn
    - Preconditionning
    - Warning.
component:
  - LongRangeRemote(Remote)
---