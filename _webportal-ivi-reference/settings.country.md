---
name: settings.country
privacy: Full Private
type:
  - get
  - subscribe
domain: settings
params: none
dataget:
  - name: countryCode
    description: >-
      Country code accourding to [ISO 3166-1
      alpha-2](https://www.iso.org/obp/ui/#search/code/). `null` if no country
      is selected.
    type: string
    unit-value: ISO 3166-1 alpha-2
    example: FR
datasubscribe:
  - name: new
    description: >-
      Country code accourding to [ISO 3166-1
      alpha-2](https://www.iso.org/obp/ui/#search/code/). `null` if no country
      is selected.
    type: string
    unit-value: ISO 3166-1 alpha-2
    example: FR
  - name: old
    description: >-
      Country code accourding to [ISO 3166-1
      alpha-2](https://www.iso.org/obp/ui/#search/code/). `null` if no country
      is selected.
    type: string
    unit-value: ISO 3166-1 alpha-2
    example: FR
short: This API allows to work with country selection in the infotainment system.
---

