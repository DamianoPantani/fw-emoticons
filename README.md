# Font Wonderful Emoticons v 0.9
 **Font-based CSS emoticons set**

Do you like [Font Awesome Icons](http://fontawesome.io)? You gotta love **Font Wonderful Emoticons!**

- Free ![](demoimgs/smile.png)
- Lightweight ![](demoimgs/happy.png)
- Easy to use ![](demoimgs/amazed.png)
- Reach collection ![](demoimgs/inlove.png) of font-based css emoticons

No more nasty and heavy images. Perfect for blogs, personal sites, forums, social networks, and pretty much everything you want.

## Installation

Add this line to your head section:

```html
<link rel="stylesheet" type="text/css" media="all" href="https://cdn.rawgit.com/DamianSzGithub/fw-emoticons/master/fw_emoticons.css">
```

You can also [download the repo](https://github.com/DamianSzGithub/fw-emoticons/archive/master.zip), link just css to your page, and edit this component locally if you wish.

## Usage

Main pattern to insert emoticon to your page looks like follow:

```html
<ANY class="fw EMO_TYPE EMO_NAME"></ANY>
```

**EMO_TYPE** in the current version can be one of following:

- no type specified - Default font
- `fw-o` - Default font outlined
- `fw-s` - Sketchy font
- `fw-f` - Today I Feel font
- `fw-m` - Memes font

**Examples:**

```html
<i class="fw perky"></i>
<i class="fw fw-o perky"></i>
<span class="fw fw-s pain"></span>
```

Make sure to customize .fw class to your needs. The most common attributes will be:
```css
.somediv .fw {
    transform: scaleX(-1);                  /* Flip horizontally */
    text-shadow: 0 0 1px rgba(0,0,0,0.15);  /* make 'em smooth! */
    vertical-align: middle;
    font-size: 22px;
    color: red;
}
```

## [DEMO](https://cdn.rawgit.com/DamianSzGithub/fw-emoticons/master/demo/demo.html)
## [ALL ICONS LIST](https://cdn.rawgit.com/DamianSzGithub/fw-emoticons/master/demo/list.html)

## Animations

Animations are perfect supplementation for this component. It's nicely working with [Animate.css](https://daneden.github.io/animate.css/) framework, but you can also use out of the box ones. List of all animations included in this versions:

- `fw-shake`
- `fw-spin`
- `fw-rotate`
- `fw-updown`
- `fw-bounce`

To modify default animation behavior you can add these classes respectively, instead of modifying css sheet:
**Duration**: `fw-100ms`, `fw-200ms` ... `fw-2000ms`
**Delay**:`fw-d1s`, `fw-d2s` ... `fw-d10s`
**Iteration count**: `fw-rep-1`, `fw-rep-2` ... `fw-rep-10`
**Direction**: `fw-reverse`

### [Animations Demo](https://cdn.rawgit.com/DamianSzGithub/fw-emoticons/master/demo/animations.html)

## On-the-fly emoticons replacement

To replace existing smileys in your page (e.q. `:)` `:D` `:-(` ) with fw-emoticons, link this js:

```html
<link rel="stylesheet" type="text/css" media="all" href="https://cdn.rawgit.com/DamianSzGithub/fw-emoticons/master/fw_emoticons.js">
```

Then invoke `Emoticons.replace()` function. Example:

```javascript
(function() {
	Emoticons.replace({
		selector: '.comments, .about-me > .text',   // CSS rule looking for smileys
		mainClass: 'fw-o',                          // OPTIONAL. Type of emoticons
		emoTag: 'i'                                 // OPTIONAL. HTML tag of emoticons
	  });
})();
```


## License

FW-Emoticons is a Freeware component, but it uses third-party font faces. Please refer to the section below for more license details.

## Credits
- [Emoticons font (default and outlined)]("http://fontpro.com/emoticons-font-12006"): Purdy Design ([purdydesign.com]("http://www.purdydesign.com")) Free for personal use
- [Sketchy font]("http://fontpro.com/sketchy-smiley-font-14797"): David Kerkhoff [(hanodedphotography.com)]("http://www.hanodedphotography.com") Donationware
- [Today I Feel font]("http://fontpro.com/today-i-feel-font-3260"): Kimberly Geswein ([kimberlygeswein.com]("http://www.kimberlygeswein.com")) Free for personal use
- [Far.Chehre (Meme) font]("http://fontpro.com/far-chehre-font-9520"): Abolfazl Seilsepour ([seilsepour.ir]("http://www.seilsepour.ir")) 100% Free

## Contact
Any considerations? Problems? Upgrade ideas? Please leave me a message on GitHub (comment any line of any commit) or directly via email: `dejmiens@yahoo.com` Thank you!