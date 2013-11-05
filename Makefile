REPORTER = spec

build: components index.js
	@component build

components: component.json
	@component install

test:
	@./node_modules/.bin/mocha --reporter $(REPORTER) ./test/*.js

clean:
	rm -fr build components template.js

.PHONY: clean test
