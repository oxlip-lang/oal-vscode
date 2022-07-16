TOP := $(patsubst %/,%,$(dir $(firstword $(MAKEFILE_LIST))))
PROJECT := openapi-lang
VERSION := 0.0.1
PACKAGE := $(TOP)/$(PROJECT)-$(VERSION).vsix
VSCE_BIN := $(shell which vsce)
CODE_BIN := $(shell which code)
SOURCES := $(TOP)/syntaxes/oal.tmLanguage.json $(TOP)/language-configuration.json $(TOP)/package.json

ifeq ($(VSCE_BIN),)
$(error vsce not found)
endif

ifeq ($(CODE_BIN),)
$(error code not found)
endif

.DEFAULT_GOAL := build

$(PACKAGE): $(SOURCES)
	$(VSCE_BIN) package

.PHONY: build
build: $(PACKAGE)

.PHONY: install
install: $(PACKAGE)
	$(CODE_BIN) --install-extension $(PACKAGE)
