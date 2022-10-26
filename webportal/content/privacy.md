
The vehicle privacy setting impact [vehicle APIs]({{site.baseurl}}/webportal/v1/api-reference/list/#article) usage. Some APIs are available only in certain privacy modes.

# Inboard Setting

Within the vehicle infotainment system HMI, the user/driver can select various **privacy settings**:
- **Data & Location**: geolocation & data are enabled.
- **Data**: data is enabled but the location is not.
- **Plane/Private Mode**: neither data nor geolocation are available.

[Vehicle APIs]({{site.baseurl}}/webportal/{{page.subsection}}/api-reference/list/#article) are privacy-sensitive: if the privacy setting is not *Data & Location*, some features are not available.

{% if page.subsection == "v1"%}
![webportal-nac-privacy-settings]({{site.baseurl}}/assets/images/wp-nac-privacy-settings.jpg)
{% elsif page.subsection == "v2"%}
![webportal-privacy-selection]({{site.baseurl}}/assets/images/webportal-privacy-selection.jpg)
{% endif %}

# WebPortal API

According to the [inboard privacy setting](#inboard-setting), vehicle APIs can be disabled. 
That's why it is required to handle the privacy mode in the project; indeed, some APIs could be unavailable if the privacy setting does not meet the requirements.

In WebPortal [references]({{site.baseurl}}/webportal/{{page.subsection}}/api-reference/list/#article), you can find icons related to each API required permission:

<ul>
  <li>
    <strong>
      <span class="icon is-white">
        <i class="fas fa-long-arrow-alt-down" style="font-size: .9rem;"></i>
        <i class="fas fa-long-arrow-alt-up" style="font-size: .9rem;"></i>
        <i class="fas fa-map-marker-alt" style="padding-left: .2rem; font-size: .9rem;"></i>
      </span>
      <span>
         Data &amp; Location:
      </span>
    </strong>  
    &nbsp;this API requires all access to be granted.
    <br><em>Privacy mode should be Data & Location</em>
  </li>
  <li>
    <strong>
      <span class="icon is-white" style="font-size: .9rem;">
        <i class="fas fa-map-marker-alt"></i>
      </span>
      <span>
        Location:
      </span>
    </strong>  
    &nbsp;this API requires at least location to be activated. 
    <br><em>Privacy mode should be Data & Location or Location</em>
  </li>
  <li>
    <span class="icon is-white" style="font-size: .9rem;">
      <i class="fas fa-lock-open"></i>
    </span>
    <strong>
      None:
    </strong>
    &nbsp;this API is always available, even in plane mode. 
    <br><em>Privacy mode can be Data & Location, Location or Private/Plane mode</em>
  </li>
</ul>
