{%- capture sdk_name -%}
{{page.section}}{% if page.subsection %}-{{page.subsection}}{% endif %}
{%- endcapture -%}

{% assign sdkChangelog = sdk_name | append: "-changelog" %}
{% assign referencesChangelog = site.data[sdkChangelog] %}

{% for v in referencesChangelog %}
<hr>



{% if v.release_date_prod and v.release_date_preprod %}
  
{% if v.release_date_prod %}
{% include 
  published_on.html
  type="Prod"
  date=v.release_date_prod
  availability=v.availability.prod
%}
{% endif %}

{% if v.release_date_preprod %}
{% include 
published_on.html
type="PreProd"
date=v.release_date_preprod
availability=v.availability.preprod
%}
{% endif %}

{% elsif v.release_date %}

{% include published_on.html date=v.release_date %}

{% endif %}


## v{{v.version}}

{% if v.name %}
#### {{v.name}}
{% endif %}

{{v.description | markdownify}}

{% endfor %}