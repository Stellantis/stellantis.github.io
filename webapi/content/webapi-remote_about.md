# Features

With our API, you are able to {% if page.subsection == 'b2b' %}[browse data]({{site.baseurl}}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[browse datas]({{site.baseurl}}/webapi/b2c/overview/standards/){% endif %} about vehicles and receive {% if page.subsection == 'b2b' %}[custom notifications]({{site.baseurl}}/webapi/b2b/monitor/about){% elsif page.subsection == 'b2c' %}[custom notifications]({{site.baseurl}}/webapi/b2c/monitor/about){% endif %}. Now, the remote API allow you to send online commands to connected vehicles.

<img src="{{site.baseurl}}/assets/images/remote-features.png" alt="remote-features" style="width: 580px">

**Available features:**

- **Charging**: Start and Stop the recharge of the vehicle.
- **Stolen**: Set the vehicle as stolen.
- **Lights**: Set a light blinking.
- **State**: Refresh and retrieve vehicle status info.
- **Preconditioning**: Program heater or AC before the vehicle is being used.
- **DoorsState**: Lock/unlock the doors remotely.
- **Horn**: Honk the horn remotely.
- **Immobilization**:  Immobilize the vehicle until you let it go again.
- **Navigation**: Send a remote navigation in the vehicle guidance system.

# How does it works?

**Step1: create a callback**

First, you will have to set up a remote callback.
If you are already working with monitors, it is almost the same as posting a {% if page.subsection == 'b2b' %}[monitor]({{site.baseurl}}/webapi/b2b/monitor/set-up/#post-monitor-request){% elsif page.subsection == 'b2c' %}[monitor]({{site.baseurl}}/webapi/b2c/monitor/about/set-up/#post-monitor-request){% endif %}. 

Callback is where you define the parameters of your **webhook** (URL, authentication) and the structure of the **HTTP request** you will receive as a notification.

Callbacks are **specific** to certain remotes, as you can subscribe them to one or more actions & they are **reusable** as you can use the same callback every time you need to execute a similar command.

It is possible to set a retry policy with a specific number and frequency, it’s useful in case of your webhook is temporary unavailable. You can also set a batch notify policy.

![remote-callback-sequence]({{site.baseurl}}/assets/images/remote-callback-sequence.png)

>**Note:** At least one callback is required to post a remote action. But you can use **only one callback** for all your remote actions if you need only one webhook configuration. Indeed, if you need to have different webhook or notification policies, you can set several callbacks.

**Step2: send a remote action**

Once your callback is created, you will be able to **send remote** request to your vehicle (through Stellantis's network).
While the command is being processed by the vehicle, you will receive callback reports in your webhook.

![remote-action-sequence]({{site.baseurl}}/assets/images/remote-action-sequence.png)

When you send a remote action to a vehicle, you will receive **several notifications** as the action is processing: 
- Pending: The remote action is in process (*Accepted*, *Waking-Up*, *Send* etc). You can receive several pending events.
- Done: The remote action is complete (*Success*, *Failure* etc).

Read this [page]({{site.baseurl}}/webapi/{{page.subsection | downcase}}/remote/notifications-errors/) more info about these notifications (and related errors).