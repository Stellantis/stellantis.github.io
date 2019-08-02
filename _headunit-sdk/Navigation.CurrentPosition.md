---
title: Car.CurrentPosition()
layout: headunit-sdk
supported:
  - 2
  - 3
  - 4
type: object
privacy: Public
---

*Navigation*

### CurrentPosition

`Navigation.CurrentPosition` is the object where are stored the informations about the current position after a successful call to `Navigation.GetCurrentPosition`.

#### Fields

- `Navigation.CurrentPosition.address`, *String*

- `Navigation.CurrentPosition.Town`, *String*

- `Navigation.CurrentPosition.City`, *String*

- `Navigation.CurrentPosition.Province`, *String* 

- `Navigation.CurrentPosition.Country`, *String*

#### Remark

>**Note :** `Navigation.GetCurrentPosition` must always be used before accessing the value stored in `Navigation.CurrentPosition`.

>**Note 2:** Some fields like `Province` are not used in some countries so its value will stay empty in such a case.

*Appeared in Software version 40.03.42.30*