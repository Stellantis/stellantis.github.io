# POST MONITOR REQUEST

## 1. OVERVIEW

Here is an overview of an **HTTP request** intended to create a monitor.

We will then take a closer look to the **body request**.

{% include_relative content/webapi-curl.md apiEndpointB2B='/fleets/{fid}/monitors' apiEndpointB2C='/user/vehicles/{id}/monitors' referenceURLResssourceB2B ='/#/Monitors/createFleetVehicleMonitor' referenceURLResssourceB2C ='/#/Vehicles/setVehicleMonitor' displayCURL=false displayApiURL=true referenceURLResssource ='/#/Vehicles/setVehicleMonitor' httpVerb='POST' httpBody='{
  "label": "monitor-name",
  "subscribeParam": { },
  "extendedEventParam": [ ],
  "triggerParam": { }
}' %}

First, we will have a look at the callback configuration: **"subscribeParam"** and **"extendedEventParam"**. 

Then we will see how to create triggers and triggering policy for your monitors with **"triggerParam"**. 

At the end we will see **examples** of monitor configuration.

{% if page.subsection == 'b2b' %}> **Note:** one monitor is for one fleet only. Indeed you can creat multpile monitors for multiple fleets. {% endif %}

## 2. CALLBACK CONFIGURATION

Firstly, you have to configure your monitor to send an **HTTP callback** to your webhook when it is triggered.
This is the models explaining how to configure the callback:

```json
{
   "label": "",
   "subscribeParam": {
      "retryPolicy": {
         "policy": "None",
         "maxRetryNumber": 0,
         "retryDelay": 0
         },
      "batchNotify": {
         "size": 0,
         "timeWindow": 0
      },
      "callback": {
         "webhook": {
            "target": "https://my.post.callback",
            "name": "My_Webhook",
            "attributres": [
               {
               "type": "Header",
               "key": "X-Vehicle_Id",
               "value": "$vin"
               },
               {
               "type":"Header",
               "key":"Authorization",
               "value":"Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
               }
            ]
         }
      },
      "refreshEvent": 100
   },
   "extendedEventParam": [
      "vehicle.alerts",
      "vehicle.status"
   ],
   "triggerParam": { }
}
```

Below is a description of the JSON models explaining how to configure the callback. Please refer to {% if page.subsection == 'b2b' %}[API Reference]({{site.baseurl}}/webapi/b2b/reference){% elsif page.subsection == 'b2c' %}[API Reference]({{site.baseurl}}/webapi/b2c/reference/specification){% endif %} models to read a full description of the callback configuration.

**{% if page.subsection == 'b2b' %}[MonitorParameter]({{site.baseurl}}/webapi/b2b/reference/specification#model-MonitorParameter){% elsif page.subsection == 'b2c' %}[MonitorParameter]({{site.baseurl}}/webapi/b2c/reference/specification/#model-MonitorParameter){% endif %}**: this JSON object allow you to configure your monitor callback:
   - **retryPolicy**: this where you set retry policy, it's in case your webhook has not received the callback, whatever is the reason.
   - **batchNotify**: you can set this object in case you need to receive notification in batch instead of one by one.
   - **callback>webhook**: this required object is where you will set the address and name of you webhook. This is also where you can customize the HTTP notification (example: for authentication purpose).
   - **refreshEvent**: if the trigger is satisfied, refreshEvent define the period between two re-checking.
   - **extendedEventParam**: this events table allow you to send extra vehicle data in the notification.

## 3. EVENT TRIGGERRING

### 3.1 TRIGGERS

Let's have a look at how to create monitor triggers.
First, you have to decide what will be the triggers of your monitor. 

As explained before triggers can be on Zone, Time and/or Data basis.
- **Zone**: a vehicle go in/out a circle area.
- **Time**: a vehicle is being used within a time interval 
- **Data**: choose a sensor and set a triggering when the value is: equals to/greater than/lower than/include in/or changing.

Choose and configure the triggers you need as a JSON table:

```json
{
   "label": "",
   "subscribeParam": { }
   "triggerParam": {
      "triggers": [
         {
            "name": "z1",
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
            "name": "t1",
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
               "timeZone": "Europe/Paris"
            },
            "name": "o1",
            "data": {
               "data": "Vehicle.odometer",
               "op": "greaterThan",
               "value": [
               "75"
               ]
            }
         }
      ],
      "boolExp": ""
   }
}
```

For the entire documentation, look closer at {% if page.subsection == 'b2b' %}[API Reference]({{site.baseurl}}/webapi/b2b/reference){% elsif page.subsection == 'b2c' %}[[API Reference]({{site.baseurl}}/webapi/b2c/reference/specification){% endif %}>**MonitorParameter>triggerParam>triggers**. 
This is where you can find the **entire list of available triggers**.


<div class="notification">
<strong>Deprecated:</strong> timeZoneTrigger and dataTrigger.
<p>
<em>MonitorParameter>triggerParam>timeZoneTrigger</em> and <em>MonitorParameter>triggerParam>dataTriggers</em> are deprecated according to the most up to date specification. 
</p>
<p>
This is the old way of setting a triggering policy, it'is less performant as it allow only "AND relationship" between triggers. Because of retro-compatibility purposes it's still available, but we recommend you strongly to use the new data schema.
</p>
</div>

### 3.2 BOOLEAN EXPRESSION

Once you have selected your triggers, you'll have to combine them together to create a **triggering policy**. To do so, you will use boolean expression. Using boolean expression allow you to have various triggering policies in one monitor.

Let's see how to use this boolean expression:

> **Gramar:** Here is the list of available operands for monitors configuration. 
```yaml
exp::= exp '&' exp
       | exp '|' exp
       | (exp)
       | !exp
```
- AND: `exp1 & exp2` if both conditions have to be triggered 
- OR: `exp1 | exp2` if at least one condition have to be triggered
- PARENTHESIS: `exp1 | (exp2 & exp3)` to prioritize an expression over another
- NOT: `!exp1` if the condition have not to be triggered

This is an example of boolean expression, where *z1, z2, t1, t2, o1, o2, o3* are **trigger names** as seen before:

```json
{
   "label": "",
   "subscribeParam": { }
   "triggerParam": {
      "triggers": [ ],
      "boolExp": "((z1 & t1) | (z2 & !t1) | (o1 & z1) | (o2 & (z1 | t2))  | (o3 & (z1 | z2)))"
      }
}
```

In this boolean expression, the monitor will notify your webhook in all these situations:
- *(z1 & t1)* = **z1** *AND* **t1** are being triggered
- *(z2 & !t1)* = **z2** is triggered *AND* **t1** is *NOT* triggered
- *(o1 & z1)* = **o1** is triggered *AND* **z1** is triggered
- *(o2 & (z1 &#124; t2))* = **o2** is triggered *AND* either **z1** *OR* **t2** is triggered
- *(o3 & (z1 &#124; z2))* = **o3** is triggered *AND* either **z1** *OR* **z2** is triggered

## 4. EXAMPLES

### 4.1 AUTONOMY

This request ask to **create** an "IDF Zone monitor With Data Triggering:[vehicle.energy.electric.level]" monitor with the following parameters:
- It will be **refreshed** every 600s if the event is still triggered. 
- If the callback **notification is not received**, the request will be sent again every 120s until it's properly delivered. 
- The callback will be **sent once** 10 callback notifications are ready to be sent or 300s after triggering. 
- The callback will be **sent to** your `http://my.dn/monitors/cb1` webhook with the vin of the vehicle as a query param and your `Basic authentication` in HTTP header.
- In the **JSON response**, you will find the `alerts` and `status` of the corresponding vehicle.
- This monitor is **triggered** if the vehicle's electric autonomy is lower than 50% AND either is out of an 20km radius circle of the center of Paris, France OR on Mondays.

```json
{
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
            "timeZone": "Europe/Paris"
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
    "boolExp": "((outOfParis & (batteryIsLow | onMonday)"
  }
}
```

### 4.2 HEATWAVE

Another example monitor to detect heatwave:

```json
{
   "label":"IDF Zone monitor With Data Triggering:[environment.air.temp]",
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
    "callback": {
      "webhook": {
        "target": "https://my.post.callback",
        "name": "My_Webhook",
        "attributres": [
            {
            "type": "Header",
            "key": "X-Vehicle_Id",
            "value": "$vin"
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
      "environment.air.temp"
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
        "name": "outsideTemperatureIsHight",
        "data": {
          "data": "environment.air.temp",
          "op": "greaterThan",
          "value": [
            "30"
          ]
        }
      }
    ],
    "boolExp": "(outOfParis & outsideTemperatureIsHight)"
  }
}
```

This request ask to **create** a heatwave monitor **triggered** inside the city of Paris, if the temperature is greater than 30 °C.

### 4.3 MERGE MONITORS

In place of having two monitors like example **4.1** and **4.2** you can use boolean expression to merge those 2 examples in only one monitor:

```json
{
   "label": "",
   "subscribeParam": { }
   "triggerParam": {
      "triggers": [
         { "name": "outOfParis" },
         { "name": "outsideTemperatureIsHight" },
         { "name": "outOfParis" },
         { "name": "onMonday" },
         { "name": "batteryIsLow" }
      ],
      "boolExp": "((outOfParis & (batteryIsLow | onMonday) | (outOfParis & outsideTemperatureIsHight))"
}
```

# POST MONITOR RESPONSE

Here is an example of HTTP response after POSTING a new monitor.

```json 
{
   "monitorId":"c7eeaafdf0ab9683d5a1b8d51572014996540m0021",
   "status":"Created"
} 
```

The monitor have been **created** with `id=c7eeaafdf0ab9683d5a1b8d51572014996540m0021`. This id will be sent with every notification to your webhook.
