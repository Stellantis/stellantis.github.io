Building an **Application for WebPortal** is made easy using web technologies, indeed Apps runs in an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) in the embedded browser!

- 👨🏽‍💻 Build user interface using HTML, CSS and JS. 
- 🚗 Access [vehicle APIs]({{site.baseurl}}/webportal/{{page.subversion}}/api-reference/list/#article).
- 🌏 [MQTT](https://mqtt.org/) is available as message queuing service.

> **Head Unit version:** remember that they are 2 different version of the vehicle head unit, they are not providing the same vehicle APIs. However this tutorial explains how to build **hybrid *Apps***.
- **NAC** were produced between 2017 and 2021, supports ES5 & CSS2.
- **IVI** are produced since mid-2021, supports ES6 & CSS3.

## Don't work alone!

You will need to **contact** [Stellantis Team]({{site.baseurl}}/contact-us/) in order to develop and deploy your Apps on WebPortal, so you should start by doing so! App need to be [validated]({{site.baseurl}}/webportal/{{page.subsection}}/overview/app-validation/#article) before publication. The team will be able to help you with questions you might have ;)


## App Structure & Package

This tutorial will guide you through the creation of your Application. You can also download this demo App as an example.

<div class="buttons is-centered">
  <a class="button is-psablue is-medium" href="{{site.baseurl}}/assets/downloads/demoApp-0.0.1.tar.gz" download="">
    <span class="icon is-large is-white">
    <i class="fa fa-file-download"></i>
    </span>&nbsp; &nbsp; &nbsp;Download demo App
  </a>
</div>

This is the **file structure** your application should use:


```
app_<appId>-v<X.Y.Z>_<YYYYMMDD>.md5
app_<appId>-vX.Y.Z_YYYYMMDD.tar.gz
│
└───web/
    └───apps/
    │   └───<appId>/
    │       │   info.json
    │       │   index.html (webportal is a single page app)
    │       │   main.js
    │       │   main.css
    │       │   
    │       └───js/
    │       │      other.js
    │       │
    │       └───css/
    │       │      other.css
    │       │
    │       └───icons/
    │       │      icon-<brand>-100x100.png  (v1 SD screens)
    │       │      icon-<brand>-136x136.png  (v1 HD screens)
    │       │      icon-ds-160x160.png       (v2 DS only)
    │       │      icon-citroen-190x190.png  (v2 Citroën only)
    │       │      icon-<brand>-128x128.png  (v2 all other brands)
    │       │
    │       └───img/
    │              asset.png
    │
    └───media/
        └───<appId>/
               audio.mp3
               art.jpg
```

In order to deliver an App, please submit the following package to Stellantis for us to check its behavior before actually deploying it, see [App validation]({{site.baseurl}}/webportal/{{page.subsection}}/overview/app-validation/#article).
The file structure should follow these requirements:
- **package**: The files must be sent in a TAR archive compressed via GZIP, check out the [naming section](#naming-and-md5-file).
- **md5**: The *.md5* file is required in order to perform an integrity check, see [md5 file requirements](#naming-and-md5-file)
- **info.json**: application [manifest](#app-manifest).
- **index.html**: file must be present at the root of the project and is the starting point of the application, webportal application are single page app!
- **css:** [css main file](#css-maincss) should be located at the root of the project, other *css* files are located in the *css* folder. *In WebPortal v1 CSS2 is supported, in WebPortal v2 CSS3 is supported.*
- **javascript** [js main file](#javascript-mainjs) should be located at the root of the project, other *javascript* files are located in the *js* folder. *In WebPortal v1 ES5 is supported, in WebPortal v2 ES6 is supported.*
- **icons**: they must be present in the different screen sizes, [check out the manifest](#app-manifest).
- **img:** folder for image files, if your App is storing a lot of offline data, you should use the *media* folder.
- **media:** this folder is required only for App storing a large quantity of static media files, otherwise, media can be stored in *web/apps/<appId&gt;*.
- **adding folders:** the previous file structure cannot be modified but it is possible to add folders if necessary.

> **App loading**: Optimize your code and consider minification, heavy App means long downloading time.

### App manifest

The Application package should contain a manifest **info.json**:

```js
{
  "artifactId": "<appid>",
  "name": "<appname (optional)>",
  "description": "<appdescription (optional)>",
  "version": "X.Y.Z",
  "buildDate": "YYYY-MM-DD HH:mm",
  "icons": {
    /* Brand specific icon (optionnal)
     "<brand-code>": {
       "100": "icon/icon-<brand>-100x100.png", 
       "136": "icon/icon-<brand>-136x136.png", 
       "160": "icon/icon-<brand>-160x160.png", 
       "190": "icon/icon-<brand>-190x190.png", 
       "128": "icon/icon-<brand>-128x128.png", 
    }, */
    // Default icon
    "*": {
      "100": "icon/icon-100x100.png", // (v1 SD screens)
      "136": "icon/icon-136x136.png", // (v1 HD screens)
      "160": "icon/icon-160x160.png", // (v2 DS only)
      "190": "icon/icon-190x190.png", // (v2 Citroën only)
      "128": "icon/icon-128x128.png", // (v2 all other brands)
    },
}
```

Where **&lt;brand-code&gt;**:
- Peugeot: **AP**
- Citroen: **AC**
- DS: **DS**
- Opel: **OP**
- Vauxhall: **VX**


### Naming and md5 file

- **File name**:
    - package filename: `app_<appId>-v<X.Y.Z>_<YYYYMMDD>.tar.gz`
    - integrity filename: `app_<appId>-v<X.Y.Z>_<YYYYMMDD>.md5`
- **File content**:
  - must be in the following format: <br> `<MD5_hash_lowercase> app_<appId>-v<X.Y.Z>_<YYYYMMDD>.tar.gz`
  - must be newline terminated: `\n`

##### Example

For a package: 
  - in version **1.2.6**,
  - released on the **17th January 2022**,
  - with appId is **demoApp**

Package name will be: `app_demoApp_v1.2.6_20220117.tar.gz`, and MD5 file content could be:
 
```
098f6bcd4621d373cade4e832627b4f6 app_demoApp_v1.2.6_20220117.tar.gz

```

## HTML (index.html)

The HTML part of your App is located in the **index.html** file. 

Webportal Apps being Single Page Application, this file is the only html file in the project, you should not use hyperlinks to browse another html file in your App. In order to make the content of your App dynamic, use [javascript](#javascript-jsmainjs).

> **jQuery** v1.10.0 library is used for webportal purpose and available offline for App development.

```html
<html>
    <meta charset="UTF-8">
    <head>
      <!-- STYLES -->
      <link rel="stylesheet" type="text/css" href="css/main.css">
      <!-- SCRIPTS -->
      <script type="text/javascript" src="/shared/libs/jquery/1.10.0/jquery.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    </head>
    <body>
      <div id="my-app">
          Hello World!
      </div>
    </body>
</html>
```

## CSS (main.css)

CSS file should manage your App style. Using media query it's possible to target a specific head unit platform. 

> **CSS Version:** Webportal **v1 supports CSS2** which does not include features like flex box. WebPortal **v2 supports CSS3** but you might want to stick to CSS2 if you are building a hybrid Application.

```css
/* All devices */
#my-app {
    color: blue;
}

/* Only for Webportal v1 SD*/
@media(max-width:1000px){
}

/* Only for Webportal v1 HD*/
@media(min-width:1000px) and (max-width:1500px){
}

/* Only for Webportal v2*/
@media(min-width:1500px){
}

```

## JavaScript (main.js)

Here is the minimum JavaScript code for your application to function properly.

> **JS Version:** Webportal v1 only supports ES5, WebPortal v2 supports ES6. Check-out [demo app](#app-structure--package) for an example of hybrid application.

```javascript
// You should execute javascript only when the DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  {% if page.subsection == "v1" %}// Mandatory: Inform the infotainment
  // system that your App is ready
  window.parent.postMessage({
    'type' : 'WebPortal.onApplicationLoaded'
  }, '*');

  // Example of vehicle API:
  // display vehicle VIN
  var myAppElement = document.getElementById("my-app");
  myAppElement.textContent = "Vehicle VIN: " + Car.GetVINCode();
  {% elsif page.subsection == "v2" %}(async () => {
    // Initializing the SDK is required
    // in order to use vehicles APIs
    const {default : IDPClient} = await import('/front-ivi/online/sdk/WebPortal_IDP_Client.js');
    window.webportal = new IDPClient();

    // Mandatory: Inform the infotainment
    // system that your App is ready
    webportal.set("app.loadingStatus", "running");
    
    // Example of vehicle API:
    // display vehicle VIN
    webportal.get("configuration.VIN")
      .then((message) => {
        let myAppElement = document.getElementById("my-app");
        myAppElement.textContent = "Vehicle VIN: " + message.data;
      })
  })(){% endif %}
  
});
```

## Vehicle APIs

{% if page.subsection == "v1" %}

As seen in the [JavaScript section](#javascript-jsmainjs) you can interact with the vehicle using webportal. They are **different type of vehicle APIs**:

```js
/* Method: request data */
var CarAutonomy = Car.GetAutonomy();
/* Method: interact with the vehicle */
Navigation.LaunchGuidance("home", 48.866669, 2.33333);

/* Event: subscribe to events */
Media.Audio.addEventListener("audioAvailable", function(){
  alert("An audio source is connected.");
});

/* Inform the infotainment system when your app is */
/* loaded (this API is the only one using postmessage) */
window.parent.postMessage({'type':'WebPortal.onApplicationLoaded'}, '*');
```

{% elsif page.subsection == "v2" %}

As seen in [JavaScript](#javascript-jsmainjs) you can interact with the vehicle using WebPortal SDK.

First of all, we should initialize the SDK:

```js
  (async () => {
    const {default : IDPClient} = await import('/front-ivi/online/sdk/WebPortal_IDP_Client.js');
    window.webportal = new IDPClient();
  })()
```

Then vehicle API are available using the name given to the SDK. They are **3 different type of vehicle APIs**:

```js
/* GET: request data*/
webportal.get()

/* SET: intercat with the vehicle  */
webportal.set()

/* SUBSCRIBE: subscribe to events */
webportal.subscribe()
```

{% capture get_tag %}
<span class="tag is-small" style="background: #61affe; color: white; font-weight: bold">GET</span>
{% endcapture %}

{% capture set_tag %}
<span class="tag is-small" style="background: #4aad81; color: white; font-weight: bold">SET</span>
{% endcapture %}

{% capture subscribe_tag %}
<span class="tag is-small" style="background: #be9046; color: white; font-weight: bold">SUBSCRIBE</span>
{% endcapture %}

### Method Get

{{get_tag}} method allows **requesting** single time data.

This method **executes the callback function only once**, when the request has been resolved successfully or is in error. The **callback message** includes outputted data or info about the error.

**Example:** the following API will return the vehicle total mileage.

{% capture getVinRequest  %}
```js
webportal.get(
  /* api name */
  "configuration.VIN",
  /* parameters */
    null
)
/* callback for `REPLY` messages */
.then((message) => {
  if (message.status === 200) {
    /* handle `REPLY` success */
  }
  else { /* handle `REPLY` error */ }
})
```
{% endcapture %}

{% capture getVinResponse  %}
```js
// --- format of the `REPLY` message ---

{
  "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
  "type": "REPLY",
  "api": "configuration.VIN",
  "status": 200,
  "statusText": "OK", 
  "data": "VF7NCRHE8AY539138"
}
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name="webportalv2"
  custom_code_sample=true
  type="get"
  name="configuration.VIN"
  sdk=getVinRequest
  reply=getVinResponse
%}

Check out message [callback message format](#callback-message-format).

### Method Set

{{set_tag}} method allows **changing** a value or set up an action.

This method **executes the callback function only once**, when the request has been resolved successfully or is in error. The **callback message** might be empty or includes outputted data or info about the error.

**Example:** the following API will modify the consumption unit in the vehicle HMI.

{% capture setConsumptionUnitRequest  %}
```js
webportal.set(
  /* api name */
  "configuration.consumptionUnit",
  /* parameters */
  0
)
/* callback for `REPLY` messages */
.then((message) => {
  if (message.status === 200) {
    /* handle `REPLY` success */
  }
  else { /* handle `REPLY` error */ }
})
```
{% endcapture %}

{% capture setConsumptionUnitResponse  %}
```js
// --- format of the `REPLY` message ---

{
  "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
  "type": "REPLY",
  "api": "configuration.consumptionUnit",
  "status": 200,
  "statusText": "OK"
}
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name="webportalv2"
  custom_code_sample=true
  type="set"
  name="configuration.consumptionUnit"
  sdk=setConsumptionUnitRequest
  reply=setConsumptionUnitResponse
%}

Check out message [callback message format](#callback-message-format).

### Methode Subscribe

{{subscribe_tag}} allows to react every time an **vehicle event is triggered**.

This method executes the callback function **once** when the request has been taken into account or is in error. Then, the callback function is executed **each time** the event is triggered. When the subscription fails, only one callback is executed.

The **acknowledgment callback message** (*'type': 'RESULT'*) does not include outputted data, but can include info in case of error. All **event message callback** (*'type': 'NOTIFY'*) include outputted data or info about error.

**Example:** the following API will execute a callback function every time the visibility of the App change.

{% capture subVisibilityStateRequest  %}
```js
webportal.subscribe(
  /* api name */
  "app.visibilityState",
  /* parameters */
    null,
  /* callback for `NOTIFY` messages */
  async (notifyMessage) => {
    if (notifyMessage.status === 200) {
      /* handle `NOTIFY` response */
    }
    else { /*  handle `NOTIFY` error  */ }
  }
)
/* callback for `REPLY` messages */
.then((message) => {
  if (message.status === 200) {
    /* handle `REPLY` success */
  }
  else { /* handle `REPLY` error */ }
})
```
{% endcapture %}

{% capture subVisibilityStateNotify  %}
```js
// --- format of the `NOTIFY` message ---
// type: event message about the subscription
// reception: each time the conditions of the subscription are met
// contains outputed data: yes
{
  "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
  "type": "NOTIFY",
  "api": "app.visibilityState",
  "status": 200,
  "statusText": "OK", 
  "data": {
    "<appId>": {
      "visibilityState": "hidden"
    }
  } 
}
```
{% endcapture %}

{% capture subVisibilityStateResponse  %}
```js
// --- format of the `REPLY` message ---
// type: acknowledge the status of the subscription
// reception: only once after the subscription request
// contains outputed data: no
{
  "id": "7372c16f-5f2f-42c9-84a7-5490e35f1be0",
  "type": "REPLY",
  "status": 200,
  "statusText": "OK"
}
```
{% endcapture %}

{% 
  include api-reference-code-sample.html
  sdk_name="webportalv2"
  custom_code_sample=true
  type="subscribe"
  name="app.visibilityState"
  sdk=subVisibilityStateRequest
  reply=subVisibilityStateResponse
  notify=subVisibilityStateNotify
%}

Check out message [callback message format](#callback-message-format).

### Callback Message Format

Name| Value Type|Value|Description
-|-|-|-
**id**|*string* |n/a |This is the unique Id of the request.
**type**|*Enum of strings* | GET, SET or SUBSCRIBE | Type of response message. 
**api**|*string* |n/a| API Name, [here]({{site.baseurl}}/webportal/v2/api-reference/list/#article) is a list of all vehicle APIs.
**status**|*int* | 200 or other code | This code inform you if the status of your request is OK **(200)** or not (other codes). 
**statusText**|*string* | n/a| This is a message coming with **status** code.
**data**|*string* or *object* |n/a| This field is where you will receive the data of your request.

<style>
    .api-type .api-verb-suscribe, .api-type .api-verb-set, .api-type .api-verb-get {
        display: flex;
        justify-content: space-around;
        height: 2.3em !important;
        font-size: 1.25rem !important;
        
    }
    .api-type .api-verb-suscribe .icon i, .api-type .api-verb-set .icon i, .api-type .api-verb-get .icon i {
        margin-left: .5rem;
    }
    .api-type {
        cursor: default;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: center;
        
    }
</style>

{% endif %}


