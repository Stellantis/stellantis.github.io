---
title: Device.GetHMITheme()
supported:
  - 2
  - 3
  - 4
type: api
---

### `Device.GetHMITheme()`

| **Description** | Get the theme of the HMI
| **Response** | *Number* <br/>The number corresponding to the theme ID.<br/> Browse [Ambience Section]({{site.baseurl}}webportal/v1/overview/infotainment-system/#colour-theme) for a correspondence table.
| **Parameter**   | *Void*

#### EXAMPLE

```javascript
// Get vehicle brand
var vehicleBrand = Device.GetCarBrand()
// vehicleBrand = 1 
// value 1 is Citroën

// Get Theme
var currentTheme = Device.GetHMITheme()
// currentTheme = 0
// for citroen, value 0 is theme Orange
```

> **Note:** To retrieve HMI theme you need to know the vehicle brand first. You can use [Device.GetCarBrand()]({{site.baseurl}}/webportal/v1/reference/list/#api-Device-GetCarBrand) to do so. Then you can use Device.GetHMITheme() and browse [Ambience Section]({{site.baseurl}}/webportal/v1/best-pratice/#ambience) for a correspondence table.

*Appeared in Software version 30.11.04.10*
