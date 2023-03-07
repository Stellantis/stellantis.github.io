---
layout: doc-article
permalink: /mobile-sdk/references/errors/
section: mobile-sdk
categorie: API Reference
title: Errors
description: "List of error codes in Mobile SDK."
require: reference-list
---

{%- capture lastSpecFile -%}{% include api-reference-toolkit-v2.html type="lastSpecFile" %}{%- endcapture -%}


This page is a list of error code you can encounter using PIMS. 

These errors code are shared between iOS and Android SDKs.

<style>
    .api-col-title th{
        font-style: normal !important;
    }
    .api-table td:first-of-type, .api-table td:nth {
        text-align: center;
    }
    .na-value {
        color: darkgrey
    }
    .api-table-header-title {
       line-height: 1 !important;
       padding-top: 6rem !important;
        margin-top: -5.90rem !important;
        margin-bottom: .25rem !important;
    }

    .api-table-header-title .bd-anchor-name {
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
    }

    .api-table-header-title .bd-anchor-link {
        color: transparent !important;
        font-size: 1rem;
    }
</style>

<div class="dropdown-api-get">
    <div class="api-content" style="border-top: none">
        <div class="api-table">
            <table>
                {% assign errorTypes = site.data[lastSpecFile].errors | map: 'type' | join: ',' | split: ',' | uniq %}
                {% for errType in errorTypes %}
                    <thead>
                        <tr>
                            <th class="api-table-header api-params" colspan="4">
                                <h2 class="api-table-header-title" id="{{errType | slugify}}">
                                    {{errType}}
                                </h2>
                            </th>
                        </tr>
                        <tr class="api-col-title">
                            <th>Error Code</th>
                            <th>Error Label</th>
                            <th>SubErrors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {%- for error in site.data[lastSpecFile].errors -%}
                        <tr>
                            {% if error.type == errType %}
                            <td><strong>{{error.code}}</strong></td>
                            <td><code>{{error.message}}</code></td>
                            <td>{% if error.suberrors %}Yes{% else %}<em class="na-value">no</em>{% endif %}</td>
                            {% endif %}
                        </tr>
                        {%- endfor -%}
                    </tbody>
                {% endfor %}
            </table>
        </div>
    </div>
</div>