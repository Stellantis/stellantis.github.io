
## Alerts: Response Example  

```json
"alerts": [
    {
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "_links": { "self": { }, "vehicle": { }, "position": { }, "trips": { } },
        "label": "string",
        "id": "string",
        "active": true,
        "type": "alertOilPressure",
        "severity": "Information",
        "startedAt": "2019-08-24T14:15:22Z",
        "endAt": "2019-08-24T14:15:22Z",
        "startPosition": { "type": "Feature", "geometry": { }, "properties": { } },
        "endPosition": { "type": "Feature", "geometry": { }, "properties": { } }
    }
]
```

### Details

Name|Type|Example|Description|
-|-|-|-|-
createdAt |`string` |`2019-08-24T14:15:22Z`| Date of creation expressed using  [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format.
updatedAt |`string` |`2019-08-24T14:15:22Z`| Date of update expressed using  [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format.
_links|`object`| ⨯| URLs pointing to various linked ressources in the API.
id|`string`|  ⨯| Unique ID of the Alert.
active|`boolean`|`true`| Indicates if the Alert is currently active or not.
type|`string`|`alertOilPressure`| The label that describes what happened to raise this alert.
severity|`Enum of strings`|`Information`| `Information`: Better to fix but it is operating accurately.<br>`Warning`: Should fix it asap.<br> `Critical`: Starting prohibited without repair.
startedAt |`string` |`2019-08-24T14:15:22Z`| Alert's triggering date expressed using [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format.
endAt |`string` |`2019-08-24T14:15:22Z`| Alert's ending date expressed using [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format.
startPosition|`object`| ⨯| Position where the Alert was triggered.
endPosition|`accept`| ⨯| Position where the Alert ends.


