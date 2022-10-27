---
name: engine.keyCarPosition
privacy: Geolocation Private
domain: engine
type:
  - get
  - subscribe
params: none
data:
  - name: keyCarPosition
    description: Contact position of the vehicle keys.
    type: int
    unit-value:
      - 0 = Stop
      - 1 = Contact
      - 2 = Starting
      - 3 = Free
    example: 1
short: This API allows to retrieve the key contact position.
layout: api-reference
section: webportal
subsection: v2
categorie: API Reference
---

