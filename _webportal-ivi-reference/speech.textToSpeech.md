---
name: speech.textToSpeech
privacy: Full Private
type:
  - set
  - subscribe
domain: speech
paramsset:
  - name: action
    description: Start or cancel Text To Speech.
    type: string
    unit-value:
      - playText
      - cancel
    example: start
    required: false
  - name: ttsOutput
    description: Text to output as a speech.
    type: string
    unit-value: n/a
    example: 'Please perform this action! Required if `''action'': ''playText''`.'
    required: true
dataset:
  - name: requestId
    description: Identifier of the resquest. Use it for canceling.
    type: int
    unit-value: n/a
    example: 43
paramssubscribe: none
datasubscribe:
  - name: requestId
    description: Identifier of the resquest.
    type: int
    unit-value: n/a
    example: 43
  - name: playStatus
    description: Status change triggering the *Subscribe*.
    type: string
    unit-value: n/a
    example: stopped
textset: '`"status": 500, if the an error happend with TTS. Plus "TTSERROR" code.'
short: >-
  This API allows to use embedded TTS (Text-To-Speech) engine to send vocal
  instructions to the user.
---

{%- comment -%} This API is not currently available in Europe. {%- endcomment -%}
