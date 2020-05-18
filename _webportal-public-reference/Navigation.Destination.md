---
title: Car.Destination()
supported:
  - 2
  - 3
  - 4
type: object
privacy: Public
---

*Navigation*

### Destination

`Navigation.Destination` is the object where are stored the informations about the destination after a successful call to `Navigation.GetDestination`.

#### FIELDS

- `Navigation.Destination.Latitude`, *Number* in WGS84 Signed Decimal Degrees

- `Navigation.Destination.Longitude`, *Number* in WGS84 Signed Decimal Degrees

- `Navigation.Destination.address`, *String*

- `Navigation.Destination.Town`, *String*

- `Navigation.Destination.City`, *String*

- `Navigation.Destination.Province`, *String* 

- `Navigation.Destination.Country`, *String*

#### REMARK

>**Note:** `Navigation.GetDestination` must always be used before accessing the value stored in `Navigation.Destination`.

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

*Appeared in Software version 40.03.42.30*