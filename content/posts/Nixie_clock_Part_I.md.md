---
author: "Johannes von Grundherr"
date: 2021-02-08
hero: "/images/033cf622-fa6e-4beb-b22f-8e2e1c8146f2.jpeg"
title: "Nixie Clock Part I"
---

One might recognize them from the bomb-defusing scene in the Bond movie 'Goldfinger' or the Divergence Meter from 'Steins;Gate'. In short, they consist of ten (0-9) wires glowing neon yellow in a vacuum tube. First replaced by seven-segment displays, they are becoming increasingly popular nowadays due to their aesthetic appeal.

**While there are many kits available online, where's the fun in buying one?**

## Designing the Circuit:

The main difficulty in a Nixie clock lies in its operating voltage, which is around 170V.

To overcome this challenge, I decided to use two circuits - one high-powered circuit to drive the tubes and one low-powered circuit for switching the power to the digits on and off. For switching, I used a common shift register - the SN74HC595DR, along with some 20k Ohm resistors and high-power transistors.

![](/images/85891b67-171e-4b60-87b9-90173bb718bc.png)

As you can see, using a shift register allows us to daisy-chain as many tubes together as we like in theory. Therefore, I tried to make the PCB as modular as possible, with the input on the left and output on the right. 

> Note that I added RGB just for the sake of it; having LEDs under a Nixie clock is pure blasphemy.

![](/images/de394e66-a1dd-4bf8-842f-98809ed4abf8.png)![](/images/f43a37ec-69ae-4453-b78c-ec7a56363f12.png)

## Making it Real:

Since most of the parts are SMD components that are too difficult to solder by hand, I switched to EasyEda mid-development because they had a list of parts that JLCPCB could assemble.

*While redoing the layout, a little mishap happened - the description was in the solder mask and not the silkscreen mask... F.*

Apart from that, it turned out great:

![](/images/359f15d8-f5f7-43aa-8a3f-58d45e9e0a5d.jpeg)

Now, for the moment of truth - does it actually work? To drive the shift registers, I used an Arduino Nano, and for the 170V circuit, I used a high-power supply from eBay.

See for yourself:

![](/images/e177462a-4e9b-4a06-84bf-ae8f1b4b2d14.jpeg)
Since it looks rather barebones for now, my plan was to go to my local FABLAB @FAU and build a wooden case for it. However, due to the pandemic, the FABLAB has been closed, so this project is not yet finished.

**To be continued...**
