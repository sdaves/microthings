.PHONY: aa doc help install black build generatejs help tdd test setup
default:
	python3 -m pymake install
	python3 -m pymake black
	python3 -m pymake doc
	python3 -m pymake build
	python3 -m pymake generatejs
	python3 -m pymake aa

aa: ## Make some aa (lava) to celebrate
	@echo '🌋 Success 🌋'

doc: ## Build docs
	python3 -m poetry run pydoc3 -w mything.api mything.domain mything.model mything.factory mything.feature mything builtins
	python3 -m poetry run pyreverse mything -SA -m y
	python3 ./scripts/pyapb.py  -w mything/apiblueprint.py --host https://mything.apiblueprint.org/
	python3 -c "print('moving generated files to docs/api/');import shutil;import os;files = os.listdir(); match = lambda file: file.endswith('.html') or file.endswith('.dot') or file.endswith('blueprint.md'); move = lambda file: (os.path.exists('docs/api/'+file) and os.remove('docs/api/'+file)) or shutil.move(file, 'docs/api/'); list(map(move,filter(match, files)))"

help: ## Show this help message.
	python3 -c "lines = list(open('Makefile')); match = lambda line: '##' in line; list(map(print,filter(match,lines)))"

setup: ## Install pyenv and poetry to home folder"
	python3 ./scripts/get-pip.py
	python3 ./scripts/get-poetry.py
	python3 -m pip install setuptools py-make poetry

install: ## Install packages for project
	python3 -m poetry install

black: ## Format py files
	python3 -m poetry run black mything

build: ## Build pypi package
	python3 -m poetry build

generatejs: ## Build javascript
	python3 -m poetry run transcrypt -da -sf -de -m -n -b -ds -dc mything
	python3 -c "print('moving generated js to docs/api/js/');import shutil;import os;os.chdir('__target__');files = os.listdir(); match = lambda file: file.endswith('.js'); move = lambda file: (os.path.exists('../docs/api/js/'+file) and os.remove('../docs/api/js/'+file)) or shutil.move(file, '../docs/api/js/'); list(map(move,filter(match, files)))"
	
rebuildcustompreact: ## Download and minify custom preact browserify deps "
	npm i browserify preact proppy proppy-preact uglify-js
	./node_modules/.bin/browserify docs/api/custom-preact.browserify.js -o docs/api/custom-preact.js
	./node_modules/.bin/uglifyjs docs/api/custom-preact.js -o docs/api/custom-preact.min.js
	
tdd: ## Run tests on file change
	python3 -m poetry run ptw

test: ## Run the tests
	python3 -m poetry run pytest
	python3 -m poetry run pytest --doctest-only mything

