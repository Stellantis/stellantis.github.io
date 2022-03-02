---
name: app.visibilityState
privacy: Full Private
domain: app
type:
  - get
  - subscribe
data:
  - name: appId.visibilityState
    description: >-
      Visibility state of your app (going background: *hidden* /  going
      foreground: *visible*).
    type: Enum of strings
    unit-value:
      - visbile
      - hidden
    example: '''appName'' { ''visibilityState'': ''hidden''}'
data_example: |-
  {
      "<appName>": {
        "visibilityState": "hidden"
      }
    }
short: This API allows to work with app going background/foreground.
---

**Info:**
- `hidden`: means that the user stop using it and switch to another feature of the infotainment system.
- `visible`: the user is coming back to the app.

There is no mandatory action to perform when you receive this event from your app but can use this information in order to notify your server or the user.
