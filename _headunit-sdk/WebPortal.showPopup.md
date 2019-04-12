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

### `WebPortal.showPopup(WebPortal.showPopup(String text, Boolean showBtns, Boolean soloOkBtn, String okBtnText, Function okCallback, Function cancelCallback, Function timeoutCallback, Boolean showCancelBtn, Boolean showTitle, String title, Number timeout, String yesBtnText, String noBtnText)`

| **Description** | Shows a popup in the NAC. | 
| **Response** | `None`   | 

| **Parameter**   | Type | Description | Required
----|----|----|----
`text` | *String* | The text to display in the popup | Required
`showBtns` | *Boolean* | Display or not buttons | Optional
`soloOkBtn` | *Boolean* | Display only the *OK* button | Optional
`okBtnText` | *String* | The text of the *OK* button | Optional
`okCallback` | *Function* | The function to execute when the *OK* button is clicked | Optional
`cancelCallback` | *Function* | The function to execute when the *Cancel* button is clicked | Optional
`timeoutCallback` | *Function* | The function to execute when the popup close timeout is reached | Optional
`showCancelBtn` | *Boolean* | Display or not the *Cancel* button | Optional
`showTitle` | *Boolean* | Display or not the title | Optional
`title` | *String* | The title to display | Optional
`timeout` | *Number* | The timeout before the popup is automatically closed | Optional
`yesBtnText` | *Boolean* | The text of the *Yes* button | Optional
`noBtnText` | *Boolean* | The text of the *No* button | Optional

#### Example

```javascript
WebPortal.showPopup("Do you wish to continue?")
```