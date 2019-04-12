---
title: WebPortal Best Practice
layout: page2
---

# Things to keep in mind

WebPortal is based on web technologies however there are some specifities that you need to consider to optimize your app.

## General

Your app is sandboxed in an iframe which means no access to the internet and public networks.

You can only communicate to the webportal by using the HTML5 `Window.postMessage`.
You don't need to mind the MQTT on the embedded part, the WebPortal will handle it for you.

You can still communicate with your server to exchange information.

You can't use external ressources, this means: 
- no CDN,
- no fetching,
- your package must be standalone and use only relative urls

## Date and Time

Do not use the methods of the javascript Date class.
Instead you sould use the [methods from webportal]({{ site.baseurl }}/webportal_list/#api-Car-Time-GetTime) designed to manipulate those values as they correspond to the current time of the user.

## WebKit Animations

The GPU is deactivated for all devices, this means heavy animations should **not** be used.

## HTML

It is best to keep the html to a reasonable size and use assets. This is to reduce the chances of the page not loading properly and thus prevent reloading big files due to the handover. Remember that the handover is even more frequent than for a phone.

## Loading and using assets

In order to make the App launch smoother, the app should only signal its ready state, and thus be displayed, when all the assets have already been loaded.

All the assets should be loaded at the launch of the app. Then they can be accessed in the cache of the browser by requesting the same url.

When accessing the assets you delivered with webportal you have to keep in mind the path is not the same relative one as it will be downloaded by the webportal on launch.

## Using Resources

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

## Using cache

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

Calls between each cached value should wait at least 50 miliseconds.

All other apis should respect an interval of at least 500 miliseconds between each call.

## Retry message

You should directly implement a method to retry sending a message if your app needs it as this functionnality does not exist by default in the WebPortal.

## Testing phase

When testing, in order to know the version of the webportal you can check the first digit in the system parameters as it should correspond to the wave of the system.

To generate logs, you have to send the messages to your backend as the only logs generated on the device are the ones corresponding to the system.
