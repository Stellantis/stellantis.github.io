# AVAILABLE DATA

Groupe PSA WEB API are technical interfaces allowing developers to create application that includes connected vehicles data and features.

These API are scope of possibilities, but to access the data you need authorization (see [access requirements]({{site.baseurl}}/connected-vehicles/access-requirements/)).

## DATA SCOPE

A vehicle is able to subscribe *connected vehicle services*. These services are sets of data and features. Without subscribing to the relevant data scope, the API will not return the data you are looking for.

![Buy a service]({{site.baseurl}}/assets/images/services-store.jpg)

Let's take the example of TMTS (tele maintenance tele service), this *connected vehicle service* includes a scope of data related to maintenance. If a vehicle only subscribe to the TMTS service, then it will not be possible to retrieve the location of the vehicle using WEB API, indeed this data is not useful therefor not part of TMTS scope.

> **Note:** if the data you are looking for is not part of any *connected vehicle service* data scope, then it's not currently available for use.


##  DATA MINIMIZATION

*Connected Vehicle Services* are designed to achieve a specific goal. Like TMTS for maintenance or E-Remote Control for remote charging.

The scope of data of a service fit the goal that this service need to achieve. However, it includes only the data and features required to this goal.
