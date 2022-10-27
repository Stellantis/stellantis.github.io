{%- if page.subsection == "v1" -%}
  {% assign infoSystemName = "NAC" %}
{%- elsif page.subsection == "v2" -%}
  {% assign infoSystemName = "IVI" %}
{%- endif %}

# WebPortal {{page.subsection}} runs on {{infoSystemName}}

The 
{% if page.subsection == "v1" -%}
  **NAC**, from the French "NAvigation Connectée" - Connected Navigation, is the name of the **infotainment system** in Stellantis vehicles (ex Groupe PSA brands: Citroën, DS, Peugeot, Opel and Vauxhall) starting **begining of 2017.**
{% elsif page.subsection == "v2" -%}
  **IVI** (In-Vehicle Infotainment) is the name of the **infotainment system** in Stellantis vehicles (ex Groupe PSA brands: Citroën, DS, Peugeot, Opel and Vauxhall) starting **mid-2021.**
{%- endif %}

The main screen of the vehicle (head unit), usually located on the dashboard of the car between driver and passenger, allows to:
- 📍 Follow GPS **navigation**
- 🎵 Browse **media player**
- 📱 Use **paired devices**
- 🚗 Manage **ADAS and HVAC** and more.

But it's also where the user can **launch Embedded Apps 👩🏽‍💻**.

{%- if page.subsection == "v1" -%}
  <img src="{{site.baseurl}}/assets/images/nac.jpg" alt="nac-citroen" style="width: 80%">
{%- elsif page.subsection == "v2" -%}
  <img src="{{site.baseurl}}/assets/images/ivi-navigation.jpg" alt="ivi-navigation" style="width: 80%">
{%- endif %}

## Connected Apps 

Webportal Embedded Apps are available in the {{infoSystemName}} **Connected Apps tab** and are displayed on the screen.

To access the **WebPortal Apps**, the user should select the connected app menu.

{%- if page.subsection == "v1" %}

<div class="is-flex">
<img src="{{site.baseurl}}/assets/images/mainscreen_webportal.png" alt="Webportal-main" style="width: 47%">
<img src="{{site.baseurl}}/assets/images/app-wall.jpg" alt="App Wall" style="width: 47%">
</div>

{%- endif %}


## Screen Size

Drivers interact with the {{infoSystemName}} through a capacitive touchscreen on the dashboard of the vehicle, between the driver and passenger.

The screen is divided in **2 areas**: one is for your app while another area is dedicated to the vehicle system info.

{%- if page.subsection == "v1" %}


There are 3 different screen resolutions depending on car models and generation.

The screen is divided in 3 areas: one is for your application, while two other areas are dedicated to the vehicle system info.
Available screen size: 
- **SD** = 800 x 363 px
- **HD** = 1280 x 582 px
- **WHD** = 1280 x 620 px.


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
![screen-res-sd]({{site.baseurl }}/assets/images/webportal-presentation-screen-sd.jpg)

**High-Definition**
![screen-res-hd]({{site.baseurl }}/assets/images/webportal-presentation-screen-hd.jpg)

**Wide High-Definition**
![screen-res-whd]({{site.baseurl }}/assets/images/webportal-presentation-screen-whd.jpg)

{% elsif page.subsection == "v2" %}


<table class="largertable">
  <thead>
    <tr>
      <th>COLOR</th>
      <th>LEGEND</th>
      <th>SIZE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="verb get" style="background-color:#1E2335 !important">&nbsp;Blue&nbsp;</span></td>
      <td>Area of the screen dedicated to the infotainment system.</td>
      <td>1920x80px</td>
    </tr>
    <tr>
      <td><span class="verb post" style="background-color:#94CE58 !important">Green</span></td>
      <td>Area of the screen available for your app</td>
      <td>1920x640px</td>
    </tr>
  </tbody>
</table>


![ivi-res]({{site.baseurl }}/assets/images/ivi-sizes.jpg)

{% endif %}

## Virtual Keyboard

A virtual keyboard is available on the {{infoSystemName}}. It is displayed on the full size of the touchscreen.

{% if page.subsection == "v1" %}
  ![virtual-keyboard]({{site.baseurl}}/assets/images/virtual-keyboard.jpg)
{% elsif page.subsection == "v2" %}
{% endif %}

You just have to create an HTML **input text** on a page, once the user set the **focus** on this text field, the virtual keyboard is displayed.

```html
<input type="text" />
<!-- Focus the field will make the keyboard to show-up -->
```

{% if page.subsection == "v1" %}
  > **Note:** When the keyboard is being displayed, you cannot receive events.

  > **Note 2:** Before *WAVE4: 42.03.06.50* / *WAVE 2: 21.08.63.40*, pre-filled text was deleted once the user set the focus on the input field. Since these versions, WebPortal’s virtual keyboard acts like in modern web browsers, as it keeps pre-filled text in the input when the user set the focus on it.
{% elsif page.subsection == "v2" %}
{%- endif %}

{% if page.subsection == "v1" %}

## Color Theme

Depending on the car brand and vehicle, your entertainment system could display various color theme. For graphic purposes, maybe you will need to know more about the main color and design the user of your application have selected. You can refer to the function [Device.GetHMITheme()]({{site.baseurl}}/webportal/v1/api-reference/list/#api-Device-GetHMITheme) to retrieve this theme ID. 

But then you will need to understand what this ID means. Here are correspondence tables between ID and theme depending on the vehicle brand:

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


## Software Versions

There are 3 generations of the NAC, based **Safari 6 (supporting ES5 and CSS2)**:

**NAC wave 2.1** - using QtWebKit 5.2.1 
based on WebKit from July 2013 (r153112).

**NAC wave 3** - using QtWebKit 5.5.0
based on the upstream trunk subversion revision 153112.

**NAC wave 4**- using QtWebKit 5.5.0
based on the upstream trunk subversion revision 153112.

##### Share of NAC waves in 2022

SW version	| Percentage of vehicles | 
-|-
NAC Wave 2 | 58%
NAC Wave 3 | 8%
NAC Wave 4 | 34%


{% elsif page.subsection == "v2" %}

## Software Versions

IVI webportal is based on **chromium 67 (supporting ES6 and CSS3)**.

{%- comment -%} ToDo: WPv2 ambiences {%- endcomment -%}
{%- comment -%} ToDo: WPv2 share of waves {%- endcomment -%}

{%- endif %}
