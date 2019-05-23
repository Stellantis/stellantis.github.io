---
title: Device.PopupRequest()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.PopupRequest(boolean popupType, String text)`

| **Description** | Requests to display a native popup with a message.
| **Response** | *Boolean*  `True` if message will be displayed, else `False`.

Parameter | Type | Description | Required
----|----|----|----
`popupType` | Boolean | The type of popup to be displayed,  If `False` the popup will have the *Cancel* button only, else if `True` the popup will have both buttons : *Ok* and *Cancel*. | Required

#### Example

```javascript
if ( Device.GetInternetStatus() === False ){
	Device.PopupRequest(True, "No Internet Connection")
}
```

#### Remark

>**Note :** Popups shouldn't be asked more often than once every 20 seconds.

>**Note 2 :** It is recommended to use the WebPortal's API to display popups instead of Device.PopupRequest. This will also var you choose between more options and manage some events.

>**Known issue :** In older versions of the NAC, the OK button is displayed regardless of the `popupType` value passed.