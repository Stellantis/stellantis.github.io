---
layout: api-reference
section: webportal
subsection: v1
categorie: API Reference
title: References
name: Navigation.GetJourneyInfo()
domain: Navigation
supported:
  - 2
  - 3
  - 4
type: api
privacy: Public
---

### `Navigation.GetJourneyInfo()`

| **Description** | Calculates the estimated time of arrival and stores it inside `Navigation.JourneyInfo`.
| **Response** | *Boolean*  `True` if the value is now correctly stored in `Navigation.JourneyInfo`, else `False` if the process failed.
| **Parameter**   | *Void*

#### Fields

`Navigation.JourneyInfo` is the object where are stored the informations about the next maneuver to be done after a successful call to `Navigation.GetJourneyInfo`.

- `Navigation.JourneyInfo.estimatedTimeOfarrivalH`, *Number*
- `Navigation.JourneyInfo.estimatedTimeOfarrivalMin`, *Number*

#### Example

```javascript
if ( Navigation.GetJourneyInfo() === false ) {
	// GPS error, Navigation.JourneyInfo is empty
} else {
	var JourneyETaHours = Navigation.JourneyInfo.estimatedTimeOfarrivalH;
	var JourneyETaMinutes = Navigation.JourneyInfo.estimatedTimeOfarrivalMin;
}
```

#### Remark

>**Note:** `Navigation.GetJourneyInfo` must always be used before accessing the value stored in `Navigation.ManeuverInfo`.

*Appeared in Software version 40.03.42.30*