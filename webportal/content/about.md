WebPortal is a feature of the vehicle head unit allowing **developing and running Apps** in the infotainment system. WebPortal *Apps* have also access to many [vehicle features](#features). 
- 👩🏽‍💻 **Developers** build embedded *Applications* for Stellantis (ex PSA brands) vehicles.
- 🚙 **Vehicle Owners** launch *Apps* directly from the media system of their car.

> **Be careful:** WebPortal is **not an open platform**, all projects should first be approved by Stellantis team. Please contact WebPortal team before starting your project, checkout [App Validation]({{site.baseurl}}/webportal/{{page.subsection}}/overview/app-validation/#article).

They are 2 different version of the vehicle head unit:
- **NAC** were produced between 2017 and 2021, supports **ES5 & CSS2**.
- **IVI** are produced since mid-2021, supports **ES6 & CSS3**.

Depending on the head unit version, vehicle APIs are not the same. However it is possible to build **hybrid App**, check out the [Quickstart]({{site.baseurl}}/webportal/{{page.subsection}}/application/quickstart/#article).

## Build Embedded Apps

As a developer, you can [develop Applications]({{site.baseurl}}/webportal/{{site.baseurl}}/application/quickstart/#article) for the WebPortal using standards **web technologies**.

Applications run in an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) in a browser embedded (called WebPortal) in the infotainment system of the vehicle. Using web technologies, application development is easy for anyone used to the **web standards**.

- 👨🏽‍💻 The **user interface** is easy to build using web standards: HTML for structuring, CSS for layout and JavaScript
{%- if page.subsection == "v1" %} (based on safari 6, supporting ES5 and CSS2) 
{% elsif page.subsection == "v2" %} (based on chromium 67, supporting ES6 and CSS3) 
{% endif -%}
for interactivity.
- 🚗 But moreover, WebPortal application can access **vehicle APIs** giving access to embedded data and features, using [window.postMessage]({{site.baseurl}}/webportal/v1/application/events/#article).
- 🌏 As WebPortal is an embedded system, **accessing internet** should be done carefully. Also WebPortal has an implementation of [MQTT](https://mqtt.org/). 

{%- if page.subsection == "v1" -%}
<img src="{{site.baseurl}}/assets/images/webportal-pic.jpg" alt="nac-inboard" style="width: 65%">
{%- elsif page.subsection == "v2" -%}
<img src="{{site.baseurl}}/assets/images/ivi-navigation.jpg" alt="ivi" style="width: 65%">
{%- endif %}

## Features

Developing **WebPortal Applications** allows accessing dedicated vehicle features, check out 
{%- if page.subsection == "v1" %} 
[References]({{site.baseurl}}/webportal/v1/api-reference/list/#article)
{%- elsif page.subsection == "v2" %} 
[References]({{site.baseurl}}/webportal/v2/api-reference/list/#article)
{%- endif %} for an exhaustive list of APIs.

- **🚗 Driving**: Get information about the vehicle & driving. VIN, speed, mileage, autonomy, level of battery and fuel etc.
- **🌍 Connectivity**: Access internet & MQTT.
- **👩🏽‍💻 User Interactivity**: Interact with the user thought interactive events, get informed of the user settings.
- **📺 Infotainment System:** Control 🎵 **audio** & 📻 **radio** players, start a 📱 **phone** call on a paired device.
- **📍 Navigation**: Get the current position, information about the current navigation, start new nav.
{%- if page.subsection == "v2" %}
- **🚥 ADAS:** retrieve info about advanced driver-assistance system and custom personal eco-driving advices
- ❄️ **HVAC:** interact with AC, heater and ventilation.
{%- endif -%}