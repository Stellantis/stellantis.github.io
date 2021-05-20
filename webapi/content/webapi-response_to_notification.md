{% capture text %}
When your server receives a notification from a {{page.categorie | downcase}}, it should always return an HTTP response.


In order to manage our system of notification it is important that your web server follows the following rules regarding HTTP status:
- ***HTTP 200 OK***: your server has received the notification (no matter if your system failed during the processing of this notification)
- ***HTTP 500 Internal Server Error***: the notification hasn't been received.
{% endcapture %}
<div style="overflow: auto">

<img src="{{site.baseurl}}/assets/images/callback-sequence.svg" alt="callback-sequence" class="content-img-float-right">
<div>
{{text | markdownify}}
</div>
</div>

> **Note:** *200 OK* should always be the response of your server if it **received** the notification. It should not be taken into account if your server success or not in the **processing** of this notification. In any case it is always possible to retrieve the state of a vehicle using the [REST API]({{site.baseurl}}/doc/webapi/b2b/overview/about-versions/#article).

> **Note 2:** these HTTP status are the only one supported by our notification system. Please do not use any other HTTP status. Otherwise, it could lead to a failure regarding following notification (or [retry policy]({{site.baseurl}}/webapi/{{page.subsection | downcase}}/{{page.category | downcase}}/retry-policy/#article)).
