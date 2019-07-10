# Reclaim screen space 

![alt text](images/reclaim-screen-128.png) 

Your screen real-estate is precious, why not make the most of it? 

Delete floating parts of a website that block your view. These include sticky headers (like menu bars and obnoxious ads) and full-screen modals (like popups asking you to sign up).

Simple chrome extension to kill fixed and sticky headers on any page when clicked. It also adds the `style="overflow:scroll;"` property to the `<body>` tag, so that when lightboxes are killed, scrolling can resume (e.g. for login-free Pinterest browsing).

Firefox (mobile and desktop!):
Available for free on the firefox marketplace:
https://addons.mozilla.org/en-US/firefox/addon/reclaim-screen-space/

Chrome:
* Download (or clone) repository
* Go to [chrome://extensions](chrome://extensions)
* Enable Developer Mode (top right corner)
* Load Unpacked
* Select reclaim-space folder

Usage:
* Click button to kill all fixed and sticky elements on a page
* Refresh page to restore elements

Inspiration:
Alisdair McDiarmid's [KillSticky bookmarklet](https://alisdair.mcdiarmid.org/kill-sticky-headers/).
