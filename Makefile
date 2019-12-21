PYTHON=python3
POETRY_BIN=~/.poetry/bin/poetry

# detect if windows shell is used
ifeq ($(findstring cmd.exe,$(SHELL)),cmd.exe)
$(info "using Windows shell cmd.exe")
DEVNUL := NUL
WHICH := where
else
DEVNUL := /dev/null
WHICH := which
endif

# if no python3 found, revert to generic system python
ifeq ($(shell ${WHICH} python3),)
PYTHON=python
endif

# if no poetry found, install it
ifeq ($(shell ${WHICH} ${POETRY_BIN}),)
$(info "no poetry found, please wait 30 seconds while installing ...")
ifeq ($(shell ${PYTHON} ./scripts/get-poetry.py -y 2> ${DEVNUL}),)
$(info "poetry installed")
endif
endif

POETRY=$(PYTHON) $(POETRY_BIN)

default: install black doc build generatejs test aa

aa: ## Make some aa (lava) to celebrate
	@echo '🌋 Success 🌋'

doc: ## Build docs
	$(POETRY) run pydoc3 -w mything.api mything.domain mything.model mything.factory mything.feature mything builtins 
	mv *.html docs/api/
	$(POETRY) run pyreverse mything -SA -m y
	mv *.dot docs/api/
	$(PYTHON) ./scripts/pyapb.py  -w mything/apiblueprint.py --host https://mything.apiblueprint.org/
	mv apiblueprint.md docs/api/

help: ## Show this help message.
	@## https://gist.github.com/prwhite/8168133#gistcomment-1716694
	@echo -e "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\1:\2/' | column -c2 -t -s :)" | sort

install: ## Install packages for project
	$(POETRY) install || echo skipping install

black: ## Format py files
	$(POETRY) run black

build: ## Build pypi package
	$(POETRY) build

generatejs: ## Build javascript
	$(POETRY) run transcrypt -da -sf -de -m -n -b -ds -dc mything
	cp __target__/*.js docs/api/js/

tdd: ## Run tests on file change
	$(POETRY) run ptw 

test: ## Run the tests 
	$(POETRY) run pytest && $(POETRY) run pytest --doctest-only mything

