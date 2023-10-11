Monitoring is an event-based feature provided with this API, it allows to set up **events patterns** that will be tracked on Stellantis servers.

## Monitors & Direct Request

**Direct Requesting** is the common way to use APIs. Requesting vehicle data is made using HTTP Request & Response, see [API references]({{site.baseurl}}//webapi/{{page.subsection}}/api-reference/references/#article) for the list of available resources.

**Monitoring** offers another way to receive vehicle data by **setting-up patterns & receiving events**. When the pattern is triggered on Stellantis servers, it will notify your web hook with an HTTP request.<br> *(ex: a notification is triggered when the oil level is low)*

## Monitor features

Monitors offers 3 different kinds of different patterns that can be combined together:

![monitors-features]({{site.baseurl}}/assets/images/monitors-features.png)

- **Zone Monitor**: The monitor is triggered by a condition based on an area.
<br>*Example: leaving or entering a location.*
- **Time Monitor**: The monitor is triggered by scheduled time condition.
<br>*Example: when the vehicle is used during the night.*
- **Data Monitor**: The monitor is triggered based on a rule made of vehicle data.
<br>*Example: opening of the doors, using the AC, oil temperature increasing too much, etc.*

# How Does it Work?

![monitor-system]({{site.baseurl}}/assets/images/monitor-system.png)

First of all the monitors need to be [set up]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/set-up/#article) using the appropriate API endpoint. Once the monitor is created, Stellantis **event engine** will continuously check for the realization of the monitor pattern.

When Stellantis servers are receiving data from your car, the **event engine** will check if the conditions of your monitor are satisfied. If it is the case, it will send an HTTP request to your web hook.

Monitors offers a feature to process large amount of vehicle data. Although, users of this service needs to provide a **dedicated web hook** able to receive and process events.

![monitor-sequence]({{site.baseurl}}/assets/images/monitor-sequence.png)

##### Set Up Monitors

Check out [this tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/set-up/#article) in order to configure monitors.