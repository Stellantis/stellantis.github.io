
# 3. Webhook Template

You have to develop on your side a **dedicated webhook** able to receive our event.

## 3.1 Response to Notification

{% include_relative /content/webapi-response_to_notification.md %}

## 3.2 Webhook Specification

This web server needs to be configured to read & process our events in order that you get informed about the processing of the remote. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook has to be the same as the one specified in when you created the callback.

{% include_relative /content/webapi-swagger.html %}

# See Also

##### Standards

You want to see what it looks like? Browse {% if page.subsection == 'b2b' %}[API Response Format]({{ site.baseurl }}/webapi/b2b/overview/api-concepts/){% elsif page.subsection == 'b2c' %}[API Response Format]({{ site.baseurl }}/webapi/b2c/overview/api-concepts/){% endif %}.

##### Try Out!

Retrieve reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/references/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/references/){% endif %}.