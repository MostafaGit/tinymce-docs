---
layout: default
title: Cloud Deployment of Plugins Only
description_short: Learn how to setup TinyMCE Plugins via the Cloud.
description: Connect to Tiny Cloud within a hybrid deployment in less than 5 minutes.
keywords: tinymce cloud script textarea apiKey hybrid
---

A hybrid deployment of Tiny Cloud allows the loading of premium plugins in a self-hosted environment. Download and install the [TinyMCE Community edition](https://www.tinymce.com/download/) to get started.

Sign up for a free API key provides entitlements to premium [Image Tools]({{  site.baseurl }}/plugins/imagetools/) plugin. A cloud image proxy server must already be configured. Premium plugins can be purchased at any time once the API key has been set up.

## Step 1: Insert the custom script tag into the webpage

Add the following script in the webpage once the script tag to load TinyMCE has been specified:

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key"></script>
```

## Step 2: Specify purchased TinyMCE plugins and toolbar buttons

Extend the [TinyMCE configuration]({{ site.baseurl }}/configure/) to include any additional purchased plugins and associated toolbar and menu items. Refer to the following enablement guides for more information:

* [Powerpaste]({{ site.baseurl }}/plugins/powerpaste/)
* [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/)

> Note: `spellchecker_rpc_url` is **not** required when enabling this plugin via [TinyMCE Cloud]({{ site.baseurl }}/cloud-deployment-guide/)

* [Image Tools (with configured image proxy)]({{ site.baseurl }}/plugins/imagetools/)

> Note: Configuration of the `imagetools_cors_hosts` and `imagetools_proxy` properties occurrs automatically.

* [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/)
* [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/)
* [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/)
* [Link Checker]({{ site.baseurl }}/plugins/linkchecker/)

> Note: It may take up to 30 minutes for the purchased plugin to be available to TinyMCE. Clear the browser's cache.

The following is a complete example:

The example below has the following:

* The account `API key` has the value *TEST_API_KEY*.
* The account has the [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/) plugin enabled.

```js
<html>
   <head>
      <script src="https://your_server/tinymce.min.js"></script>
      <script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key"></script>
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

## Step 3: Forward proxy configuration
Ensure that the following URLs are accessible via this proxy if the network has a forward proxy that controls access to the internet.

* All URLs where the editor is deployed.
* All URLs where the plugins are deployed.
* https://imageproxy.tinymce.com
* https://hyperlinking.tinymce.com
* https://spelling.tinymce.com

Ensure the `tiny-api-key` and `tinymce-api-key` headers are retained while requesting the list of above URLs.
