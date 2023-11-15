The remote feature of this API allows sending remote action to Stellantis vehicles using an internet connection.

## Remote Features

- **❄️ Preconditioning**: Program heater or AC before the vehicle is being used.
- **🔌 Charging**: Start and Stop the recharge of the vehicle.
- **💡 Lights**: Set the light to blink.
- **🚪 DoorsState**: Lock/unlock the doors remotely.
- **🔈 Horn**: Honk the horn remotely.
- **🔒 Immobilization**: Immobilize the vehicle until or remove immobilization.
{% if page.subsection == "b2b" %}- **🥷 Stolen**: Set the vehicle as stolen.{% endif %}
- **🔄 State**: Refresh and retrieve vehicle status info.
- **📍 Navigation**: Send a remote navigation in the vehicle guidance system.

# How does it work?

When a remote action is sent to a vehicle, it will trigger notifications during the process. That's why, before sending any remote, it's necessary to set up a **remote callback**. If you are working with monitors already, {% if page.subsection == 'b2b' %}it is almost the same as posting a [monitor]({{site.baseurl}}/webapi/b2b/monitor/set-up/#post-monitor-request){% elsif page.subsection == 'b2c' %} it's the [same process]({{site.baseurl}}/webapi/b2c/monitor/set-up/#post-monitor-request){% endif %}. 

Callbacks allow to setup the notifications sent by the remote and the address of the targeted server{% if page.subsection == "b2b" %} and the retryPolicy and batch sending. Callbacks can be configured to be specific to certain remote types.{% endif %}

![remote-callback-sequence]({{site.baseurl}}/assets/images/remote-callback-sequence.svg)

Then, it's possible to send a **remote action** request using a vehicle ID and the callback ID.

When a remote command is sent to a vehicle, the callback server will receive several notifications as the action is being processed, checkout [Notification and Errors]({{site.baseurl}}/webapi/{{page.subsection | downcase}}/remote/notifications-errors/) for more information about these events.
- **Pending:** The remote action is in processing (*Accepted*, *Waking-Up*, *Send* etc.). Several *Pending* events will be received.
- **Done:** The remote action is complete (*Success*, *Failure* etc.).

![remote-action-sequence]({{site.baseurl}}/assets/images/remote-action-sequence.svg)
