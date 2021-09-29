---
name: system.uin
privacy: Full Private
type:
  - get
domain: car
params: none
data:
  - name: CarData
    description: Vehicle identifier (UIN) & timestamp in Base64.
    type: string
    unit-value: n/a
    example: >-
      eyJ0aV1lc3RhbXAiOiIzMDE3RTA4LTAyVDE3OjE1OjAcWiIsInVpbiI6IjAwMDAwVDBwMDAwMDAwMDAwMDAyIn0=
  - name: CarData_signature
    description: Type MIME of this response in Base64.
    type: strings
    unit-value: n/a
    example: TUlNRS1WZXJzaW9uOiAxLjANCkNvbnRlbnQtRGlz
short: This API allows to retrieve vehicle UIN. This API is an alias of **cea.uin**.
---

