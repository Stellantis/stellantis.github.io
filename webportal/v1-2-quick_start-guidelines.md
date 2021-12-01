---
layout: doc-article
permalink: /webportal/v1/quickstart/guidelines/
section: webportal
subsection: v1
categorie: Quickstart
title: Guidelines
description: "WebPortal is based on web technologies however, there are some specificities that you need to consider in order to optimize your app. This page give some good practices for development on webportal."
---

# BEST PRACTICES 

WebPortal is based on web technologies however, there are some specificities that you need to consider in order to optimize your app.
To make sure your App follow Stellantis requirements this page give some good practices for development on webportal:

## USING CACHE

To be able to deliver your content faster, you should cache files you will reuse multiple times.
This cache limit is 20MB.

What is more, the following API use a cache:
- Connectivity.GetInternetStatus()
- Device.GetSoftwareRelease()
- Device.GetSupplierId()
- System.Settings.Value()
- System.Settings.AllKeys()
- Device.GetHMIFocus()
- Car.Time.Hours()
- Car.Time.Minutes()
- Navigation.CurrentPosition.*
- Navigation.Destination.*
- Navigation.ManeuverInfo.*
- Navigation.JourneyInfo.*

Calls between each cached api should wait at least 50 milliseconds.

All other API should respect an interval of at least 500 milliseconds between each call.



## DEBUG CONSOLE

There is no native debug console within webportal therefore, you cannot access execution errors in your code.
However, we advise setting up a debug console inside own your app during your development process. 

This is an example of debug console that you can display inside your app:

##### HTML 

```html
<div id="debug-console">
</div>
```

##### JavaScript

```js
try {
    // code you want to debug
} 
catch (error) {
  var debugConsole = document.getElementById('debug-console'); 
  debugConsole.innerHTML = error;
}
```

##### CSS

```css
#debug-console {
  border: 1px solid red;
}
```

Doing so, errors will be displayed inside your app as HTML.



## TESTING PHASE

When testing your app, in order to know the version of the webportal you can check the first digit in the system parameters as it corresponds to the wave of the system.

To generate logs, you have to send the messages to your backend as the logs generated on the device are the ones corresponding to the system.