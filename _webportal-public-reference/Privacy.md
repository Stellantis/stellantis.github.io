---
title: Privacy
supported:
  - 3
  - 4
type: class
---

#### Overview

Provides the methods to manage information about the privacy settings.

#### Methods Summary

Method | Response Type | Description
-----|----|----
[Privacy.Mode()]({{ site.baseurl }}/webportal_list/#api-Privacy-Mode) | String | Get the privacy mode

#### Messages Summary

Message Type | Description
----|----
[Privacy.ModeFull]({{ site.baseurl }}/webportal_list/#event-Privacy-ModeFull) | Triggered when the user switches to the most restrictive privacy mode.
[Privacy.ModeGeoloc]({{ site.baseurl }}/webportal_list/#event-Privacy-ModeGeoloc) | Triggered when the user switches to the geolocation restricted mode.
[Privacy.ModePublic]({{ site.baseurl }}/webportal_list/#event-Privacy-ModePublic) | Triggered when the user switches to the public privacy mode.
