---
name: technical.userId
privacy: Geolocation Private
type:
  - get
  - subscribe
domain: technical
params: none
data:
  - name: userId
    description: User identifier (user ID) sent by the smartdevice.
    type: string
    unit-value: n/a
    example: 7473a16f-9f4f-46c9-85a7-5291e35f1ba0
short: This access the user identifier (user ID) sent by the smartdevice..
---

**Note:** In order for this API to work as intended, the smartdevice shall initially  authentified the user and retrieved its unique identifier from offboard PSA database.
This API gives access to the result of this authentication process done by the smartdevice itself (mostly but not only, by a mobile phone application).
