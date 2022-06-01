---
name: settings.datetime
privacy: Full Private
type:
  - get
  - subscribe
domain: settings
params: none
data:
  - name: datetime
    description: >-
      Current date and time  according to the current time zone formated using
      [ISO-8601](https://www.w3.org/TR/NOTE-datetime): *Complete date plus
      hours, minutes, seconds and a decimal fraction of a second*
    type: string
    unit-value: 'ISO-8601: YYYY-MM-DDThh:mm:ss.sTZD'
    example: '2020-01-22T10:59:10.537Z'
textsubscribe: >-
  Subscribing to `settings.datetime` does not allow to use `tolerance` &
  `period` default [subscribe
  behavior]({{site.baseurl}}/webportal/v2/quickstart/request/#message-format).
  Indeed the event is triggered only if the date, time or timezone is changed by
  the user.
short: >-
  This API allows to work with infotainment date & time according to the current
  timezone in the HMI.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

**Note:** This API allows to retrieve date & time according to the **current timezone**. See [system.datetime](#api-settings-datetime) if you want date time without timezone.
