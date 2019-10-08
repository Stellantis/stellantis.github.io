---
layout: doc-article
permalink: /webportal/
section: webportal
title: Presentation
---

<a href="https://github.com/GroupePSA/groupepsa.github.io/tree/master/{{ page.path }}" class="button is-link is-outlined is-pulled-right" target="_blank" title="Edit this page on GitHub">
    <i style="font-size: 1.6rem" class="fab fa-2x fa-github  is-white"></i> 
    &nbsp; Edit Page
</a>

# About WebPortal

![Image of Main Screen]({{ site.baseurl }}/assets/images/WebPortal_pic.png)

The WebPortal is the browser allowing users to launch authorized Web Applications directly from the media system of their car.
All the applications function on a subscription basis and their presence on the welcome page is automatically managed by the WebPortal.

The WebPortal relies on [REST API](https://restfulapi.net/) and [MQTT protocol](http://mosquitto.org/man/mqtt-7.html).

![WebPortal Schema]({{ site.baseurl }}/assets/images/schema.svg)

# Homescreen
When the system starts, a menu appears where the user can choose to access the Connected Apps:

![Image of Main Screen]({{ site.baseurl }}/assets/images/Mainscreen_portal.png)

They then reach the main menu containing the applications they are subscribed to:

![App Wall]({{ site.baseurl }}/assets/images/AppWall.png)


## Screen size
Usually in-board screen is located on the dashboard of the car between driver and passenger.

There are 3 differents screen resolutions depending on car model and generation.

The screen is divided in 3 areas: one is for your app while two others areas are dedicated to car system infos.
Here is actual available screen size:
- SD = 800 x 363 px
- HD = 1280 x 582 px
- WHD = 1280 x 720 px

![screen-res]({{ site.baseurl }}/assets/images/webportal-screen-res.png)


## Important information

The WebPortal will manage resources for your application to have access to data regarding the Car or the media.
To start deploying your Application, you have to create the html, css and js files and send them to PSA for validation first.

Using the provided WebPortal API your App will be able to get informations about :
- Radio : the current channel, the text displayed...
- Navigation : the position, the destination, important milestones...
- Privacy : the preferences of the user regarding their privacy
- Car : the speed, the autonomy of the car...

>Some of the functionnalities are restricted and so may require special permission from PSA in order to be used in your application.

## Requirements

Knowledge of :
- MQTT protocol
- HTML5 window.postMessage APIs
- JSON Serialization format

## NAC - Connected Navigation System

The NAC, from the french "NAvigation Connectée" - Connected Navigation, is the system on which the WebPortal is running.  

There exists 3 different generations of the NAC each new one coming with its own new functionnalities :  

**NAC wave 2.1** - using [QtWebKit 5.2.1](http://download.qt.io/archive/qt/5.2/5.2.1/submodules/qtwebkit-opensource-src-5.2.1.tar.gz)  
based on WebKit from July 2013 (r153112).

**NAC wave 3** - using [QtWebKit 5.5.0](http://download.qt.io/archive/qt/5.5/5.5.0/submodules/qtwebkit-opensource-src-5.5.0.tar.gz)  
based on the upstream trunk subversion revision 153112.

**NAC wave 4**

## List of commercialised Software versions

### Wave 2

| Version | Release Date|
|----|----|
|5.15.45.32||
|21.07.16.32||
|21.07.67.32| 05/03/2019|


### Wave 3

| Version | Status|
|----|----|
|30.05.50.42||
|31.08.05.86||
|31.09.46.62||


### Wave 4

| Version | Status|
|----|----|
|40.03.34.52| 18/09/2018|
|40.03.44.52||
|40.04.04.24| 07/02/2019|


## Tutorial

A [Quick Start guide]({{ site.baseurl }}/webportal/quick-start/) is provided to help you get started.

## API Documentation

The complete API Documentation can be found [here]({{ site.baseurl }}/webportal/reference/).
