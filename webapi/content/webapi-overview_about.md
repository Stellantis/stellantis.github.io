
This REST API implements various endpoints to **retrieve data** from a vehicle. It's also possible to **remote control** some features of the vehicles, like opening the doors or turning AC on.

## Features

By requesting this api you will have access to various **vehicle features**:
- 🚗 **Car Data**: Get a user or car general info, like brand, model, fuel type, autonomy, open doors etc.
- 🛠 **Maintenance**: Stay tuned on car maintenance, time and mileage before maintenance.
- 💥 **Collision**: Be notified of collisions and where it happened.
- 🏁 **Trips**: Browse into cars trips, departure point, arrival.
- ⚠️ **Alerts**: Get history of in-car alerts (oil, engine, breaks etc).
- 📍 **Location**: Access the vehicle position in real time.
- 📊 **Telemetrics**: Retrieve and track vehicles telemetrics (speed, fuel level, blinking lights etc).
- 🕹 **Remote control**: Send remote actions to your vehicle (preconditionning, honk, lights, doors...).

> **Direct Request** vs **Monitoring:** 
- As a REST API, this product allow to request all the data above using **HTTP Request**. 
- It's possible to configure **Monitors** allowing to receive an event from Stellantis when a pattern is triggered.<br> *(ex: oil level is low)*

{% if page.subsection == "b2c" %}

## End-Users API Roles

End Users APIs allows **Application Developers** (Accessing Party) to access vehicle data of their **Users** (Resource Owner) owning **Stellantis** vehicles (ex PSA brands: Citroën, DS, Peugeot, Opel and Vauxhall).

Check-out [Get Started]({{site.baseurl}}}/webapi/b2c/quickstart/get-started/#article) for more information about the full process to access the End Users API.

![b2c-actors]({{site.baseurl}}/assets/images/b2c-actors.svg)

{% endif %}

## How does it works?

Vehicles are using various **sensors** which aim to improve security and driving experience in the vehicle, these data are available for the development of [in-vehicle applications]({{ site.baseurl }}/webportal/) but this Web API provide vehicle data from **outside of the vehicle**.

![presentation-unified]({{ site.baseurl }}/assets/images/presentation-unified.png)

If an application require info about a vehicle, appropriate data are **collected & sent** to Stellantis servers via cellular network. This make sure that the data are available whether the vehicle is online or not.


Data are then **unified & processed**, these steps ensure that thedata provided within this API share the same format in spite of the different types of vehicles and generation,

> **Data Scope:** Only required data are available within this API, check out [data scope]({{site.baseurl}}/webapi/b2c/overview/data-scope/#article).

> **Data Refreshment:** data are refreshed from the vehicle to Stellantis on a **regular basis** (every 1 min before 2019, more frequently after) and also on **vehicle events** *(ex: turning on the vehicle)*.



# See Also

##### Standards

Want to see what it's look like? Browse our {% if page.subsection == 'b2b' %}[Standards]({{ site.baseurl }}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[Standards]({{ site.baseurl }}/webapi/b2c/overview/standards/){% endif %}.

##### Try Out!

Retrieve all reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/specification/){% endif %}.

