# What does it's look like ?

Our REST api returns type MIME: **application/hal+json**. GeoJson is for geolocalisation and time format is RFC3339.

## Requests

The Groupe PSA's Web APIs are based on **REST** principles. Data resources are accessed via standard **HTTPS requests in UTF-8 format** to an API endpoint. Moreover, the Web API uses appropriate HTTP verbs for each action:


<table class="largertable">
  <thead>
    <tr>
      <th>METHOD</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="verb get">GET</span></td>
      <td>Retrieve resources</td>
    </tr>
    <tr>
      <td><span class="verb post">POST</span></td>
      <td>Create resources</td>
    </tr>
    <tr>
      <td><span class="verb put">PUT</span></td>
      <td>Change and/or replace resources or collections</td>
    </tr>
    <tr>
      <td><span class="verb verbdelete">DELETE</span></td>
      <td>Delete resources</td>
    </tr>
  </tbody>
</table>

## Responses

|Response Code| Meaning|
|----|----|
|`200`| Request completed without any issues|
|`400`| Invalid request (ID, ...) |
|`403`|	The user don't have access to this car. Usually an error with the vehicle ID.|
|`404`| Data not found. Can be that there is no data for this specific vehicle or a typo on the URL |
|`500`| Internal server error. Sounds like there's a problem on the server. Take it easy, we're on it ;)|

### Single object

When you call a ressource with an id you will retrieve a single object. Every ressource wich respond with a single object respect the following generic schema:

```json
{
  "_links": {
    "self": {
      "href": "oper"
    },
    (...)
  },
  (...)
  "createdAt": "2017-08-10T13:46:39.652+0000",
  "updatedAt": "2017-08-10T13:46:39.652+0000",
  "_embedded": {
    (...)
  }
}
```


|Property|	Type|	Description|
|----|----|----||
|`_links`|	object|	This property contain _links related to the current object. It can be _links to store the current object or _links related to this objectss.|
|`_links.self.href`|	string|	URL of the current object|
|`createdAt`|	date| Creation date: when the data was collected (UTC).|
|`updatedAt`|	date| Last update date|
|`_embedded`|	object|	This property contains commonly related objects to the current object. It can be empty.|

### Collection

When you call an api with a plural noun you will receive an array of objects. Every ressource which responds with a list of object respect the following generic schema.

```json
{
    "_links": {
        "self": {
            "href": (...)
        }
    },
    "total": 2,
    "_embedded": {
        "vehicles": [
            {
                "id": ,
                "vin": ,
                "brand": ,
                "pictures": [(...)],
                "_links": {
                    "alerts": {
                        "href": "(...)/user/vehicles/{id}/alerts"
                    },
                    "trips": {
                        "href": "(...)/user/vehicles/{id}/trips"
                    },
                    "self": {
                        "href": "(...)/user/vehicles/{id}?locale=fr-FR"
                    },
                    "lastPosition": {
                        "href": "(...)/user/vehicles/{id}/lastPosition"
                    },
                    "telemetry": {
                        "href": "(...)/user/vehicles/{id}/telemetry"
                    },
                    "maintenance": {
                        "href": "(...)/user/vehicles/{id}/maintenance"
                    },
                    "status": {
                        "href": "(...)/user/vehicles/{id}/status"
                    }
                }
            },
                        {
                "id":,
                "vin": ,
                "brand": "Peugeot",
                "pictures": [(...)],
                "_links": {
                    "alerts": {
                        "href": "(...)/user/vehicles/{id}/alerts"
                    },
                    "trips": {
                        "href": "(...)/user/vehicles/{id}/trips"
                    },
                    "self": {
                        "href": "(...)/user/vehicles/{id}?locale=fr-FR"
                    },
                    "lastPosition": {
                        "href": "(...)/user/vehicles/{id}/lastPosition"
                    },
                    "telemetry": {
                        "href": "(...)/user/vehicles/{id}/telemetry"
                    },
                    "maintenance": {
                        "href": "(...)/user/vehicles/{id}/maintenance"
                    },
                    "status": {
                        "href": "(...)/user/vehicles/{id}/status"
                    }
                }
            }
        ]
    },
    "currentPage": 1,
    "totalPage": 1
}
```



#### Pagination
Every collections in the API are browsable. Links provided in the response will let you naviguate in the API endpoints like in a website.

First of all, collections comes with a **pagination system**. In your request you can add optional parameters:
- `indexRange`: specify where the collection begin and where it finish.
> example: *"indexRange=0-9"* will retriev only results 0 to 9.

- `pageSize`: is the maximum of resultats you want to return per page.
> example: *"pageSize=15"* will retieve only 15 results per page.

As you can see in the previous example there is a `_links` object at the top of the response body. These links let you browse between pages in a collection.  Look at this table for more info about this `_links` object:

|Property|	Type|	Description|
|----|----|----|
|`_links`|	object|	This property contain _links related to the current object. You can use these _links in your application to store: |
|`_links.self.href`|	string|	URL of the current position in the array|
|`_links.first.href`|	string|	URL for the first page of the array. *Optional*|
|`_links.next.href`|	string|	URL for the next page of the array. *Optional*|
|`_links.prev.href`|	string|	URL for the previous page of the array. *Optional*|
|`_links.last.href`|	string|	URL for the last page of the array. *Optional*|
|`total`|	integer|	Total number of elements in the array. Depends on the filters applied to the search.|
|`_embedded`|	object| This property contains commonly related objects to the current object. |

#### Discover Ressources with HAL

Ressources in the API are using HAL for **HATEOAS integration**. It allow interaction inside the api ressources. The purpose is to access and discover the API like you browse a website: navigating from one page to another. Links are nammed with the idea that you can understand easily what they are about.

**Example:** 
<div class="tags has-addons">
    <span class="tag is-large get"> GET </span>
    <span class="tag is-large is-fullheight is-light"
        >
        {% if page.section == 'webapib2b' %}
        <a href="{{site.baseurl}}/webapi/b2b/reference/#/Fleet/getFleetStatusList">/fleets/{fid}/status</a>
        {% elsif page.section == "webapib2c" %}
        <a href="{{site.baseurl}}/webapi/b2c/reference/#/Vehicles/getVehicleStatus">/user/vehicles/{id}/status</a>
        {% endif %}
        </span>
</div>

```json
{
    "_links": {(...)}
    },
    "total": 32,
    "_embedded": {
        "Status": [
            {
              "lastPosition": {(...)},
              "preconditionning": {(...)},
              "energy": [(...)],
              "createdAt": "Mon Jun 03 08:35:36 GMT 2019",
              "autonomy": 290,
              "ignition": {(...)},
              "_links": {
{% if page.section == 'webapib2b' %}                  "fleet": {
                      "href": "(...)/fleets"{% endif %}
                  },
                  "self": {
                      "href": "(...)status?indexRange=0-&pageSize=1&locale=fr-FR"
                  },
                  "vehicles": {
                      "href": "(...)/vehicles/{id}"
                    }
                }
            }
        ]
    },
  "currentPage": 1,
  "totalPage": 32
}
```

Let's say your are browsing all the vehicles (example above).
Look at the object status, inside each status object you can retrieve info about the vehicle it concerns, it include last position, precondictionning, battery etc.

Furthermore there is a `_links` object embedded in the status object. These links are relative to the object that they describe. They let you discover and browse the API. In the example below you can retrieve 3 links:
{% if page.section == 'webapib2b' %}
- `"fleet"` : direct link to the fleet of this status.
{% endif %}
- `"self"` : pointing to the actual ressource.
- `"vehicles"` :  pointing to the vehicle this status is about.


# See Also

{% if page.section == 'webapib2b' %}
##### Authentication

Groupe PSA's web API for fleet owner utilizes mutual authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/webapi/b2b/authentication/) and obtain your own certificate.
{% elsif page.section == "webapib2c" %}

##### Connect

Groupe PSA's web API for end-users utilizes OAuth2 connection, follow this [link]({{site.baseurl}}/webapi/b2c/connect/) for connection tutorial. {% endif %}


##### Monitors

Groupe PSA's web api offer you Big Data features ! Look at {% if page.section == 'webapib2b' %}[Monitors]({{ site.baseurl }}/webapi/b2b/monitor/){% elsif page.section == "webapib2c" %}[Monitors]({{ site.baseurl }}/webapi/b2c/monitor/){% endif %}.