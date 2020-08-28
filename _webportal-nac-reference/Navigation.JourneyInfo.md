---
title: Car.JourneyInfo()
supported:
  - 2
  - 3
  - 4
type: object
privacy: Public
---

*Navigation*

### JourneyInfo

`Navigation.JourneyInfo` is the object where are stored the informations about the next maneuver to be done after a successful call to `Navigation.GetJourneyInfo`.

#### FIELDS

- `Navigation.JourneyInfo.estimatedTimeOfarrivalH`, *Number*

- `Navigation.JourneyInfo.estimatedTimeOfarrivalMin`, *Number*

#### REMARK

>**Note:** `Navigation.GetJourneyInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.

*Appeared in Software version 40.03.42.30*