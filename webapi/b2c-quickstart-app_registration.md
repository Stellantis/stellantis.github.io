---
layout: doc-article
permalink: /webapi/b2c/quickstart/app-registration/
section: webapi
subsection: b2c
categorie: Quickstart
title: App Registration
require: highlighted-link
description: "As a developer, register your App in Stellantis system."
---

<div class="notification notification-empty-bg">

{% capture short %}
**Requirement**: 
  - Before starting this tutorial, we strongly encourage you to read [authentication in Web API B2C]({{site.baseurl}}/webapi/b2c/quickstart/about-authentication/#article).
  - 📱 A brief description of your App (concept, requested vehicle data, requests per month, app name, company name, contact email).

**Tutorial Output**:
  - 👤 A registered Application and its credentials (Client ID/secret, Certificates, MZP).
  - 🔑 Your Application [private key](#2%EF%B8%8F⃣-generates-encryption-keys--csr).
{% endcapture %}
{{ short | markdownify}}

</div>



This tutorial explains how to register your application in Stellantis systems. At the end of this tutorial, you will have all the credentials required to [enroll a user]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article) in your App.

## Registration Process

The following schema explains the process to register your Application in order to obtain a Client ID and a Client Secret.

<img src="{{site.baseurl}}/assets/images/b2c-register-app.svg" alt="b2c-register-app" style="width: 600px">

## 1️⃣ Describe your Application

As the **Accessing Party** (or Third-Party Application), you are building an Application requesting access to End-User vehicle's data.

**Mobilisights** is Stellantis company for connected mobility. They are the one able to register an Application.

In order to register the App in Stellantis system, you should [contact Mobilisights]({{site.baseurl}}/contact-us/) with the following **App description**:
- 📱 Then **Name & Concept** of your Application compliant to ExVe, GDPR & Stellantis Rules.
- 👩🏽‍💻 The **Name & Email** of you or your company.
- 📊 An estimation of the number of **Requests per month**.
- 🚙 The **list of vehicle data** required for your App.


<div>
{% include highlighted-link.html 
  link_label="Request Your App Registration"
  link_url="/contact-us"
%}
</div>

If your application project is approved, Mobilisight will create a **Login Identifier (or MZP) and request a CSR** (Certificate Signing Request) to proceed your App registration.

## 2️⃣ Generates Encryption Keys & CSR

Once you have received MZP login, the next step is to produce **SSL keys and CSR**. These keys will allow encrypted communication between you and Stellantis servers:
- **Public key** will be used by Stellantis to encrypt messages.
- **Private key** will be used by you to decrypt Stellantis's messages. Be careful, the private key must remain secret.

In order to ensure your identity, you have to produce and send a **Certificate Signing Request (CSR)** to your Stellantis contact. Stellantis Authority will sign your CSR and send you back a proper SSL certificate. These are the required info to produce your CSR:

|Information|Value|
|-|-|
| COUNTRY NAME (C) | Country code, two letters (ex: FR) |
| STATE OR PROVINCE (S) | ex: 'Kansas' or 'Ile de France' |
| LOCALITY NAME (L) | ex: 'Paris' |
| ORGANIZATION NAME (O) | ex: 'Free2Move' |
| ORGANIZATIONAL UNIT (OU) | You must type: 'Programs Partners' |
| COMMON NAME (CN) | ex: 'MZP128745' |
| EMAIL ADDRESS | Email address will be used in order to download and renew your certificate |

Producing encryption keys and CSR have to be done with a dedicated software. The following paragraphs are **examples of CSR generation using OpenSSL and Keytool**:

### CSR with OpenSSL

**OpenSSL** is an open-source software library for encryption purpose. It is widely used in internet security. You can download and install Open SSL using this [link](https://slproweb.com/products/Win32OpenSSL.html) (Windows).

With OpenSLL producing keys and creating CSR can be performed in one step. Create a directory with text configuration file named like 'CSRConfig.conf' and copy/past this text into and fill-out the form.

```conf
[ req ]
default_bits = 2048
distinguished_name = req_distinguished_name

[ req_distinguished_name ]
countryName = COUNTRY NAME (C) two letters ex: FR
stateOrProvinceName = STATE OR PROVINCE (S) ex: Kansas or Ile de France
localityName = LOCALITY NAME (L) ex: Paris
organizationName = ORGANIZATION NAME (O) ex: Free2Move
organizationalUnitName = ORGANIZATIONAL UNIT (OU) Programs Partners
commonName = COMMON NAME (CN) ex: MZP128745
emailAddress = EMAIL ADDRESS will be used in order to download and renew your certificate
```

Browse this place with your terminal and execute this command:

```shell
$ openssl req \
  -new \
  -keyout KeyName.pem \
  -out CSRName.csr \
  -config CSRConfig.conf
```

- `KeyName.pem` will be your keyfile name
- `CSRName.csr` will be your CSR name
- `CSRConfig.conf` is the configuration file's name

### CSR with Keytool

Keytool comes with Java Devlopment Kit. Like OpenSSL, it can be used to produce keys (in a file name keystore) and CSR.

Produce your keys using this command:

```shell
$ keytool \
  -genkey \
  -alias KeyName \
  -keyalg RSA \
  -keysize 2048 \
  -dname "CN=MZPXXXX,OU=Programs Partner,O=PartnerName,L=Paris,C=FR,email=it@partner.com" \
  -keystore KeyStoreName.jks
```

- `CN` Common Name (ex MZP128745)
- `OU` Do not replace Programs Partners is right
- `O` Organization Name (ex Free2Move)
- `L` Locality Name (ex Paris)
- `C` Country Name two letters (ex: FR)
- `email` will be used in order to download and renew your certificate
- `Keyname` will be the name of the keys in the keystore
- `KeyStoreName.jks` will be the name of your keystore

Generate your CSR:

```shell
$ keytool \
  -certreq \
  -alias Keyname \
  -keystore KeyStoreName.jks \
  -file CSRName.csr
```

- `Keyname` is the name of the keys in the keystore
- `KeyStoreName.jks` is the name of your keystore
- `CSRName.csr` will be the name of the CSR

## 3️⃣ Receive your Credentials

When the description of the **App is approved**, Stellantis will send you the credentials for your Application. The following data are required to perform a request to the API:
- 👤 Application **Client ID**.
- 🗝 Application **Client Secret**.
- 📄 Application **Issued Certificate**.
- 📜 Stellantis **CA Certificate**.

#### Enroll End-Users

Once your App is registered and you have received your App Identifiers, you are able to [Enroll End Users]({{site.baseurl}}/webapi/b2c/quickstart/enroll-users/#article) in order to obtain an **access token**.
