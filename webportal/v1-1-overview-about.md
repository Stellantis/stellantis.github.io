---
layout: doc-article
permalink: /webportal/v1/overview/about/
section: webportal
subsection: v1
categorie: Overview
title: About
description: "WebPortal v1 is the browser allowing users to launch authorized Web Applications directly from the media system of their car."
redirect_from:
  - /webportal/v1/
  - /webportal/v1/overview/
  - /webportal/
---

# ABOUT WEBPORTAL

The WebPortal is the browser allowing users to launch authorized Web Applications directly from the media system of their car.
All the applications function on a subscription basis and their presence on the welcome page is automatically managed by the WebPortal.

![Image of Main Screen]({{ site.baseurl }}/assets/images/webportal-pic.jpg)

The WebPortal relies on [REST API](https://restfulapi.net/) and [MQTT protocol](http://mosquitto.org/man/mqtt-7.html).

![WebPortal Schema]({{ site.baseurl }}/assets/images/schema.svg)

# FEATURES

The API will allow you to do the following:

- `Car`: Get information about the vehicle: [VIN code](https://fr.wikipedia.org/wiki/Vehicle_Identification_Number), Fuel type, unit and level, Current speed and unit, Mileage and distance unit, Autonomy, level of battery and fuel, the driving state, the time,
- `Connectivity`: Detect the connectivity status
- `Device`: Request a popup, get hardware and software version of the system,
- `HMI`: Information on the user, UIN, language, country,
- `Media`: Information on the media: album name, artist name, current track, state of the media, type of media
- `Navigation`: Get the current position info, destination info, maneuver info, journey info, waypoint info, start new journey,
- `Phone`: Launch phone call,
- `Privacy`: Manage privacy mode of user
- `Radio`: Information on the radio: frequency, preset...
- `System`: Settings action reserved to administrative use
- `Webportal`: All the events associated to user interaction or due to server

# ACCESS WEBPORTAL

When the system starts, a menu appears where the user can choose to access the Connected Apps:

![Image of Main Screen]({{ site.baseurl }}/assets/images/mainscreen_webportal.png)

They then reach the main menu containing the applications they are subscribed to:

![App Wall]({{ site.baseurl }}/assets/images/app-wall.png)
