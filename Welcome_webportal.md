---
title: WebPortal Presentation
layout: page2
---

# About WebPortal

The WebPortal is the browser allowing users to launch authorized Web Applications directly from the media system of their car.
All the applications function on a subscription basis and their presence on the welcome page is automatically managed by the WebPortal.

The WebPortal relies on [REST API](https://restfulapi.net/) and [MQTT protocol](http://mosquitto.org/man/mqtt-7.html).

![WebPortal Schema]({{ site.baseurl }}/schema.svg)

## Visually

First of all the standard display window is 800x480 pixels.  
There's also a home button size 150x30 px located on the bottom left as well as, displayed at the top, an indicator of the current time, the current sound profile...  
So the effective space available for Apps' content is 800x425.  

When the system starts, a menu appears where the user can choose to access the Connected Apps:

![Image of Main Screen]({{ site.baseurl }}/Mainscreen_portal.png)

They then reach the main menu containing the applications they are subscribed to:

![App Wall]({{ site.baseurl }}/AppWall.png)

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

## Tutorial

A [Quick Start guide]({{ site.baseurl }}/webportal_QuickGuide/) is provided to help you get started.

## API Documentation

The complete API Documentation can be found [here]({{ site.baseurl }}/webportal_list/).