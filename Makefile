.PHONY: build push

USER:=crazytje
PROJECT=commit-message
VERSION:=$(shell cat VERSION)

build:
	docker build -t ${USER}/${PROJECT}:${VERSION} .
	docker tag ${USER}/${PROJECT}:${VERSION} ${USER}/${PROJECT}:latest

push:
	docker push ${USER}/${PROJECT}:latest
	docker push ${USER}/${PROJECT}:${VERSION}
