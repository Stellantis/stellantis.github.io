---
title: WebPortal.onApplicationLoaded
supported:
  - 2
  - 3
  - 4
type: event
---

Event to send to WebPortal to indicate that the application has loaded properly.

>**Note:** Must be sent to the WebPortal using the Window.postMessage API each time your application is launched.

### EXAMPLE

```javascript
//Mandatory: inform the parent window (applications portal) that the application is loaded and ready 
  window.parent.postMessage({'type':'WebPortal.onApplicationLoaded'}, '*');
```