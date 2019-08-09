---
title: Web B2B Preview
layout: pageWebAPI_B2B
---
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
|200| Request completed without any issues|
|400| Invalid request (ID, ...) |
|403|	The user don't have access to this car. Usually an error with the vehicle ID.|
|404| Data not found. Can be that there is no data for this specific vehicle or a typo on the URL |
|500| Internal server error. Sounds like there's a problem on the server. Take it easy, we're on it ;)|

## Single object

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
|_links|	object|	This property contain _links related to the current object. It can be _links to store the current object or _links related to this objectss.|
|_links.self.href|	string|	URL of the current object|
|createdAt|	date| Creation date: when the data was collected (UTC).|
|updatedAt|	date| Last update date|
|_embedded|	object|	This property contains commonly related objects to the current object. It can be empty.|

## Collection

When you call an api with a plural noun you will receive an array of objects. Every ressource which responds with a list of object respect the following generic schema.

```json
{
  "_links": {
    "self": {
      "href": "/connectedcar/v2/trips"
    },
    "first": {
      "href": "/connectedcar/v2/trips/?offset=0"
    },
    "next": {
      "href": "/connectedcar/v2/trips/?offset=10&limit=10"
    },
    "prev": {
      "href": "/connectedcar/v2/trips/?offset=0"
    },
    "last": {
      "href": "/connectedcar/v2/trips/?offset=90&limit=10"
    }
  },
  "total": 100,
  "_embedded": {
    "objects": [{...}]
  }
}
```

|Property|	Type|	Description|
|----|----|----|
|_links|	object|	This property contain _links related to the current object. You can use these _links in your application to store.|
|_links.self.href|	string|	URL of the current position in the array|
|_links.first.href|	string|	URL for the first page of the array. *Optional*|
|_links.next.href|	string|	URL for the next page of the array. *Optional*|
|_links.prev.href|	string|	URL for the previous page of the array. *Optional*|
|_links.last.href|	string|	URL for the last page of the array. *Optional*|
|total|	integer|	Total number of elements in the array. Depends on the filters applied to the search.|
|_embedded|	object| This property contains commonly related objects to the current object. |


# See Also

**Authentication**

The Web API utilizes certificate authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/cloud_authentication_B2B) and obtain your own certificate.

**Monitors**

Unlike common APIs, Groupe PSA offer you Big Data features ! Check at our [Monitors]([authentication]({{ site.baseurl }}/cloud_Monitor))
