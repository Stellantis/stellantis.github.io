---
name: phone.call
privacy: Geolocation Private
type:
  - get
  - set
  - subscribe
domain: navigation
textset: >-
  **Set Errors:**<br> - **404** No connected phone: no phone device
  available.<br> - **409** Conflict: cannot complete call, another call is
  already in progress.<br> - **503** Service Unavailable: no phone device
  available.
params: none
paramsset:
  - name: phoneNumber
    description: >-
      Phone number of the device you want to trigger a call on, it can be
      retrieve throught **Get** or **Subscribe** API.
    type: string
    unit-value: phone number
    example: +33 (0)800 424 091
    required: true
  - name: phoneLabel
    description: Label of the device you want to trigger a call on.
    type: string
    unit-value: n/a
    example: Work
    required: false
  - name: displayName
    description: Name of the device you want to trigger a call on.
    type: string
    unit-value: n/a
    example: Alice
    required: false
dataset:
  - name: callId
    description: >-
      Telephone number on which the call was set, it can be retrieve throught
      **Get** or **Subscribe** API.
    type: string
    unit-value: phone number
    example: +33 (0)800 424 091
textsubscribe: >-
  This allows to listen to any call events, not only the ones triggered with
  SET. Event is triggered on `callState` change.
dataset_example: |-
  {
      "callId": "+33 (0)800 424 091" 
    }
datasubscribe:
  - name: phoneId
    description: Phone identifier of the device.
    type: string
    unit-value: n/a
    example: 'bt://11:22:33:44:55:66'
  - name: callId
    description: Identifier of the Call.
    type: string
    unit-value: n/a
    example: +33 (0) 6 01 02 03 04
  - name: callState
    description: Current status of the call.
    type: string
    unit-value:
      - 'ringing: ''incoming call, ringtone phase'''
      - 'dialing: ''outgoing call, ringtone phase'''
      - 'active: ''phone conversation in progress'''
      - 'holding: ''call is on hold, another call is active'''
      - 'idle: ''call hung up'''
    example: ringing
  - name: callDuration
    description: Phone call current duration.
    type: integer
    unit-value: second
    example: '106'
textget: >-
  `phoneList` is an array of phones connected to the vehicle, if is empty, no
  phones are connected to the vehicle. In each phone you can have a `callList`
  which is an array of calls for this phone (you can have multiple calls for one
  phone in case of a call being on hold), if is empty, no calls are currently in
  progress.
dataget:
  - name: 'phoneList[n].phoneId'
    description: Phone identifier of the device.
    type: string
    unit-value: n/a
    example: 'bt://11:22:33:44:55:66'
  - name: 'phoneList[n].callList[m].callId'
    description: Identifier of the Call.
    type: string
    unit-value: n/a
    example: +33 (0) 6 01 02 03 04
  - name: 'phoneList[n].callList[m].callState'
    description: Current status of the call.
    type: string
    unit-value:
      - 'ringing: ''incoming call, ringtone phase'''
      - 'dialing: ''outgoing call, ringtone phase'''
      - 'active: ''phone conversation in progress'''
      - 'holding: ''call is on hold, another call is active'''
      - 'idle: ''call hung up'''
    example: ringing
  - name: 'phoneList[n].callList[m].normalizedPhoneNumber'
    description: 'Real number used for dialing, may differ from callId.'
    type: string
    unit-value: phone number
    example: '+33601020304'
  - name: 'phoneList[n].callList[m].name'
    description: Name of the remote caller or null if none
    type: string
    unit-value: n/a
    example: Alice
  - name: 'phoneList[n].callList[m].imageUrl'
    description: >-
      Image of the remote caller or null if none. Could be a Base64 encoded
      image or a local filesystem image
    type: string
    unit-value: dataURI
    example: 'data:image/png;base64,...'
  - name: 'phoneList[n].callList[m].callDuration'
    description: Phone call current duration.
    type: integer
    unit-value: second
    example: '106'
dataget_example: |-
  {
      "phoneList": [
        // First phone, 2 calls
        {
            "phoneId": "bt://11:22:33:44:55:66",
            "callList": [
              // First phone, First call
                {
                    "callId": "+33 (0) 6 01 02 03 04",
                    "callState": "active",
                    "name": "John Doe",
                    "normalizedPhoneNumber": "+33601020304",
                    "imageUrl": "data:image/png;base64,...",
                    "callDuration": 123 
                },
                // Second Phone, Second Call

                {
                    "callId": "+33 (0) 6 11 22 33 44",
                    "callState": "holding",
                    "normalizedPhoneNumber": "+33611223344",
                    "name": "Jane Smith",
                    "imageUrl": "file:///vdappdata/addressbook/avatar/194.png",
                    "callDuration": 23
                }
            ]
        },
        // Second Phone, No Call
        {
            "phoneId": "iap2://..."
            "callList": [] 
        }
      ]
    }
short: This API allows use phone functionnility of the webportal.
---

