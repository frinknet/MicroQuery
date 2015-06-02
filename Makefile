default: m.js

m.js: dwarfton/minify.sh m.full.js
	$+ > $@

m.core.js: dwarfton/build.sh dwarfton/dwarfton.js src/_core.js
	$+ > $@

m.full.js: m.core.js
	src/build.sh $(wildcard src/[a-z]*.js) > $@

clean:
	rm m.core.js m.js m.full.js
