---
layout: default
title: Use multiple TinyMCE instances in a single page
title_nav: Multiple editors in a page
keywords: 
---

This section is about adding multiple editor instances to a single page. This is a common use case when using TinyMCE's `inline` mode. Breaking content into sections (e.g., titles, paragraphs) allows users to edit them individually.

## Multiple editor instances sharing the same configuration

The following example breaks the page into two separate editable areas. Each area shares a single editor configuraiton. Each editable `div` is provided the same `class` of 'myeditablediv'. TinyMCE is loaded just for the content area the user clicks.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '.myeditablediv',
    inline: true
  });
  </script>
</head>

<body>
  <h1>Multple editors on a page: Section 1</h1>
  <form method="post">
    <div class="myeditablediv">Click here to edit the first section of content!</div>
  </form>

  <h1>Multple editors on a page: Section 2</h1>
  <form method="post">
      <div class="myeditablediv">Click here to edit the second section of content!</div>
  </form>
</body>
</html>
```
> Note: In the example above, the css selector is a `class` because the `id` must be unique.

## Multiple editor instances, each with a unique configuration

The following example loads each editable area with a unique configuration of TinyMCE. This is useful when different content areas have different needs, such as providing simple configuration for editing titles and a complete configuration for editing body content. Define a `tinymce.init` object/method for each configuration.


```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#myeditable-h1',
    inline: true,
    menubar: false,
    toolbar: 'undo redo'
  });
  </script>
  <script>
  tinymce.init({
    selector: '#myeditable-div',
    inline: true
  });
  </script>
</head>

<body>
  <form method="post">
    <h1 id="myeditable-h1">This Title Can Be Edited If You Click Here</h1>
  </form>

  <form method="post">
    <div id="myeditable-div">
      <p>This section of content can be edited. Click here to see how.</p>
    </div>
  </form>
</body>
</html>
```

{% assign_page next_page = "/general-configuration-guide/advanced-install/index.html" %}
{% include next-step.html next=next_page %}
