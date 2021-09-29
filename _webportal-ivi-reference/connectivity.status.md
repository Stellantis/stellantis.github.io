---
name: connectivity.status
privacy: Full Private
type:
  - get
  - subscribe
domain: connectivity
params:
  - name: connectivityTypes
    description: Type of connectivity to filter in the reponse.
    type: array of string
    unit-value:
      - wifi
      - cellular
    example: wifi
    required: false
paramssubscribe:
  - name: connectivityTypes
    description: Type of connectivity to filter in the reponse.
    type: array of string
    unit-value:
      - wifi
      - cellular
    example: wifi
    required: false
  - name: extendedInfo
    description: 'Return `status` attribute. Default : `false`.'
    type: boolean
    unit-value: n/a
    example: false
    required: false
data:
  - name: wifi.signalStrength
    description: Signal strength in percentage.
    type: int
    unit-value: Percentage
    example: 50
  - name: wifi.status
    description: Availability of the wifi interface.
    type: Enum of strings
    unit-value:
      - up
      - down
      - NOT_AVAILABLE
    example: up
  - name: cellular.status
    description: Availability of the cellular interface.
    type: Enum of strings
    unit-value:
      - up
      - down
      - NOT_AVAILABLE
    example: down
  - name: cellular.signalQuality
    description: Quality of the cellular signal.
    type: Enum of strings
    unit-value:
      - good
      - average
      - acceptable
      - bad
      - lost
      - notAvailable
    example: good
  - name: cellular.networkType
    description: Cellular network type.
    type: Enum of strings
    unit-value:
      - 4G (default)
      - 3G
    example: 4G
  - name: cellular.networkInfo.rssi
    description: >-
      Current
      [RSSI](https://en.wikipedia.org/wiki/Received_signal_strength_indication)
      (Received Signal Strengh Indicator).
    type: number
    unit-value: n/a
    example: 42
  - name: cellular.networkInfo.rsrq
    description: >-
      Current [RSRQ](https://wiki.teltonika-networks.com/view/RSRP_and_RSRQ)
      (Reference Signal Received Quality) of the cellular network.
    type: number
    unit-value: n/a
    example: 15
  - name: cellular.networkInfo.rsrp
    description: >-
      Current [RSRP](https://en.wikipedia.org/wiki/RSRP) (Reference Signal
      Received Power) of the cellular network.
    type: number
    unit-value: n/a
    example: 42
  - name: cellular.networkInfo.snr
    description: >-
      Current [SNR](https://en.wikipedia.org/wiki/Signal-to-noise_ratio)
      (Signal-to-noise ratio) of the cellular network.
    type: number
    unit-value: n/a
    example: 42
short: >-
  This API allows to work with vehicle network connectivity status (WiFi &
  Cellular).
data_example: |-
  {
      "wifi": {
        "status": "up", 
        "signalStrength": 50
      },
      "cellular": {
        "status": "up", 
        "signalQuality": "good",
        "networkType": "4G",
        "networkInfo": {
          "rssi": -70,
          "rsrq": -9,
          "rsrp": -85,
          "snr": 3
        }
      }
    }
---

**Info:**  Application is recommended to use the signal strength/service table to display WiFi signal indicator on HMI:
- 90% — Perfect signal
- 70% — Excellent signal
- 60% — Reliable signal
- 50% — Average signal, suitable for light, browsing and email
- 40% — Poor connection
- less than 30% — Unstable connection, link loss


