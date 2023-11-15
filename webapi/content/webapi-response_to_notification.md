{% capture text %}
When the server receives a notification from a {{page.categorie | downcase}}, it should always return an HTTP response, if it's not the case, the {{page.categorie}} will enter [retry policy]({{site.baseurl}}/webapi/{{page.subsection/retry-policy/#article}})

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

> **Note:** *200 OK* should always be the response of your server if it **received** the notification. It should not be taken into account if your server success or not in the **processing** of this notification. In any case it is always possible to retrieve the state of a vehicle using the [REST API]({{site.baseurl}}/webapi/b2b/api-reference/references#article).

> **Note 2:** these HTTP status are the only one supported by Stellantis notification system. Please do not use any other HTTP status. Otherwise, it could lead to a failure regarding following notification (or [retry policy]({{site.baseurl}}/webapi/{{page.subsection | downcase}}/{{page.category | downcase}}/retry-policy/#article)).
