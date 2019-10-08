---
title: Car.ManeuverInfo()

supported:
  - 2
  - 3
  - 4
type: object
privacy: Public
---

*Navigation*

### ManeuverInfo

`Navigation.ManeuverInfo` is the object where are stored the informations about the next maneuver to be done after a successful call to `Navigation.GetManeuverInfo`.

#### Fields

- `Navigation.ManeuverInfo.Latitude`, *Number* in WGS84 Signed Decimal Degrees

- `Navigation.ManeuverInfo.Longitude`, *Number* in WGS84 Signed Decimal Degrees

- `Navigation.ManeuverInfo.nextStreetName`, *String*

- `Navigation.ManeuverInfo.Town`, *String*

- `Navigation.ManeuverInfo.City`, *String*

- `Navigation.ManeuverInfo.Province`, *String* 

- `Navigation.ManeuverInfo.Country`, *String*

#### Remark

>**Note :** `Navigation.GetManeuverInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

*Appeared in Software version 40.03.42.30*