default: m.js m.core.js m.dwarfton.js m.full.js m.alt.js

m.js: dwarfton/minify.sh m.full.js
	$+ > $@

m.core.js: dwarfton/build.sh dwarfton/dwarfton.js src/_core.js
	$+ > $@

m.dwarfton.js: dwarfton/build.sh src/_core.js $(wildcard src/[a-z]*.js)
	cat dwarfton/dwarfton.js > $@
	$+ >> $@

m.alt.js: dwarfton/build.sh m.dwarfton.js src/_core.js $(wildcard src/[a-z]*.js)
	$+ >> $@

m.full.js: m.core.js
	src/build.sh $(wildcard src/[a-z]*.js) > $@

clean:
	rm m.js m.core.js m.dwarfton.js m.full.js m.alt.js
