---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.onApplicationLoaded
domain: WebPortal
supported:
  - 2
  - 3
  - 4
type: event
deprecated: true
---

Event to send to WebPortal to indicate that the application has loaded properly.

>**Note:** Must be sent to the WebPortal using the Window.postMessage API each time your application is launched.

### Example

```javascript
//Mandatory: inform the parent window (applications portal) that the application is loaded and ready 
  window.parent.postMessage({'type':'WebPortal.onApplicationLoaded'}, '*');
```