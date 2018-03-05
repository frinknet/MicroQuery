#/bin/sh

if [ -f COPYRIGHT ]; then
  echo "/*©$(cat COPYRIGHT)*/"
fi

echo '(function(){'

for x in $@;do
  echo "//// $(basename $x .js) ////"
  cat "$x"
  echo
done;

echo $ext
echo
echo '})()'
