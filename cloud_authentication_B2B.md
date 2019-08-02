---
title: Web B2B Authentication
layout: pageWebAPI_B2B
---
# Intro
This page is dedicated to Groupe PSA's commercial partners.

End-user authentication procedure is different, you can look at this [page]({{site.baseurl}}/cloud-Welcome_B2C).

This tutorial explain how to **get a certificate and use it for authentication** in APIs.


# Authentication
Because you will be able to get sensibles datas about your fleet of vehicles, we have to make sure authentification between you and us is strong and secure. We choose certificates + authentication process. In order to sign your certificate we need you to produce a Certificate Signing Request (CSR).

## Login infos
At the end of this process you will have evrything you need to perform your authentication:
- **MZP**: partner login in our IT system
- **Client ID**: application ID (maybe you will have more than one application)
- **Certificate**: trusted SSL certificate signed by dedicated groupe PSA's authority

First of all, maybe you already have your login code MZP (ex: MZP123456); if it's not the case you can send us an email at <connectedcar@mpsa.com>.

## Produce your CSR with OpenSSL!
Once you have received your MZP process, next step is to produce and transmit us your Certificate Signing Request.
Download and install Open SSl using this [link](https://slproweb.com/products/Win32OpenSSL.html) for windows.

- **Create a pair of key & CSR:**
```
openssl req -new -out <CSRName> -config <ParameterFile>
```

Keep carefully your keys.


- **Create a CSR format using existing KeyFile:**
```
openssl pkcs12 -export -out <FileP12> -inkey <KeyFile> -in <CertificatesFile>
```

|PARAMETERS|Value|
|-|-|
| **COUNTRY NAME (C)** | Country code, two letters(ex: FR) |
|  **STATE OR PROVINCE (S)** | (ex: 'Kansas' or 'Ile de France') |
| **LOCALITY NAME (L)** | ex: 'Paris' |
|  **ORGANIZATION NAME (O)** | ex: 'Free2Move' |
|  **ORGANIZATIONAL UNIT (OU)** | You have to specify: 'Programs Partners' |
|  **COMMON NAME (CN)** | ex: 'MZP128745' |
| **EMAIL ADDRESS** | Email adress, will be used in order to download and renew your certificate |

## Submit CSR
Once you have created your brand-new CSR file send it to us via this email: <connectedcarS@mpsa.com>.

At this point we will begin our internal process to sign your certificate.

When evrything will be ready you'll receive an email at the adresse you specified in CSR. This email contains : **link to download your certificate** + **Client ID** (= application id).

# See Also

**Tutorial**

A [Quick Start guide]({{ site.baseurl }}/cloud_QuickGuide_B2B) is provided to help you understand the basics and get started.


**Testing the API**

To test the API you can check the [API List]({{ site.baseurl }}/cloud_list_B2B) directly.
