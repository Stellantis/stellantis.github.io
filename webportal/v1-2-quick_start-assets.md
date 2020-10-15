---
layout: doc-article
permalink: /webportal/v1/quickstart/assets/
section: webportal
subsection: v1
categorie: Quickstart
title: Assets
description: "Here you can find informations about how you shoul manage assets (pictures, font, audio ...) in webportal application."
---
# LOADING AND USING ASSETS

In order to make the App launch smoother, the app should only signal its ready state, and thus be displayed, when all the assets have already been loaded.

All the assets should be loaded at the launch of the app. Then they can be accessed in the cache of the browser by requesting the same URL.

When accessing the assets you delivered with webportal you have to keep in mind the path is not the same relative one as it will be downloaded by the webportal on launch.

Keep in mind that RAM is limited when you intend to use assets.

## RESOURCES

Your Application has at its disposition multiple resources given by the WebPortal or it can even use its own resources.  
You can access these different resources with a simple `XMLHttpRequest`.

```javascript
const req = new XMLHttpRequest();
req.open('GET', '/apps/MyApp/fonts/NAC-Icons.ttf', true);
req.send();
// In order to reuse a cached resource, you need to make a call to the exact same url or it will try to load it again.
```

## IMAGES, AUDIO, VIDEO

There are 2 different screens sizes for the NAC:

- SD: 800 x 480

- Wide HD: 1280 x 720

However, some space at the top and the bottom are reserved by WebPortal for the controls. This amounts to a total height of 55px that will not be available.

## IMAGE FILES

You need to keep in mind the size of the screen your application is delivered on.

You will also have to consider the size of your file as the connection's speed can vary greatly depending on the location of the user, this implies that to display your picture within a reasonable timeframe:
- its size should ideally not exceed 150kB
- its dimensions should respect the ones cited above.

 Information on Image limitations:

Compatible image formats: **JPEG**, **SVG Tiny 1.2**, PNG, GIF, BMP

|Image weight (KB) | Time ATB2 (~30KB/s) | Time ATB3 (~100KB/s)
----|----|----
|100 | 3s | 1s
|150 | 5s | 1,5s
|200 | 7s | 2s
|1000 | 35s | 10s
|2000 | 110s | 20s

> **Note:** For the GIF format, animations are not smooth.

> **Note 2:** When targeting a SD NAC, it is advised to encode graphic assets in 18 bits instead of 24/32 bits as the device is only able to display in 18 bits.

> **Note 3:** In order to limit the weight of your pictures, it is better to use SVG format. If not possible you should prioritize using JPEG.

## AUDIO FILES

Information on Image limitations:

Compatible audio format: **MP3**

|Audio Duration|Audio weight (KB)| Download Time ATB2 | Download Time ATB3
----|----|----|----
|26s |350 | 12s | 3s
|30s |400 | 14s | 3s
|38s |500 | 17s | 5s
|1:15 |1000 | 34s | 10s
|1:52 |1500 | 50s | 15s
|2:30 |2000 | 70s | 20s
|6:15 |5000 | 170s | 50s


## AUDIO GUIDANCE

About audio playing, the webportal have lower priority than guidance instructions of the vehicle infotainment system.

If the guidance has to play an instruction while your app is already playing a sound in the webportal, the infotainment system will use ducking effect to play both sounds together.

It means that your audio file will continue playing but with a reduced volume and the instruction will be the main audio canal.

## VIDEO FILES

Videos are currently not compatible and will not be read by the WebPortal.


## DATE AND TIME

Do not use the methods of the JavaScript Date class.
Instead, you sould use the [methods from webportal]({{ site.baseurl }}/webportal/v1/api-reference/list/#api-Car-GetTime) meant to manipulate those values as they correspond to the current time of the user.

## USING FONTS

If no font is specified, the NAC browser will use a font with serif, e.g. Times New Roman.

The special keywords: serif, sans-serif, monospace for the font-family property are supported by NAC browser which will automatically choose the corresponding font.

Here is a list of fonts available in NAC software version *42.01.70.50_NAC-r0*:

- Heldustry
- PAULETTEcondensed
- PLAQUES gill sans 
- Sansation_Regular 
- Tfont
- type LCB 
- Vera

What is more, there are brand-specific fonts:
- GM Sans UI Global Condensed (for Opel / Vauxhall)
- Peugeot (for AP/AC/DS)
- Peugeot Light (similar to Peugeot but thinner)
- DSTACHY