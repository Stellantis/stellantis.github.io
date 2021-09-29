---
privacy: Public
type:
  - get
  - set
  - subscribe
name: navigation.navSettings
domain: navigation
params: none
data:
  - name: guidanceViewMode
    type: boolean
    unit-value: n/a
    description: Guidance view mode.
    example: 0
  - name: autoMapZoomMode
    type: boolean
    unit-value: n/a
    description: Auto zoom on map mode.
    example: 0
  - name: safetyAlertsDangerZones
    type: boolean
    unit-value: n/a
    description: Notify danger zones?
    example: true
  - name: safetyAlertsRiskZones
    type: boolean
    unit-value: n/a
    description: Notify Risks zone.
    example: true
  - name: laneGuidanceOnMotorways
    type: boolean
    unit-value: n/a
    description: Enable lane guidance on motorways?
    example: true
  - name: liveTrafficOnMap
    type: boolean
    unit-value: n/a
    description: Notify live traffic?
    example: true
  - name: nightMode
    type: boolean
    unit-value: n/a
    description: Enable night mode?
    example: true
  - name: voiceGuidanceStatus
    type: boolean
    unit-value: n/a
    description: Enable voice guidance
    example: true
dataset: none
paramsset:
  - name: voiceGuidanceStatus
    type: boolean
    unit-value: n/a
    description: Enable voice guidance
    example: true
    required: true
paramsset_example: |
  "voiceGuidanceStatus": false
short: This API allows to interact with navigation settings.
---

