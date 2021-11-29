# PSA GROUPE's {% if page.subsection == 'b2b' %}B2B {% elsif page.subsection == 'b2c' %}B2C{% endif %} WEB API

Our REST API implements various endpoints to retrieve resources from your Groupe PSA's vehicles. Under certain circumstances you will also be able to remote control some features of your vehicles, like opening the doors or turning AC on! Groupe PSA's API are based on open standards: **OpenAPIv3, JSON, GeoJson & HAL**. Using this You will be able to access a lot of your vehicle data like geolocation, fuel consumption, mileage before maintenance or even remaining time of charge.

<div class="buttons is-centered">
  <a href="{{site.baseurl}}{% if page.subsection == 'b2b' %}/webapi/b2b/overview/demo/ {% elsif page.subsection == 'b2c' %}/webapi/b2c/overview/demo/{% endif %}" class="button is-psablue is-medium">
    <span class="icon is-large is-white">
    <i class="fas fa-code"></i>
    </span>&nbsp; &nbsp; &nbsp;Discover demo
  </a>
</div>

# HOW DOES IT WORK?

Vehicles are using various sensors which aim to improve security and driving experience.

Those sensors provide data that are available in the vehicle infotainment system. If you are interested in embedded application development, you can have a look [at this section]({{ site.baseurl }}/webportal/v1) of this documentation website.

Furthermore, our web API grants you access to this data even outside the car:

![presentation-unified]({{ site.baseurl }}/assets/images/presentation-unified.png)

Sensors are collecting data inside the vehicle and send them to Groupe PSA via mobile network. Our servers will then **process** these raw data into **unified** and understandable info. Furthermore, cloud storage allow you to access your data at any time even though the vehicle is turned-off.

Everything is processed on our side **(Groupe PSA)** in order to provide you {% if page.subsection == 'b2b' %}**(Partner)**{% elsif page.subsection == 'b2c' %}**(Developer)**{% endif %} the **same standard data, whatever the type of vehicles** (brand new or older, regular fuel or electric consumption).

# FEATURES

By requesting this api you will have access to various **features**:

<img src="{{ site.baseurl }}/assets/images/presentation-features.png" alt="presentation-features" style="width: 580px">

| <img  alt="icon-history" class="is-paddingless is-marginless" src="{{ site.baseurl }}/assets/images/presentation-history.png" style="width: 50px"> | **History**: trips, telemetrics, notifications and collisions are useful data, maybe you will need to retrieve it, that's why we choose to store those data and allow you to access history. |

|Feature|Description|
|-|-|
|**General info**|Get a user or car general info, like brand, model, fuel type.|
|**Maintenance**|Stay tuned on car maintenance, time and mileage before maintenance.|
|**Collision**|Be notified of collisions and where it happened.|
|**Trips**|Browse into cars trips, departure point, arrival.|
|**Alerts**|Get history of in-car alerts (oil, engine, breaks etc).|
|**Telemetrics**|Retrieve and track vehicles telemetrics (speed*, location, fuel level, blinking lights etc).|
|**Remote control**|Send remote actions to your vehicle (preconditionning, honk, lights, doors...)|
|**Monitor**|Configure car monitoring like notification for car leaving defined area. Click {% if page.subsection == 'b2b' %}[here]({{site.baseurl}}/webapi/b2b/monitor/about/){% elsif page.subsection == 'b2c' %}[here]({{site.baseurl}}/webapi/b2c/monitor/about/){% endif %} to learn more about monitors.|
|**Status**|Retrieve car status like last position, autonomy, open doors.|

*speed: according to country's legislation.

# BROWSING AND ALERTS

Our API allow you two ways to access vehicles data. You can either browse history or monitor data and receive alerts.
- **Request & Browse**: this the way API usually operates. Request/response system allow you to retrieve various data of your fleet vehicles (example: model, fuel consumption history).

- **Monitoring**: create your own dedicated monitors using our API. You will get notified every time a parameter changed as you specified (example: vehicle leaving a defined area). Find out more about how to use and configure monitors on this {% if page.subsection == 'b2b' %}[page]({{site.baseurl}}/webapi/b2b/monitor/about/){% elsif page.subsection == 'b2c' %}[page]({{site.baseurl}}/webapi/b2c/monitor/about/){% endif %}.

# STANDARDS

We think that accessing easily and efficiently to vehicle's data is important, that's why  we choose to design our API with up-to-date **open standards**.

Groupe PSA's web API are based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) principles,  data resources are accessed via standard **HTTPS requests in UTF-8 format**. We use **OpenAPI v3** for specification, **JSON** in order to exchange data between you and your cars and [HAL](https://en.wikipedia.org/wiki/Hypertext_Application_Language) for naviguation.

Also, we use standards for formating: [GeoJson](https://en.wikipedia.org/wiki/GeoJSON) for geolocation data and [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) for time format.

Click {% if page.subsection == 'b2b' %}[here]({{ site.baseurl }}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[here]({{ site.baseurl }}/webapi/b2c/overview/standards/){% endif %} and find out more about technicals standards!

# DATA REFRESHMENT

Sensors are gathering all types of interesting data inside cars. First, these data are collected in a dedicated embedded hardware in the vehicle. Then data are sent to Groupe PSA's cloud via mobile network:
- **Regular refreshment**:  data are refreshed on a regular basis depending on sensor class and vehicle manufacturing date.
- **Event refreshment**: internal events happening in the vehicle could lead to a refreshment of some data, for example turn on the car.

> Refreshment rates improves with vehicles bought since 2019.


![presentation-frequency]({{ site.baseurl }}/assets/images/presentation-frequency.png)

# SEE ALSO

##### STANDARDS

Want to see what it's look like? Browse our {% if page.subsection == 'b2b' %}[Standards]({{ site.baseurl }}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[Standards]({{ site.baseurl }}/webapi/b2c/overview/standards/){% endif %}.

##### TRY OUT!

Retrieve all reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/specification/){% endif %}.

