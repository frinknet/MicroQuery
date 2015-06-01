default: m.js

m.js: m.commented.js
	cat $+ > $@

m.core.js: dwarfton/build.sh dwarfton/dwarfton.js src/_core.js
	$+ > $@

m.commented.js: m.core.js
	src/build.sh $(wildcard src/[a-z]*.js) > $@

clean:
	rm m.core.js m.js m.commented.js
