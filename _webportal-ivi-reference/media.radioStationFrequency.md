---
privacy: Geolocation Private
type:
  - get
  - set
  - subscribe
name: media.radioStationFrequency
domain: media
paramsset:
  - name: radioFrequency
    description: >-
      Set the new value of the radio channel you want to play in the HMI. Could
      be FM/AM frequency or DAB channel index.
    type: int
    unit-value: khz or channel index
    example: 100000
    required: true
dataset: none
data:
  - name: radioFrequency
    description: Value of the FM/AM frequency or DAB channel index.
    type: int
    unit-value: khz (FM/AM) or channel index (DAB)
    example: 100000
short: This API allows to work with the current radio frenquency.
textget: Calling **GET** will return the current radio frequency/channel.
textset: Calling **SET** will change the current radio frequency/channel.
textsubscribe: >-
  Calling **SUBSCRIBE** will return the radio frequency/channel when the value
  is changed.
---

