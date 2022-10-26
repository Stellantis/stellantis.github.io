---
name: navigation.destinationReached
privacy: Public
type:
  - subscribe
domain: navigation
params: none
data:
  - name: navRequestId
    description: Uniq ID of this navigation.
    type: int
    unit-value: identifier
    example: '42'
  - name: destinationReachedAt
    description: >-
      Timestamp (second, UTC timezone) expressing the time when the destination
      has been reached. If `null`, the navigation has been stoped without
      reaching the destination.
    type: int
    unit-value: timestamp
    example: '1577833200'
short: This API allows to work with reached navigation event.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

