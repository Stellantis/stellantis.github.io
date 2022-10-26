---
name: settings.language
privacy: Full Private
type:
  - get
  - subscribe
domain: settings
dataget:
  - name: language
    description: >-
      Language code according to [RFC
      3066](http://xml.coverpages.org/TexinUsingLangID.html).
    type: string
    unit-value: RFC 3066
    example: en-GB
  - name: regionSubtag
    description: Force region subtag for all languages. For example `it` becomes `IT-it`.
    type: boolean
    unit-value:
      - "true: forced region subtags"
      - "false: region subtags only when relevant"
    example: true
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
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

**Note:** Subscribing to `settings.language` does not allow to use `tolerance` & `period` default [subscribe behavior]({{site.baseurl}}/webportal/v2/application/request/#message-format). Indeed the event is triggered only if the date, time or timezone is changed by the user.
