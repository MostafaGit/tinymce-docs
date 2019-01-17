tinymce.init({
  selector: 'textarea',
  plugins: 'image media link tinydrive code imagetools',
  api_key: 'fake-key',
  content_css: [
    "//fonts.googleapis.com/css?family=Lato|Lobster|Noto+Serif|Permanent+Marker|Raleway|Roboto|Source+Code+Pro",
    "//tiny.cloud/css/content-standard.min.css"
  ],
  height: 600,
  imagetools_cors_hosts: ['picsum.photos'],
  tinydrive_token_provider: (success, failure) => {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  },
  tinydrive_demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
  toolbar: 'insertfile image link | code',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});