---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0
name: pims.vehicle.timeout
domain: vehicle
type: 
  - set
params:
  - name: scan
    required: false
    type: Long
    unit-value: " " #TODO
    example: " " #TODO
    description: Timeout that will be triggered if no vehicle found after the specified  time. The default value is 60 seconds (60000 ms).
  - name: looseConnection
    required: false
    type: Long
    unit-value: " " #TODO
    description: The timeout that will be triggered if no data received after the  specified time. The default value is 5 seconds (5000 ms).
    example: " " #TODO
  - name: changeStatus
    required: false
    type: Long
    unit-value: " " #TODO
    description: Delay before send notification of change status.
    example: " " #TODO
data: none
error: 
  - code: 2001
  - code: 2102
short: This API allows to set 02X timeouts.
component: 
  - O2X
---