---
privacy: Full Private
type:
  - get
name: HMI.driverDistractionText
domain: HMI
params: none
data:
  - name: title
    description: Driver distraction message title.
    type: string
    unit-value: n/a
    example: For your security
  - name: text
    description: Driver distraction message content.
    type: string
    unit-value: n/a
    example: This function is disabled while driving.
  - name: okButtonText
    description: >-
      Text of the 1st button: the driver approve the message. In this case the
      driver the restriction using infotainment system.
    type: string
    unit-value: n/a
    example: OK
  - name: passengerButtonText
    description: >-
      Text of the 2nd button: a passenger is using the infotainment system. In
      this case the passenger can use the infotainment system without
      restriction.
    type: string
    unit-value: n/a
    example: PASSENGER
short: >-
  This API return the text message send to the user in order to notify driver
  distraction.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

**Note:** All text returned (title, text and buttons) are displayed according to the HMI current language.

**Note 2:** The message is returned no matter the **driver distraction** status. Look at [driving.drivingState]({{site.baseurl}}/webportal/v2/reference/list/#api-driving-drivingState) if you want to retrieve current driving distraction.
