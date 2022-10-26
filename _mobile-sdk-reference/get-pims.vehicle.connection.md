---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.connection
domain: vehicle
type: 
    - get
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
errorget: 
  - code: 2001
short: |- 
  This API allows to retrieve if the `Trip` service is enabled or not. Check out **SUBSCRIBE pims.vehicle.connection**.
component: 
  - TripNDrive
---