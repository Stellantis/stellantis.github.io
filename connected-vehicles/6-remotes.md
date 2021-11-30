---
layout: simple-article
permalink: /connected-vehicles/remotes/
section: connected-vehicles
title: Remote Control
subsection: overview
on_this_page: false
menu: false
require: highlighted-link
description: "Send remote command to a vehicle."
subtitle: Remote commands
---

Using [Stellantis API v3 for Citroën, DS, Peugeot, Opel and Vauxhall]({{site.baseurl}}/webapi/b2b/remote/about) you are able to send remote control command to your vehicle(s)! 

The remote feature allows to control your vehicle trough cellular network. 

Using this tool, it is possible to add remote control features to your mobile application or web application.


### REMOTE FEATURES
<ul style="list-style: none">

<li><i class="fas fa-plug"></i> Start and stop a charge </li>
<li><i class="fas fa-user-ninja"></i> Declare your vehicle as stolen </li>
<li><i class="fas fa-lightbulb"></i> Set a light blinking </li>
<li><i class="far fa-snowflake"></i> program conditioning and heater </li>
<li><i class="fas fa-door-closed"></i> Control the doors locking </li>
<li><i class="fas fa-bullhorn"></i> Honk the horn </li>
<li><i class="fas fa-lock-open"></i> Immobilize the vehicle </li>
<li><i class="fas fa-map-marker-alt"></i> Launch a remote navigation in the vehicle HMI </li>

</ul>

<div>
    {% include highlighted-link.html link_label="Retrieve the remote commands!" link_url="/webapi/b2b/remote/set-up/#remote-actions" %}
</div>

### HOW DOES IT WORKS

This feature is fully compatible with our REST API, it means that you can configure all your remote action using simple HTTP request. 

In addition, remote control provides notification messages during the process of the remote action. You will receive these notification messages on your server, you can understand more about it by reading the [webhook references]({{site.baseurl}}/webapi/b2b/remote/webhook/#/article).

**Example sending a remote navigation:**

![remote-action-sequence]({{site.baseurl}}/assets/images/remote-action-simple-sequence.svg)

<div>
    {% include highlighted-link.html link_label="Learn how to use Remotes!" link_url="/webapi/b2b/remote/about/#article" %}
</div>