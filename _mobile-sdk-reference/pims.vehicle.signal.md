---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.signal
domain: vehicle
type: 
  - subscribe
params: none
datasubscribe:
 - name: transactionId
   type: String
   description: The commandId of your get or set.
   unit-value: n/a
   example: " " #TODO
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
      "resources": {
        "status": {
          "autonomy":145.0,
          "lastUpdate":"2022-02-14T13':'41':58Z",
          "fuelInformation": {
            "autonomy":145.0,
            "chargingInformation": {
              "chargingMode":null,
              "chargingRate":0.0,
              "isPlugged":false,
              "chargingState":null,
              "remainingTime":"PT0S"
            },
            "chargingLevel":42.0,
            "lastUpdate":"2022-02-14T13':'41':57Z",
            "consumption":0.0,
            "type":"fuel"
          },
          "doorStateInformation": {
            "isRearRightDoorOpened":false,
            "isTrunkDoorOpened":false,
            "isLocked":true,
            "isRearWindowDoorOpened":false,
            "isPassengerDoorOpened":false,
            "isRearLeftDoorOpened":false,
            "state": [
              "trunkLocked",
              "locked"
            ],
            "isDriverDoorOpened":false
          },
          "precondInformation": {
            "lastUpdate":"2022-02-14T13':'41':57Z",
            "precondScheduling": [
              {
                "hour":1,
                "isEnabled":false,
                "occurrence": [
                  "mon"
                ],
                "slot":1,
                "minute":48
              }
            ],
            "status":"disabled"
          },
          "electricInformation": {
            "autonomy":0.0,
            "chargingInformation": {
              "chargingMode":"no",
              "chargingRate":0.0,
              "isPlugged":false,
              "nextDeferredChargingDate":"2022-02-14T18':'00':10.715Z",
              "chargingState":"disconnected",
              "remainingTime":"PT0S"
            },
            "chargingLevel":1.0,
            "lastUpdate":"2022-02-14T13':'41':57Z",
            "consumption":0.0,
            "type":"electric"
          },
          "vehicleType":"hybrid"
        }
      },
      "attributes": {
        "engine":"phev",
        "vin":"VR3ATTENTKY102274",
        "brand":"peugeot"
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
  This api allows to be notified when receiving vehicle data after a **pims.vehicle.command**: [Charge](#api-pims-vehicle-command-charge), [ChargeDeferredTime](#api-pims-vehicle-command-chargedeferredtime), [Doors](#api-pims-vehicle-command-doors), [Horn](#api-pims-vehicle-command-horn), [Preconditionning](#api-pims-vehicle-command-preconditioning), [Warning](#api-pims-vehicle-command-warning).
component:
  - LongRangeRemote
---