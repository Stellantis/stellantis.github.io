---
title: WebPortalSubscription
layout: page2
---

# Managing WebPortal Subscriptions

## Checking eligibility of a VIN to the WebPortal

### `GET baseURL/eligibility?vin={vin}`

#### Example

```
(GET) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/eligibility?client_id=86aa314c-4689-47e0-a051-1a83defeb964&vin=VF3LB9HCGES134155


var req = new XMLHttpRequest();
req.open('GET', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/eligibility?client_id=86aa314c-4689-47e0-a051-1a83defeb964&vin=VF3LB9HCGES134155', true);
req.send(null);

```

Return code | Description
----|----
HTTP 200 | Request Successful. The response body will contain the answer.
HTTP 400 | Bad request, VIN is not syntactically correct (17 chars with letters and numbers is the correct syntax)
HTTP 401 | Not authorized

**Response Body**
```json
{
    "vin": "VF000000000000001",
    "eligible": true
}
```

## Adding subscribers to existing services

This service enables to add a list of VIN as subcribers to the given service(s). In return, the response will give the list of successful requests.

### `POST baseURL/subscriptions {"Content-Type":"application/json"}`

**Request Body**
```json
[
  {
    "code": "SERVICE1_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002",
      "VF000000000000003"
    ]
  },
  {
    "code": "SERVICE2_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002"
    ]
  }
]
```

>**Note:** Services must already exist in Portail OVIP

**Response Body**
```json
[
  {
    "code": "SERVICE1_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000003"
    ]
  },
  {
    "code": "SERVICE2_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002"
    ]
  }
]
```

#### Example

```
(POST) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964

var req = new XMLHttpRequest();
req.open('POST', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964', true);
req.onload = function () {
    // do something to response
    console.log(this.responseText);
};
req.send(data);
```

**Request payload :**
```json
[
  {
    "code": "SERVICE_TEST",
    "subscribers": [
      "VF77777777777777"
    ]
  }
]
```

Return code | Description
----|----
HTTP 200 | Request Successful
HTTP 202 | Request Successful, but no subscription added (services do not exist)
HTTP 400 | Bad Request, VIN is not syntactically correct (17 chars with letters and numbers is the correct syntax) if there was only one VIN requested or global syntax is not correct
HTTP 401 | Not authorized

## Removing subscriptions

### `DELETE baseURL/subscriptions {"Content-Type":"application/json"}`

**Request Body**
```json
[
  {
    "code": "SERVICE1_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002",
      "VF000000000000003"
    ]
  },
  {
    "code": "SERVICE2_CODE",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002"
    ]
  }
]
```

#### Example 

```
(DELETE) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964

var req = new XMLHttpRequest();
req.open('DELETE', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964', true);
req.send(data);
```

**Request payload :**
```json
[
  {
    "code": "SERVICE_TEST",
    "subscribers": [
      "VF77777777777777"
    ]
  }
]
```

Return code | Desription
----|----
HTTP 200 | Request Successful
HTTP 400 | Bad Request, VIN is not syntactically correct (17 chars with letters and numbers is the correct syntax) if there was only one VIN requested or global syntax is not correct
HTTP 401 | Not authorized

## Listing a service subscribers

### `GET baseURL/subscriptions?service={serviceCode}`

#### Example 

```
(GET) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964&service=SERVICE_TEST

var req = new XMLHttpRequest();
req.open('GET', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=86aa314c-4689-47e0-a051-1a83defeb964&service=SERVICE_TEST', true);
req.send(data);
```

Return code | Description
----|----
HTTP 200 | Request Successful
HTTP 204 | Request Successful, but no subscribers were found for the specified service
HTTP 400 | Bad Request
HTTP 401 | Not authorized

**Response Body**
```json
{
    "code": "SERVICE_CODE",
    "name": "Service One",
    "subscribers": [
      "VF000000000000001",
      "VF000000000000002",
      "VF000000000000003"
    ]
}
```

## Using JQUERY

Some examples showing how to send the http requests can be found below:

- **$.get method** : to execute GET requests. It takes two parameters: the endpoint and a callback function.
```javascript
const url = 'url'
$('.btn').click(function(){
	$.get(Url, function(data, status){
		console.log('${data}')
	});
})
```


- **$.post method** : to post data to the server. It takes three parameters: the url, the data you want to post, and a callback function.
```javascript
const url = 'url'
const data ={
name:"Sally",
id:23}
$('.btn').click(function(){
	$.post(Url, data, function(data, status){
		console.log('${data} and status is ${status}')
	});
})
```