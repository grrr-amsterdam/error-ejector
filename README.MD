# Error Ejector

## What's this:

A small script to send javascript errors automatically to Google Analytics.

## Getting started

Include `errorlytics.js` after loading the Google Analytics 'Universal Analytics' tracking code. Any javascript errors occuring will then be sent to Google Analytics as _events_. The error events can be found under the category 'errorlytics' as 'error' actions. Each event's label will be a stack trace of the error as it occured.

## More info

### CORS limitations

If you are seeing 'Error in external script...' events, this means browsers are limited from getting any error info because of [CORS same-origin policy limitations](http://stackoverflow.com/a/7778424). There are two actions required to stop this limitation:

* Set the `Access-Control-Allow-Origin` for the external script to include the domain running the script
* Add the [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute to the script tag loading the external script:

```html
<script crossorigin="anonymous" src="https://external.domain/script.js"></script>
```

### Error stack limitations

Not all browsers have implemented the extended [ErrorEvent interface](https://html.spec.whatwg.org/multipage/webappapis.html#errorevent). Errorlytics will send the complete stack as a label when available and falls back to sending only the error message, script url and line number for older browsers.

## Roadmap

* Minify the script
* Make into a bower component
* Allow blacklisting or whitelisting scripts to allow ignoring of some errors
* Allow temporarily disabling and reenabling the functionality
* Allow posting to different services than just Google Analytics

## Credits

Written by [Larix Kortbeek](https://github.com/larixk) for [Grrr](http://grrr.nl)
