#!/bin/bash

# Get current working dir.
PWD=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Test version argument.
if [ -z "$1" ]; then
  echo "A release version must be supplied (e.g. 7.0.1)."

  exit 1
fi

# Remove previous src dir.
find src -depth 1 ! -iregex 'src/index.js' | xargs rm -rf

# Prepare a new branch for this update.
git checkout -b support/update-libphonenumber-${1//\./\-}

# Download the requested tagged release.
echo "Downloading release $1..."

curl -L -s https://github.com/googlei18n/libphonenumber/archive/v$1.tar.gz -o v$1.tar.gz

tar -xf v$1.tar.gz

cp libphonenumber-$1/javascript/i18n/phonenumbers/* src/

rm v$1.tar.gz

rm -rf libphonenumber-$1

echo "Done!"

# Add the modified files to git.
git add $PWD/../src/

# Commit with the standard message.
git commit -m "Update libphonenumber@$1"
