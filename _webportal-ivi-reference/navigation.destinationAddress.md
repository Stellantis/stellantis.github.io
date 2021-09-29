---
name: navigation.destinationAddress
privacy: Public
type:
  - get
  - subscribe
domain: navigation
params: none
data:
  - name: number
    description: Destintion adress street number.
    type: string
    unit-value: n/a
    example: '16'
  - name: street
    description: Destintion adress street name.
    type: string
    unit-value: n/a
    example: 5th avenue
  - name: crossingStreet
    description: Destintion adress crossing street name.
    type: string
    unit-value: n/a
    example: Roosvelt Road
  - name: cityBlock
    description: Destintion adress city block number.
    type: string
    unit-value: n/a
    example: '42'
  - name: cityDistrict
    description: Destintion adress city district name.
    type: string
    unit-value: n/a
    example: Manhattan
  - name: cityName
    description: Destintion adress city name.
    type: string
    unit-value: n/a
    example: New York
  - name: postalCode
    description: Destintion adress postal code.
    type: string
    unit-value: n/a
    example: '10001'
  - name: extendedPostalCode
    description: Destintion adress extended postal code.
    type: string
    unit-value: n/a
    example: '10001'
  - name: stateCode
    description: Destintion adress stateCode.
    type: string
    unit-value: n/a
    example: US-NY
  - name: stateName
    description: Destintion adress state name.
    type: string
    unit-value: n/a
    example: New York
  - name: countryCode
    description: Destintion adress country code.
    type: string
    unit-value: ' ISO 3166-1 alpha-3'
    example: USA
  - name: countryName
    description: Destintion adress country name.
    type: string
    unit-value: n/a
    example: United State of America
  - name: formattedAddress
    description: Destintion adress formattedAddress. This field is *optional*
    type: string
    unit-value: n/a
    example: '111 5th Avenue, New York, NY'
short: This API allows to destination adress of the current navigation.
---

