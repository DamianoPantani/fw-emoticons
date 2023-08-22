# Font Wonderful Emoticons v 0.9
 **Font-based CSS emoticons set**

Do you like [Font Awesome Icons](http://fontawesome.io)? You gotta love **Font Wonderful Emoticons!**

- Free ![](readmeimgs/smile.png)
- Lightweight ![](readmeimgs/happy.png)
- Easy to use ![](readmeimgs/amazed.png)
- Reach collection ![](readmeimgs/inlove.png) of font-based css emoticons

## Installation

```html
<link rel="stylesheet" type="text/css" media="all" href="https://cdn.staticaly.com/gh/DamianoPantani/fw-emoticons/v0.9/dist/fw_emoticons.css">
```

You can also [download the repo](https://github.com/DamianoPantani/fw-emoticons/archive/master.zip), and just link `fw_emoticons.css` in your HTML.

## Usage

```html
<ANY class="fw EMO_TYPE EMO_NAME"></ANY>
```

**EMO_TYPE**s of the current version:

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

The most common attributes you may want to customize are:
```css
transform: scaleX(-1);                  /* Flip horizontally */
text-shadow: 0 0 1px rgba(0,0,0,0.15);  /* make 'em smooth! */
vertical-align: middle;
font-size: 22px;
color: red;
```

### [JSFiddle Demo](https://jsfiddle.net/z7s2qsp0/)
### [All Icons List](https://cdn.staticaly.com/gh/DamianoPantani/fw-emoticons/v0.9/demo/list.html)

- **NOTE 1.** This component was made for author's personal purposes only. It may contain lots of gaps or not fit on your page as expected. Ping me in case of doubt, details below.
- **NOTE 2.** All fonts families weights half a MB in total, but don't worry. Each one is downloaded in the moment of first reference, so if you use one only, it will be transfered exclusively.

## Animations

Animations are perfect supplementation for this component. It's nicely working with [Animate.css](https://daneden.github.io/animate.css/) framework, but you can also use out of the box ones:

- `fw-shake`
- `fw-spin`
- `fw-rotate`
- `fw-updown`
- `fw-bounce`

Instead of modifying css sheet to your needs you can add these classes respectively:
- **Duration**: `fw-100ms`, `fw-200ms` ... `fw-3000ms`
- **Delay**:`fw-d1s`, `fw-d2s` ... `fw-d10s`
- **Iteration count**: `fw-rep-1`, `fw-rep-2` ... `fw-rep-10`
- **Direction**: `fw-reverse`

### [Animations Demo](https://cdn.staticaly.com/gh/DamianoPantani/fw-emoticons/v0.9/demo/animations.html)

## On-the-fly emoticons replacement

To replace existing smileys in your page (e.q. `:)`, `:-(`, `:D`) with fw-emoticons, link this js:

```html
<script src="https://cdn.staticaly.com/gh/DamianoPantani/fw-emoticons/v0.9/dist/fw_emoticons.js"></script>
```

Then invoke `new Emoticons().replace()` function. Example:

```javascript
new Emoticons().replace({
    selector: '.comments, .about-me > .text',   // REQUIRED. CSS rule where to look for smileys
    mainClass: 'fw-o',                          // OPTIONAL. Type of emoticons
    emoTag: 'i',                                // OPTIONAL. HTML tag of emoticons
    emoMap: {                                   // OPTIONAL. Modify default mappings. Values can be either strings or string arrays
        'smile': ':)',
        'happy': ':D',
        'sad': [':(', ';(', ':sad:']
    }
});
```

### [DEFAULT EMOTICONS MAPPINGS](https://cdn.staticaly.com/gh/DamianoPantani/fw-emoticons/v0.9/demo/emoticons_mapping.html)

- **NOTE 1.** If you want to replace emoticons multiple times, for better performance get an Emoticons instance and use it all over the scope, e.g:

```javascript
var emoticons = new Emoticons({'happy': ':D'}); // If you want to modify default mapping - for even better performance pass it once in constructor.
emoticons.replace({selector: '.aDiv'});
emoticons.replace({selector: '.bDiv'});
```

- **NOTE 2.** Do NOT use nested selectors, e.g. `.comment, .comment p`. It may skip child blocks and cause a slight performance drop in extreme cases. Instead, in this example run the `replace` function twice, or wrap existing text from `.comment` block in any html tag.

## License

FW-Emoticons is a Freeware component, but it uses third-party font faces. Please refer to the section below for more license details.

## Credits
- [Emoticons font (default and outlined)](http://fontpro.com/emoticons-font-12006): George Edward Purdy ([purdydesign.com](http://www.purdydesign.com)) Free for personal use
- [Sketchy font](http://fontpro.com/sketchy-smiley-font-14797): David Kerkhoff [(hanodedfonts.com)](http://www.hanodedfonts.com) Donationware
- [Today I Feel font](http://fontpro.com/today-i-feel-font-3260): Kimberly Geswein ([kimberlygeswein.com](http://www.kimberlygeswein.com)) Free for personal use
- [Far.Chehre (Meme) font](http://fontpro.com/far-chehre-font-9520): Abolfazl Seilsepour ([seilsepour.ir](http://www.seilsepour.ir)) 100% Free

## Contact
Any considerations? Problems? Upgrade ideas? Please [raise an issue](https://github.com/DamianoPantani/fw-emoticons/issues/new). Thank you!
