---
privacy: Geolocation Private
type:
  - get
  - set
  - subscribe
paramsget: none
paramssubscribe: none
data:
  - name: data
    description: Radio info data.
    type: Object
    fields:
      - name: sid
        type: int
        description: Radio SID identifier.
        unit-value: n/a
        example: 3
      - name: band
        type: string
        desciption: Current radio band type.
        unit-value:
          - fm
          - am
          - dab
        example: fm
      - name: name
        type: string
        unit-value: n/a
        description: Radio program name.
        example: Cadena DIAl
      - name: preset
        type: int
        description: Selected radio preset.
        example: 2
        unit-value: n/a
      - name: frequency
        description: >-
          AM FM Radio frequency. Field displayed if `band == 'fm' || band ==
          'am'`.
        type: int
        example: 96900
        unit-value: kHz
      - name: channel
        description: Channel name. Field displayed if `band == 'dab'`.
        type: string
        example: 6A
        unit-value: n/a
      - name: serviceIndex
        description: DAB Service index. Field displayed if `band == 'dab'`.
        type: int
        example: 2
        unit-value: n/a
      - name: serviceCount
        description: DAB Service count. Field displayed if `band == 'dab'`.
        type: int
        example: 13
        unit-value: n/a
      - name: presetList
        description: List of presets.
        type: Array of object
        fields:
          - name: preset
            type: int
            description: Selected radio preset.
            example: 2
            unit-value: n/a
          - name: sid
            type: int
            description: Radio SID identifier.
            unit-value: n/a
            example: 3
          - name: band
            type: string
            desciption: Current radio band type.
            unit-value:
              - fm
              - am
              - dab
            example: fm
          - name: name
            type: string
            unit-value: n/a
            description: Radio program name.
            example: Cadena DIAl
          - name: frequency
            description: >-
              AM FM Radio frequency. Field displayed if `band == 'fm' || band ==
              'am'`.
            type: int
            example: 96900
            unit-value: kHz
          - name: channel
            description: Channel name. Field displayed if `band == 'dab'`.
            type: string
            example: 6A
            unit-value: n/a
          - name: serviceIndex
            description: DAB Service index. Field displayed if `band == 'dab'`.
            type: int
            example: 2
            unit-value: n/a
          - name: serviceCount
            description: DAB Service count. Field displayed if `band == 'dab'`.
            type: int
            example: 13
            unit-value: n/a
datasubscribe_example: |-
  {
      "data": {
        "sid": 3,
        "band": "fm",
        "name": "Cadena DIAL",
        "preset": 2,
        // if band FM/AM
        "frequency": 96900,
        // if band DAB
        "channel": "6A",
        "serviceIndex": 2,
        "serviceCount": 13,
        "presetList": [
          /* Preset 1 */
          {
            "preset": 0,
            "sid": 4,
            "band": "fm",
            "frequency": "96.9",
            "channel": "6A",
            "serviceIndex": 2,
            "serviceCount": 13,
            "name": "Cadena DIAL"
          }, {
            /* Preset 2 */
          }, {
            /* Preset 3 */
          }
        ]
      }
    }
dataget_example: |-
  {
      "data": {
        "sid": 3,
        "band": "fm",
        "name": "Cadena DIAL",
        "preset": 2,
        // if band FM/AM
        "frequency": 96900,
        // if band DAB
        "channel": "6A",
        "serviceIndex": 2,
        "serviceCount": 13,
        "presetList": [
          /* Preset 1 */
          {
            "preset": 0,
            "sid": 4,
            "band": "fm",
            "frequency": "96.9",
            "channel": "6A",
            "serviceIndex": 2,
            "serviceCount": 13,
            "name": "Cadena DIAL"
          }, {
            /* Preset 2 */
          }, {
            /* Preset 3 */
          }
        ]
      }
    }
paramsset:
  - name: sid
    required: true
    description: SID of the radio station to select if band is DAB.
    unit-value: n/a
    example: 42
    type: int
  - name: frequency
    required: true
    description: SID of the radio station to select  if band is AM/FM.
    unit-value: kHz
    example: 96000
    type: int
dataset: none
name: media.radioInfo
domain: media
short: This API allows to work with the media player radio module.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---
Info about Frequency Radio, N° Preset Radio, Band Radio and Radio station name.
