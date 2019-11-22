# Quick Start examples

This Quick Start contains examples of curl requests to Groupe PSA's web api for {% if page.section == 'webapib2b' %}Fleet Owners{% elsif page.section == "webapib2c" %}End-Users{% endif %}. 

To retrieve {% if page.section == 'webapib2b' %} authentication infomartions refer to [this section]({{site.basurl}}/webapi/b2b/authentication).{% elsif page.section == 'webapib2c' %} connection infomartions refer to [this section]({{site.basurl}}/webapi/b2c/connect).{% endif %}

## GET your info 

Web API base enpoint{% if page.section == 'webapib2b' %}'/fleets'{% elsif page.section == "webapib2c" %}'/user'{% endif %} allow you to retrieve infos about your account in Groupe PSA's Network.

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets'%}
{% assign referenceURLResssource='/#/Fleet/getFleets' %}

{% elsif page.section == "webapib2c" %}

{% assign apiEndpoint='/user'%}
{% assign referenceURLResssource='/#/User/getUser' %}


{% endif %}

{% assign httpVerb='GET'%}

{% include content/cUrl.md %}

## GET a list of vehicles 

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/vehicles'{% elsif page.section == "webapib2c" %}'/user/vehicles'{% endif %} endpoint allow you to retrieve a list of your vehicles. See {% if page.section == 'webapib2b' %}[preview]({{site.basurl}}/webapi/b2b/preview#pagination){% elsif page.section == "webapib2c" %}[preview]({{site.basurl}}/webapi/b2c/preview#pagination){% endif %} for explanation about `indexRange` and `pageSize`.

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets/{fid}/vehicles'%}
{% assign referenceURLResssource='/#/Vehicles/getVehiclesByDevice' %}

{% elsif page.section == "webapib2c" %}


{% assign apiEndpoint='/user/vehicles'%}
{% assign referenceURLResssource='/#/Vehicles/getVehiclesByDevice' %}


{% endif %}

{% assign queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>'%}
{% assign httpVerb='GET'%}
{% include content/cUrl.md %}

## GET alerts of a vehicle

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/vehicles/{id}/alerts'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/alerts'{% endif %} endpoint allow you to retrieve a list of alerts for a vheicle.
- Path parameter **{id}** is the unique identifier of one of your vehicles. 
- Query parameter `locale` wiil change the language of the alert message.

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets/{fid}/vehicles/{id}/alerts'%}
{% assign referenceURLResssource='/#/Vehicles/getVehicleAlerts' %}

{% elsif page.section == "webapib2c" %}


{% assign apiEndpoint='/user/vehicles/{id}/alerts'%}
{% assign referenceURLResssource='/#/Vehicles/getVehicleAlerts' %}


{% endif %}

{% assign queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>'%}
{% assign httpVerb='GET'%}
{% include content/cUrl.md %}

## POST create a monitor

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/monitors'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/monitors'{% endif %} endpoint allow you to create a new monitor. Have a look to the {% if page.section == 'webapib2b' %}[monitor section]({{site.baseurl}}/webapi/b2b/monitor){% elsif page.section == "webapib2c" %}[monitor section]({{site.baseurl}}/webapi/b2c/monitor){% endif %}
- Path parameter **{id}** is the unique identifier of one of your vehicles. 

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets/{fid}/monitors'%}
{% assign referenceURLResssource ='/#/Vehicles/setVehicleMonitor' %}

{% elsif page.section == "webapib2c" %}

{% assign apiEndpoint='/user/vehicles/{id}/monitors'%}
{% assign referenceURLResssource ='/#/Monitors/createFleetVehicleMonitor' %}

{% endif %}

{% assign httpVerb='POST'%}
{% assign httpBody='{
   "label":"IDF MPH Zone monitor With Data Triggering:[vehicle.energy.electric.level]",
   "subscribeParam":{
      "refreshEvent":600,
      "retryPolicy":{
         "policy":"Always",
         "maxRetryNumber":3,
         "retryDelay":120
      },
      "batchNotify":{
         "size":10,
         "timeWindow":300
      },
      "callback":{
         "target":"http://my.dn/monitors/cb1",
         "name":"HTTP_CB",
         "attributes":[
            {
               "type":"Query",
               "key":"vin",
               "value":"$vin"
            },
            {
               "type":"Header",
               "key":"Authorization",
               "value":"Basic VTUzRRkyMjp2MjdQc99wNQ=="
            }
         ]
      }
   },
   "extendedEventParam":[
      "vehicle.alerts",
      "vehicle.status"
   ],
   "triggerParam":{
      "dataTriggers":[
         {
            "data":"vehicle.energy.electric.level",
            "op":"lowerThan",
            "value":[
               "80"
            ]
         }
      ],
      "timeZoneTriggers":{
         "zoneTrigger":{
            "transition":"Out",
            "place":{
               "radius":50.5,
               "center":{
                  "longitude":2.3329639434814453,
                  "latitude":48.87073474480463
               }
            }
         }
      }
   }
}'%}
{% include content/cUrl.md %}

{% comment %} 
## PUT edit a monitor

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/monitors/{mid}/status'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/status'{% endif %} endpoint allow you to create a new monitor. Have a look to the {% if page.section == 'webapib2b' %}[monitor section]({{site.baseurl}}/webapi/b2b/monitor){% elsif page.section == "webapib2c" %}[monitor section]({{site.baseurl}}/webapi/b2c/monitor){% endif %}
- Path parameter **{id}** is the unique identifier of one of your vehicles. 

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets/{fid}/monitors/{mid}/status'%}
{% assign referenceURLResssource ='/#/Monitors/setFleetVehicleMonitorStatus' %}

{% elsif page.section == "webapib2c" %}

{% assign apiEndpoint='/user/vehicles/{id}/status'%}
{% assign referenceURLResssource ='/#/Vehicles/setFleetVehicleMonitorStatus' %}

{% endif %}

{% assign httpVerb='POST'%}
{% assign httpBody='{

}'%}
{% include content/cUrl.md %}


## DELETE a monitor

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/monitors/{mid}'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/monitors/{mid}'{% endif %} endpoint allow you to retrieve a list of alerts for a vheicle.
- Path parameter **{id}** is the unique identifier of one of your vehicles. 
- Query parameter `locale` wiil change the language of the alert message.

{% if page.section == 'webapib2b' %}

{% assign apiEndpoint='/fleets/{fid}/monitors/{mid}'%}
{% assign referenceURLResssource='/#/Monitors/deleteFleetMonitor' %}

{% elsif page.section m"éémmmmmmmmùzém"ùùùùùùùùùùùùùùùùùùùùùùùùùù                             éé"jjjjuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuujjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjnnnnnnnnnnnnnnnnnnnnnnnnn== "webapib2c" %}


{% assign apiEndpoint='/user/vehicles/{id}/monitors/{mid}'%}
{% assign referenceURLResssource='/#/Vehicles/deleteMonitordd' %}


{% endif %}

{% assign queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>'%}
{% assign httpVerb='DELETE'%}
{% include content/cUrl.md %}
{% endcomment %}


# See Also

##### Try out!

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.

{% if page.section == 'webapib2b' %}
##### Authentication

Groupe PSA's web API for fleet owner utilizes mutual authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/webapi/b2b/authentication/) and obtain your own certificate.
{% elsif page.section == "webapib2c" %}
##### Connect

Groupe PSA's web API for end-users utilizes OAuth2 connection, follow this [link]({{site.baseurl}}/webapi/b2c/connect/) for connection tutorial. {% endif %}

