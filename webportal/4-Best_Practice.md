---
layout: doc-article
permalink: /webportal/best-pratice/
section: webportal
title: Best Practice
description: "WebPortal is based on web technologies however, there are some specificities that you need to consider in order to optimize your app."
---

# THINGS TO KEEP IN MIND

WebPortal is based on web technologies however, there are some specificities that you need to consider in order to optimize your app.

## GENERAL

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

## DATE AND TIME

Do not use the methods of the JavaScript Date class.
Instead, you sould use the [methods from webportal]({{ site.baseurl }}/webportal/reference/#api-Car-GetTime) meant to manipulate those values as they correspond to the current time of the user.

## LOADING AND USING ASSETS

In order to make the App launch smoother, the app should only signal its ready state, and thus be displayed, when all the assets have already been loaded.

All the assets should be loaded at the launch of the app. Then they can be accessed in the cache of the browser by requesting the same URL.

When accessing the assets you delivered with webportal you have to keep in mind the path is not the same relative one as it will be downloaded by the webportal on launch.

Keep in mind that RAM is limited when you intend to use assets.

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

## COLOUR THEME

Depending on the car brand and vehicle, your entertainment system could display various colour theme. For graphic purposes, maybe you will need to know more about the main color and design the user of your application have selected. You can refer to the function [Device.GetHMITheme()]({{site.baseurl}}/webportal/reference/#api-Device-GetHMITheme) to retrieve this theme ID. 

But then you will need to understand what this ID means. Here is correspondence tables between ID and theme depending on vehicle brand:

#### Peugeot

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Blue Theme <br/> Mainstream PEUGEOT| ![ambiencePeugeot0]({{site.baseurl}}/assets/images/ambiencePeugeot0.png){:class="tableimg"} |
1| Copper Theme <br/>  Onyx| ![ambiencePeugeot1]({{site.baseurl}}/assets/images/ambiencePeugeot1.png){:class="tableimg"} |
2|Red Theme <br/> GTI| ![ambiencePeugeot2]({{site.baseurl}}/assets/images/ambiencePeugeot2.png){:class="tableimg"} |
3|Green Theme <br/> QUARTZ| ![ambiencePeugeot3]({{site.baseurl}}/assets/images/ambiencePeugeot3.png){:class="tableimg"} |
4|Dichroique Theme <br/> PHEV/BEV|![Blue as main color with flashy green lines]({{site.baseurl}}/assets/images/ambiencePeugeot4.png){:class="tableimg"} |
5|Krypto Theme <br/> PHEV/Performance| ![Silver as main color with flashy yellow-ish lines]({{site.baseurl}}/assets/images/ambiencePeugeot5.png){:class="tableimg"} |
8|Red Theme <br/> Multidrive 1 <br/> BOOST||
9|Sable/Zen Theme <br/> Multidrive 2 <br/> RELAX| ![ambiencePeugeot9]({{site.baseurl}}/assets/images/ambiencePeugeot9.png){:class="tableimg"} |

#### Citroën

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Orange Theme <br/> Show Room| ![ambienceCitroen0]({{site.baseurl}}/assets/images/ambienceCitroen0.png){:class="tableimg"} |
1| Mainstream <br/> Red Theme <br/> Checkerboard Background| ![ambienceCitroen1]({{site.baseurl}}/assets/images/ambienceCitroen1.png){:class="tableimg"} |
2|Blue Theme <br/> Checkerboard background <br/> Luminous headband | ![ambienceCitroen2]({{site.baseurl}}/assets/images/ambienceCitroen2.png){:class="tableimg"} |
3|Brown Theme <br/> Checkerboard Background | ![ambienceCitroen7]({{site.baseurl}}/assets/images/ambienceCitroen3.png){:class="tableimg"} |
4|Battery Electric Vehicle / Plug<br/>in Hybrid Electric Vehicle | ![ambienceCitroen4]({{site.baseurl}}/assets/images/ambienceCitroen4.png){:class="tableimg"} |
5|Theme Red <br/> Change plain background |![ambienceCitroen7]({{site.baseurl}}/assets/images/ambienceCitroen5.png){:class="tableimg"} |
6|Theme Blue <br/> Change plain background<br/> Change Headband | ![ambienceCitroen7]({{site.baseurl}}/assets/images/ambienceCitroen6.png){:class="tableimg"} |
7|Brown Theme <br/> Change plain background<br/> Change Headband | ![ambienceCitroen7]({{site.baseurl}}/assets/images/ambienceCitroen7.png){:class="tableimg"} |

#### DS

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Gold Theme <br/> Champagn |  ![Black/gray]({{site.baseurl}}/assets/images/ambienceDs0.png){:class="tableimg"}|
1| Red Theme <br/> Champagn Perfo Line |  ![Black with red edges/angles]({{site.baseurl}}/assets/images/ambienceDs1.png){:class="tableimg"}|
2| Blue Theme <br/>  Ruby | ![Red main color]({{site.baseurl}}/assets/images/ambienceDs2.png){:class="tableimg"} |
3| Sapphire Theme <br/>  Battery Electric Vehicle <br/> Plug-in Hybrid Electric Vehicle |  ![Blue / white glow]({{site.baseurl}}/assets/images/ambienceDs3.png){:class="tableimg"} |
8|Red Theme <br/>  Titanium <br/> (same as ambiance 3)| |
9| Violet Theme <br/>  Cachemire| |

#### Opel/Vauxhall

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Red & grey Theme <br/> GM| ![ambienceOpel0]({{site.baseurl}}/assets/images/ambienceOpel0.png){:class="tableimg"} |
1|Battery Electric Vehicle <br/> Plug-in Hybrid Electric Vehicle| ![ambienceOpel1]({{site.baseurl}}/assets/images/ambienceOpel1.png){:class="tableimg"}|

## CONNECTION LIMITATION

The volume of data should be kept to a minimum.

Also keep in mind that if the user has an ATB, their connection is limited to 3G speeds.

## USING CACHE

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

Calls between each cached api should wait at least 50 milliseconds.

All other apis should respect an interval of at least 500 milliseconds between each call.

## TESTING PHASE

When testing your app, in order to know the version of the webportal you can check the first digit in the system parameters as it corresponds to the wave of the system.

To generate logs, you have to send the messages to your backend as the logs generated on the device are the ones corresponding to the system.