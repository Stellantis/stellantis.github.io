---
privacy: Full Private
type:
  - subscribe
name: app.applicationWillTerminate
domain: app
params: none
data:
  - name: appId
    description: Name of your App triggered when your app is closing.
    type: string
    unit-value: tld.domain.subdomain
    example: com.example.app
short: This API allows to be notified when an App is being closed.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---
                     
When this event is triggered, an application is about to be closed by the infotainment system. 

This app should save its current state of the App. It can also send a closing message to its server and/or to the user.
