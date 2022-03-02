---
layout: doc-article
permalink: /webportal/v2/overview/infotainment-system/
section: webportal
subsection: v2
categorie: Overview
title: Infotainment System
description: "IVI is the current vehicle infotainment system in Stellantis, ex Groupe PSA, vehicles (Citroën, DS, Peugeot, Opel and Vauxhall)."
---

# IN-VEHICLE INFOTAINMENT

The **IVI** (In-Vehicle Infotainment) is the infotainment system 
in the current Stellantis vehicles (ex Groupe PSA brands: Citroën, DS, Peugeot, Opel and Vauxhall). It allows to use navigation, browse media player, customize interior, choose driving mode...

Driver interacts with the IVI through a capacitive touchscreen. **Webportal Embedded Apps** are also displayed on this same screen! 

![IVI]({{ site.baseurl }}/assets/images/ivi-navigation.jpg)



## SCREEN SIZE

Usually in-board screen is located on the dashboard of the car between driver and passenger.

The screen is divided in **2 areas**: one is for your app while another areas is dedicated to car system info.


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

## VIRTUAL KEYBOARD

A virtual keyboard is available on the IVI. It is displayed on the full size of the IVI touchscreen.

You just have to create an HTML **input text**, once the user set the **focus** on this text field the virtual keyboard is displayed.

```html
<input type="text" />
<!-- Focus the field will make the keyboard to show-up -->
```
