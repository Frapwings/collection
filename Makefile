REPORTER ?= spec
COMPONENT = ./node_modules/.bin/component
OPEN = open

build: components
	@$(COMPONENT) build --dev -o test

components: component.json
	@$(COMPONENT) install --dev

test:
	@./node_modules/.bin/mocha --reporter $(REPORTER) ./test/*.js

test-phantomjs: build
	@./node_modules/.bin/mocha-phantomjs test/index.html

test-browser: build
	@$(OPEN) ./test/index.html

clean:
	@rm -fr ./build ./components
	@rm ./test/build.js

.PHONY: clean test test-phantomjs test-browser
