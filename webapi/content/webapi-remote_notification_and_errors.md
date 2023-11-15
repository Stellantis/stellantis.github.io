
As seen in the [about page]({{site.baseurl}}/webapi/{{page.subsection}}/about/#article), notification messages are sent by Stellantis servers in order to notify the progress of a remote action command.

## Being Notified

When a remote is sent, the callback server will receive one or several **notifications** in order to inform about the progress of the action. These notifications are also available through the REST API using the [GET Remotes]({{site.baseurl}}/webapi/{{page.subsection}}/api-reference/references/{% if page.subsection == "b2c" %}#operation/getRemoteRequestsForVhl{% elsif page.subsection == "b2b" %}#operation/getRemoteRequestsForVhl{% endif %}) endpoint.

## Notifications Details

The notifications are sent in order to inform about the possibility to trigger this action, and the status of the vehicle:
- **Performing availability checks**: first, it will be checked if this remote action is allowed in this context, and if the state of the vehicle is compatible with the request. In these cases the notification type will be `type: Pending`.
- **Success of the Action**: Then, if the previous checks are passed, the remote action will be sent to the vehicle. Depending on the success of the action, the callback server will receive notifications `type: Done` or `type: Failed`.

## Notification Workflow

<img src="{{site.baseurl}}/assets/images/remote-notification-error-sequence.svg" alt="remote-notification-error-sequence" style="width: 750px" >

## Notification Format

```json
  "eventStatus": {
    "type": "[Pending, Done]",
    "status": {
      "RemoteDoneEventStatus": "[Success, AlreadyDone, Failed]",
      "RemotePendingEventStatus": 
          "[Accepted, WakingUpVehicle, CheckingVehicle, 
           SentToVehicle, VehicleBatteryChargeTooLow,TooManyWakeUpsOverMonth]",
    },
    "failureCause": 
      "[GeneralError, VehicleError, WrongCommand, VehicleConnectionTimeout,
       MissingRights, NotPossibleDueToVehicleBatteryLevel,
       NotPossibleDueToVehiclePrivacyLevel, TooManyWakeUpsOverMonth,
       TooManyRequestInShortTime, SameActionInProgress,
       NotPossibleDueToVehicleStolenState, VehicleInUse, TooManyRequestSent,
       DoorsOpen, VehicleErrorOrCidInside, CidInside, 
       ExternalChargingSystemError, VehicleChargingSystemError, VehicleIsNotLocked]"
  }
```

- `RemoteDoneEventStatus`: This field is returned if *type: Done*.
- `failureCause`: This field is returned if *type: Done & RemoteDoneEventStatus: Failed*.
- `RemotePendingEventStatus`: This field is returned if *type: Pending*.


This page describes only the *eventStatus object of the notification, the full-notification format is available on the [server specification]({{site.baseurl}}/webapi/{{page.subsection | downcase}}/remote/{% if page.subsection == "b2b" %}webhook{% elsif page.subsection == "b2c" %}server-specification{% endif %}/#/article) page.

> **Info:** In the case of sending a remote navigation (RemoteNavigation), the following event will **NOT** be received: `"RemotePendingEventStatus": "Accepted"` & `"RemotePendingEventStatus": "WakingUpVehicle"`.

### Messages Description

- ***Vehicle Sleep:*** if the vehicle is stopped, it stays awake during 3 min, each time a message is sent to the vehicle, it will stay awake 3 min more. Otherwise, if a vehicle is sleeping, a command will be sent to awake it. In this case, `WakingUpVehicle` notification will be received on the callback server, the delay to apply the remote action could be longer.

- ***Too Many Wake Ups:*** In order to preserve the vehicle battery health, it is not allowed to awake a vehicle too often. That's why a monthly limit is set. If the limit is reached, it will not be possible to send a wake up remote to vehicles until the end of the month, and a notification  `TooManyWakeUpsOverMonth` will be received on the callback server. 

- ***Time Out:*** in case the vehicle is not connected to the internet, it is not possible that it receives the remote action. In this case an error notification will be received on the callback server until the vehicle is available again.

- ***Already Done***: if the vehicle was already in the status requested by the remote, the server will receive a notification `AlreadyDone`.

- ***Charge Too Low:*** in case of an electric vehicle, the system will preserve the vehicle battery life by not sending remote action when the charge level is too low. In this case the callback server will receive a `VehicleBatteryChargeTooLow` or a `NotPossibleDueToVehicleBatteryLevel` notification.


### State Machine

![remote-notification-error-flowchart]({{site.baseurl}}/assets/images/remote-notification-error-flowchart.svg)