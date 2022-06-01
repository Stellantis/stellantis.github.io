---
privacy: Full Private
type:
  - set
name: media.beepPlay
domain: media
params:
  - name: beepPlay
    description: Name of the sound to play.
    type: int
    unit-value:
      - '9: ''Ringtone SRC_TEL_RINGING'''
      - '64: ''SMS Notification SRC_BT_TTS_SMS'''
      - '140: ''Incoming Call notification beep SRC_CALL_NOTIFY'''
      - '151: ''Notification Pop-up SRC_UI_NOTIFICATION'''
      - '150: ''Notification Toast SRC_ULTOAST'''
      - '132: ''Navigation ZAR IN beep SRC_ZAR_IN_BEEP'''
      - '142: ''Navigation ZAR OUT beep SRC_ZAR_OUT_BEEP'''
      - '126: ''VR Start Beep SRC_SPEECH_START_BEEP'''
      - '127: ''VR Completion Beep SRC_SPEECH_COMPLETION_BEEP'''
      - '482: ''UI Sounds SRC_UI_MEMORY'''
      - '149: ''UI Sounds SRC_UI_VALIDATION'''
      - '146: ''UI Sounds SRC_ULEDIT'''
      - '147: ''UI Sounds SRC_ULDELETE'''
      - '148: ''UI Sounds SRC_UI_REJECTION_BACK'''
      - '31: ''UI Sounds SRC_TOUCHBEEP'''
      - '153: ''Magic Touch sounds SRC_BOTTOM_CENTER'''
      - '154: ''Magic Touch sounds SRC_BOTTOM_LEFT'''
      - '185: ''Magic Touch sounds SRC_BOTTOM_RIGHT'''
      - '159: ''Magic Touch sounds SRC_EXIT'''
      - '156: ''Magic Touch sounds SRC_TOP_CENTER'''
      - '157: ''Magic Touch sounds SRC_TOP_LEFT'''
      - '158: ''Magic Touch sounds SRC_TOP_RIGHT'''
      - '32: ''SPY Beep SRC_SPYBEEP'''
    example: 9
    required: true
short: This API allows to play a beep sound.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

