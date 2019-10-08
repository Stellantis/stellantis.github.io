---
type: tutorial advanced
---

# Managing Backend

# Selecting your MQTT Publishing Topic

To communicate with your application you need to indicate whom to publish your message to.

Your **publishing** topic looks as follows :

`psa/OVIPPartners-Dev/to/uid/{UID}/opa/{VIN}/`  

What's more, your **subscribing** topic looks like this :

`psa/OVIPPartners-Dev/from/uid/{UID}/opa/{VIN}/`  

Where :
- UID is your login
- VIN is the Vehicle ID Number  corresponding to the vehicle the message is destined to