---
layout: doc-article
permalink: /webportal/v1/application/guidelines/
section: webportal
subsection: v1
categorie: Application
title: Guidelines
description: "There are some requirements that you must consider for your app development. Otherwise, your application will not be validated in webportal."
redirect_from:
 - /webportal/best-practice/
 - /webportal/v1/application/requirements/
---


## Embedded Restrictions

Embedded development lead to some restriction that you should deal with because your app is sandboxed in an iframe meaning no direct access to the internet or public networks. 
- No use of external resources which means (no CDN, no `fetch()` etc.).
- Your package must be standalone and use only relative URLs.
- Communication with the *infotainment system* must use [event listening]({{site.baseurl}}/webportal/v1/application/events/#article) with `Window.postMessage()`.
- The only way to access internet is by using [MQTT]({{site.baseurl}}/webportal/v1/advanced-features/mqtt/#article).
- It's best to keep HTML to a reasonable size and use assets, it helps to reduce the chances of the page not loading properly and thus prevent reloading big files due to the handover (handover is even more frequent than for a phone).
- GPU is deactivated in the *infotainment system*, this means heavy animations should **not** be used.
- The volume of data should be kept to a minimum, keep in mind that internet connection is limited to 3G speeds.


## UI/UX Guidelines

Here are the main criteria your app has to meet before deploying it on the WebPortal:


<table>

<tr>
  <th>Type</th>
  <th>Description</th>
</tr>

<tr>
  <td rowspan="2">Driver Attention</td>

  <td>
    <p style="margin-bottom:.5em;">
      The app must not display heavy animated elements.
    </p>
  </td>
</tr>

<tr>
  <td>
    <p style="margin-bottom:.5em;">
    The app must not include games or other features outside the intended app types.
    </p>
  </td>
</tr>


<tr>
  <td rowspan="1">Layout</td>

  <td>
    <p style="margin-bottom:.5em;">
     The app must not display text scrolling automatically.
    </p>
  </td>
</tr>

<tr>
  <td rowspan="1">Visual Contrast</td>

  <td>
    <p style="margin-bottom:.5em;">
     The app must provide colors that the system can optimize for easy in-vehicle readability.
    </p>
  </td>
</tr>

<tr>
  <td rowspan="2">Interaction</td>

  <td>
    <p style="margin-bottom:.5em;">
      User interactions must be processed with no more than a two-second delay.
    </p>
  </td>
</tr>

<tr>
  <td>
    <p style="margin-bottom:.5em;">
    Buttons must be big enough so the user can easily interact with them.
    </p>
  </td>
</tr>

</table>

<br>

<table>
<tr>
  <th>Type</th>
  <th>Description</th>
</tr>

<tr>
  <td rowspan="4">General</td>

  <td>
    <p style="margin-bottom:.5em;">
     The app must load content and launch in no more than 10 seconds.
    </p>
  </td>
</tr>

<tr>
  <td>
    <p style="margin-bottom:.5em;">
     The App functionalities must work as expected.
    </p>
  </td>
</tr>

<tr>
  <td>
    <p style="margin-bottom:.5em;">
     When the app is relaunched from the home screen, the state of the app must be restored.
    </p>
  </td>
</tr>


<tr>
  <td>
    <p style="margin-bottom:.5em;">
     Interactive elements that are intentionally grayed-out must be non-functional.
    </p>
  </td>
</tr>


<tr>
  <td rowspan="1" id="notifications">
    Notifications
  </td>

  <td>
    <p style="margin-bottom:.5em;">
     The app displays only relevant notifications.
   </p>
  </td>
</tr>

</table>


# Best Practices 

WebPortal is based on web technologies however, there are some specificities that you need to consider in order to optimize your app.
To make sure your App follow Stellantis requirements, this page give some good practices for development on WebPortal:

## Using Cache

To be able to deliver your content faster, you should cache files you will reuse multiple times.
This cache limit is 20 MB.

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



## Debug Console

There is no native debug console within WebPortal therefore, you cannot access execution errors in your code.
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



## Testing Phase

When testing your app, in order to know the version of the WebPortal you can check the first digit in the system parameters as it corresponds to the wave of the system.

To generate logs, you have to send the messages to your backend, as the logs generated on the device are the ones corresponding to the system.