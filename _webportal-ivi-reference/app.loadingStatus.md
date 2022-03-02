---
name: app.loadingStatus
privacy: Full Private
domain: app
type:
  - set
params:
  - name: status
    description: New status.
    type: Enum of strings
    unit-value:
      - stopped
      - loading
      - running
      - connection_impossible
      - unknown_error
    example: connection_impossible
    required: true
short: This API allows to work with status of your app in the infotainment system.
---

Status | Description
-|-
`stopped` | This event should not be set. Indeed it is the default status of the App when it's not launched.
`loading` | Once the user touch the App icon, a spinner will appear on the screen until the App is ready.
`running` | When your App is ready (meaning that application & data are loaded) you have to set this status.
`connection_impossible` | Most of the time, this event is set by the infotainment itself. But if you app encounter a connection error, you can choose to delegate it to the infotainment system. If you do so, your app will close and a reloadd window will appear to the user.
`unknown_error` | Most of the time, this event is set by the infotainment itself. But if you app encounter an error, you can choose to delegate it to the infotainment system. If you do so, your app will close and an error window will appear to the user.
