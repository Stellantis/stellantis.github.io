---
layout: doc-article
permalink: /webportal/v1/overview/infotainment-system/
section: webportal
subsection: v1
categorie: Overview
title: Infotainment System
description: "The NAC is the vehicle infotainment system in groupe PSA vehicles. This page explains some features of the NAC."
---

# NAC

The NAC, from the french "NAvigation Connectée" - Connected Navigation, is the infotainment system 
in Groupe PSA vehicles. It allows to use navigation, browse media player, customize interior, choose driving mode...

Driver interacts with the NAC through a capacitive touchscreen. Webportal Embedded Apps are also displayed on this same screen! 

![NAC]({{ site.baseurl }}/assets/images/nac.png)


# SOFTWARE VERSIONS

There exists 3 differents generations of the NAC each new one coming with its own new functionalities:

**NAC wave 2.1** - using QtWebKit 5.2.1 
based on WebKit from July 2013 (r153112).

**NAC wave 3** - using QtWebKit 5.5.0
based on the upstream trunk subversion revision 153112.

**NAC wave 4**- using QtWebKit 5.5.0
based on the upstream trunk subversion revision 153112.


## WAVE 2
{% assign arrowUp='<span class="icon has-text-success"><i class="fas fa-arrow-up"></i></span>'%}
{% assign arrowDown='<span class="icon has-text-danger"><i class="fas fa-arrow-down"></i></span>'%}
{% assign equals='<span class="icon "><i class="fas fa-equals"></i></span>'%}

SW version	| Percentage of vehicles|Build date| Trend of use
-|-|-
21.07.16.32_NAC-r0 | 26%  |01/04/2018| {{arrowUp}}
21.07.67.32_NAC-r0 | 17%  |19/06/2019| {{arrowUp}}
10:90:42 | 12%  |07/09/2017| {{arrowDown}}
10:47:34 | 11%  |08/03/2018| {{arrowDown}}
10:82:12 | 6%  || {{arrowDown}}
10:68:24 | 4%  || {{arrowDown}}

## WAVE 3

SW version	| Percentage of vehicles |Build date | Trend of use
-|-|-
31.09.46.62_NAC-r0   | 14%  |19/11/2018| {{arrowUp}}
31.08.05.86_NAC-r0 |3% |15/05/2018  | {{arrowDown}}
10:50:42 | 1%  | | {{arrowDown}}


## WAVE 4

SW version	| Percentage of vehicles|Build date| Trend of use
-|-|-
42.01.21.42_NAC-r0 | 2% |01/02/2020 | {{arrowUp}}
40.04.20.22_NAC-r0 | 1%  | | {{arrowUp}}
42.01.37.32_NAC-r0 | 1% |18/09/2019 | {{arrowUp}}
40.04.33.12_NAC-r0 | 0%  | | {{arrowUp}}

## SCREEN SIZE
Usually in-board screen is located on the dashboard of the car between driver and passenger.

There are 3 different screen resolutions depending on car model and generation.

The screen is divided in 3 areas: one is for your app while two others areas are dedicated to car system info.
Here is actual available screen size: **SD** = 800 x 363 px ; **HD** = 1280 x 582 px ; **WHD** = 1280 x 620 px.


<table class="largertable">
  <thead>
    <tr>
      <th>COLOR</th>
      <th>LEGEND</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="verb" style="background-color: #A6A6A6 !important; color: white">&nbsp;Grey&nbsp;</span></td>
      <td>Total screen size.</td>
    </tr>
    <tr>
      <td><span class="verb get" style="background-color:#1E2335 !important">&nbsp;Blue&nbsp;</span></td>
      <td>Area of the screen dedicated to the infotainment system.</td>
    </tr>
    <tr>
      <td><span class="verb post" style="background-color:#94CE58 !important">Green</span></td>
      <td>Area of the screen available for your app</td>
    </tr>
  </tbody>
</table>


**Standard-Definition**
![screen-res-sd]({{site.baseurl }}/assets/images/webportal-presentation-screen-sd.png)

**High-Definition**
![screen-res-hd]({{site.baseurl }}/assets/images/webportal-presentation-screen-hd.png)

**Wide High-Definition**
![screen-res-whd]({{site.baseurl }}/assets/images/webportal-presentation-screen-whd.png)


## VIRTUAL KEYBOARD

A virtual keyboard is available on the NAC. It is displayed on the full size of the NAC touchscreen.

![virtual-keyboard]({{site.baseurl}}/assets/images/virtual-keyboard.png)

You just have to create an HTML **input text**, once the user set the **focus** on this text field the virtual keyboard is displayed.

```html
<input type="text" />
<!-- Focus the field will make the keyboard to show-up -->
```

> **Note:** When the keyboard is being displayed, you cannot receive events.

> **Note 2:** Before *WAVE4: 42.03.06.50* / *WAVE 2: 21.08.63.40*, pre-filled text was deleted once the user set the focus in the input field. Since these versions, webportal’s virtual keyboard acts like modern webrowsers as it keeps pre-filled text in the input when the user set the focus in it.


## COLOUR THEME

Depending on the car brand and vehicle, your entertainment system could display various colour theme. For graphic purposes, maybe you will need to know more about the main color and design the user of your application have selected. You can refer to the function [Device.GetHMITheme()]({{site.baseurl}}/webportal/v1/api-reference/list/#api-Device-GetHMITheme) to retrieve this theme ID. 

But then you will need to understand what this ID means. Here is correspondence tables between ID and theme depending on vehicle brand:

#### Peugeot

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Blue Theme <br/> Mainstream PEUGEOT| ![ambience-peugeot0]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot0.png){:class="tableimg"} |
1| Copper Theme <br/>  Onyx| ![ambience-peugeot1]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot1.png){:class="tableimg"} |
2|Red Theme <br/> GTI| ![ambience-peugeot2]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot2.png){:class="tableimg"} |
3|Green Theme <br/> QUARTZ| ![ambience-peugeot3]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot3.png){:class="tableimg"} |
4|Dichroique Theme <br/> PHEV/BEV|![Blue as main color with flashy green lines]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot4.png){:class="tableimg"} |
5|Krypto Theme <br/> PHEV/Performance| ![Silver as main color with flashy yellow-ish lines]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot5.png){:class="tableimg"} |
8|Red Theme <br/> Multidrive 1 <br/> BOOST||
9|Sable/Zen Theme <br/> Multidrive 2 <br/> RELAX| ![ambience-peugeot9]({{site.baseurl}}/assets/images/ambiences/ambience-peugeot9.png){:class="tableimg"} |

#### Citroën

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Orange Theme <br/> Show Room| ![ambience-citroen0]({{site.baseurl}}/assets/images/ambiences/ambience-citroen0.png){:class="tableimg"} |
1| Mainstream <br/> Red Theme <br/> Checkerboard Background| ![ambience-citroen1]({{site.baseurl}}/assets/images/ambiences/ambience-citroen1.png){:class="tableimg"} |
2|Blue Theme <br/> Checkerboard background <br/> Luminous headband | ![ambience-citroen2]({{site.baseurl}}/assets/images/ambiences/ambience-citroen2.png){:class="tableimg"} |
3|Brown Theme <br/> Checkerboard Background | ![ambience-citroen7]({{site.baseurl}}/assets/images/ambiences/ambience-citroen3.png){:class="tableimg"} |
4|Battery Electric Vehicle / Plug<br/>in Hybrid Electric Vehicle | ![ambience-citroen4]({{site.baseurl}}/assets/images/ambiences/ambience-citroen4.png){:class="tableimg"} |
5|Theme Red <br/> Change plain background |![ambience-citroen7]({{site.baseurl}}/assets/images/ambiences/ambience-citroen5.png){:class="tableimg"} |
6|Theme Blue <br/> Change plain background<br/> Change Headband | ![ambience-citroen7]({{site.baseurl}}/assets/images/ambiences/ambience-citroen6.png){:class="tableimg"} |
7|Brown Theme <br/> Change plain background<br/> Change Headband | ![ambience-citroen7]({{site.baseurl}}/assets/images/ambiences/ambience-citroen7.png){:class="tableimg"} |

#### DS

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Gold Theme <br/> Champagn |  ![Black/gray]({{site.baseurl}}/assets/images/ambiences/ambience-ds0.png){:class="tableimg"}|
1| Red Theme <br/> Champagn Perfo Line |  ![Black with red edges/angles]({{site.baseurl}}/assets/images/ambiences/ambience-ds1.png){:class="tableimg"}|
2| Blue Theme <br/>  Ruby | ![Red main color]({{site.baseurl}}/assets/images/ambiences/ambience-ds2.png){:class="tableimg"} |
3| Sapphire Theme <br/>  Battery Electric Vehicle <br/> Plug-in Hybrid Electric Vehicle |  ![Blue / white glow]({{site.baseurl}}/assets/images/ambiences/ambience-ds3.png){:class="tableimg"} |
8|Red Theme <br/>  Titanium <br/> (same as ambiance 3)| |
9| Violet Theme <br/>  Cachemire| |

#### Opel/Vauxhall

ID|Theme Name| Screenshot/Description |
-|-:|--:|
0|Red & grey Theme <br/> GM| ![ambience-opel0]({{site.baseurl}}/assets/images/ambiences/ambience-opel0.png){:class="tableimg"} |
1|Battery Electric Vehicle <br/> Plug-in Hybrid Electric Vehicle| ![ambience-opel1]({{site.baseurl}}/assets/images/ambiences/ambience-opel1.png){:class="tableimg"}|
