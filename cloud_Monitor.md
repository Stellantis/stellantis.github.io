---
title: Web B2B Monitoring
layout: pageWebAPI_B2B
---
# Monitor
Throught Groupe PSA's B2B APIs you can access and browse data about your fleet of vehicle.
But moreover APIs allow you to set-up your own **events** about your fleet.
Monitor are an easy way to design events tracking patterns for one or multpile vehicles.

**Examples of monitors:**

![monitorsFeatures]({{site.baseurl}}/assets/images/monitorsFeatures.png)


**Avaibable monitors:**
- **Time trigger**: Vehicle leaving a defined area.
- **Zone Trigger**: Vehicle being use in a specify time period.
- **Time+Zone Trigger**: Time AND zone condition (ex: leaving Paris during night time).
- **Data Trigger**: Various data could also be tracked like autonomy left or engine oil temperature increasing too much.

# How it works ?

![monitorSystem]({{site.baseurl}}/assets/images/monitorSystem.png)

Once you have created a monitor, our **event engine** will continously check for your patern.

When our server are receiving data from your car our **event engine** will check if it’s needed to send notification or not. If  our event engine reconize a pattern it will send a callback to your endpoint located in your system.

If your service is unavailable you can ask us to retry a specific number of time with a specific frequency. All theses parameters are configurable.

# Configuration
![monitorSequence]({{site.baseurl}}/assets/images/monitorSequence.png)

## Configuring Monitors
You have to create a new monitor using our [dedicated endpoint]({{site.baseurl}}/cloud_list_B2B/#/Monitors/createFleetVehicleMonitor) in the api.
To configure this monitor your request need to be constructed with the following parameters:
- **retryPolicy**: none or always, maxRetryNumer, retryDelay
- **suscribe**: your URL endPoint
- **triggering**: choose between ZoneMonitor, TimeMonitor, TimeZoneMonitor, DataoMonitor

    > Be carefull: one monitor is for one fleet and one rule. Indeed you can creat multpile monitors.

## On your side
What we offer is a simple way to process a large amount of data. Althought you have to develop on your side a **dedicated endpoint** on your server able to receive our alerts.
This web server need to be configurated to read & process our alerts in order to inform you about what's happening to your vehicles in real time.

##### Preview

Want to see what it's look like ? Browse our [Preview]({{site.baseurl}}/cloud_preview_B2B).

##### Authentication

The Web API utilizes certificate authentication. Follow this step-by-step [tutorial]({{site.baseurl}}/cloud_authentication_B2B) and obtain your own certificate.
