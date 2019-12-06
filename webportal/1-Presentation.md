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

# ABOUT WEBPORTAL

![Image of Main Screen]({{ site.baseurl }}/assets/images/WebPortal_pic.png)

The WebPortal is the browser allowing users to launch authorized Web Applications directly from the media system of their car.
All the applications function on a subscription basis and their presence on the welcome page is automatically managed by the WebPortal.

The WebPortal relies on [REST API](https://restfulapi.net/) and [MQTT protocol](http://mosquitto.org/man/mqtt-7.html).

![WebPortal Schema]({{ site.baseurl }}/assets/images/schema.svg)

# HOMESCREEN
When the system starts, a menu appears where the user can choose to access the Connected Apps:

![Image of Main Screen]({{ site.baseurl }}/assets/images/Mainscreen_portal.png)

They then reach the main menu containing the applications they are subscribed to:

![App Wall]({{ site.baseurl }}/assets/images/AppWall.png)


## SCREEN SIZE
Usually in-board screen is located on the dashboard of the car between driver and passenger.

There are 3 differents screen resolutions depending on car model and generation.

The screen is divided in 3 areas: one is for your app while two others areas are dedicated to car system infos.
Here is actual available screen size: **SD** = 800 x 363 px ; **HD** = 1280 x 582 px ; **WHD** = 1280 x 620 px.

**Legend**

<span class="verb get" style="background-color: grey">&nbsp;Grey&nbsp;</span> : Total screen size.


<span class="verb get" style>&nbsp;Blue&nbsp;</span> : Part of the screen dedicated to the infotainment sytem.


<span class="verb post" style="background-color:#92D050">Green</span> : Part of the screen avaible for your app.

**Standard-Definition**
![screen-res-sd]({{site.baseurl }}/assets/images/webportalPresentationScreenSD.png)

**High-Definition**
![screen-res-hd]({{site.baseurl }}/assets/images/webportalPresentationScreenHD.png)

**Wide High-Definition**
![screen-res-whd]({{site.baseurl }}/assets/images/webportalPresentationScreenWHD.png)

## IMPORTANT INFORMATION

The WebPortal will manage resources for your application to have access to data regarding the Car or the media.
To start deploying your Application, you have to create the html, css and js files and send them to PSA for validation first.

>**Be carefull**: your app is a single page application. It mean that you must have only one html file ('index.html') in your project.

Using the provided WebPortal API your App will be able to get informations about :
- Radio : the current channel, the text displayed...
- Navigation : the position, the destination, important milestones...
- Privacy : the preferences of the user regarding their privacy
- Car : the speed, the autonomy of the car...

>Some of the functionnalities are restricted and so may require special permission from PSA in order to be used in your application.

## REQUIREMENTS

Knowledge of :
- MQTT protocol
- HTML5 window.postMessage APIs
- JSON Serialization format

## CONNECTED NAVIGATION SYSTEM

The NAC, from the french "NAvigation Connectée" - Connected Navigation, is the system on which the WebPortal is running.  

There exists 3 different generations of the NAC each new one coming with its own new functionnalities :  

**NAC wave 2.1** - using [QtWebKit 5.2.1](http://download.qt.io/archive/qt/5.2/5.2.1/submodules/qtwebkit-opensource-src-5.2.1.tar.gz)  
based on WebKit from July 2013 (r153112).

**NAC wave 3** - using [QtWebKit 5.5.0](http://download.qt.io/archive/qt/5.5/5.5.0/submodules/qtwebkit-opensource-src-5.5.0.tar.gz)  
based on the upstream trunk subversion revision 153112.

**NAC wave 4**- using [QtWebKit 5.5.0](http://download.qt.io/archive/qt/5.5/5.5.0/submodules/qtwebkit-opensource-src-5.5.0.tar.gz)  
based on the upstream trunk subversion revision 153112.

## SOFTWARE VERSIONS

### WAVE 2
{% assign arrowUp='<span class="icon has-text-success"><i class="fas fa-arrow-up"></i></span>'%}
{% assign arrowDown='<span class="icon has-text-danger"><i class="fas fa-arrow-down"></i></span>'%}
{% assign equals='<span class="icon "><i class="fas fa-equals"></i></span>'%}

SW version	| Percentage of vehicles| Trend of use
-|-|-
21.07.16.32_NAC-r0	|38,24%|	{{arrowDown}}
10:90:42	|12,45%|	 {{arrowDown}}
10:47:34	|11,60%|	 {{arrowDown}}
21.07.67.32_NAC-r0|	8,30%|	{{arrowUp}}
10:82:12	|6,37%	| {{arrowDown}}
10:68:24	|5,05%	| {{arrowDown}}
10:62:54	|2,38%	| {{arrowDown}}
10:48:22	|0,72%	| {{arrowDown}}
10:78:22	|0,69%	| {{arrowDown}}
10:62:52	|0,04%	| {{arrowDown}}
10:65:32	|0,01%	| {{equals}}

### WAVE 3

SW version	| Percentage of vehicles | Trend of use
-|-|-
31.08.05.86_NAC-r0|	3,48%|	 {{arrowDown}}
10:50:42|	1,14%	| {{arrowDown}}
31.08.05.84_NAC-r0	| 0,02%	| {{arrowDown}}
31.09.43.12_NAC-r0|	0,02% |	{{equals}}
10:41:52|	0,01%	|


### WAVE 4

SW version	| Percentage of vehicles| Trend of use
-|-|-
42.01.21.42_NAC-r0 |	0,05%	|
40.04.12.42_NAC-r0	| 0,01%	|


## TUTORIAL

A [Quick Start guide]({{ site.baseurl }}/webportal/quick-start/) is provided to help you get started.

## API DOCUMENTATION

The complete API Documentation can be found [here]({{ site.baseurl }}/webportal/reference/).
