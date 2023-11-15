Monitoring is an event-based feature provided with this API, it allows to set up **events patterns** that will be tracked on Stellantis servers.

## Monitors & Direct Request

**Direct Requesting** is the classic way to use REST APIs. Requesting vehicle data is made using HTTP Request & Response, check out the [API references]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/#article) for the list of available resources.

**Monitoring** offers another way to receive vehicle data by setting-up patterns & receiving events. When the pattern is triggered on Stellantis servers, it will send a notification {% if page.subsection == "b2b" %}
 to your webhook with an HTTP request.
{% elsif page.subsection == "b2c" %}
 through Firebase Cloud Messaging, HTTP or websocket.
{% endif %}For example, a notification can be triggered when the oil level is low.

## Monitor features

Monitors offers 3 different kinds of different patterns that can be combined together:
- **🗺️ Zone Monitor**: The monitor is triggered by a condition based on an area.
<br>*Example: leaving or entering a location.*
- **⏱️ Time Monitor**: The monitor is triggered by scheduled time condition.
<br>*Example: when the vehicle is used during the night.*
- **🚗 Data Monitor**: The monitor is triggered based on a rule made of vehicle data.
<br>*Example: opening of the doors, using the AC, oil temperature increasing too much, etc.*

# How Does it Work?

![monitor-sequence]({{site.baseurl}}/assets/images/monitor-sequence-{{page.subsection}}.svg)

First of all the monitors need to be [set up]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/set-up/#article) using the appropriate API endpoints. Then, when Stellantis servers are receiving data from your car, the **event engine** will check if the conditions of your monitor are satisfied. If it is the case, it will trigger the notification.

Monitors offers a feature to process large amount of vehicle data. Although
{% if page.categorie == "b2b" %}
 users of this service needs to provide a **dedicated webhook** 
{% elsif page.categorie == "b2c" %}
 in case of HTTP or websocket notifications, users of this service needs to provide a dedicated server 
{% endif %} able to receive and process these events.

#### Set Up Monitors

Check out [this tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/set-up/#article) in order to configure monitors.