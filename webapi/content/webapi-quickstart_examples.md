This page is a list of examples of HTTP requests to Stellantis {% if page.subsection == 'b2b' %}Fleet Owners{% elsif page.subsection == 'b2c' %}End-Users{% endif %} API. 

These examples will show you how to deal with:
- **Single** objects
- **Collections** objects, and pagination
- **GeoJSON**
- **Post** and **Delete** verbs HTTP verbs

Check out the following pages to learn about the concepts of [single objects]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#single-object), [collection]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#collection) and [paginations]({{site.baseurl}}/webapi/b2c/overview/api-concepts/#pagination) in this API.

{% if page.subsection == "b2c" %}
{% include realms.md %}
{% endif %}

## Get Account Info

Web API base endpoint 
{%- if page.subsection == 'b2b' %} `/fleets` allows retrieving information about this account Fleet(s) of vehicles.
{%- elsif page.subsection == 'b2c' %} `/user` allows retrieving information about the current End-User account, depending on the Access token used in the request. {%- endif -%}. 

This endpoint returns a [single object]({{site.baseurl}}/webapi/{{page.subsection}}/overview/api-concepts/#single-object).

{% include webapi-curl.md 
   apiEndpointB2B='/fleets'
   apiEndpointB2C='/user' 
   referenceURLResssourceB2C='getUser' 
   referenceURLResssourceB2B='getFleets'
   httpVerb='GET' 
%}


## Get a List of Vehicles


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/vehicles`{% elsif page.subsection == 'b2c' %} `/user/vehicles` {% endif %} endpoint allows you to retrieve a list of your vehicles. 

This endpoint returns a [collection]({{site.baseurl}}/webapi/{{page.subsection}}/overview/api-concepts/#collection), checkout [pagination]({{site.baseurl}}/webapi/{{page.subsection}}/overview/api-concepts#pagination) for more information about `indexRange` and `pageSize`.

{% assign getVehicleListQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>' | split: ", " %}


{% include webapi-curl.md
  apiEndpointB2B='/fleets/{fid}/vehicles'
  apiEndpointB2C='/user/vehicles'
  referenceURLResssourceB2B='getVehiclesByDevice'
  referenceURLResssourceB2C='getVehiclesByDevice'
  httpVerb='GET'
  queryParams=getVehicleListQueryParams
%}

## Get Alerts of a Vehicle


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/vehicles/{id}/alerts` {% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/alerts` {% endif %} endpoint allows to retrieve a list of alerts for a vehicle.
- Path parameter **{id}** is the unique identifier of a vehicle. 
- Query parameter `locale` will change the language of the alert message.

{% assign getAlertsQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>, locale=<language>' | split: ", " %}

{% include webapi-curl.md
   apiEndpointB2B='/fleets/{fid}/vehicles/{id}/alerts'
   apiEndpointB2C='/user/vehicles/{id}/alerts'
   referenceURLResssourceB2B='getVehicleAlerts'
   referenceURLResssourceB2C='getVehicleAlerts'
   httpVerb='GET'
   queryParams=getAlertsQueryParams
%}


## Post New Monitor


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/monitors`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors`{% endif %} endpoint allows you to create a new monitor. 

Checkout the [dedicated tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about) for information about **Monitors**.

{% include webapi-curl.md
  apiEndpointB2B='/fleets/{fid}/monitors'
  apiEndpointB2C='/user/vehicles/{id}/monitors'
  httpVerb='POST'
  referenceURLResssourceB2B ='createFleetVehicleMonitor'
  referenceURLResssourceB2C='createVehicleVehicleMonitor'
  httpBody='{
   "label":"IDF Zone monitor With Data Triggering:[vehicle.energy.electric.level] OR on Mondays",
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
               "value":"Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
            }
         ]
      }
   },
   "extendedEventParam":[
      "vehicle.alerts",
      "vehicle.status"
   ],
   "triggerParam":{
      "triggers": [
      {
         "name": "outOfParis",
         "zone": {
            "transition": "Out",
            "circle": {
               "radius": 20,
               "center": {
               "longitude": 2.333333,
               "latitude": 48.866667
               }
            }
         },
         "name": "onMonday",
         "time": {
            "times": [
               {
               "recurrence": "Daily",
               "start": "PT14H30M",
               "occurence": {
                  "day": [
                     "Mon"
                  ]
               },
               "duration": "PT04H30M"
             }
            ],
            "time.zone": "Europe/Paris"
         },
         "name": "batteryIsLow",
         "data": {
          "data": "vehicle.energy.electric.level",
          "op": "lowerThan",
          "value": [
            "50"
            ]
        }
      }
    ],
    "bool.exp": "((outOfParis & (batteryIsLow | onMonday)"
  }
}' %}

## Delete a Monitor

The {% if page.subsection == 'b2b' %} `/fleets/{fid}/monitors/{mid}`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors/{mid}`{% endif %} endpoint allows you to retrieve a list of alerts for a vehicle.

Checkout the [dedicated tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about) for information about **Monitors**

{% assign deleteMonitorQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>, locale=<language>' | split: ", " %}


{% include webapi-curl.md
  apiEndpointB2B='/fleets/{fid}/monitors/{mid}'
  apiEndpointB2C='/user/vehicles/{id}/monitors/{mid}'
  referenceURLResssourceB2B='deleteFleetMonitor'
  referenceURLResssourceB2C='deleteVehicleMonitor'
  httpVerb='DELETE'
  queryParam=deleteMonitorQueryParams
%}


#### References

Check out this API [references]({{ site.baseurl }}/webapi/{{page.subsection}}/api-reference/references/#article) to discover Stellantis Connected Vehicles features.