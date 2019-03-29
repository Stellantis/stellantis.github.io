---
title: Device.appLevelWebPortalDisp()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.appLevelWebPortalDisp(Number Level)`

| **Description** | Inform the HMI of the portal level displayed
| **Response** | *None*

Parameter | Type | Description | Required
----|----|----|----
`Level` | *Number* | The portal level displayed. Possible values: - 0 : app, - 1 : Main | Required

#### Example

```javascript
Device.appLevelWebPortalDisp(0)
```