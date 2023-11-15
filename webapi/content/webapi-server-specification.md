In order to receive notifications sent by {{page.categorie | append: "s"}}, a server is required for reception and processing. This tutorial details the configuration of this server.

### Response to Notification

{% capture text %}
When the server receives a notification from a {{page.categorie | downcase}}, it should always return an HTTP response, if it's not the case, the {{page.categorie}} will enter [retry policy]({{site.baseurl}}/webapi/{{page.subsection}}/{{page.categorie|downcase}}/retry-policy/#article).

It is important that the reception server follows the following rules regarding HTTP status:
- ***HTTP 200 OK***: when the notification has been received (no matter if the system failed during the processing of this notification).
- ***HTTP 500 Internal Server Error***: the notification hasn't been received.
{% endcapture %}
<div style="overflow: auto">

<img src="{{site.baseurl}}/assets/images/callback-sequence.svg" alt="callback-sequence" class="content-img-float-right">
<div>
{{text | markdownify}}
</div>
</div>

*200 OK* should always be the response of the server if it **received** the notification. It should not be taken into account if the server success or not in the **processing** of this notification. In any case it is always possible to retrieve the state of a vehicle using the [REST API]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references#article).

These HTTP status are the only one supported by Stellantis notification system. Please do not use any other HTTP status. Otherwise, it could lead to a failure regarding following notification (or [retry policy]({{site.baseurl}}/webapi/{{page.subsection}}/{{page.categorie|downcase}}/retry-policy/#article)).


### Server Specification

The reception server needs to be configured to read & process the notifications. Below is the server template specification, it describes the format of the notification.

> **Note:** HTTPS must be supported and a certificate issued by a trusted public and known CA must be provided. Indeed, the URL of the server must be the same as the one specified when the {% if page.subsection == "b2b" and page.categorie == "Monitor" %} Monitor {% else %} callback {% endif %} is created.

{% include_relative /content/webapi-swagger.html %}