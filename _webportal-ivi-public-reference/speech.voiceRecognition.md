---
name: speech.voiceRecognition
privacy: Public
type:
  - set
  - subscribe
domain: speech
paramsset:
  - name: action
    description: Start or cancel voice regonition.
    type: string
    unit-value:
      - start
      - cancel
    example: start
    required: true
dataset: none
paramssubscribe: none
datasubscribe:
  - name: CommandKind
    description: Domain of the command.
    type: string
    unit-value: n/a
    example: MusicPlayerCommand
  - name: CommandType
    description: Type of the command send.
    type: string
    unit-value: n/a
    example: MUSIC_PLAYER_RESPONSE_ADD_TO_FAVOURITE_LIST
  - name: vrResponse
    description: VRManager result.
    type: string
    unit-value: n/a
    example: null
textset: '`"status": 500, if the an error happend with speech regonition.'
short: This API allows to work with speech recognition function of the vehicle.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

This API is not currently available in Europe.
