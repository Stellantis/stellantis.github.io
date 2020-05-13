---
type: quick start
---


# ACCESS DATA

The API will allow you to do the following:

- `Car`: Get information about the vehicle: [VIN code](https://fr.wikipedia.org/wiki/Vehicle_Identification_Number), Fuel type, unit and level, Current speed and unit, Mileage and distance unit, Autonomy, level of battery and fuel, the driving state, the time,
- `Connectivity`: Detect the connectivity status
- `Device`: Request a popup, get hardware and software version of the system,
- `HMI`: Information on the user, UIN, language, country,
- `Media`: Information on the media: album name, artist name, current track, state of the media, type of media
- `Navigation`: Get the current position info, destination info, maneuver info, journey info, waypoint info, start new journey,
- `Phone`: Launch phone call,
- `Privacy`: Manage privacy mode of user
- `Radio`: Information on the radio: frequency, preset...
- `System`: Settings action reserved to administrative use
- `Webportal`: All the events associated to user interaction or due to server

# GETTING STARTED

You will need to contact [PSA Team](mailto:connectedcar@mpsa.com) in order to become a partner and deploy your apps on the Webportal so you should start by doing so.
The team will also be able to help you with questions you might have.

This tutorial will guide you through the creation of your Application. You can also start by downloading the base of your application directly.

<div class="buttons is-centered">
  <a class="button is-psablue is-medium" href="{{site.baseurl}}/assets/downloads/helloworld.zip" download="">
    <span class="icon is-large is-white">
    <i class="fa fa-file-download"></i>
    </span>&nbsp; &nbsp; &nbsp;Download base application
  </a>
</div>

### HTML

The HTML part of your project is conventional, you create your objects and static content.

```html
<!-- STYLES -->
<link rel="stylesheet" type="text/css" href="css/main.css">
<!-- SCRIPTS -->
<script type="text/javascript" src="../test/shared/libs/jquery/1.10.0/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>

<div id="mainContainer">
    Hello World!
</div>
```
>**Be carefull**: your app is a single page application. It mean that you must have only one html file ('index.html') in your project.

### CSS

You can customize your CSS stylesheet, here is simply an example changing the color of the text displayed.

```css
//Your normal css file
#mainContainer {
    color: blue;
}
```

### JS

Here you have the required JS for your application to function properly. You can add the functions you need to handle other events.

```javascript
//On document ready
document.addEventListener("DOMContentLoaded", function(event) {

    // Inform the parent window (applications portal) that the application is
    // loaded and ready
    window.parent.postMessage({
        'type' : 'WebPortal.onApplicationLoaded'
    }, '*');
});
```

## APP STRUCTURE 

<img src="{{site.baseurl}}/assets/images/the_structure.png" class="smallimg" />
**This is the file structure your application should use.**

Once development is finish, you have to submit your application to PSA for us to check its behavior before actually deploying it.
The structure of the file to submit is mostly free with some requirements:

- The files must be sent in a TAR archive compressed via GZIP
- The *.md5* file is required in order to perform an integrity check
- An *index.html* file must be present at the root of the project and is the starting point of the application
- The logo for the application: *icon-100x100.png* (15kB max) and *icon-136x136.png* (21kB max) must be present at the root of the project for the different screen sizes (respectively for SD devices and WHD devices).
- JavaScript functions must be executed when the DOM is ready
- It is required to add a version file in the root directory of the app, named info.json and containing the following information:

```json
{
  "artifactId": "appid",
  "name": "appname (optional)",
  "description": "appdescription (optional)",
  "version": "X.Y.Z",
  "buildDate": "YYYY-MM-DD HH:mm"
}
```

**In addition** to the package submitted, the following information must be provided separately:
+ **App name (translated if needed)** The partner must provide at least one name for its app, that can be translated into several languages if needed. The master name will be displayed if no translation was given for the language chosen by the user.
+ **Country scope** The partner must provide the list of countries where the app can be activated for customers, within the list of countries where the WebPortal is available.
+ **Brand scope** The partner must provide the list of brands for which the app can be activated for customers. Today, Peugeot, Citroën, DS, Opel and Vauxhall are available.
+ **Device scope** The partner must provide the list of devices and configurations where the app can be activated for customers. Today NACw2.1, NACw3.1 and NACw4 are available.
+ **App identifier** To be given by PSA, this App Id is mandatory as it enables us to identify the app in MQTT exchanges and in the process of display in the vehicles.
+ **MQTT partner account**

## DEBUG CONSOLE

There is no native debug console within webportal therefore, you cannot access execution errors in your code.
However, we advise setting up a debug console inside own your app during your development process. 

This is an example of debug console that you can display inside your app:

##### HTML 

```html
<div id="debug-console">
</div>
```

##### JavaScript

```js
try {
  document.getElementById(kk);
} 
catch (error) {
  var debugConsole = document.getElementById('debug-console'); 
  debugConsole.innerHTML = error;
}
```

##### CSS

```css
#debug-console {
  border: 1px solid red;
}
```

Doing so, errors will be displayed inside your app as HTML.

## VIRTUAL KEYBOARD

A virtual keyboard is available on the NAC. It is displayed on the full size of the NAC touchscreen.

![virtualKeyboard]({{site.baseurl}}/assets/images/virtualKeyboard.png)

You just have to create an HTML **input text**, once the user set the **focus** on this text field the virtual keyboard is displayed.

```html
<input type="text" />
<!-- Focus the field and the keyboard is diplayed -->
```

> **Note:** When the keyboard is being displayed, you cannot receive events.

> **Note 2:** Before *WAVE4: 42.03.06.50* / *WAVE 2: 21.08.63.40*, pre-filled text was deleted once the user set the focus in the input field. Since these versions, webportal’s virtual keyboard acts like modern webrowsers as it keeps pre-filled text in the input when the user set the focus in it.