{%- capture sdk_name -%}
{{page.section}}{{page.subsection}}
{%- endcapture -%}

{% assign sdkChangelog = sdk_name | append: "-changelog" %}
{% assign referencesChangelog = site.data[sdkChangelog] %}

Version | Name
- | -
{% for v in referencesChangelog %}[v{{v.version}}](#v{{v.version| replace: ".", ""}}) | {{v.name}}
{% endfor %}

{% for v in referencesChangelog %}
<hr>

{% include published_on.html date=v.release_date %}

## [v{{v.version}}]({{site.baseurl}}{%- include api-reference-toolkit-v2.html type="listUrl" version=v.version -%}/#article) 

#### {{v.name}}

{{v.description}}

{% endfor %}
