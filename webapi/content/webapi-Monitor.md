# Monitor
Throught Groupe PSA's B2B APIs you can access and browse data about your fleet of vehicle.
But moreover APIs allow you to set-up your own **events** about your fleet.
Monitor are an easy way to design events tracking patterns for one or multpile vehicles.

**Examples of monitors:**

![monitorsFeatures]({{site.baseurl}}/assets/images/monitorsFeatures.png)


**Avaibable monitors:**
- **Time trigger**: Vehicle leaving a defined area.
- **Zone Trigger**: Vehicle being use in a specify time period.
- **Time+Zone Trigger**: Time AND zone condition (ex: leaving Paris during night time).
- **Data Trigger**: Various data could also be tracked like autonomy left or engine oil temperature increasing too much.

# How it work?

![monitorSystem]({{site.baseurl}}/assets/images/monitorSystem.png)

Once you have created a monitor, our **event engine** will continously check for your patern.

When our server are receiving data from your car our **event engine** will check if it’s needed to send notification or not. If  our event engine reconize a pattern it will send a callback to your endpoint located in your system.

If your service is unavailable you can ask us to retry a specific number of time with a specific frequency. All theses parameters are configurable.


![monitorSequence]({{site.baseurl}}/assets/images/monitorSequence.png)

# Create Monitor

## Request

### Event triggering
First of all, you have to choose and configure the triggering policy:

- **Zone Triggering**: The monitor will be trigered with an area condition, it could be leaving or entering somewhere.
- **Time Triggering**: The monitor will be trigered with an time condition, it could be using the vehicule during the night.
- **Time & Zone Triggering**: The monitor will be trigered with both conditions.
- **Data Triggering**: The monitor will be trigered with a vehicule data condition, it can be opening of the doors or using the AC.

> Be carefull: one monitor is for one fleet and one rule. Indeed you can creat multpile monitors.

### Callback configuration
Then it's important to configure the HTTP callback to your webhook.
Pay particular attention to the description of the models, they explain how to configure the callback:

- **{% if page.section == 'webapib2b' %}[MonitorParameter]({{site.baseurl}}/webapi/b2b/reference/#/model-MonitorParameter){% elsif page.section == "webapib2c" %}[MonitorParameter]({{site.baseurl}}/webapi/b2c/reference/#/model-MonitorParameter){% endif %}>MonitorSuscribe>Webhook**: this is the object you will send to configure the callback. You have to pass the URL of your webhook and you can customize the HTTP request (example: for authentication purpose).
- **{% if page.section == 'webapib2b' %}[MonitorRef]({{site.baseurl}}/webapi/b2b/reference/#/model-MonitorRef){% elsif page.section == "webapib2c" %}[MonitorRef]({{site.baseurl}}/webapi/b2c/reference/#/model-MonitorRef){% endif %}**: this object is a description of how your callback have been configurated.


<div class="tags has-addons">
    <span class="tag_endpoint_large tag is-info"> API BaseURL</span>
    <span class="tag_endpoint_large tag_api_endpoint tag"
        >{% if page.section == 'webapib2b' %}{{site.webapiB2BPreProd}}{% elsif page.section == "webapib2c" %}{{site.webapiB2CPreProd}}{% endif %}</span>
</div>

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


This request ask to **create** an "IDF MPH Zone monitor With Data Triggering:[vehicle.energy.electric.level]" monitor with the following parameters:
- It will be **refreshed** every 600s if the event is still triggered. 
- If the callback **request fail**, the request will be send again every 120s until it's properly delivered. 
- The callback will be **send once** 10 callback's responses are ready to be send or 300s after triggering. 
- The callback will be **send to** your "http://my.dn/monitors/cb1" webhook with the vin of the vehicle as a query path param and your Basic authentication in HTTP header.
- In the **JSON response**, you will find the alerts and status of the corresponding vehicle.
- This monitor is **triggered** if the vehicle's electric autonomy is lower than 80% and if it goes out of an 50.5km radius circle of the center of Paris, France.


**An other example monitor to detect heatwave:**

```json
{
   "label":"IDF MPH Zone monitor With Data Triggering:[environment.air.temp]",
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
      "environment.air.temp"
   ],
   "triggerParam":{
      "dataTriggers":[
         {
            "data":"environment.air.temp",
            "op":"greaterThan",
            "value":[
               "30"
            ]
         }
      ],
      "timeZoneTriggers":{
         "zoneTrigger":{
            "transition":"In",
            "place":{
               "radius":5,
               "center":{
                  "longitude":2.3329639434814453,
                  "latitude":48.87073474480463
               }
            }
         }
      }
   }
}
```

This request ask to **create** an heatwave monitor.
- It's **triggered** inside the city of Paris, if the temperature is greater than 30°C.

## Response

```json 
{
    "monitorId":"c7eeaafdf0ab9683d5a1b8d51572014996540m0021",
    "status":"Created"
} 
```

The monitor have been **created** with id=c7eeaafdf0ab9683d5a1b8d51572014996540m0021.

## Webhook template

What we offer with monitor is a simple way to process large amount of vehicle data. Althought you have to develop on your side a **dedicated webhook** able to receive our alerts.

This web server need to be configurated to read & process our alerts in order to inform you about what's happening to your vehicles in real time.

Here is the webhook template specification, it describes the HTTP callback you will receive on your webhook:

The Endpoint of your webhook must be the same as the one specified in when you created the monitor.

<div id="swagger-ui"></div>
<script src="{{ '/assets/js/swagger-ui-bundle.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script src="{{ '/assets/js/swagger-ui-standalone-preset.js' | prepend: site.baseurl | prepend: site.url }}"> </script>
<script>
    window.onload = function () {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
            url: "{{ site.url }}{{site.baseurl}}/assets/openapi/{% if page.section == 'webapib2b' %}api-b2b-webhook-template.yaml{% elsif page.section == "webapib2c" %}api-b2c-webhook-template.yaml{% endif %}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout",
            onComplete: hideInfoSwagger
        })
        // End Swagger UI call region
        window.ui = ui;
        //hide description
        function hideInfoSwagger() {
            document.getElementsByClassName('info')[0].style.display = "none";
        }
    }
</script>

##### Preview

Want to see what it's look like ? Browse our {% if page.section == 'webapib2b' %}[Preview]({{site.baseurl}}/webapi/b2b/preview/){% elsif page.section == "webapib2c" %}[Preview]({{site.baseurl}}/webapi/b2c/preview/){% endif %}.

{% if page.section == 'webapib2b' %}

##### Authentication

Groupe PSA's web API for fleet owner utilizes mutual authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/webapi/b2b/authentication/) and obtain your own certificate.
{% elsif page.section == "webapib2c" %}
##### Connect

Groupe PSA's web API for end-users utilizes OAuth2 connection, follow this [link]({{site.baseurl}}/webapi/b2c/connect/) for connection tutorial. {% endif %}
