This page is a list of examples of HTTP requests to Stellantis {% if page.subsection == 'b2b' %}Fleet Owners{% elsif page.subsection == 'b2c' %}End-Users{% endif %} API for ex Groupe PSA brands (Citroën, DS, Peugeot, Opel and Vauxhall). 

These examples will show you how to deal with:
- **Single** objects
- **Collections** objects
- **GeoJSON**
- **Post** and **Delete** verbs HTTP verbs

## Get Account Info

Web API base endpoint 
{%- if page.subsection == 'b2b' %} `/fleets` allows to retrieve information about this account Fleet(s) of vehicles.
{%- elsif page.subsection == 'b2c' %} `/user` allow to retrive information about the current End-User account, depending on the Access token in the request. {%- endif -%}. 

This endpoint returns a [single object]({{site.baseurl}}/webapi/{{page.subsection}}/overview/standards/#single-object).

{% include webapi-curl.md 
   apiEndpointB2B='/fleets'
   apiEndpointB2C='/user' 
   referenceURLResssourceB2C='getUser' 
   referenceURLResssourceB2B='getFleets'
   httpVerb='GET' 
%}


## Get a List of Vehicles


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/vehicles`{% elsif page.subsection == 'b2c' %} `/user/vehicles` {% endif %} endpoint allow you to retrieve a list of your vehicles. 

This endpoint returns a [collection]({{site.baseurl}}/webapi/{{page.subsection}}/overview/standards/#collection), check-out [pagination]({{site.baseurl}}/webapi/{{page.subsection}}/overview/standards#pagination) for more information about `indexRange` and `pageSize`.

{% assign getVehicleListQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>' | split: ", " %}


{% include webapi-curl.md
  apiEndpointB2B='/fleets/{fid}/vehicles'
  apiEndpointB2C='/user/vehicles'
  referenceURLResssourceB2B='getVehiclesByDevice'
  referenceURLResssourceB2C='getVehiclesByDevice'
  httpVerb='GET'
  queryParams=getVehicleListQueryParams
%}


## Get a Vehicle Position


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/vehicles/{id}/lastPosition` {% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/lastPosition` {% endif %} endpoint allows to retrieve the last known position of a vehicle.

LastPosition endpoints returns **application/vnd.geo+json**, check-out [HTTP Body format]({{site.baseurl}}/webapi/{{page.subsection}}/overview/standards/#http-body-format) .

{% include webapi-curl.md 
   apiEndpointB2B='/fleets/{fid}/vehicles/{id}/lastPosition' 
   apiEndpointB2C='/user/vehicles/{id}/lastPosition' 
   referenceURLResssourceB2B='getCarLastPosition' 
   referenceURLResssourceB2C='getCarLastPosition' 
   httpVerb='GET' 
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


The {% if page.subsection == 'b2b' %} `/fleets/{fid}/monitors`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors`{% endif %} endpoint allow you to create a new monitor. 

Check-out the [dedicated tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about) for information about **Monitors**

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

The {% if page.subsection == 'b2b' %} `/fleets/{fid}/monitors/{mid}`{% elsif page.subsection == 'b2c' %} `/user/vehicles/{id}/monitors/{mid}`{% endif %} endpoint allow you to retrieve a list of alerts for a vehicle.

Check-out the [dedicated tutorial]({{site.baseurl}}/webapi/{{page.subsection}}/monitor/about) for information about **Monitors**

{% assign deleteMonitorQueryParams = 'indexRange=<element_per_page>, pageSize=<nb_of_pages>, locale=<language>' | split: ", " %}


{% include webapi-curl.md
  apiEndpointB2B='/fleets/{fid}/monitors/{mid}'
  apiEndpointB2C='/user/vehicles/{id}/monitors/{mid}'
  referenceURLResssourceB2B='deleteFleetMonitor'
  referenceURLResssourceB2C='deleteVehicleMonitor'
  httpVerb='DELETE'
  queryParam=deleteMonitorQueryParams
%}


#### See Also

Check out this {% if page.subsection == "b2c"%} End-User {% elsif page.subsection == "b2b" %} Fleet Owner {% endif %} API [list of References]({{ site.baseurl }}/webapi/{{page.subsection}}/api-reference/specification/#article) to discover Stellantis Connected Vehicles features.