---
privacy: Geolocation Private
type:
  - get
name: media.stationsList
domain: media
data:
  - name: '{bandType}[n].sid'
    description: Station ID of this radio station.
    type: int
    unit-value: n/a
    example: 201
  - name: '{bandType}[n].preset'
    description: Preset of this radio station.
    type: number
    unit-value:
      - '0 to 14: ''radio presets'''
      - '-1: ''if not a preset'''
    example: -1
  - name: '{bandType}[n].used'
    description: Indicates if this radio is currently playing.
    type: number
    unit-value:
      - '1: currently playing'
      - '0: not currently playing'
    example: 1
  - name: '{bandType}[n].programName'
    description: Current radio program name of this radio station.
    type: string
    unit-value: n/a
    example: playing Aya Nakamura - Djadja
  - name: '{bandType}[n].freq'
    description: >-
      Current radio frequence of this radio station. Value of the FM/AM
      frequency or DAB channel index.
    type: int
    unit-value: khz (FM/AM) or channel index (DAB)
    example: 100000
  - name: '{bandType}[n].serviceIndex'
    description: Service Index of this radio station.
    type: int
    unit-value: n/a
    example: 1
  - name: '{bandType}[n].serviceCount'
    description: Service Count of this radio station.
    type: int
    unit-value: n/a
    example: 10
  - name: '{bandType}[n].channelName'
    description: Current radio channel name of this radio station.
    type: string
    unit-value: n/a
    example: BBC ONE England
dataget_example: |-
  {
      // FM band
      "fm": [
        // First station in FM band
        {
          "sid": 201,        
          "preset": 0,       
          "used": 1,         
          "programName": "Radio One", 
          "freq": 97800,     
          "serviceIndex": 0, 
          "serviceCount": 0, 
          "channelName": ""  
        },
        // Second station in FM band
        {
          "sid": 42,
          "preset": -1,
          "used": 0,
          "programName": "...",
          "freq": 99900,
          "serviceIndex": 0,
          "serviceCount": 0,
          "channelName": ""
        },
        {
          "sid": 43,
          "number": 1,
          "used": 0,
          "programName": "...",
          "freq": 100300,
          "serviceIndex": 0,
          "serviceCount": 0,
          "channelName": ""
          }
      ],
      // AM band
      "am": [
        // First station in AM band
        {
          "sid": 12,
          "preset": -1,
          "used": 0
          "programName": "...",
          "freq": 587,
          "serviceIndex": 0,
          "serviceCount": 0,
          "channelName": ""
        },
        // Second station in AM band
        {
          "sid": 13,
          "preset": -1,
          "used": 0
          "programName": "...",
          "freq": 812,
          "serviceIndex": 0,
          "serviceCount": 0,
          "channelName": ""
        }
      ],
      // DAB
      "dab": [
        // First station in DAB
        {
          "sid": 23,
          "preset": -1,
          "used": 0
          "programName": "...",
          "freq": 0,
          "serviceIndex": 1,  
          "serviceCount": 13, 
          "channelName": "6A" 
        },
        // Second station in DAB
        {
            "sid": 24,
            "preset": -1,
            "used": 0
            "programName": "...",
            "freq": 0,
            "serviceIndex": 2,
            "serviceCount": 13,
            "channelName": "6A"
        }
      ]
    }
short: >-
  This API allows to retrieve the current available radio stations for all
  bands.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

This API will output 0 to 3 **{bandType}** arrays (where {bandType} is `fm`, `am`, and/or `DAB`).
These array contains one entry for each radio station available in this band.
