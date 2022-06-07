---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.reference.demo
domain: Demo
type: 
    - set
    - subscribe
params:
  - name: "general_param"
    description: "Default parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params1"
      - "params2"
    example: params1
    required: true
  - name: "general_param_2"
    description: "Default parameter for get/set/subscribe unless overidded."
    type: string
    unit-value:
      - "params1"
      - "params2"
    example: params1
    required: true
paramsget:
  - name: "get_param_1"
    description: "Get param 1 overriding general `params`."
    type: int
    unit-value: km/h
    example: 1
    required: true
  - name: "get_param_2"
    description: "Get param 2 overriding general `params`."
    type: Enum of strings
    required: false
    fields: 
      - name: "nested_value_1"
        description: "First field of nested object of get param 2."
        type: Enum of strings
        unit-value:
          - "get2.1"
          - "get2.2"
        example: get2.1
        required: false
      - name: "nested_value_2"
        description: "Second field of nested object of get param 2."
        type: Enum of strings
        unit-value:
          - "get2.1"
          - "get2.2"
        example: get2.1
        required: false
  - ref: vin # Reference to vin (simple object) (in /_data/mobile-sdk-params.yml).
paramsset:
  - name: "set_param_1"
    description: "Set params 1 overriding general `params`."
    type: string
    unit-value:
      - "set1.1"
      - "set1.2"
    example: set1.1
    required: false
  - name: "set_param_2"
    description: "Set params 2 overriding general `params`."
    type: number
    unit-value:
      - 2.1
      - 2.2
    example: 2.2
    required: false
# params_example: "Example overriding the params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsget_example: "Example overriding the GET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramsset_example: "Example overriding the SET params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# paramssubscribe_example: "Example overriding SUBSCRIBE params generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
data:
  - name: "general_data"
    description: "Default data for get/set/subscribe unless overidded."
    type: int
    unit-value: n/a
    example: 42
dataget:
  - name: "get_data_1"
    description: "Get data 1 overriding general `data`."
    type: int
    unit-value: n/a
    example: 42
  - name: "get_data_2"
    description: "Get data 2 overriding general `data`."
    type: int
    unit-value:
      - "1: 'km/h'"
      - "2: 'mph'"
    example: 2
  - ref: trip #ref to trip complex object in (/_data/mobile-sdk-params.yml)
    name: 'previousTrips' # override trip name
    description: Previous trip list.
    type: List of Objects
dataset:
  - name: "set_data"
    description: "Set data overriding general `data`."
    type: int
    unit-value:
      - 1
      - 2
    example: 1
# data_example: "Example overriding the data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataget_example: "Example overriding the GET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# dataset_example: "Example overriding the SET data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
# datasubscribe_example: "Example overriding SUBSCRIBE data generated example code, use YAML syntax `|-` to keep end of line and indentation formating."
dataget_example: |-
  [
      {
        "vin": "VR1AB12C3D45678909",
        "gdpr": true
      },
      {
        "vin": "VR1AB12C3D45678909",
        "gdpr": false
      }
    ]
error: 
  - code: 2000
errorget: 
  - code: 2000
  - code: 2101
  - code: 2102
errorset: 
  - code: 2000
  - code: 2006
textget: "Text displayed on the GET type of this API (support markdown)."
textset: "Text displayed on the SET type of this API (support markdown)."
textsubscribe: "Text displayed on the SUBSCRIBE type of this API (support markdown)."
short: "Short **description** of this API (support markdown)."
component : # components required for this API to work
  - First Cpmnt
  - Second Cpmnt
---

**Markdown** Formated Text

Link Example: 
  - Link [external](https://wikipedia.org/)
  - Link [internal]({{ site.baseurl }}/mobile-sdk/references/list/)