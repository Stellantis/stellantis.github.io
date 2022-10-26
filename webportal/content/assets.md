WebPortal App allows accessing the following type of media:
- 🖼 **[Images](#images)** can be displayed on the vehicle head unit screen.
- 🔉 **[Audio](#audio)** sounds are played through the vehicle Hi-Fi system.
- ✍️ **[Fonts](#fonts)** are available to customize fonts an App.

**Videos** are not authorized on WebPortal, they cannot be played on the head unit.

## Using Assets 

Since WebPortal App runs in the embedded infotainment system of the vehicle, the following rules should be taken into account:
- The App should signal its ready state only when all the **assets have been loaded**.
- All assets should be loaded at the launch, then they can be accessed **in the cache** of the browser by URL request.
- Keep in mind that **RAM & internet access are limited** when you intend to use assets.
- When accessing assets, you have to keep in mind the **path** is not the same relative one as it will be downloaded by the WebPortal on launch.

**Internal Resources:**

Your Application has access to multiple resources given by the WebPortal or it can even use its own resources.
You can access these different resources with `XMLHttpRequest`.

```javascript
const req = new XMLHttpRequest();
req.open('GET', '/apps/MyApp/fonts/NAC-Icons.ttf', true);
req.send();
// In order to reuse a cached resource, you need to make a call to the exact same url or it will try to load it again.
```

## Images

*Compatible image formats: **JPEG**, **SVG Tiny 1.2**, PNG, GIF, BMP.*

You need to keep in mind the size of the [infotainment system screen]({{site.baseurl}}/webportal/{{page.subsection}}/overview/infotainment-system/#screen-size) where your application is delivered on.

You will also have to consider the **images size** as the network bandwidth of the vehicle can be slow, it should be displayed within a reasonable timeframe:
- its size should ideally not exceed 150kB
- its dimensions should respect the maximum size of the infotainment system.

|Image weight (KB) | Download Time (~30KB/s) | Download Time (~100KB/s)
----|----|----
|100 | 3s | 1s
|150 | 5s | 1,5s
|200 | 7s | 2s
|1000 | 35s | 10s

> **Note:** 
- Heavy GIF animations might not be smooth.
- When targeting an SD NAC, it is advised to encode graphic assets in 8 bits instead of 24/32 bits as the device is only able to display in 8 bits.
- In order to limit the weight of your pictures, you can use SVG when it reduce the image weight. Otherwise you should prioritize using JPEG.

## Audio

*Compatible audio format: **MP3**, wav, ogg.*

|Audio Duration|Audio weight (KB)|  Download Time (~30KB/s) | Download Time (~100KB/s)
|-----|-----|------|-----|
| 26s | 350 | 12s  |  3s |
|1:15 |1000 | 34s  | 10s |
|6:15 |5000 | 170s | 50s |

Total file downlaod time is an indication but audio streaming is available on the NAC, you don't need to wait for the file to be fully loaded before.

WebPortal audios have lower priority than guidance instructions of the vehicle infotainment system.

If the guidance has to play an instruction while your app is already playing a sound in the WebPortal, the infotainment system will use **ducking effect** to play both sounds together.

It means that your audio file will continue playing but with a reduced volume and the instruction will be the main audio canal.

**Managing Audio:**

When reading audio files, you have to manually implement and handle the html5 events triggered by the  `<audio>`player such as play and stop. If you do not handle them, the file will not be read.

```javascript
Media.Audio.addEventListener("audioLost", function(){log("audio are not found");});

Media.Audio.addEventListener("audioAvailable", function(){log("audio are available");});

Media.Audio.configure("MEDIA_PLAYER_SOURCE", "Active");

var audio = new Audio(<sound file>);

audio.play();
```

## Fonts

Fonts should be handled using **HTML and CSS**. If no font is specified, the WebPortal will use a font with serif, e.g. Times New Roman.

The special keywords: *serif, sans-serif, monospace* for the font-family property are supported by WebPortal browser which will automatically choose the corresponding font.

{% if page.subsection =="v1" %}

Here is a list of fonts available in NAC software version *42.01.70.50_NAC-r0*:

- Heldustry
- PAULETTEcondensed
- PLAQUES gill sans 
- Sansation_Regular 
- Tfont
- type LCB 
- Vera

What is more, there are brand-specific fonts:
- GM Sans UI Global Condensed (for Opel / Vauxhall)
- Peugeot (for Peugeot, Citroen and DS)
- Peugeot Light (similar to Peugeot but thinner)
- DSTACHY

{% elsif page.subsection =="v2" %}
{% endif %}