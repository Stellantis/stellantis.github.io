---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.event
subname: sendToNav
domain: vehicle
type: 
    - subscribe
params:
  - name: actionType
    required: true
    type: String
    description: Action name, in this case `sendToNav`.
    example: sendToNav
    unit-value: sendToNav
data: 
  - ref: vin
  - ref: locationCoordinates
    name: Location
    type: Object
    description: Location destination of the nav send. **This field is returned when a navigation is successfully sent.**
  - name: userid
    type: String
    description: User id value. **This field is returned when a navigation is successfully sent.**
    unit-value: n/a
    example: "user@provider.tld"
  - name: message
    type: String
    description: Deletion message. **This field is returned when a navigation is deleted from cache.**
    unit-value: "Some locations have been removed."
    example: "Some locations have been removed."
datasubscribe_example: |-
  {
      "vin": "VR1AB12C3D45678909",
      // If a navigation is successfully sent
      "location": {
        "latitude": 48.77232,
        "longitude":  2.2151043,
        "address": "Rte de Gisy, 78140 Vélizy-Villacoublay"
      }
      "userid": "user@provider.tld"
      // If a navigation is deleted from cache
      "message": "Deletion message."
    }
textsubscribe: Events are received when a navigation is successfully sent to the vehicle or when a navigation is removed from cache (after 24h).
error:
  - code: 2001
  - code: 2301
short: "This api allows to be notified when a navigation is sent with `pims.vehicle.destination` or when old navigation are removed from cache."
component:
  - SendToNav
---