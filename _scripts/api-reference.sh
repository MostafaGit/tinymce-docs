#!/bin/bash

set -e

API_VERSION="$(cat .api-version)"
#TARBALL_URL="https://codeload.github.com/tinymce/tinymce/tar.gz/$API_VERSION"
#Release candidate temporary s3 tarball, once we go stable the above link resumes
TARBALL_URL="https://devpreview.tiny.cloud/download/$API_VERSION.tar.gz"
API_TMPDIR="/tmp/tinymce-$API_VERSION"

echo -e "\n > importing data files for tinymce api reference: $API_VERSION\n"

rm -f _data/nav_api.json
rm -rf "$API_TMPDIR"

mkdir "$API_TMPDIR"
curl -s "$TARBALL_URL" | tar xzf - -C "$API_TMPDIR" --strip-components 1
moxiedoc "$API_TMPDIR/src/core/main/ts" -t tinymcenext -o "$API_TMPDIR/tinymce-api-reference.zip"
unzip -o "$API_TMPDIR/tinymce-api-reference.zip"

echo ""