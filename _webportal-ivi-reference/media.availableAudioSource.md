---
name: media.availableAudioSource
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: media
params: none
dataget:
  - name: 'data[n].id'
    description: 'ID of the source (for object number ''n'' of the data array). '
    type: int
    unit-value: n/a
    example: 65
  - name: 'data[n].type'
    description: Type of the source (for object number 'n' of the data array).
    type: Enum of strings
    unit-value:
      - bluetooth
      - usb
      - webportal
      - tuner
      - ipod
      - Tuner-FM
      - Tuner-AM
      - Tuner-DAB
    example: bluetooth
  - name: 'data[n].name'
    description: Name of the source (for object number 'n' of the data array).
    type: string
    unit-value: n/a
    example: bluetooth
  - name: 'data[n].contentInfo.audio'
    description: >-
      Information about the number of audio files for bluetooth & ipod (for
      object number 'n' of the data array).
    type: int
    unit-value: n/a
    example: 3
  - name: 'data[n].contentInfo.video'
    description: >-
      Information about the video content of this source (for object number 'n'
      of the data array).
    type: int
    unit-value: n/a
    example: 5
short: This API allows to work with infotainment system audio sources.
datasubscribe:
  - name: data.id
    description: 'ID of the source triggering the notification). '
    type: int
    unit-value: n/a
    example: 65
  - name: data.type
    description: 'Type of the source triggering the notification. '
    type: Enum of strings
    unit-value:
      - bluetooth
      - usb
      - ipod
      - webportal
      - Tuner-FM
      - Tuner-AM
      - Tuner-DAB
    example: bluetooth
  - name: data.name
    description: Name of the source triggering the notification.
    type: string
    unit-value: n/a
    example: bluetooth
  - name: data.contentInfo.audio
    description: >-
      Information about the audio content of this source triggering the
      notification.
    type: int
    unit-value: n/a
    example: 3
  - name: data.contentInfo.video
    description: >-
      Information about the video content of this source triggering the
      notification.
    type: int
    unit-value: n/a
    example: 5
datasubscribe_example: |-
  {
      "id": 2,
      "type": "webportal",
      "availability": "unavailable",
      "name": "Phone of John Doe ",
      "contentInfo": {
        "audio": 13,
        "video": 2
      }
    }
dataget_example: |-
  {
      [
        {
          "id": 65,
          "type": "bluetooth",
          "name": "Phone of John Doe",
          "contentInfo": {}
        },
        {
          "id": 35,
          "type": "tuner",
          "name": "Radio",
        },
        {
          "id": 55,
          "type": "usb",
          "name": "USB Stick of Kiran",
          "contentInfo": {
              "audio": 52,
              "video": 0
          }
        },
        {
          "id": 56,
          "type": "usb",
          "name": "Natalia",
          "contentInfo": {
              "audio": 13,
              "video": 2
          }
        },
        {
          "id": 135,
          "type": "webportal",
          "name": "Spotify",
          "contentInfo": {}
        },
        {
          "id": -1,
          "type": "Tuner-FM",
          "name": "RADIO"
        },
        {
          "id": -2,
          "type": "Tuner-AM",
          "name": "RADIO"
        },
        {
          "id": -3,
          "type": "Tuner-DAB",
          "name": "RADIO"
        }
      ]
    }
---

**Info:** `iap` stand for the ipod/iphone communication protocol.

**Note:** like in the native Media player, changing media source will also automatically play the newly selected source.
