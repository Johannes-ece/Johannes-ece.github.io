+++
author = ""
date = ""
draft = true
hero = "/images/750a4dd4-9773-42ca-9902-4901add9a59f.png"
title = "Monitoring the air"
type = "blog"

+++
Indoor air quality - you probably never taught about this, but it's just as, if not more important than outdoor air quality, since most people spend more than half of their day indoors. So how is the air?

> Quick Note: You can find this projects code and documentation on [Github](https://github.com/Johannes-ece/AirQ)!

**Well, lets quantify it:** CO2 is the most important short-term indicator, its measured in ppm parts-per-million. If the level is too high you can't concentrate at first and then get dizzy and sleepy:

![](https://www.iqhome.org/image/cache/catalog/blog/air_quality/co2-ppm-table-759x800.png)

**So how can we test it?**

With a sensor of course, we will be using the MH-Z19C, it has a range from 400-500ppm so the above chart fits perfectly in it.

![](/images/fdcac987-1828-4c39-a5f9-9d24e8900101.jpeg)

Fine particles are not that important in the short term, but in the long term, it can have serious impacts on your health, its measured in particles per 0.1l of air:

![](https://www.airveda.com/resources/images/pm_levels.png)

To sense these particles we are using the PMSA003 from Plantower:

![](/images/14c3eeac-9bcd-490a-9d22-f449ed93f144.jpeg)

The last major Indicator I want to use and which is a bit unusual is radioactivity, having the very harmful Radon-gas in mind.

![](https://www.fs-ev.org/fileadmin/user_upload/97_Service/Radonvorsorge/Radonkarte-BfS.jpg)

Two major obstacles lie in detecting Radon, it comes up in waves as decayed Uran from under the house and it only emits alpha rays.

If you are panicking right now while reading this, it should only concern you if you live in an older house which might have a porous foundation and you live in one of the red areas. For me it's both.

\**  
Why is detecting alpha radiation a Problem?**

It's undetectable by a traditional [Geiger-Müller](https://en.wikipedia.org/wiki/Geiger%E2%80%93M%C3%BCller_tube) tube, only with quite complicated systems, the modern one being optical recognition of "impacts" on a cmos-sensor.  
So how do we detect radon? Well, we don't, we detect the gamma rays from the lead and bismuth:

![](/images/4c323a14-837f-469e-aebc-dbeca72ba634.png)![](/images/31ae8b84-e577-4737-aa9d-e56937744e73.jpeg)

Since a Geiger-Müller Tube works only with very high voltages, mine takes 403V, the circuit is somewhat complicated, its partly inspired form the [Multigeiger ](https://github.com/ecocurious2/MultiGeiger)project on GitHub:

In short, we generate short pulses from the micro-controller([esp32](https://www.espressif.com/en/products/socs/esp32-s3)), which generates very high voltages from the coil([Lenz's law](https://www.britannica.com/science/Lenzs-law)). Stopping when the cap is charged. Then, once a gamma ray goes through the tube and making it inductive, the capacitor discharges for a microsecond which we detect.

**That's basically it**, the two sensors I wrote about earlier both use serial communication, the "simple" environmental sensor on the bottom right uses I2C.  
For future expansion I added four more additional I2C headers, since you never know you need them until you do...

***

**The PCB:**