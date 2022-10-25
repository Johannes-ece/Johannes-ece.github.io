+++
author = "Johannes von Grundherr"
date = 2022-02-07T13:00:00Z
draft = true
hero = "/images/3ebe0039-5c91-4512-9402-7386b7919a99.webp"
title = "Nixie Clock Part II"
type = "blog"

+++
A long time in a galaxy far far away there was an unfinished project that was sitting on a table just waiting to be completed.

What works:

* High Voltage Power supply
* Nixie Tubes

What doesn’t:

* Software
* Case

Wanted Features:

* Automatic time setting via a timeserver
* USB-C power supply
* Dimming during night time
* Frequent cycling of all numbers in order to reduce wear and tear

Starting with the case, a simple 3d case with 6 slots for the tubes is made. In order to archive a certain rough but still smooth look a resin based printing method is used. The back side of the case has space for the usb-c power supply.

![](/images/5c91e1fc-3454-4080-8c7d-b05185aa3b3a.jpeg)

On the software side the wlan capabilities of the esp32 muc is used, which enables the connection to a timeserver for accurate timekeeping. Since a RTC(Real-Time-Clock) is also used, a wlan connection is not always needed, but issues with timezones and the built in drift can be avoided with a connection.

From 23:00 - 6:45 and 8:45 - 16:00 the tubes are turned off, as each tube has a limited lifetime this measure extends it quite some time.

Every two minutes the clock cycles through all digits, this helps with a phenomenon called „Cathode Poisoning“. This occurs when only one digit is used for an extended amount of time like a hour digit on an clock. This cycling results in a slot machine effect that can be seen here.

{{< youtube [ufGv2bSU54A](https://youtu.be/ufGv2bSU54A "https://youtu.be/ufGv2bSU54A") >}}

The result:

{{< youtube [I0eBycWUgTE](https://youtu.be/I0eBycWUgTE "https://youtu.be/I0eBycWUgTE") >}}