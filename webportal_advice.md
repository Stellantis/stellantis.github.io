---
title: WebPortal Best Practice
layout: page2
---

# Things to keep in mind

WebPortal is based on web technologies however there are some specifities that you need to consider to optimize your app.

## General

Your app is sandboxed in an iframe meaning no access to the internet or public networks.

You can't use external ressources which means: 
- no CDN
- no `fetch()`
- your package must be standalone and use only relative urls

The only way to communicate with the webportal is by using HTML5 `Window.postMessage()`. This is also how you can communicate with your server if you need to exchange information.
You don't need to mind the MQTT on the embedded part, the WebPortal will handle it for you.

If your app requires to automatically retry sending a message then you should directly implement it as this functionnality does not exist by default in the WebPortal.

It is best to keep the html to a reasonable size and use assets. This is to reduce the chances of the page not loading properly and thus prevent reloading big files due to the handover. Remember that the handover is even more frequent than for a phone.

The GPU is deactivated for all devices, this means heavy animations should **not** be used.

## Date and Time

Do not use the methods of the javascript Date class.
Instead you sould use the [methods from webportal]({{ site.baseurl }}/webportal_list/#api-Car-Time-GetTime) meant to manipulate those values as they correspond to the current time of the user.

## Loading and using assets

In order to make the App launch smoother, the app should only signal its ready state, and thus be displayed, when all the assets have already been loaded.

All the assets should be loaded at the launch of the app. Then they can be accessed in the cache of the browser by requesting the same url.

When accessing the assets you delivered with webportal you have to keep in mind the path is not the same relative one as it will be downloaded by the webportal on launch.

Keep in mind that RAM is limited when you intend to use assets.

## Using fonts

If no font is specified, the NAC browser will use a font with serif, e.g. Times New Roman.

The special keywords serif, sans-serif, monospace for the font-family property are supported by NAC browser which will automatically choose the corresponding font.

What is more there are brand-specific fonts:
- GM Sans UI Global Condensed (for Opel / Vauxhall)
- Peugeot (for AP/AC/DS)
- Peugeot Light (similar to Peugeot but thinner)

## Connection limitation

The data volummetry should be kept to a minimum.

Also keep in mind that if the user has an ATB, their connection is limited to 3G speeds.

## Using Cache

To be able to deliver your content faster, you should cache files you will reuse multiple times.
This cache limit is 20MB.

What is more, the following apis use a cache:
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

Calls between each cached api should wait at least 50 miliseconds.

All other apis should respect an interval of at least 500 miliseconds between each call.

## Testing phase

When testing your app, in order to know the version of the webportal you can check the first digit in the system parameters as it corresponds to the wave of the system.

To generate logs, you have to send the messages to your backend as the logs generated on the device are the ones corresponding to the system.
