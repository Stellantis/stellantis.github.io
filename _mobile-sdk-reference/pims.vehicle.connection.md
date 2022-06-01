---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.vehicle.connection
domain: vehicle
type: 
    - get
    - subscribe
params: none
dataget:
- name: vin
  type: String
  description: Vehicle's VIN. It can be null if no VIN connected.
  example: VR1AB12C3D45678909
  unit-value: "n/a"
- name: protocol
  type: Enum of Strings
  description: Field present if `vin!=null`
  unit-value:
    - CEA
    - Altran
  example: CEA
- name: model
  type: Enum of Strings
  description: Field present if `vin!=null`
  unit-value:
    - SMEG
    - NAC
    - RCC
    - RCE
    - AIO_NAC
    - AIO_RCC
    - IVI
  example: NAC
- name: version
  type: String
  unit-value: "n/a"
  description: Protocol version (SemVer format). Field present if `vin!=null`. Field has value if `protocol=="CEA"`. With `protocol=="Altran"` value is empty (`""`) | 
  example: '1.0.2'
- name: privacy
  type: Enum of Strings
  description: Field present if `vin!=null`. For `Altran` connections, value will be always `"Unknown"`.
  unit-value: 
    - Full
    - Geolocation
    - None
    - Unknown
  example: Full
datasubscribe: 
  - ref: vin
  - name: status
    type: Enum of Strings
    unit-value:
      - Connected
      - Disconnected 
    description: Connection status.
    example: Connected
  - name: protocol
    type: Enum of Strings
    description: Field present if `status == "Connected"`.
    unit-value:
      - CEA
      - Altran
    example: CEA
  - name: model
    type: Enum of Strings
    unit-value: 
      - SMEG
      - NAC
      - RCC
      - RCE
      - AIO_NAC
      - AIO_RCC
      - IVI
    description: Field present if `status == "Connected"`.
    example: NAC
  - name: version
    type: String
    unit-value: n/a
    description: Protocol version (SemVer format). Field present if `status == "Connected"`. Field has value if `protocol=="CEA"`. With `protocol=="Altran"` value is empty (`""`).
    example: "1.0.2"
  - name: privacy
    type: Enum of Strings
    unit-value: 
      - Full
      - Geolocation
      - None
      - Unknown
    description: Field present if `status == "Connected"`. For `Altran` connections, value will be always `"Unknown"`.
    example: Full
textsubscribe: |-
  Notification will be sent depending on nature of Head Unit:
    - `CEA`: Once CEA session is opened
    - `Altran`: Once authentication is done
  
  The unsubscribe api removes registration on connection change status. Any parameter required for this api.
errorsubscribe: 
  - code: 2001
  - code: 2105
errorset: 
  - code: 2001
short: |- 
  This API will forward connection events when the `Trip` service will be enabled. 
  
  Enabling the `Trips` is done using [SUBSCRIBE pims.vehicle.trips ](#api-pims-vehicle-trips). That's why you should subscribe to *pims.vehicle.connection* before.
component: 
  - TripNDrive
---