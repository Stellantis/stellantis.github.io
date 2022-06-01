---
section: mobile-sdk
categorie: API Reference
layout: api-reference
version:
  available-since: 2.0.X
name: pims.sdk.configuration
domain: sdk
type: 
  - set
params: 
  - name: environnement
    required: false
    type: String
    description: Environnement value.
    unit-value: 
      - Production
      - Preproduction
      - development
    example: Preproduction
  - name: mode
    required: false
    type: String
    description: Mode value.
    unit-value: 
      - B2C
      - B2B
    example: B2C
  - name: monitoring
    description: Monitoring informations.
    type: Object
    required: false
    fields:
    - name: logLevel
      required: false
      type: String
      description: Log level value.
      unit-value: 
        - none
        - low
        - medium
        - high
      example: medium
    - name: newLogFile
      required: false
      type: String
      description: New log file mode.
      unit-value: 
        - 'appLaunch: creates new log file for every app launch'
        - 'day: creates new log file every day'
        - 'duration: creates new log file every newLogTimeDuration'
      example: duration
    - name: newLogTimeDuration
      required: false
      type: Integer
      description: Duration before 2 log file creation. Manadatory only if `newLogFile==duration`
      unit-value:  Between 5 and 1440.
      example: 42
  - name: credential
    required: false
    description: Credential informations.
    type: Object
    fields:
      - name: clientId
        example: "6779ef20e75817b79602" #TODO
        required: false
        type: String
        description: Client ID CVS Server.
        unit-value: n/a
      - name: clientSecret
        example: "865333ef347etr" #TODO
        required: false
        type: String
        description: Client Secret CVS Server.
        unit-value: n/a
      - name: macID
        example: " " #TODO
        required: false
        type: String
        description: MAC id value of inwebo SDK.
        unit-value: n/a
      - name: inWeboURL
        unit-value: n/a
        example: https://address.tld
        required: false
        type: String
        description: Server url of inwebo SDK.
      - name: webviewsRedirectURI
        unit-value: n/a
        example: https://address.tld
        required: false
        type: String
        description: Webviews redirecURI.
      - name: loginRedirectURI
        example: https://address.tld
        unit-value: n/a
        required: false
        type: String
        description: Login redirect URI.
  - name: profile
    description: Profile informations.
    type: Object
    required: false
    fields:
    - name: brand
      required: false
      type: String
      description: Brand value.
      unit-value: 
        - Peugeot
        - Citroen
        - Ds
        - Opel
        - Vauxhall
      example: opel
data: none
error:
  - code: 2001
short: " " # TODO
paramsset_example:
  kotlin: |-
    Pair("environnement", "Production"),
        Pair("mode", "B2C"),
        Pair("monitoring", map0f(
          Pair("logLevel", "low"),
          Pair("newLogFile", "appLaunch"),
          Pair("newLogTimeDuration", 42)
        )
        Pair("credential", map0f(
          Pair("clientId", "6779ef20e75817b79602"),
          Pair("clientSecret", "865333ef347etr"),
          Pair("macID", "<macIDValue"),
          Pair("inWeboURL", "https://address.tld"),
          Pair("webviewsRedirectURI", "https://address.tld"),
          Pair("loginRedirectURI", "https://address.tld")
        )
        Pair("profile", map0f(
          Pair("brand", "opel")
        )
  swift: |-
    "environnement": "Production",
        "mode": "B2C",
        "monitoring": [
          "logLevel": "low",
          "newLogFile": "appLaunch",
          "newLogTimeDuration": 42
        ]
        "credential": [
          "clientId": "6779ef20e75817b79602",
          "clientSecret": "865333ef347etr",
          "macID": "macIDValue",
          "inWeboURL": "https://address.tld",
          "webviewsRedirectURI": "https://address.tld",
          "loginRedirectURI": "https://address.tld
        ]
        "profile": [
          "brand": "opel"
        ]
component:
  - SDK
---