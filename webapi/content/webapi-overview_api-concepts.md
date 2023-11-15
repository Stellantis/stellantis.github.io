This API is based on **REST** principles. Data resources are accessed via standard **HTTPS requests in UTF-8 format** to an API endpoint.

This REST API returns type MIME: **application/hal+json**, [GeoJson](https://en.wikipedia.org/wiki/GeoJSON) for location and [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) for time format.

This API is available for ex Groupe PSA vehicles (Citroën, DS, Peugeot, Opel and Vauxhall).

## HTTP Response

|Response Code| Meaning|
|----|----|
|`200`| Request completed without any issues|
|`400`| Invalid request (ID, ...) |
|`403`|	The user doesn't have access to this car. Usually an error with the vehicle ID.|
|`404`| Data not found. It can be a lake of data for this specific vehicle or a typo on the URL. |
|`429`| Too Many Requests. The limit of requests have been exceeded, see [rate limits](#rate-limit). |
|`500`| Internal server error. |

> **Error & Rate Limit:** See [this page]({{site.baseurl}}/webapi/{{page.subsection}}/overview/errors#article) for more information about errors & rate limit.

## Single Object

When you call for a resource with an ***{id}*** in the endpoint, the response will be a single object. All these endpoints respond with the following generic schema:

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
|`_links`|	object|	This property contains _links related to the current object. It can be _links to inside the current object or _links related to this object.|
|`_links.self.href`|	string|	URL of the current object|
|`createdAt`|	date| Creation date: when the data was collected (UTC).|
|`updatedAt`|	date| Last update date|
|`_embedded`|	object| This property contains commonly related objects to the current object. It can be empty.|

## Collection

When you call an API endpoint with a plural noun in the path (and not *{id}* tag), the response is an array of objects. All these endpoints respond with the following generic schema:

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
        "id": ,
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

## Pagination

All collections in this API are browsable. Links provided in response allow navigating in the API endpoints like on a website.

First, collections come with a **pagination system**. In the request you can add these optional parameters:
- **indexRange**: allows specifying which elements of the array need to be returned, by requesting a range of elements.
<br>*Example:* `indexRange=0-9` will retrieve only elements 0 to 9 of this collection.

- **pageSize**: is the maximum of results you want to receive per page.
<br>*Example:* `pageSize=15` will retrieve only 15 results per page. Use the *_links* objects to navigate between pages.

As seen in the previous example, there is an `_links` object in the response body. These links allow navigating in the pages of this collection.

|Property|	Type|	Description|
|----|----|----|
|`_links.self.href`|	string |	URL of the current page in the array. |
|`_links.first.href`|	string |	URL of the first page of the array. *Optional*|
|`_links.next.href`|	string |	URL of the next page of the array. *Optional*|
|`_links.prev.href`|	string |	URL of the previous page of the array. *Optional*|
|`_links.last.href`| string |	URL of the last page of the array. *Optional*|
|`total`|	integer|	Total number of elements in the array. |
|`_embedded`|	object| This property contains the response of this endpoint. |

## Discovering Resources

Resources in the API are using HAL for **HATEOAS integration**. It allows interaction inside the API resources. The purpose is to access and discover the API like you browse a website: navigating from one page to another. Links are named with the idea that you can understand easily what they are about.

**Example for** {% if page.subsection == 'b2b' %}
[**GET /fleets/{fid}/status:**]({{site.baseurl}}/webapi/b2b/api-reference/references/#operation/getFleetStatusList) {% elsif page.subsection == 'b2c' %}[**GET /user/vehicles/{id}/status:**]({{site.baseurl}}/webapi/b2c/api-reference/references/#operation/getVehicleByid) {% endif %}

```json
{
  "_links": { },
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
        "_links": {{"{"}}{% if page.subsection == 'b2b' %}
          "fleet": {
            "href": "(...)/fleets"
          },{% endif %}
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

The main resource is stored in the object`_embedded.Status`.

Then, inside this main object, there is a `_links` property relative to this `Status` object. It allows discovering resources and navigate in the API. In the example below, you can retrieve the following links:
{% if page.subsection == 'b2b' %}
- `"fleet"`: a direct link to the fleet of this status.
{% endif %}
- `"self"`: pointing to itself.
- `"vehicles"`: pointing to the vehicle resource is about.

## Expected JSON Data

**Be careful**, this API is very likely to have updates in the future, that's why your application has to support evolution regarding the schema of exposed data.

In order to ensure the API **backward compatibility** with previous versions, we pledge to keep the same unit for each field in a JSON response body.

However, it's possible that we choose to **add a new field** in a JSON response body. Your application should then handle dealing with unknown properties.

Furthermore, regarding the nature of this API, it could append that some **fields are missing** in the JSON response body. In this case, your application should be able to manage with the absence of the field and not cause an error.

{% if page.subsection == "b2c" %}

> **Data Availability:** [this article]({{site.baseurl}}/webapi/b2c/quickstart/data-availability-scopes/#article) explains how data availability is managed within End-User API.

{% endif %}

#### Example

This is an example of an exposed resource data schema:

```yaml
data:
type: object
description: Data model
properties:
    field1:
    type: string
    field2:
    type: number
```

And then here is a list of JSON data that your application should be able to handle:

**1. All fields:**
```json
{
    "field1":"value1",
    "field2": 1
}
```

**2. Missing fields:**
```json
{
    "field1":"value1"
}
```

**3. Unknown fields:**
```json
{
    "field1":"value1",
    "field3": 2.5
}
```