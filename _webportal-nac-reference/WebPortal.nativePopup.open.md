---
title: WebPortal.nativePopup.open
supported:
  - 2
  - 3
  - 4
type: api
privacy: Full
---

### `WebPortal.nativePopup.open`

| **Description** | Request from your application to display a disruptive popup, whether the user is browsing your application or not. Linked events: [OK button](#event-WebPortal-nativePopup-evt-ok), [Cancel Button](#event-WebPortal-nativePopup-evt-cancel), [Display timeout](#event-WebPortal-nativePopup-evt-timeout).
|**Type**| `postMessage` command. See [implementation tutorial]({{site.baseurl}}/webportal/v1/quickstart/#webportal-events) for post message commands. |
| **Parameter** | *None* |

### See Also

- Full implementation [example]({{site.baseurl}}/webportal/v1/interactivity/popup/#article) of this popup.
- Event: [OK button](#event-WebPortal-nativePopup-evt-ok).
- Event: [Cancel Button](#event-WebPortal-nativePopup-evt-cancel).
- Event: [Display timeout](#event-WebPortal-nativePopup-evt-timeout).


<div class="buttons is-centered">
  <a class="button is-psablue is-medium" href="{{site.baseurl}}/assets/downloads/nativePopup-example.html" download="">
    <span class="icon is-large is-white">
    <i class="fa fa-file-download"></i>
    </span>&nbsp; &nbsp; &nbsp;Implementation Example
  </a>
</div>

#### IMPORTANT

>**Caution:** Popups (either [MQTT]({{site.baseurl}}/webportal/v1/interactivity/popup/#article) or [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open)) must not be asked more often than once every 20 seconds.

> **Caution 2:** [Navigation.LaunchGuidance()]({{site.baseurl}}/webportal/v1/reference/list/#api-Navigation-LaunchGuidance) and [Navigation.LaunchGuidanceWaypoints()]({{site.baseurl}}/webportal/v1/reference/list/#api-Navigation-LaunchGuidanceWaypoints) can **not** be launched when a popup (either [MQTT]({{site.baseurl}}/webportal/v1/interactivity/popup/#article) or [nativePopup]({{site.baseurl}}/webportal/v1/reference/list/#api-WebPortal-nativePopup-open)) is displayed. To make sure the guidance have actually been launched please check that LaunchGuidance function return is `True`.