---
name: profile.smartdevice
privacy: Public
type:
  - get
  - subscribe
domain: navigation
params: none
dataget:
  - name: 'data[n].id'
    description: >-
      Unique identifier of the phone (for phone object number 'n' of the data
      array). Could be used to identify the cell phone.
    type: string
    unit-value: n/a
    example: ID
  - name: 'data[n].name'
    description: Name of the phone paired.
    type: string
    unit-value: n/a
    example: Alice Phone's
datasubscribe:
  - name: action
    description: Action triggering the subscribe notification.
    type: string
    unit-value:
      - added
      - deleted
    example: added
  - name: smartdevice.id
    description: Identifier of the phone triggering the notification.
    type: string
    unit-value: n/a
    example: null
  - name: smartdevice.name
    description: Name of the phone triggering the notification.
    type: string
    unit-value: n/a
    example: Alice Phone's
  - name: pairedDeviceCount
    description: New count of paired smartdevices.
    type: int
    unit-value: n/a
    example: '1'
dataget_example: |-
  [
      {'id': 'ID', 'name': 'Phone 1'}, 
      {'id': 'ID', 'name': 'Phone 2'}
    ]
datasubscribe_example: |-
  {
      'action': 'added',
      'smartdevice': {'id': 'ID', 'name': 'Phone 1'},
      'pairedDeviceCount': 1 
    }
short: >-
  This API allows to retrieve the list of smartdevices paired with the current
  profile.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

