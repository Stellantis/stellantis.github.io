---
name: settings.language
privacy: Full Private
type:
  - get
  - subscribe
domain: settings
params: none
dataget:
  - name: language
    description: >-
      Language code according to [RFC
      3066](http://xml.coverpages.org/TexinUsingLangID.html).
    type: string
    unit-value: RFC 3066
    example: en-GB
datasubscribe:
  - name: old
    description: >-
      Prevous selected language code according to [RFC
      3066](http://xml.coverpages.org/TexinUsingLangID.html).
    type: string
    unit-value: RFC 3066
    example: en-GB
  - name: new
    description: >-
      New selected language code according to [RFC
      3066](http://xml.coverpages.org/TexinUsingLangID.html).
    type: string
    unit-value: RFC 3066
    example: fr-FR
short: This API allows read the HMI configured language.
---

**Note:** Subscribing to `settings.language` does not allow to use `tolerance` & `period` default [subscribe behavior]({{site.baseurl}}/webportal/v2/quickstart/request/#message-format). Indeed the event is triggered only if the date, time or timezone is changed by the user.
