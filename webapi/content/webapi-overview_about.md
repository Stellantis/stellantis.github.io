
Stellantis WEB API for{% if page.subsection == "b2c"%} Accessing Party for End-Users  {% elsif page.subsection == "b2b" %} Fleet Owner {% endif %} is a REST API implementing various endpoints allowing to work with ex-PSA vehicles (Citroën, DS, Peugeot, Opel and Vauxhall).

These are the main **features** of this API:
- 🚙 **Remote data access**: brand, model, maintenance, collisions, trips of the infotainment system, vehicle alerts, real-time location, etc.
- 🔔 **Custom events (Monitors)**: Set up & receive notifications about the vehicle. Example: receive vehicle info when then battery is under 20% of charge.
- 🕹 **Remote control (Remotes)**: Send remote actions to vehicles like: ❄️ preconditionning programs, 🔈 honk the horn , 💡 turn on/off the lights , 🚪 open doors , 🔋 start a charge etc.

{% if page.subsection == "b2c" %}

## Enroll any users

This API provides an OAuth2 authorization framework to enroll users owning Stellantis vehicles (ex Groupe PSA brands, Citroën, DS, Peugeot, Opel and Vauxhall):
- 1️⃣ First, you will need to register your App in Stellantis information systems.
- 2️⃣ Then, you can check if the capabilities of the vehicle of your targeted end-user feet your use case.
- 3️⃣ If so, request the user consent to access its account data.
- 4️⃣ Finally, you have everything needed to request user data!


## API Roles

End Users APIs allows **Third Party Application** (Accessing Party) to access vehicle data of their **End Users** (Resource Owner) owning **Stellantis** vehicles (ex PSA brands: Citroën, DS, Peugeot, Opel and Vauxhall).

Checkout the [quickstart]({{site.baseurl}}/webapi/b2c/quickstart/about-authentication/#article) for more information about the full process to access the End User API.

![b2c-actors]({{site.baseurl}}/assets/images/b2c-actors.svg)

{% elsif page.subsection == "b2b" %}

## How does it work?

Vehicles are using various **sensors** which aim to improve security and driving experience in the vehicle, these data are available for the development of [in-vehicle applications]({{ site.baseurl }}/webportal/) but this Web API provides vehicle data from **outside of the vehicle**.

![presentation-unified]({{ site.baseurl }}/assets/images/presentation-unified.png)

If an application requires info about a vehicle, appropriate data are **collected & sent** to Stellantis servers via cellular networks. This makes sure that the data are available whether the vehicle is online or not.

Data are then **unified & processed**, these steps ensure that the data provided within this API share the same format in spite of the different types of vehicles and generation,

{% if subsection == "b2c" %}
> **Data Scope:** Only required data are available within this API, check out [data scope]({{site.baseurl}}/webapi/b2c/overview/data-scope/#article).
{% endif %}

> **Data Refreshment:** data are refreshed from the vehicle to Stellantis on a **regular basis** (every 1 min before 2019, more frequently after) and also on **vehicle events** *(ex: turning on the vehicle)*.

{% endif %}

#### API Concepts
[This page]({{ site.baseurl }}/webapi/{{page.subsection}}/overview/api-concepts#article) describes the concepts & structure of this API.