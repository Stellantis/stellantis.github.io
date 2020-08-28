---
layout: doc-article
permalink: /webportal/v1/quickstart/requirements/
section: webportal
categorie: Quickstart
subsection: v1
title: Requirements
redirect_from:
 - /webportal/best-practice/
---

# GENERAL

Your app is sandboxed in an iframe meaning no access to the internet or public networks.

You can't use external resources which means:
- no CDN
- no `fetch()`
- your package must be standalone and use only relative URLs

The only way to communicate with the webportal is by using HTML5 `Window.postMessage()`. This is also how you can communicate with your server if you need to exchange information.
You don't need to mind the MQTT on the embedded part, the WebPortal will handle it for you.

If your app requires to automatically retry sending a message then you should directly implement it as this functionality does not exist by default in the WebPortal.

It is best to keep the html to a reasonable size and use assets. This is to reduce the chances of the page not loading properly and thus prevent reloading big files due to the handover. Remember that the handover is even more frequent than for a phone.

The GPU is deactivated for all devices, this means heavy animations should **not** be used.

In a popup, to change line within a string you can use **\n**.

Your app is a single page application. It means that you must have only one html file ('index.html') in your project.


## CONNECTION LIMITATION

The volume of data should be kept to a minimum.

Also keep in mind that if the user has an ATB, their connection is limited to 3G speeds.

# GUIDELINES

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
