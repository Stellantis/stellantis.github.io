---
layout: simple-article
permalink: /connected-vehicles/privacy/
section: connected-vehicles
title: Privacy Settings
subsection: overview
description: "Privacy settings are set in the infotainment system by the owner of the vehicle. Find information about these settings here."
subtitle: "In Vehicle Privacy"
---

# Infotainment Settings

{% capture text %}
Depending on the *connected services* subscribed by the owner of the vehicles, relevant data will be sent to Stellantis servers through mobile network.

Within the vehicle infotainment system, the user can select between **3 privacy settings**:
- <strong>Data & Location:</strong> geolocation & subscribed services relevant data are refreshed.
- <strong>Data:</strong> subscribed services relevant data's is refreshed, but geolocation is not.
- <strong>Plane Mode:</strong> neither data nor geolocation are refreshed.

This setting will impact your ability to retrieve data in our APIs.
{% endcapture %}

<div style="overflow: auto">


<img src="{{site.baseurl}}/assets/images/privacy-selection.jpg" alt="privacy-selection" class="content-img-float-right">
<div>
{{text | markdownify}}
</div>
</div>

### Effect on WebPortal

As an embedded application developer (**Webportal v1 & v2**), only API that match the current privacy are available. That's why your application needs to handle the privacy settings selected by the user. See [privacy webportal v1]({{site.baseurl}}/webportal/v1/application/#privacy-mode) or [privacy Webportal v2]({{site.baseurl}}/webportal/v2/overview/privacy/#article) for more info.

You can retrieve required level of privacy of each API in the references: [Webportal v1]({{site.baseurl}}/webportal/v1/api-reference/list/#article) or [Webportal v2]({{site.baseurl}}/webportal/v2/api-reference/list/#article).

### Effect on Web API


If you are a fleet owner (**WEB API B2B**) you can access your vehicle data. However, in order to be compliant with GDPR, you should use the query parameter `profile` as described [here]({{site.baseurl}}/webapi/b2b/api-reference/references/#section/API-output:/Data-profile).

If you are developing end-user applications (**Web API B2C v4**), you can only access data that match the current privacy mode of the vehicle.

> **Reminder:** Whatever the privacy selected in the vehicle, you can only access the data allowed in the data scope of the *Connected Vehicle Services* your vehicle subscribed.

# See Also

#### Data Catalog

Look at our [data catalog]({{site.baseurl}}/connected-vehicles/data-catalog/#article) to find what kind of information are available in the API.
