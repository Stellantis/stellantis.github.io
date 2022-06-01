---
layout: simple-article
permalink: /connected-vehicles/monitors/
section: connected-vehicles
title: Monitoring & Notification
subsection: overview
on_this_page: false
menu: false
require: highlighted-link
description: "Create patterns and receive notification when it is triggered."
subtitle: Receive notification
---

Using our REST API it is possible to monitor your vehicles' activity using our dedicated feature.

You just have to set up a pattern you want to track.

It could be the modification of a **vehicle data** (% of battery, engine alert, maintenance etc.) related to **an area** and a **time zone**.

![monitor-sequence]({{site.baseurl}}/assets/images/monitor-simple-sequence.svg)

<div>
    {% include highlighted-link.html link_label="Learn how to use the monitors!" link_url="/webapi/b2b/monitor/about/#article" %}
</div>

## Use Case Example

Let's imagine a car rental company owning electric cars. It is possible for each local agency to map the charging station in the area, it would be useful in order to inform the customers...

But using our monitoring feature, you can receive an event in your Information System when a customer is leaving the *area where the charging stations are*. Then you will be able to send a notification (OS notification, SMS, email...) to your customer to remind him or her to be careful.

If you want to be more precise, it is also possible to create a more complex monitor triggered when the vehicle is leaving the area *after 10pm*, and only if the vehicle *battery is under 30%*.

<div>
    {% include highlighted-link.html link_label="Explore the references of the monitoring feature." link_url="/webapi/b2b/api-reference-v3/specification/#tag/Monitors" %}
</div>