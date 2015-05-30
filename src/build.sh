#/bin/sh
head -n-1 src/_core.js

cat $(ls src/[a-z]*.js)

ext='$.extend($.fn';

for x in $(ls src/[a-z]*.js);do
  ext="$ext,$(basename $x .js)";
done;

ext="$ext);";

echo $ext

tail -n1 src/_core.js
