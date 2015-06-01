#/bin/sh
head -n-1 m.core.js

ext='$.extend($.fn';

for x in $(ls src/[a-z]*.js);do
  echo "//// $(basename $x .js) ////"
  cat $x
  echo
  ext="$ext,$(basename $x .js)";
done;

ext="$ext)";

echo $ext

tail -n1 m.core.js
