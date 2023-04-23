---
author: Johannes von Grundherr
date: '2022-02-07T00:00:00.000Z'
hero: /images/3ebe0039-5c91-4512-9402-7386b7919a99.webp
title: Nixie Clock Part II
tags:
  - Nixie
---

A long time ago, in a galaxy far, far away, there was an unfinished project sitting on a table, just waiting to be completed...

***

Since it has been just about a year since I last worked on this project, let's take a short inventory first:

Working:
- High Voltage Power supply
- Nixie-Tube Drivers
- Nixie-Tubes

What doesn’t:

* Software
* Case
* USB-C-PD

Wanted Features:

* Automatic time setting via a timeserver
* USB-C power supply
* Dimming during night time
* Frequent cycling of all numbers in order to reduce wear and tear

***

![](/images/5c91e1fc-3454-4080-8c7d-b05185aa3b3a.jpeg)

On the software side, the WLAN capabilities of the ESP32 MCU are used, which enable the connection to a time server for accurate timekeeping. Since an RTC (Real-Time Clock) is also used, a WLAN connection is not always needed, but connecting to a time server can help avoid issues with time zones and the built-in drift.

The tubes are turned off from 23:00 to 6:45 and from 8:45 to 16:00. Since each tube has a limited lifetime, this measure extends their lifespan significantly.

Every two minutes, the clock cycles through all digits, which helps prevent a phenomenon called 'cathode poisoning'. This occurs when only one digit is used for an extended amount of time, such as an hour digit on a clock. The cycling results in a slot machine effect that can be seen here.

{{\< youtube ufGv2bSU54A >}}

***
Nixie clocks are truly stunning pieces of technology that embody a unique and timeless beauty. The glowing numerals and symbols that dance within the vacuum-sealed glass tubes are mesmerizing to watch, and their warm, orange hue adds a touch of warmth to any space.

Unlike modern digital displays, nixie tubes are tactile and tactilely expressive, with each number appearing to be almost alive as it flickers into view. In an age where technology is often designed to be sleek and unobtrusive, nixie clocks and tubes offer a refreshing change, showcasing the intricate inner workings of a machine in a way that is both visually striking and functional.

It's no wonder that these vintage devices have experienced a resurgence in popularity in recent years, as more and more people are rediscovering the simple pleasures of analog technology:
***

{{\< youtube I0eBycWUgTE >}}
