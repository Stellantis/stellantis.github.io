# PSA GROUPE's {% if page.section == 'webapib2b' %}B2B {% elsif page.section == "webapib2c" %}B2C{% endif %} WEB API

Our REST APIs implements various endpoints to retrieve resources from your Groupe PSA's vehicles. Under certain circumstances you will also be able to remote control some features of your vehicles, like opening the doors or turning AC on! Groupe PSA's APIs are based on open standards: **OpenAPIv3, JSON, GeoJson & HAL**. Using this You will be able to access a lot of your vehicle data like geolocation, fuel consumption, mileage before maintenance or even remaining time of charge.

<div class="buttons is-centered">
  <a href="{{site.baseurl}}{% if page.section == 'webapib2b' %}/webapi/b2b/demo/ {% elsif page.section == "webapib2c" %}/webapi/b2c/demo/{% endif %}" class="button is-psablue is-medium">
    <span class="icon is-large is-white">
    <i class="fas fa-code"></i>
    </span>&nbsp; &nbsp; &nbsp;Discover demo
  </a>
</div>

# HOW DOES IT WORK?

Vehicles are using various sensors which aim to improve security and driving experience. Those sensors are available for embedded applications development for the inboard car computer, as you can see [in this section]({{ site.baseurl }}/webportal/) of this documentation website.

Our web APIs grants you access to this data even outside the car:

![presentationUnified]({{ site.baseurl }}/assets/images/presentationUnified.png)

Sensors are collecting data inside the vehicle and send them to Groupe PSA via mobile network. Our servers will then **process** these raw data into **unified** and understandable info. Furthermore, cloud storage allow you to access your data at any time even though the vehicle is turned-off.

Everything is processed on our side **(Groupe PSA)** in order to provide you {% if page.section == 'webapib2b' %}**(Partner)**{% elsif page.section == "webapib2c" %}**(Developer)**{% endif %} the **same standard data, whatever the type of vehicles** (brand new or older, regular fuel or electric consumption).

# FEATURES

By requesting this api you will have access to various **features**:

![Features]({{ site.baseurl }}/assets/images/presentationFeatures.png)


| <img class="is-paddingless is-marginless" src="{{ site.baseurl }}/assets/images/presentationHistory.png"> | **History**: trips, telemetrics, notifications and collisions are useful data, maybe you will need to retrieve it, that's why we choose to store those data and allow you to access history. |

|Feature|Description|
|-|-|
|**General info**|Get a user or car general info, like brand, model, fuel type.|
|**Maintenance**|Stay tuned on car maintenance, time and mileage before maintenance.|
|**Collision**|Be notified of collisions and where it happened.|
|**Trips**|Browse into cars trips, departure point, arrival.|
|**Alerts**|Get history of in-car alerts (oil, engine, breaks etc).|
|**Telemetrics**|Retrieve and track vehicles telemetrics (speed*, location, fuel level, blinking lights etc).|
|**Monitor**|Configure car monitoring like notification for car leaving defined area. Click {% if page.section == 'webapib2b' %}[here]({{site.baseurl}}/webapi/b2b/monitor/){% elsif page.section == "webapib2c" %}[here]({{site.baseurl}}/webapi/b2c/monitor/){% endif %} to learn more about monitors.|
|**Status**|Retrieve car status like last position, autonomy, open doors.|

*speed: according to country's legislation.

# BROWSING AND ALERTS

Our API allow you two ways to access vehicles data. You can either browse history or monitor data and receive alerts.
- **Request & Browse**: this the way APIs usually operates. Request/response system allow you to retrieve various data of your fleet vehicles (example: model, fuel consumption history).

- **Monitoring**: create your own dedicated monitors using our APIs. You will get notified every time a parameter changed as you specified (example: vehicle leaving a defined area). Find out more about how to use and configure monitors on this {% if page.section == 'webapib2b' %}[page]({{site.baseurl}}/webapi/b2b/monitor/){% elsif page.section == "webapib2c" %}[page]({{site.baseurl}}/webapi/b2c/monitor/){% endif %}.

# STANDARDS

We think that accessing easily and efficiently to vehicle's data is important, that's why  we choose to design our APIs with up-to-date **open standards**.

Groupe PSA's web APIs are based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) principles,  data resources are accessed via standard **HTTPS requests in UTF-8 format**. We use **OpenAPI v3** for specification, **JSON** in order to exchange data between you and your cars and [HAL](https://en.wikipedia.org/wiki/Hypertext_Application_Language) for naviguation.

Also, we use standards for formating: [GeoJson](https://en.wikipedia.org/wiki/GeoJSON) for geolocation data and [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) for time format.

Click {% if page.section == 'webapib2b' %}[here]({{ site.baseurl }}/webapi/b2b/preview/){% elsif page.section == "webapib2c" %}[here]({{ site.baseurl }}/webapi/b2c/preview/){% endif %} and find a preview!

# DATA REFRESHMENT

Sensors are gathering all types of interesting data inside cars. First, these data are collected in a dedicated embedded hardware in the vehicle. Then data are sent to Groupe PSA's cloud via mobile network:
- **Regular refreshment**:  data are refreshed on a regular basis depending on sensor class and vehicle manufacturing date.
- **Event refreshment**: internal events happening in the vehicle could lead to a refreshment of some data, for example turn on the car.

> Refreshment rates improves with vehicles bought since 2019.


![presentationFrequency]({{ site.baseurl }}/assets/images/presentationFrequency.png)

# SEE ALSO

##### PREVIEW


Want to see what it's look like ? Browse our {% if page.section == 'webapib2b' %}[Preview]({{ site.baseurl }}/webapi/b2b/preview/){% elsif page.section == "webapib2c" %}[Preview]({{ site.baseurl }}/webapi/b2c/preview/){% endif %}.

##### TRY OUT!

Retrieve all reference of this API, go to the {% if page.section == 'webapib2b' %}[API List]({{ site.baseurl }}/webapi/b2b/reference/){% elsif page.section == "webapib2c" %}[API List]({{ site.baseurl }}/webapi/b2c/reference/){% endif %}.
