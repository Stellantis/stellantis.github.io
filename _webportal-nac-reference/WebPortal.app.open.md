---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: WebPortal.app.open
domain: WebPortal
type: api
---

This API allows triggering the opening of another WebPortal Application.

Parameter | Type | Description | Required
----|----|----|----
`type` | `String` | Name of the API `WebPortal.app.open` | Yes
`appId` | `String` | Identifier of the Application to open. | Yes

### Example

```javascript
window.parent.postMessage({
  type: 'WebPortal.app.open',
  appId: "<appToOpen>", 
}, '*');
```
