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
|**Type**| `postMessage` command. See [implementation tutorial]({{site.baseur}}/webportal/quick-start/#listening-to-webportal-messages) |
| **Parameter** | *None* |

### See Also

- [Full implementation example]({{site.baseurl}}/webportal/reference/#open-native-popup-from-app)
- Event: [OK button](#event-WebPortal-nativePopup-evt-ok)
- Event: [Cancel Button](#event-WebPortal-nativePopup-evt-cancel)
- Event: [Display timeout](#event-WebPortal-nativePopup-evt-timeout)

<a class="button is-success is-rounded" href="{{site.baseurl}}/assets/downloads/nativePopup-example.html" download="">Download Implementation Example</a>


#### Example

```javascript
WebPortal.openNativePopup("Do you wish to continue?")
```

#### Remark

>**Note :** Popups shouldn't be asked more often than once every 20 seconds.