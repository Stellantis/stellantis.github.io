# Webhook Template
Monitors allows to process large amount of vehicle data. Although, you have to develop on your side a **dedicated webhook** able to receive our events.
### Response to Notification

{% include_relative /content/webapi-response_to_notification.md %}

### Webhook Specification

This web server needs to be configured to read & process our events in order that you get informed about what's happening to your vehicles in real time. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook must be the same as the one specified in when you created the callback.

{% include_relative /content/webapi-swagger.html %}
# See Also

##### Quick-Start

Need to see examples of request to the API? Browse the {% if page.subsection == 'b2b' %}[Quick-Start]({{site.baseurl}}/webapi/b2b/quickstart/examples/){% elsif page.subsection == 'b2c' %}[Quick-Start]({{site.baseurl}}/webapi/b2c/quickstart/request_examples/){% endif %}.

##### Try Out!

Retrieve reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/references/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/references/){% endif %}.