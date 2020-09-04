---
layout: doc-article
permalink: /connected-vehicles/privacy/
section: connected-vehicles
title: Privacy Settings
description: "Privacy settings are set in the infotainment system by the owner of the vehicle. Find information about these restrictions."
---

# INBOARD

Depending on the [services]({{site.baseurl}}/connected-vehicles/connected-services#car-services) subscribed by the owner of the vehicles, relevant data will be send to Groupe PSA servers throught mobile network.

Within the vehicle infotainment system, the user can select various **privacy settings**:
- Public: geolocation & subscribed services relevant data's are refreshed
- Geoloc: subscribed services relevant data's is refreshed but geolocation is not
- Full: neither data or geolocation are refreshed

This setting will impact your ability to retrieve data in our API.

<img src="{{site.baseurl}}/assets/images/privacy-selection.png" alt="privacy-selection" style="width: 450px">

## WEBPORTAL

You can access the feature of webportal that are allowed by the privacy mode of the user. That's why your APP needs to handle the privacy settings selected by the user.

See this [section]({{site.baseurl}}/webportal/v1/quickstart/events/#privacy-mode) of webportal tutorial for more info.

## WEB API

You are developer for end-user application, you can access data based on the privacy mode of the vehicle.

If your are a fleet owner you can access your vehicle data. However, in order to be compliant with GDPR, you can use the query parameter `profile` as described [here]({{site.baseurl}}/webapi/b2b/reference/specification#section/API-output:/Data-profile).


# SEE ALSO

#### CONNECTED SERVICES

See how to access to the APIs with Groupe PSA [connected services]({{site.baseurl}}/connected-vehicles/connected-services).
