---
layout: doc-article
permalink: /webapi/b2b/overview/about-versions/
section: webapi
subsection: b2b
categorie: Overview
title: About Versions
description: "About v2 & v3 versions of Groupe PSA WEB API B2B."
redirect_from: 
    - /webapi/b2b/changelog/
    - /webapi/b2b/api-reference/
    - /webapi/b2b/reference/
    - /webapi/b2b/api-reference/specification/
    - /webapi/b2b/api-reference/changelog/
    - /webapi/b2b/api-reference/about-versions/
---

## Versions

<div class="tile is-ancestor" style="margin-top: 2rem; margin-bottom: 2rem;">
    <div class="tile is-parent">
        <a href="{{site.baseurl}}/webapi/b2b/api-reference-v2/specification/#article" class="tile is-child button is-psablue is-medium select-url">
            <span>
                Specification API
                <br> 
                Version 2
            </span>
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
    <div class="tile is-parent">
        <a href="{{site.baseurl}}/webapi/b2b/api-reference-v3/specification/#article" class="tile is-child button is-psablue is-medium select-url">
            <span>
                Specification API 
                <br>
                Version 3
            </span>
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>

Groupe PSA B2B WEB API exists under **two versions**. Depending on which service you have subscribed, you should use v2 or v3 URL.

They are very similar to each other but there are some exceptions:

- [Monitors]({{site.baseurl}}webapi/b2b/monitor/about/#/article) are only available in the deprecated way in WEB API v2. In WEB API v3 you can choose between the new format and the deprecated one. We strongly recommend you to use the new format.
- [Remotes]({{site.baseurl}}/webapi/b2b/remote/about/#article) are not available in WEB API v2.

## URL

Here is the URL of the API:

<div class="versions buttons has-addons">
    <a class="tag_endpoint_large button is-info"> API BaseURL</a>
    <a class="tag_endpoint_large tag_api_endpoint button is-info is-border">
        {{site.webapiB2B}}
    </a>
</div>
<div class="version">
    <p>
        Where <strong>{version}</strong> depends on your subscription:
    </p>
    <ul>
        <li>v2: <em>connected fleet</em> / <em>TMTS</em> / <em>UBI</em></li>
        <li>v3: <em>delegation publique</em></li>
    </ul>
</div>
