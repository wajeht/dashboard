commit:
	git add -A
	aicommits --type conventional
	git push

deploy:
	./deploy.sh
