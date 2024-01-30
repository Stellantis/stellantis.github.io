## 👩🏽‍💻 Development Process

To start the development of a WebPortal Application, you need web development skills as embedded Apps in WebPortal are relying on **web standards** (HTML CSS and JavaScript). It's easy to [start development]({{site.baseurl}}/webportal/{{page.subsection}}/overview/app-validation/#article) and testing in a **regular web bowser**.

But keep in mind that you should **get in touch with the WebPortal** team in order to develop and validate your App.

App presence on the vehicle head unit is automatically managed by WebPortal after validation.

## 🧪 Validation Process

Embedded WebPortal is **not an open platform** like App stores on smartphones, if you want to start the process of development for WebPortal, please [contact us]({{site.baseurl}}/contact-us/) to set up your project. 

Stellantis keep control on the vehicle’s [infotainment system]({{site.baseurl}}/webportal/{{page.subsection}}/overview/infotainment-system/#article), not every APPs are allowed on the platform. Before being submitted for validation, you should make sure that your App follows WebPortal [requirements](#app requirements).

Some **functionalities are restricted** and so may require special permission from Stellantis in order to be used in your application. After your development process, Stellantis WebPortal team will review your App and perform deployment. 

{% if page.subsection == "v1" %}

## App Requirements


In order to be published has a WebPortal Application, your App should go through Stellantis **validation process**.

To make sure that you are following the validation rules, they are some requirements that you must consider for your app development.


- **🗂 Files structure**: Your Application must follow the naming & file structure of the [Quickstart]({{site.baseurl}}/webportal/v1/application/quickstart/#app-structure--package) page.
- **📺 Screen size**: WebPortal is working on various hardware, that's why a *WebPortal v1* app should be optimized to run on [this list of screens]({{site.baseurl}}/webportal/v1/overview/infotainment-system/#screen-size).
- **🚗 Embedded Development**: some advice about embedded app [development]({{site.baseurl}}/webportal/v1/application/guidelines/#embedded-restrictions).
- **📱 UI Guidelines**: [UI and UX]({{site.baseurl}}/webportal/v1/application/guidelines/#uiux-guidelines) should follow the infotainment system guidelines.
- **🐞 Debug Console**: you should implement a [debug console]({{site.baseurl}}/webportal/v1/application/guidelines/#debug-console) during development.
- **🔥 Events**: It's necessary to [handle important events]({{site.baseurl}}/webportal/v1/application/events/#article) so your App can run in WebPortal.
- **🔒 Privacy**: User can [choose privacy]({{site.baseurl}}/webportal/v1/application/privacy/#article) within the infotainment system, your app should act accordingly.
- **💞 App Lifecycle**: Your App coexist with other usage within the *infotainment system* that's why you must follow advice from [app lifecycle]({{site.baseurl}}/webportal/v1/application/app-lifecycle/#article).
- **🌇 Assets**: Since WebPortal runs on embedded  hardware, [asset management]({{site.baseurl}}/webportal/v1/application/assets/#article) should follow some rules in order to keep a smooth experience for users.

{% endif %}

## ✉️ Submission

**In addition** to a valid [app package]({{site.baseurl}}/webportal/{{page.subsection}}/overview/app-validation/#article), the following information must be provided separately:
- **App name (translated if needed)** The partner must provide at least one name for its app, that can be translated into several languages if needed. The master name will be displayed if no translation was given for the language chosen by the user.
- **Country scope** The partner must provide the list of countries where the app can be activated for customers, within the list of countries where the WebPortal is available.
- **Brand scope** The partner must provide the list of brands for which the app can be activated for customers. Today, Peugeot, Citroën, DS, Opel and Vauxhall are available.
- **Device scope** The partner must provide the list of devices and configurations where the app can be activated for customers. Today NACw2.1, NACw3.1 and NACw4 are available.
- **App identifier** To be given by Stellantis, this App Id is mandatory as it enables us to identify the app in MQTT exchanges and in the process of display in the vehicles.
- **MQTT partner account**

> **Info:** App submission is not automatically processed, WebPortal team will review your app first.

### Start development!

Start developing your first **WebPortal App** by browsing the [Quickstart]({{site.baseurl}}/webportal/{{site.subsection}}/application/quickstart/#article)!