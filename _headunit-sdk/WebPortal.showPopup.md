---
title: WebPortal.showPopup()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: api
privacy: Full
---

### `WebPortal.showPopup(String text, Boolean showOKBtn, Function okCallabck, Function cancelCallback, Function timeoutCallback)`

| **Description** | Shows a popup in the NAC. | 
| **Response** | `None`   | 

| **Parameter**   | Type | Description | Required
----|----|----|----
`text` | *String* | The text to display in the popup | Required
`showOKBtn` | *Boolean* | Display or not the *OK* button | Required
`okCallback` | *Function* | The function to execute when the *OK* button is clicked | Required
`cancelCallback` | *Function* | The function to execute when the *Cancel* button is clicked | Required
`timeoutCallback` | *Function* | The function to execute when the popup close timeout is reached |Required


#### Example

```javascript
WebPortal.showPopup("Do you wish to continue?", True, UserOK(), UserCancel(), UserBusy())
```
