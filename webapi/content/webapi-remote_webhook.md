
# 3. WEBHOOK TEMPLATE

You have to develop on your side a **dedicated webhook** able to receive our event.

## 3.1 RESPONSE TO NOTIFICATION 

{% include_relative /content/webapi-response_to_notification.md %}

## 3.2 WEBHOOK SPECIFICATION

You have to develop on your side a **dedicated webhook** able to receive our event.

This web server needs to be configured to read & process our events in order that you get informed about the processing of the remote. Below is the webhook template specification, it describes the HTTP callback you will receive.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of your webhook have to be the same as the one specified in when you created the callback.

{% include_relative /content/webapi-swagger.html %}

# SEE ALSO

##### STANDARDS

Want to see what it's look like? Browse our {% if page.subsection == 'b2b' %}[Standards]({{ site.baseurl }}/webapi/b2b/overview/standards/){% elsif page.subsection == 'b2c' %}[Standards]({{ site.baseurl }}/webapi/b2c/overview/standards/){% endif %}.

##### TRY OUT!

Retrieve reference of this API, go to the {% if page.subsection == 'b2b' %}[API List]({{ site.baseurl }}/webapi/b2b/api-reference/specification/){% elsif page.subsection == 'b2c' %}[API List]({{ site.baseurl }}/webapi/b2c/api-reference/specification/){% endif %}.