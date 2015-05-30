m.js: src/minify.sh micro.js
	$+ > $@

micro.js: src/build.sh
	$+ > $@

clean:
	rm m.js micro.js

default all: clean m.js
