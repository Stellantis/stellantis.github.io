---
name: navigation.launchGuidance
privacy: Public
type:
  - get
  - set
  - subscribe
domain: navigation
paramsset:
  - name: action
    description: Type of guidance action.
    type: Enum of strings
    unit-value:
      - startGuidance
      - stopGuidance
    example: startGuidance
    required: true
  - name: navRequestId
    description: >-
      ID of the request, this field must be send if `'action': 'startGuidance'`,
      also in *Subscribe*.
    type: int
    unit-value: n/a
    example: 42
    required: false
  - name: 'waypoints[n].locationType'
    description: >-
      Type of location sent, this field must be send if `'action':
      'startGuidance'`.
    type: Enum of strings
    unit-value:
      - address
      - coordinates
    example: address
    required: false
  - name: 'waypoints[n].number'
    description: >-
      Destintion adress street number, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: '16'
    required: false
  - name: 'waypoints[n].street'
    description: >-
      Destintion adress street name, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: 5th avenue
    required: false
  - name: 'waypoints[n].crossingStreet'
    description: >-
      Destintion adress crossing street name, this field must be send if
      `'action': 'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: Roosvelt Road
    required: false
  - name: 'waypoints[n].cityBlock'
    description: >-
      Destintion adress city block number, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: '42'
    required: false
  - name: 'waypoints[n].cityDistrict'
    description: >-
      Destintion adress city district name, this field must be send if
      `'action': 'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: Manhattan
    required: false
  - name: 'waypoints[n].cityName'
    description: >-
      Destintion adress city name, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: New York
    required: false
  - name: 'waypoints[n].postalCode'
    description: >-
      Destintion adress postal code, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: '10001'
    required: false
  - name: 'waypoints[n].prefecture'
    description: >-
      Destintion adress prefecture name, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: Prefecture Name
    required: false
  - name: 'waypoints[n].stateCode'
    description: >-
      Destintion adress stateCode, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: US-NY
    required: false
  - name: 'waypoints[n].stateName'
    description: >-
      Destintion adress state name, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: New York
    required: false
  - name: 'waypoints[n].countryCode'
    description: >-
      Destintion adress country code, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: ISO 3166-1 alpha-3"
    example: USA
    required: false
  - name: 'waypoints[n].countryName'
    description: >-
      Destintion adress country name, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'address'`.
    type: string
    unit-value: n/a
    example: United State of America
    required: false
  - name: 'waypoints[n].longitude'
    description: >-
      Longitude of the destination address, this field must be send if
      `'action': 'startGuidance'` & `'locationType': 'waypoints'`.
    type: number
    unit-value: n/a
    example: 8.74301
    required: false
  - name: 'waypoints[n].latitude'
    description: >-
      Latitude of the destination address, this field must be send if `'action':
      'startGuidance'` & `'locationType': 'waypoints'`.
    type: number
    unit-value: n/a
    example: 8.74301
    required: false
dataset: none
paramsset_example: |-
  {
      /* START GUIDANCE */
      "action": "startGuidance",
      "navRequestId": 42,
      "waypoints": [
        /* START GUIDANCE: COORDINATES */
        {
            "locationType": "coordinates",
            "latitude": 8.74301,
            "longitude": 8.74301,
        },
        /* START GUIDANCE: ADDRESS */
        {
          "locationType": "address",
          "number": "16",
          "street": "5th avenue",
          "crossingStreet": "Roosvelt Road",
          "cityBlock": "42",
          "cityDistrict": "Manhattan",
          "cityName": "New York",
          "postalCode": "10001",
          "prefecture": "Prefecture Name",
          "stateCode": "US-NY",
          "stateName": "New York",
          "countryCode": "USA",
          "countryName": "United State of America",
        }
      ]
    },
    {
      /* STOP GUIDANCE */
      "action": "stopGuidance"
    }
params: none
dataget:
  - name: launchGuidance
    description: Navigation guidance status. Active or not.
    type: boolean
    unit-value: n/a
    example: 'true'
datasubscribe:
  - name: navRequestId
    description: 'ID of the request, also in *Set*.'
    type: int
    unit-value: n/a
    example: 42
  - name: status
    description: 'ID of the request, also in *Set*.'
    type: Enum of strings
    unit-value:
      - success
      - failed
      - aborted
      - invalid_location
      - invalid_argument
      - valid_location
    example: success
textset: >-
  `'waypoints'` is an array so you can pass multiple waypoints to create complex
  navigations.  The final destination can be `'locationType': 'coordinates'` or
  `'locationType': 'address'` but the waypoints must be only `'locationType':
  'coordinates'`. Max 9 entries in the array. <br> *Status code stopGuidance:
  200 = guidance stopped ; 304 = No active guidance, nothing to stop ; 500|503 =
  Failure to stop guidance* 
short: >-
  This API allows to work with the navigation guidance feature of the
  infotainment system.
---

