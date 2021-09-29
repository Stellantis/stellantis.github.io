---
privacy: Full Private
type:
  - get
name: system.datetime
domain: system
params: none
data:
  - name: dateTime
    description: >-
      Current raw date and time according to
      [ISO-8601](https://www.w3.org/TR/NOTE-datetime): *Complete date plus
      hours, minutes, seconds and a decimal fraction of a second*
    type: string
    unit-value: 'ISO-8601: YYYY-MM-DDThh:mm:ss.sTZD'
    example: '2020-01-22T10:59:10.537Z'
short: This API allows to work with head-unit date & time.
---

**Note:** This API allows to retrive raw date & time, [settings.datetime](#api-system-datetime) takes timezone into account .
