---
layout: doc-article
permalink: /webportal/v2/overview/privacy/
section: webportal
subsection: v2
categorie: Overview
title: Standards
description: ""
---

# INBOARD SETTING

Within the vehicle infotainment system HMI, the user/driver can select various **privacy settings**:


`Data & Location`: geolocation & subscribed services relevant data's are refreshed

`Data`: subscribed services relevant data's is refreshed but geolocation is not

`Plane Mode`: neither data or geolocation are refreshed

# WEBPORTAL API

According to this setting some APIs could be available or not within Webportal v2 API.


In Webportal v2 [references]({{site.baseurl}}/webportal/v2/api-reference/list/#article), you can find icons related to each API required permission:
<div style="margin-bottom: 1rem; display: flex">

<div class="control api-privacy">
    <div class="tags has-addons">
        <span class="tag is-dark">
            <span class="icon is-white">
            <i class="fas fa-long-arrow-alt-down"></i>
            <i class="fas fa-long-arrow-alt-up"></i>
            </span>
            <span>
            Data &amp;
            </span>
            <span class="icon is-white" style="font-size: .7rem;">
            <i class="fas fa-map-marker-alt"></i>
            </span>
            <span>
            Location 
            </span>
        </span>
    </div>
</div>
&nbsp;: This API require <code>Data & Location</code> to authorized.
</div>
<div style="margin-bottom: 1rem; display: flex">

<div class="control api-privacy">
    <div class="tags has-addons">
        <span class="tag is-dark">
            <span>
            Location
            </span>
            <span class="icon is-white" style="font-size: .7rem;">
                <i class="fas fa-map-marker-alt"></i>
            </span>
        </span>
    </div>
</div>
&nbsp;: This API require at least <code>Data</code> to authorized.
</div>

<div style="margin-bottom: 1rem; display: flex">
<div class="control api-privacy">
    <div class="tags has-addons">
        <span class="tag is-dark">
            <span class="icon is-white">
                <i class="fas fa-lock-open"></i>
            </span>
            <span>
                Always
            </span>
        </span>
    </div>
</div>
&nbsp;: This API is always available, even in <code>Plane mode</code>.
</div>