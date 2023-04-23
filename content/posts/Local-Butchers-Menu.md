---
title: Local Butchers Menu
author: "Johannes von Grundherr"
date: 2020-05-11
hero: "/images/ebde5dc5-13ef-4a88-bd7b-3715f2408b8b.png"
---

So like many others during the pandemic, whether studying or working from home, both myself and my neighbors struggled with maintaining a healthy diet every day. 

Many of us were accustomed to relying on the convenience of workplace canteens and found it difficult to find the time to cook each day.

![](/images/c0d87485-698a-4745-b65e-36e88fbb8a1b.jpeg)

About two months in, I discovered that the local butchers offered a daily menu, and it was great. However, some meals contained ingredients that some people may not prefer, such as intestines. 

This got me thinking, what if there was a platform that provided an overview of all the menus from the four butchers in the region?

{{< youtube LVemc7ur0TU >}}

> Note: The About Menu had to be reworked, it was only a proof-of-concept.

The idea is to scrape each butcher's website every Saturday evening to retrieve the menu for the following week. This is accomplished using a combination of Airtable and Google Sheets, and the results are displayed in a responsive app/web app.

> Note: I didn't want to use a single cent to realize this Idea

***

**The back-end is just a few tables with information:**

![](/images/34e03e2a-d891-48a3-baff-261a3fb92890.png)

**I developed the front-end in React-Native, via the Expo platform:**

![](/images/3aa387db-21b2-4d13-a2db-15de89ed751b.png)![](/images/d6d94ea5-8983-4391-8d80-9823421c489f.png)
