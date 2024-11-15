# Default target: show help
.DEFAULT_GOAL := help

## help: Show the help docs
.PHONY: help
help:
	@echo "Options:\n"
	@sed -n 's|^##||p' $(MAKEFILE_LIST)

## build: Initialize the local development environment
.PHONY: build
build:
	@exec bash bin/move-files.sh
