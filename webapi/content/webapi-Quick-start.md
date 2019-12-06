# EXAMPLES

This Quick Start contains examples of curl requests to Groupe PSA's web api for {% if page.section == 'webapib2b' %}Fleet Owners{% elsif page.section == "webapib2c" %}End-Users{% endif %}. 

To retrieve {% if page.section == 'webapib2b' %} authentication informations refer to [this section]({{site.basurl}}/webapi/b2b/authentication).{% elsif page.section == 'webapib2c' %} connection informations refer to [this section]({{site.basurl}}/webapi/b2c/connect).{% endif %}

## GET YOUR INFO 

Web API base enpoint{% if page.section == 'webapib2b' %}'/fleets'{% elsif page.section == "webapib2c" %}'/user'{% endif %} allow you to retrieve infos about your account in Groupe PSA's Network.

{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets' referenceURLResssource='/#/Fleet/getFleets' httpVerb='GET' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user' referenceURLResssource='/#/User/getUser' httpVerb='GET' %}

{% endif %}

## GET A LIST OF VEHICLES 

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/vehicles'{% elsif page.section == "webapib2c" %}'/user/vehicles'{% endif %} endpoint allow you to retrieve a list of your vehicles. See {% if page.section == 'webapib2b' %}[preview]({{site.basurl}}/webapi/b2b/preview#pagination){% elsif page.section == "webapib2c" %}[preview]({{site.basurl}}/webapi/b2c/preview#pagination){% endif %} for explanation about `indexRange` and `pageSize`.


{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets/{fid}/vehicles' referenceURLResssource='/#/Vehicles/getVehiclesByDevice' httpVerb='GET' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles' referenceURLResssource='/#/Vehicles/getVehiclesByDevice' httpVerb='GET' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>' %}

{% endif %}

## GET A VEHICLE POSITION

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/vehicles/{id}/lastPosition'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/lastPosition'{% endif %} endpoint allow you to retrieve the last known position for a vehicle.


{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets/{fid}/vehicles/{id}/lastPosition' referenceURLResssource='/#/Vehicles/getCarLastPosition' httpVerb='GET' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles/{id}/lastPosition' referenceURLResssource='/#/Vehicles/getCarLastPosition' httpVerb='GET' %}

{% endif %}


## GET ALERTS OF A VEHICLE

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/vehicles/{id}/alerts'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/alerts'{% endif %} endpoint allow you to retrieve a list of alerts for a vheicle.
- Path parameter **{id}** is the unique identifier of one of your vehicles. 
- Query parameter `locale` wiil change the language of the alert message.


{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets/{fid}/vehicles/{id}/alerts' referenceURLResssource='/#/Vehicles/getVehicleAlerts' httpVerb='GET' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles/{id}/alerts' referenceURLResssource='/#/Vehicles/getVehicleAlerts' httpVerb='GET' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>' %}

{% endif %}

## POST CREATE A MONITOR

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/monitors'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/monitors'{% endif %} endpoint allow you to create a new monitor. Have a look to the {% if page.section == 'webapib2b' %}[monitor section]({{site.baseurl}}/webapi/b2b/monitor){% elsif page.section == "webapib2c" %}[monitor section]({{site.baseurl}}/webapi/b2c/monitor){% endif %}
- Path parameter **{id}** is the unique identifier of one of your vehicles. 

{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets/{fid}/monitors' referenceURLResssource ='/#/Vehicles/setVehicleMonitor' httpVerb='POST' httpBody='{
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
}' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles/{id}/monitors' referenceURLResssource ='/#/Monitors/createFleetVehicleMonitor' httpVerb='POST' httpBody='{
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
}' %}

{% endif %}


{% comment %} 
## PUT EDIT A MONITOR

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
{% include_relative content/webapi-cUrl.md %}
{% endcomment %}

## DELETE A MONITOR

The {% if page.section == 'webapib2b' %}'/fleets/{fid}/monitors/{mid}'{% elsif page.section == "webapib2c" %}'/user/vehicles/{id}/monitors/{mid}'{% endif %} endpoint allow you to retrieve a list of alerts for a vheicle.
- Path parameter **{id}** is the unique identifier of one of your vehicles. 
- Query parameter `locale` wiil change the language of the alert message.


{% if page.section == 'webapib2b' %}

{% include_relative content/webapi-cUrl.md apiEndpoint='/fleets/{fid}/monitors/{mid}' referenceURLResssource='/#/Monitors/deleteFleetMonitor' httpVerb='DELETE' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>' %}

{% elsif page.section == "webapib2c" %}

{% include_relative content/webapi-cUrl.md  apiEndpoint='/user/vehicles/{id}/monitors/{mid}' referenceURLResssource='/#/Vehicles/deleteMonitordd' httpVerb='DELETE' queryParam='&indexRange=<element_per_page>&pageSize=<nb_of_pages>&locale=<language>' %}

{% endif %}

# SEE ALSO

##### TRY OUT!

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.

{% if page.section == 'webapib2b' %}
##### AUTHENTICATION

Groupe PSA's web API for fleet owner utilizes mutual authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/webapi/b2b/authentication/) and obtain your own certificate.
{% elsif page.section == "webapib2c" %}
##### CONNECT

Groupe PSA's web API for end-users utilizes OAuth2 connection, follow this [link]({{site.baseurl}}/webapi/b2c/connect/) for connection tutorial. {% endif %}

