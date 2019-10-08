---
layout: doc-article
permalink: /webapi/b2b/
section: webapib2b
title: Presentation
---


# What is Groupe PSA's B2B APIs ?

Our REST APIs implements all the resources you need to retrieve from your fleet of vehicles. It's based on open standards: **OpenAPIv3, JSON & HAL**. You will be able to get a lot of data like geolocation, fuel consumption, mileage before maintenance or even remaining time of charge.


# How does it works ?

Vehicles are using various sensors which aim to improve security and driving experience. They are avaibables for embedded development as you can see [in this section]({{ site.baseurl }}/webportal/).

Our web APIs grants you access to this data even outside of the car:


![presentationUnified]({{ site.baseurl }}/assets/images/presentationUnified.png)

Sensors are collecting datas inside the vehicle and sent them to Groupe PSA via mobile network. Our servers will then **process** these raw data into **unified** and understable info. Futhermore, cloud storage allow you to access your data at any time eventhough the vehicle is turned-off.

Everything is processed on our side (Groupe PSA) in order to provide you (Partner) the **same kind of datas whatever you own differents types of vehicles** (brand new or older, regular fuel or electric consumption).


# What can you do ?


By requesting this api you can retrieve all kinds off intersiting **features**:

![Features]({{ site.baseurl }}/assets/images/presentationFeatures.png)

|![Features]({{ site.baseurl }}/assets/images/presentationHistory.png) | **History**: trips, telemetrics, notifications and collisions are usefull datas, maybe you will need to retrieve it, that's why we choose to store those data and allow you to access history. |


|Feature|Descrpition|
|-|-|
|General info|Get a user or car general info, like brand, model, fuel type.|
|Maintenance|Stay tuned on car maintenance, time and mileage before maintenance.|
|Collision|Be notified of collisions and where it happened.|
|Trips|Browse into cars trips, departure point, arrival.|
|Alerts|Get history of in-car alerts (oil, engine, breaks etc).|
|Telemetrics|Retrieve and track vehicles telemetrics (speed*, location, fuel level, blinking lights etc).|
|Monitor|Configure car monitoring like notification for car leaving defined area. Click [here]({{site.baseurl}}/webapi/b2b/monitor/) to learn more about monitors.|
|Status|Retrieve car status,like last position, autonomy, open doors.|

*speed: according to country's legislation.

# Browsing and alerts


Our API allow you two ways to access your vehicles data. You can either browse history or monitor data and receive alerts.
- **Request & Browse**: this the way APIs usually operates. Request/response system allow you to retrieve various data of your fleet vehicles (example: modele, fuel consumption history).

- **Monitoring**: create your own dedicated monitors using our APIs. You will get notified every time a parameter changed as you specified (example: vehicle leaving a defined area). Find out more about how to use and configure monitors on this [page]({{site.baseurl}}/webapi/b2b/monitor/).


# Technicals Standards


We think that accessing easily and efficiently to your datas is important, that's why  we choose to design our APIs with up-to-date **open standards**.

Groupe PSA's web APIs are based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) principles,  data resources are accessed via standard **HTTPS requests in UTF-8 format**. We use **OpenAPI v3** for specification, **JSON** in order to exchange data between you and your cars and [HAL](https://en.wikipedia.org/wiki/Hypertext_Application_Language) for naviguation.

Also we use standards for formating: [GeoJson](https://en.wikipedia.org/wiki/GeoJSON) for geolocalisation data and [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) for time format.

Click [here]({{ site.baseurl }}/webapi/b2b/preview/) and find a preview!

# Data Refreshment

Sensors are gathering all types of intersting datas inside cars. First of all, these datas are collected in a dedicated embedded hardware in the vehicle. Then datas are sent to Groupe PSA's cloud via mobile network:
- **Regular refresment**:  datas are refreshed on a regular basis depending on sensor class and vehicle manufacturing date.
- **Event refreshment**: internal events happening in the vehicle could lead to a refreshment of some datas, for exemple turn on the car.

  > Refresment rates improves with vehicles bought since 2019.


![presentationFrequency]({{ site.baseurl }}/assets/images/presentationFrequency.png)

# See Also

##### Preview


Want to see what it's look like ? Browse our [Preview]({{site.baseurl}}/webapi/b2b/preview/).

##### Try out!

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.
