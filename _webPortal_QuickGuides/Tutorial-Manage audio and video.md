---
title: Manage audio and video
layout: page2
---

# Images, Audio, Video

There are 2 different screen sizes for the NAC :

- SD : 800 x 480

- Wide HD : 1280 x 720

However some space at the top and the bottom are reserved by WebPortal for the controls. This amounts to a total height of 55px that will not be available.

### Image Files

You need to keep in mind the size of the screen your application is delivered on.

You will also have to consider the size of your file as the connection's speed can vary greatly depending on the location of the user, this implies that to display your picture within a reasonable timeframe:
- its size should ideally not exceed 150kB
- its dimensions should respect the ones cited above.

 Information on Image limitations:

Compatible image formats: **JPEG**, PNG, GIF, SVG Tiny 1.2, BMP

|Image weight (KB) | Time ATB2 (~30KB/s) | Time ATB3 (~100KB/s)
----|----|----
|100 | 3s | 1s
|150 | 5s | 1,5s
|200 | 7s | 2s
|1000 | 35s | 10s
|2000 | 110s | 20s

> **Note:** For the GIF format, animations are not smooth.

> **Note:** When targeting a SD NAC, it is advised to encode graphic assets in 18 bits instead of 24/32 bits as the device is only able to display in 18 bits.

### Audio Files

 Information on Image limitations:

Compatible audio format : **MP3**

|Audio Duration|Audio weight (KB)| Download Time ATB2 | Download Time ATB3
----|----|----|----
|26s |350 | 12s | 3s
|30s |400 | 14s | 3s
|38s |500 | 17s | 5s
|1:15 |1000 | 34s | 10s
|1:52 |1500 | 50s | 15s
|2:30 |2000 | 70s | 20s
|6:15 |5000 | 170s | 50s

### Video Files

Videos are currently not compatible and will not be read by the WebPortal.