---
layout: doc-article
permalink: /webapi/b2b/quick-start/
section: webapib2b
title: Quick Start
---
# Connect

```python
import http.client
import ssl

password = input("Key password (enter for none):") or None

headers = {
  "username": "password"
  'content-type': "application/json",
  'accept': "application/json"
}

context = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
context.load_cert_chain("cert.pem", "key.pem", password=password)
context.verify_mode = ssl.CERT_REQUIRED
context.check_hostname = True

conn = http.client.HTTPSConnection("someurl.com", port=443, context=context)

conn.request("POST", "/to/this/place", json_file, headers)
response = conn.getresponse()
print(response.status, response.reason)
data = response.read()
print(data)
conn.close()
```


# Examples

Below is an example to create a monitor for a fleet and another one to get the trip of a vehicle using Python.


## Monitor

```python
import http.client

conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

payload = "{"subscribe":
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
            }";

headers = {
  "username": "password"

  'content-type': "application/json",
  'accept': "application/json"
    }

conn.request("POST", "/connectedcar/v3/fleet/monitors?client_id=REPLACE_THIS_KEY", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

## Trip

```python
import http.client

conn = http.client.HTTPSConnection("api-preprod.groupe-psa.com")

headers = {
  "username": "password"
  'content-type': "application/json",
  'accept': "application/json"
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
  "username": "password"
  'content-type': "application/json",
  'accept': "application/json"
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
  "username": "password"
  'content-type': "application/json",
  'accept': "application/json"
    }

conn.request("GET", "/connectedcar/v3/fleet/vehicles/REPLACE_ID/alerts/REPLACE_AID?client_id=REPLACE_THIS_KEY&locale=REPLACE_THIS_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

# See Also

##### Try out!

To test the API you can check the [API List]({{ site.baseurl }}/webapi/b2b/reference/) directly.

##### Authentication

The Web API utilizes certificate authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/webapi/b2b/authentication/) and obtain your own certificate.
