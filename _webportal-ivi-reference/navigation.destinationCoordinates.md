---
name: navigation.destinationCoordinates
privacy: Public
type:
  - get
  - subscribe
domain: navigation
params: none
data:
  - name: coordinates
    description: >-
      Array of coordinates, last one is the destination, the others are
      waypoints.
    type: Object
    fields:
      - name: longitude
        description: Current longitude of the vehicle.
        type: number
        unit-value: n/a
        example: 8.74301
      - name: latitude
        description: Current latitude of the vehicle.
        type: number
        unit-value: n/a
        example: 8.74301
data_example: |-
  [
      // Waypoint n°1 (Vigo, Spain)
      {
          "latitude": 42.3933508502848,
          "longitude": -8.72297033825389
      },
      // Waypoint n°2 (Paris, France)
      {
          "latitude": 48.895069010883354,
          "longitude": 2.3453705580761044
      },
      // Waypoint n°3 (Rüsselsheim, Germany)
      {
          "latitude": 50.10911076628903,
          "longitude": 8.42731739843672
      },
      // Destination (Turin, Italy)
      {
          "latitude": 45.1474698617253,
          "longitude": 7.691179283428212
      }
    ]
textget: 'If no active guidance, data should be an empty array : `''data'': []`.'
textsubscribe: >-
  This event is triggered when the waypoints or destination are changed AND when
  the navigation destination is reached.


  If destination is reached, data should be an empty array : `'data': []`.
short: >-
  This API allows to retrieve list of waypoints & destination's coordinates of
  the current navigation.
---

