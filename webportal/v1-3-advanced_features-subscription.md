---
layout: doc-article
permalink: /webportal/v1/advanced-features/user-subscription/
section: webportal
subsection: v1
categorie: Advanced Features
title: User subscription
description: "This article introduce the eligibility features in order to give or remove access of your app to users.
"
redirect_from:
 - /webportal/v1/connectivity/user-subscription/
---

# Managing Eligibility

This article introduce the eligibility features in order to give or remove access of your app to users.

## Vin Eligibility

#### `GET baseURL/eligibility?vin={vin}`

##### Example 

```
(GET) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/eligibility?client_id=<client_id>&vin=VF000000000000001 

var req = new XMLHttpRequest();
req.open('GET', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/eligibility?client_id=<client_id>&vin=VF000000000000001', true);
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

## Add Subscribers

This service enables to add a list of VIN as subscribers to the given service(s). In return, the response will give the list of successful requests.

#### `POST baseURL/subscriptions {"Content-Type":"application/json"}`

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
(POST) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>

var req = new XMLHttpRequest();
req.open('POST', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>', true);
req.onload = function () {
    // do something to response
    console.log(this.responseText);
};
req.send(data);
```

**Request payload:**
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

## Remove Subscription

#### `DELETE baseURL/subscriptions {"Content-Type":"application/json"}`

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

##### Example 

```
(DELETE) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>

var req = new XMLHttpRequest();
req.open('DELETE', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>', true);
req.send(data);
```

**Request payload:**
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

## Subscribers List SUBSCRIBERS LIST

#### `GET baseURL/subscriptions?service={serviceCode}`

##### Example 

```
(GET) https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>&service=SERVICE_TEST

var req = new XMLHttpRequest();
req.open('GET', 'https://api-cert-preprod.groupe-psa.com/applications/portail-ovip/v2/subscriptions?client_id=<client_id>&service=SERVICE_TEST', true);
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