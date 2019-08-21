---
title: Web B2C Example
layout: pageWebAPI_B2C
---

# Prerequisite

[Having your PG4D account configured correctly]({{site.baseurl}}/cloud_QuickGuide)


## Connect

If you need to connect using OAuth2 you will have to pass the token to be authenticated.

```bash
curl --request POST \
  --url https://api-preprod.groupe-psa.com/accounts/signin/v1/citroen/oauth2/token \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'grant_type=authorization_code&client_id=your_client_id&code=AAIKiJ1lRG4tLn7Dp-avdJ9KjKSHNJ-_2UCtN5E_63Y_OObtBEJpjUeEWV7wtNzbS-IN-xe4peiCtijaJCcRKpCQdiyYvL2oGydQj1pZMpdk3g&redirect_uri=your_url'
```

If everything works correctly, you will get back a JSON-encoded string containing the token :

```json
{
    "token_type": "bearer",
    "access_token": "AAEkM2I1Mzg5N2MtMjMxOS00NjBhLTk0OWMtYWRjZmEyMjc4ZGY1I4x-UYcXbxeKOE2kYIOc88k-c0bJ8BgYWe1QDBNU93SXBZ92B_QUk8jLObN0Dvr0sSUjmvv29UPA0T8SkGwvrDL7joRGF6oEtD3Pbf4PTnQ",
    "expires_in": 3600,
    "scope": "public",
    "refresh_token": "AAFQAQkFrg-YjKr_8hi79Cebxn2YJJhjCaDUYXhN_qWddAPdxoIF0CTZRkYgP5XFfgQHraWeZAcNuElyWYclowzEbePpyS-oqtgT9qivn-q8y0tjR9MdWjCWdvYIPSthTmY"
}
```




# Examples

Below is an example to create a monitor for a fleet and another one to get the trip of a vehicle using Python.

## Monitor
Python
```python
import http.client

conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

payload = "{\"subscribe\":{\"retryPolicy\":{\"retryPolicy\":\"none\",\"maxRetryNumber\":1,\"retryDelay\":10},\"subscribe\":{\"id\":7192522216439808}},\"trigger\":{\"id\":971050487644160}}"

headers = {
    'fleet-id': "REPLACE_THIS_VALUE",
    'content-type': "application/json",
    'accept': "application/json"
    }

conn.request("POST", "/connectedcar/v3/fleet/monitors?client_id=REPLACE_THIS_KEY", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

JSON Payload
```json

{"subscribe":
  {"retryPolicy":
    {"retryPolicy":"none",
      "maxRetryNumber":1,
      "retryDelay":10
    },
    "subscribe":{
      "id":7192522216439808
    }
  },
  "trigger":{
    "id":971050487644160
  }
}

## Trip

```python
import http.client

conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

headers = {
    'fleet-id': "REPLACE_THIS_VALUE",
    'accept': "application/hal+json"
    }

conn.request("GET", "/connectedcar/v3/fleet/vehicles/REPLACE_ID/trips?client_id=REPLACE_THIS_KEY&timestamps=REPLACE_THIS_VALUE&indexRange=0-&pageSize=60&pageToken=REPLACE_THIS_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

## Alerts

First get the list of last alerts for your vehicle.

```python
import http.client

/// import ast ///
import json


conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

headers = {
    'fleet-id': "REPLACE_THIS_VALUE",
    'accept': "application/hal+json"
    }

conn.request("GET", "/connectedcar/v3/fleet/vehicles/REPLACE_ID/alerts?client_id=REPLACE_THIS_KEY&timestamps=REPLACE_THIS_VALUE&indexRange=0-&pageSize=60&pageToken=REPLACE_THIS_VALUE&locale=REPLACE_THIS_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))



/// myjson = ast.literal_eval(data.decode("utf-8")) ///

myjson = json.loads(data.decode("utf-8"))

for item in myjson:
  print item['alertmessage']
```

Now get information corresponding to the alert message and check what it contains to sort out which you need.

```python
import http.client

conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

headers = {
    'fleet-id': "REPLACE_THIS_VALUE",
    'accept': "application/hal+json"
    }

conn.request("GET", "/connectedcar/v3/fleet/vehicles/REPLACE_ID/alerts/REPLACE_AID?client_id=REPLACE_THIS_KEY&locale=REPLACE_THIS_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

# Authentication

To authenticate and use the API endpoints.

```bash
curl --request GET \
  --url 'https://api-preprod.groupe-psa.com/accounts/signin/v1/peugeot/oauth2/authorize?client_id=REPLACE_THIS_KEY&response_type=REPLACE_THIS_VALUE&scope=REPLACE_THIS_VALUE&redirect_uri=REPLACE_THIS_VALUE&state=REPLACE_THIS_VALUE' \
  --header 'accept: text/html'
```

```bash
curl --request POST \
  --url https://api-preprod.groupe-psa.com/accounts/signin/v1/peugeot/oauth2/authorize \
  --header 'accept: text/html' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'client_id=6223139360997376&scope=ralru&resource-owner=tijovj&redirect_uri=http%3A%2F%2Fmoda.vi%2Fviga&original-url=http%3A%2F%2Ffina.cf%2Fhulaapi&dp-state=DE&dp-data=sapa'
```

# Token

When authenticating to use the API

```bash
curl --request POST \
  --url https://api-preprod.groupe-psa.com/accounts/signin/v1/peugeot/oauth2/token \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'grant_type=refresh_token&client_id=468531760070656&client_secret=ublebb&code=raelep&redirect_uri=http%3A%2F%2Flen.mv%2Fbesuse&username=Nellie&password=sumo&scope=moku&refresh_token=1d060d9d96a4f4d979c7e25537805f674422eeb3daa0c270d241b77c9c1482a2'`
```

# Alert

To get the alerts for a specific trip.

```bash
curl --request GET \
  --url 'https://api-preprod.groupe-psa.com/connectedcar/v2/trips/REPLACE_ID/alerts?client_id=REPLACE_THIS_KEY' \
  --header 'accept: application/hal+json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN'
// OkHttpClient from http://square.github.io/okhttp/
```

Make sure to replace YOUR_CLIENT_ID with your API key and VALID_BEARER_TOKEN by a valid bearer token. The above command returns JSON structured like this:

```json
{
    "_links": {
        "self": {
            "href": "/trips/25D3D93E7319002612A80D6AD8B423FE-909839383-2910004/alerts?limit=10&offset=0&locale=en_US"
        },
        "first": {
            "href": "/trips/25D3D93E7319002612A80D6AD8B423FE-909839383-2910004/alerts?limit=10&offset=0&locale=en_US"
        },
        "next": {
            "href": "/trips/25D3D93E7319002612A80D6AD8B423FE-909839383-2910004/alerts?limit=10&offset=0&locale=en_US"
        },
        "prev": {
            "href": "/trips/25D3D93E7319002612A80D6AD8B423FE-909839383-2910004/alerts?limit=10&offset=0&locale=en_US"
        },
        "last": {
            "href": "/trips/25D3D93E7319002612A80D6AD8B423FE-909839383-2910004/alerts?limit=10&offset=0&locale=en_US"
        }
    },
    "total": 0,
    "_embedded": {
        "alerts": []
    }

}
```

This endPoint retrieves alerts on a specific trip.

**HTTP Request**

`GET https://api-preprod.groupe-psa.com/connectedcar/v2/trips/{id}/alerts?client_id=REPLACE_THIS_KEY`

**Query Parameters**

|Parameter|	Type|	Required|	Description|	Example|
|----|----|----|----|----|
|id|	string|	true|	This is the unique ID of the trip.|	29245REZ29RTYY54944|

**Object properties**

|Property|	Type|	Description|
|----|----|----|
|id|	string|	Unique id of the alert|

**Errors**

|Error Code|	Meaning|
|----|----|
|404|	There is no vehicle with this id on the database.|
|403|	The user don't have access to this car. Usually an error with the vehicle ID.|
|500|	Internal server error. Sounds like there's a problem on the server. Take it easy, we're on it ;)|
