---
layout: default
title: Specify Editor & Plugin Versions
description_short: Specifying editor and plugin versions for Tiny Cloud deployments.
description: Specifying editor and plugin versions for Tiny Cloud deployments.
keywords: tinymce cloud script textarea apiKey
---

## Specifying the TinyMCE editor version deployed from Cloud

Use the URL provided to specify the TinyMCE version when deploying via Tiny Cloud. Refer to [TinyMCE editor via the Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) for more information.

The following example is the default for loading TinyMCE via Tiny Cloud:

```js
<script src="{{ site.cdnurl }}?apiKey=your_API_key"></script>
```

The `stable` in this URL specifies the latest, and quality assured release of TinyMCE. This value can be customized to any [supported versions here](https://cloud.tinymce.com/versions/tiny).

### Selecting specific version numbers

*Major*, *Major.Minor*, or *Major.Minor.Patch* version numbers can all be specified. The latest *Major.Minor* or *Major.Minor.Patch* patch versions are released by default if the *Major.Minor* or *Major.Minor.Patch* versions are not present.

##### Example
Major version number (e.g. "5").

The following loads TinyMCE *5.latest.latest*:

```js
<script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor version number (e.g. "4.3").

The following loads TinyMCE *4.3.latest*:

```js
<script src="https://cloud.tinymce.com/4.3/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor.Patch version number (e.g. "4.3.2").

The following loads TinyMCE *4.3.2*:

```js
<script src="https://cloud.tinymce.com/4.3.2/tinymce.min.js?apiKey=your_API_key"></script>
```

A**HTTP 404** error is returned when a version does not exist.

### dev, testing, and stable releases

Choose from `dev`, `testing`, or `stable` release channels to load the latest version of TinyMCE from Tiny Cloud.

These channels are updated automatically and provide the latest TinyMCE version that matches the criteria below.

#### dev release channel

This channel deploys the absolute latest version of TinyMCE as documented in [TinyMCE changelog]({{ site.baseurl }}/changelog/). The current version of TinyMCE available through the `dev` channel [can be found at here](https://cloud.tinymce.com/dev/version.txt).

##### Example

```js
<script src="https://cloud.tinymce.com/dev/tinymce.min.js?apiKey=your_API_key"></script>
```

#### testing release channel

This channel deploys the current release candidate for the `stable` channel. The TinyMCE release candidate is undergoing quality assurance. The current version of TinyMCE available through the `testing` channel [can be found at here](https://cloud.tinymce.com/testing/version.txt).

##### Example

```js
<script src="https://cloud.tinymce.com/testing/tinymce.min.js?apiKey=your_API_key"></script>
```

#### stable release channel

This channel deploys the latest release of TinyMCE that has passed our quality assurance process. The current version of TinyMCE available through the `stable` channel [can be found here](https://cloud.tinymce.com/stable/version.txt).

##### Example

```js
<script src="{{ site.cdnurl }}?apiKey=your_API_key"></script>
```

## Specifying the version of features/plugins deployed from Tiny Cloud

Use the URL query parameters to specify the version of each premium plugin. This is used when deployment is by the [TinyMCE editor and premium plugins via Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) or deploying [only premium plugins from Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/features-only).

#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)
* [Supported versions](https://plugins.tinymce.com/versions/powerpaste)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=2.1.8"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)
* [Supported versions](https://plugins.tinymce.com/versions/tinymcespellchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&tinymcespellchecker=0.9.6"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)
* [Supported versions](https://plugins.tinymce.com/versions/a11ychecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&a11ychecker=1.0.2"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)
* [Supported versions](https://plugins.tinymce.com/versions/advcode)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&advcode=1.0.2"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)
* [Supported versions](https://plugins.tinymce.com/versions/mediaembed)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&mediaembed=0.0.1"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)
* [Supported versions](https://plugins.tinymce.com/versions/linkchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&linkchecker=1.0.0"></script>
```

## Specifying a self-hosted deployment of features/plugins

<!-- Additional configuration is required when serving [only premium plugins from Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/features-only) and from a self-hosted installation. URL query parameters and the special version name "SDK" can also be used in the configuration. -->

If you're deploying [only premium plugins from Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/features-only), you may want to have some features served from Tiny Cloud and some features served from your self-hosted installation. This is also possible with URL query parameters and the special version name "SDK".

The "SDK" version lets the TinyMCE Plugin Manager know that you're not using Tiny Cloud version of a particular plugin and that it shouldn't serve the plugin from Tiny Cloud. It also won't display any warning or error messages if you're not entitled to it.


#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=sdk"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&tinymcespellchecker=sdk"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&a11ychecker=sdk"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&advcode=sdk"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&mediaembed=sdk"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&linkchecker=sdk"></script>
```


## Examples

### Featuring declared editor and plugin versions

The following example loads:

* TinyMCE 4.5.0
* PowerPaste version 2.1.8
* Advanced Code Editor 1.0.2

```js
<html>
   <head>
      <script src="https://cloud.tinymce.com/4.5.0/tinymce.min.js?apiKey=your_API_key&powerpaste=2.1.8&advcode=1.0.2"></script>
   </head>
   <body>
      <textarea><p>test textarea</p></textarea>
      <script>
         tinymce.init({
            selector: 'textarea',
            height: 500,
            plugins: [
               'advlist autolink lists link image charmap print preview hr anchor pagebreak',
               'tinymcespellchecker']
         });
      </script>
   </body>
<html>

```

### Featuring a combination of self-hosted and Tiny Cloud features

The following example loads:

* TinyMCE self-hosted installation
* PowerPaste version 2.1.8 from Tiny Cloud
* Advanced Code Editor self-hosted installation

```js
<html>
   <head>
      <script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=2.1.8&advcode=sdk"></script>
   </head>
   <body>
      <textarea><p>test textarea</p></textarea>
      <script>
         tinymce.init({
            selector: 'textarea',
            height: 500,
            plugins: [
               'advlist autolink lists link image charmap print preview hr anchor pagebreak',
               'tinymcespellchecker']
         });
      </script>
   </body>
<html>
```
