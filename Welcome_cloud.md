---
title: Web Presentation
layout: pageWebAPI
---

# About Cloud

Based on REST and using JSON for data, the Web API implements all the resources you need to retrieve information from the vehicle.

The base address of the Web API is https://api-preprod.groupe-psa.com/ for preproduction purpose only. Then the endpoints also have their own path.
Generally endpoints can be used after asking for access on the website, but in order to access certain endpoints your demand will have to be manually reviewed before being approved by the PSA team.

## Requirements

Knowledge of :
- HTTP requests
- JSON file format

## Requests

The PSA Web API is based on REST principles. Data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Moreover, the Web API uses appropriate HTTP verbs for each action:


| METHOD | ACTION
|----|----
| GET | Retrieves resources
| POST | Creates resources
| PUT | Changes and/or replaces resources or collections
| DELETE | Deletes resources


## Tutorial

A [Quick Start guide]({{ site.baseurl }}) is provided to help you understand the basics and get started.

## API Documentation

The complete API Documentation can be found [here](https://developer-preprod.groupe-psa.com/inc/).

prod:

https://developer.groupe-psa.com/inc/

preprod:

https://developer-preprod.groupe-psa.com/inc/

